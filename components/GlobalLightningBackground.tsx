'use client'

import { useEffect, useState } from 'react'
import Particles from './Particles'
import { useTheme } from './ThemeProvider'
import { useRouter } from 'next/router'

export default function GlobalLightningBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Enhanced purple brand colors for better visibility
  const darkThemeColors = [
    "#5b4389",  // Primary purple
    "#8b7cc8",  // Golden accent purple
    "#c297c1",  // Secondary purple
    "#9d8bd1",  // Light purple variant
    "#6750A2",  // Deep purple
    "#7a6bb5",  // Medium purple
    "#a855f7",  // Bright purple
    "#8b5cf6"   // Vivid purple
  ]

  // More visible colors for light theme
  const lightThemeColors = [
    "#4c1d95",  // Very dark purple
    "#5b21b6",  // Dark purple
    "#6d28d9",  // Medium dark purple
    "#7c3aed",  // Purple
    "#8b5cf6",  // Light purple
    "#a855f7",  // Bright purple
    "#3730a3",  // Indigo purple
    "#4338ca"   // Blue purple
  ]

  const colors = theme === 'dark' ? darkThemeColors : lightThemeColors
  const isRTL = router.locale === 'ar'

  return (
    <div className={`global-background-effect ${isRTL ? 'rtl-particles' : 'ltr-particles'}`}>
      <Particles
        particleColors={colors}
        particleCount={theme === 'dark' ? 900 : 700}
        particleSpread={theme === 'dark' ? 14 : 12}
        speed={theme === 'dark' ? 0.1 : 0.08}
        particleBaseSize={theme === 'dark' ? 140 : 120}
        moveParticlesOnHover={true}
        alphaParticles={true}
        sizeRandomness={theme === 'dark' ? 1.4 : 1.2}
        cameraDistance={theme === 'dark' ? 28 : 25}
        disableRotation={false}
        particleHoverFactor={theme === 'dark' ? 1.0 : 0.8}
        glowIntensity={theme === 'dark' ? 1.6 : 1.8}
        brightnessMultiplier={theme === 'dark' ? 1.3 : 1.5}
        contrastLevel={theme === 'dark' ? 1.3 : 1.4}
        saturationLevel={theme === 'dark' ? 1.3 : 1.4}
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
          will-change: transform, opacity, filter;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* RTL specific fixes */
        .rtl-particles {
          direction: ltr !important;
          transform: translateZ(0) scaleX(1);
        }

        .ltr-particles {
          direction: ltr;
          transform: translateZ(0);
        }

        /* Enhanced visibility for dark theme particles */
        [data-theme="dark"] .global-background-effect {
          opacity: 1.0;
          mix-blend-mode: screen;
          filter: brightness(1.4) contrast(1.3) saturate(1.3);
        }

        /* Much more visible effect for light theme */
        [data-theme="light"] .global-background-effect {
          opacity: 0.9;
          mix-blend-mode: multiply;
          filter: brightness(0.6) contrast(1.4) saturate(1.4);
        }

        /* Arabic/RTL specific particle fixes */
        [dir="rtl"] .global-background-effect {
          direction: ltr !important;
          transform: translateZ(0);
          left: 0;
          right: auto;
          width: 100vw;
          height: 100vh;
        }

        [dir="rtl"] .global-background-effect canvas {
          direction: ltr !important;
          transform: translateZ(0);
          position: absolute;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
        }

        /* Mobile optimizations with enhanced visibility */
        @media (max-width: 768px) {
          .global-background-effect {
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }

          [data-theme="dark"] .global-background-effect {
            opacity: 0.95;
            filter: brightness(1.3) contrast(1.2) saturate(1.2);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.85;
            filter: brightness(0.5) contrast(1.3) saturate(1.3);
          }

          /* RTL Mobile specific fixes */
          [dir="rtl"] .global-background-effect {
            direction: ltr !important;
            transform: translateZ(0);
            position: fixed;
            top: 0;
            left: 0;
            right: auto;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 0;
          }

          [dir="rtl"] .global-background-effect canvas {
            direction: ltr !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: auto !important;
            width: 100% !important;
            height: 100% !important;
            transform: translateZ(0) !important;
          }
        }

        /* Small mobile with maintained visibility */
        @media (max-width: 480px) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.9;
            filter: brightness(1.2) contrast(1.1) saturate(1.1);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.8;
            filter: brightness(0.45) contrast(1.2) saturate(1.2);
          }

          /* Enhanced RTL mobile fixes */
          [dir="rtl"] .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: auto !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
            transform: translateZ(0) !important;
            z-index: 0 !important;
          }

          [dir="rtl"] .global-background-effect canvas {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: auto !important;
            width: 100% !important;
            height: 100% !important;
            direction: ltr !important;
            transform: translateZ(0) !important;
            backface-visibility: hidden !important;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.85;
            filter: brightness(1.1) contrast(1.0) saturate(1.0);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.75;
            filter: brightness(0.4) contrast(1.1) saturate(1.1);
          }

          /* Extra small RTL fixes */
          [dir="rtl"] .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
            z-index: 0 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .global-background-effect {
            display: none;
          }
        }

        /* Enhanced glow effects for better visibility */
        .global-background-effect :global(canvas) {
          transition: filter 0.5s ease;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        [data-theme="dark"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 15px rgba(139, 124, 200, 0.4)) 
                  drop-shadow(0 0 30px rgba(91, 67, 137, 0.2));
        }

        [data-theme="light"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 12px rgba(76, 29, 149, 0.3)) 
                  drop-shadow(0 0 25px rgba(91, 67, 137, 0.2));
        }

        /* Mobile glow adjustments */
        @media (max-width: 768px) {
          [data-theme="dark"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 12px rgba(139, 124, 200, 0.35)) 
                    drop-shadow(0 0 25px rgba(91, 67, 137, 0.15));
          }

          [data-theme="light"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 10px rgba(76, 29, 149, 0.25)) 
                    drop-shadow(0 0 20px rgba(91, 67, 137, 0.15));
          }

          /* RTL Canvas glow fixes */
          [dir="rtl"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 10px rgba(139, 124, 200, 0.3)) 
                    drop-shadow(0 0 20px rgba(91, 67, 137, 0.15));
            direction: ltr !important;
            transform: translateZ(0) !important;
          }
        }

        /* Performance optimization for low-end devices */
        @media (max-width: 480px) and (max-height: 800px) {
          .global-background-effect {
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          [dir="rtl"] .global-background-effect {
            will-change: transform !important;
            transform: translateZ(0) !important;
            backface-visibility: hidden !important;
          }
        }

        /* Landscape mobile optimization */
        @media (max-width: 768px) and (orientation: landscape) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.8;
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.7;
          }

          [dir="rtl"] .global-background-effect {
            position: fixed !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
          }
        }

        /* High DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          [data-theme="light"] .global-background-effect {
            filter: brightness(0.35) contrast(1.5) saturate(1.5);
          }

          [dir="rtl"] .global-background-effect {
            direction: ltr !important;
            transform: translateZ(0) !important;
          }
        }

        /* Force LTR for particles in RTL layouts */
        [dir="rtl"] .global-background-effect,
        [dir="rtl"] .global-background-effect *,
        [dir="rtl"] .global-background-effect canvas {
          direction: ltr !important;
          text-align: left !important;
        }

        /* Arabic language specific fixes */
        html[lang="ar"] .global-background-effect {
          direction: ltr !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 0 !important;
        }

        html[lang="ar"] .global-background-effect canvas {
          direction: ltr !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          transform: translateZ(0) !important;
        }

        /* Mobile Arabic specific fixes */
        @media (max-width: 768px) {
          html[lang="ar"] .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: auto !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
            z-index: 0 !important;
            transform: translateZ(0) !important;
          }

          html[lang="ar"] .global-background-effect canvas {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: auto !important;
            width: 100% !important;
            height: 100% !important;
            direction: ltr !important;
            transform: translateZ(0) !important;
          }
        }
      `}</style>
    </div>
  )
}