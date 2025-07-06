'use client'

import { useEffect, useState } from 'react'
import Particles from './Particles'
import { useTheme } from './ThemeProvider'

export default function GlobalLightningBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Purple brand colors for both themes
  const purpleColors = [
    "#5b4389",  // Primary purple
    "#8b7cc8",  // Golden accent purple
    "#c297c1",  // Secondary purple
    "#9d8bd1",  // Light purple variant
    "#6750A2",  // Deep purple
    "#7a6bb5"   // Medium purple
  ]

  return (
    <div className="global-background-effect">
      <Particles
        particleColors={purpleColors}
        particleCount={theme === 'dark' ? 800 : 600}
        particleSpread={theme === 'dark' ? 12 : 10}
        speed={theme === 'dark' ? 0.08 : 0.06}
        particleBaseSize={theme === 'dark' ? 120 : 100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        sizeRandomness={theme === 'dark' ? 1.2 : 1.0}
        cameraDistance={theme === 'dark' ? 25 : 22}
        disableRotation={false}
        particleHoverFactor={theme === 'dark' ? 0.8 : 0.6}
        glowIntensity={theme === 'dark' ? 1.4 : 1.0}
      />

      <style jsx>{`
        .global-background-effect {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.5s ease, mix-blend-mode 0.5s ease, filter 0.5s ease;
        }

        /* Enhanced visibility for dark theme particles */
        [data-theme="dark"] .global-background-effect {
          opacity: 0.9;
          mix-blend-mode: screen;
          filter: brightness(1.3) contrast(1.2) saturate(1.2);
        }

        /* Subtle but visible effect for light theme */
        [data-theme="light"] .global-background-effect {
          opacity: 0.7;
          mix-blend-mode: multiply;
          filter: brightness(0.8) contrast(1.1) saturate(1.1);
        }

        @media (max-width: 768px) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.75;
            filter: brightness(1.2) contrast(1.1) saturate(1.1);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.6;
            filter: brightness(0.7) contrast(1.0) saturate(1.0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .global-background-effect {
            display: none;
          }
        }

        /* Performance optimization for low-end devices */
        @media (max-width: 480px) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.65;
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.5;
          }
        }

        /* Enhanced glow effects for better visibility */
        .global-background-effect :global(canvas) {
          transition: filter 0.5s ease;
        }

        [data-theme="dark"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 10px rgba(139, 124, 200, 0.3));
        }

        [data-theme="light"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 8px rgba(91, 67, 137, 0.2));
        }
      `}</style>
    </div>
  )
}