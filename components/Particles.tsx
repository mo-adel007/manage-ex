import { useEffect, useRef, useState } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const defaultColors = ["#2d1856", "#2d1856", "#2d1856"];

const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  uniform float uGlow;
  uniform float uBrightness;
  uniform float uContrast;
  uniform float uSaturation;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  varying float vGlow;
  varying float vBrightness;
  varying float vContrast;
  varying float vSaturation;
  
  void main() {
    vRandom = random;
    vColor = color;
    vGlow = uGlow;
    vBrightness = uBrightness;
    vContrast = uContrast;
    vSaturation = uSaturation;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  uniform float uGlow;
  uniform float uBrightness;
  uniform float uContrast;
  uniform float uSaturation;
  varying vec4 vRandom;
  varying vec3 vColor;
  varying float vGlow;
  varying float vBrightness;
  varying float vContrast;
  varying float vSaturation;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      vec3 finalColor = vColor + 0.6 * sin(uv.yxx + uTime + vRandom.y * 6.28);
      // Enhanced glow effect for purple particles
      finalColor += vGlow * 1.2 * (1.0 - d) * vColor * vBrightness;
      
      // Apply contrast and saturation
      finalColor = mix(vec3(0.5), finalColor, vContrast);
      vec3 gray = vec3(dot(finalColor, vec3(0.299, 0.587, 0.114)));
      finalColor = mix(gray, finalColor, vSaturation);
      
      finalColor *= vBrightness;
      gl_FragColor = vec4(finalColor, 1.0);
    } else {
      float circle = smoothstep(0.5, 0.1, d);
      vec3 finalColor = vColor + 0.6 * sin(uv.yxx + uTime + vRandom.y * 6.28);
      
      // Enhanced glow for alpha particles
      float glow = vGlow * (1.0 - smoothstep(0.1, 0.9, d)) * 1.4 * vBrightness;
      finalColor += glow * vColor;
      
      // Add rim lighting effect
      float rim = smoothstep(0.2, 0.5, d) * smoothstep(0.5, 0.2, d) * vBrightness;
      finalColor += rim * vGlow * 1.6 * vColor;
      
      // Apply contrast and saturation
      finalColor = mix(vec3(0.5), finalColor, vContrast);
      vec3 gray = vec3(dot(finalColor, vec3(0.299, 0.587, 0.114)));
      finalColor = mix(gray, finalColor, vSaturation);
      
      // Apply overall brightness
      finalColor *= vBrightness;
      
      float alpha = circle * (0.95 + glow * 0.8);
      gl_FragColor = vec4(finalColor, alpha);
    }
  }
`;

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  glowIntensity?: number;
  brightnessMultiplier?: number;
  contrastLevel?: number;
  saturationLevel?: number;
  className?: string;
}

const Particles = ({
  particleCount = 900,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 200,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  glowIntensity = 1.0,
  brightnessMultiplier = 1.0,
  contrastLevel = 1.0,
  saturationLevel = 1.0,
  className = '',
}: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Check if we're in RTL mode
    const htmlElement = document.documentElement;
    const direction = htmlElement.dir || htmlElement.getAttribute('dir');
    const lang = htmlElement.lang;
    setIsRTL(direction === 'rtl' || lang === 'ar');
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ depth: false, alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    // CRITICAL: Force LTR and proper positioning for canvas regardless of page direction
    gl.canvas.style.direction = 'ltr !important';
    gl.canvas.style.position = 'absolute !important';
    gl.canvas.style.top = '0 !important';
    gl.canvas.style.left = '0 !important';
    gl.canvas.style.width = '100% !important';
    gl.canvas.style.height = '100% !important';
    gl.canvas.style.display = 'block !important';
    gl.canvas.style.visibility = 'visible !important';
    gl.canvas.style.opacity = '1 !important';
    gl.canvas.style.zIndex = '0';
    gl.canvas.style.transform = 'translateZ(0)';
    gl.canvas.style.backfaceVisibility = 'hidden';

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      // CRITICAL: Force proper sizing for all layouts, especially Arabic
      gl.canvas.style.position = 'absolute !important';
      gl.canvas.style.top = '0 !important';
      gl.canvas.style.left = '0 !important';
      gl.canvas.style.width = '100% !important';
      gl.canvas.style.height = '100% !important';
      gl.canvas.style.direction = 'ltr !important';
      gl.canvas.style.display = 'block !important';
      gl.canvas.style.visibility = 'visible !important';
      gl.canvas.style.opacity = '1 !important';
      gl.canvas.style.transform = 'translateZ(0)';
      gl.canvas.style.backfaceVisibility = 'hidden';
      
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize, false);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Adjust mouse coordinates for RTL layouts
      let x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      if (isRTL) {
        x = -x; // Flip X coordinate for RTL
      }
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    if (moveParticlesOnHover) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
      colors.set(col, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
        uGlow: { value: glowIntensity },
        uBrightness: { value: brightnessMultiplier },
        uContrast: { value: contrastLevel },
        uSaturation: { value: saturationLevel },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let animationFrameId: number;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t: number) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      } else {
        particles.position.x = 0;
        particles.position.y = 0;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
    glowIntensity,
    brightnessMultiplier,
    contrastLevel,
    saturationLevel,
    isRTL,
  ]);

  return (
    <div
      ref={containerRef}
      className={`particles-container ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        direction: 'ltr', // Force LTR for particles
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    />
  );
};

export default Particles;