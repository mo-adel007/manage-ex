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

  // MUCH more visible colors for light theme - ENHANCED
  const lightThemeColors = [
    "#1e1b4b",  // Very dark navy
    "#312e81",  // Dark slate blue
    "#3730a3",  // Very dark indigo
    "#4338ca",  // Dark blue purple
    "#4c1d95",  // Very dark purple
    "#5b21b6",  // Dark purple
    "#6d28d9",  // Medium dark purple
    "#7c3aed"   // Purple
  ]

  const colors = theme === 'dark' ? darkThemeColors : lightThemeColors

  return (
    <div className="global-background-effect">
      <Particles
        particleColors={colors}
        particleCount={theme === 'dark' ? 1200 : 1000}
        particleSpread={theme === 'dark' ? 16 : 14}
        speed={theme === 'dark' ? 0.12 : 0.1}
        particleBaseSize={theme === 'dark' ? 160 : 140}
        moveParticlesOnHover={true}
        alphaParticles={true}
        sizeRandomness={theme === 'dark' ? 1.6 : 1.4}
        cameraDistance={theme === 'dark' ? 30 : 28}
        disableRotation={false}
        particleHoverFactor={theme === 'dark' ? 1.2 : 1.0}
        glowIntensity={theme === 'dark' ? 1.8 : 2.0}
        brightnessMultiplier={theme === 'dark' ? 1.4 : 1.6}
        contrastLevel={theme === 'dark' ? 1.4 : 1.5}
        saturationLevel={theme === 'dark' ? 1.4 : 1.5}
      />

      <style jsx>{`
        .global-background-effect {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 0 !important;
          pointer-events: none !important;
          transition: opacity 0.5s ease, mix-blend-mode 0.5s ease, filter 0.5s ease;
          will-change: transform, opacity, filter;
          transform: translateZ(0);
          backface-visibility: hidden;
          direction: ltr !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Force LTR for all particles regardless of page direction */
        .global-background-effect,
        .global-background-effect *,
        .global-background-effect canvas {
          direction: ltr !important;
          text-align: left !important;
        }

        /* Enhanced visibility for dark theme particles */
        [data-theme="dark"] .global-background-effect {
          opacity: 1.0 !important;
          mix-blend-mode: screen;
          filter: brightness(1.8) contrast(1.6) saturate(1.6);
        }

        /* MUCH more visible effect for light theme */
        [data-theme="light"] .global-background-effect {
          opacity: 1.0 !important;
          mix-blend-mode: multiply;
          filter: brightness(0.25) contrast(2.2) saturate(2.2);
        }

        /* Arabic/RTL specific particle fixes - Same as English */
        [dir="rtl"] .global-background-effect {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          direction: ltr !important;
          transform: translateZ(0) !important;
          z-index: 0 !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        [dir="rtl"] .global-background-effect * {
          direction: ltr !important;
        }

        [dir="rtl"] .global-background-effect canvas {
          direction: ltr !important;
          transform: translateZ(0) !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Arabic language specific fixes - Same as English */
        html[lang="ar"] .global-background-effect {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          direction: ltr !important;
          z-index: 0 !important;
          transform: translateZ(0) !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        html[lang="ar"] .global-background-effect * {
          direction: ltr !important;
        }

        html[lang="ar"] .global-background-effect canvas {
          direction: ltr !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
          transform: translateZ(0) !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Arabic visibility - Same as English */
        html[lang="ar"][data-theme="dark"] .global-background-effect {
          opacity: 1.0 !important;
          mix-blend-mode: screen;
          filter: brightness(1.8) contrast(1.6) saturate(1.6);
        }

        html[lang="ar"][data-theme="light"] .global-background-effect {
          opacity: 1.0 !important;
          mix-blend-mode: multiply;
          filter: brightness(0.25) contrast(2.2) saturate(2.2);
        }

        /* Mobile optimizations with enhanced visibility */
        @media (max-width: 768px) {
          .global-background-effect {
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 0 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.8) contrast(1.5) saturate(1.5);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(0.2) contrast(2.0) saturate(2.0);
          }

          /* RTL Mobile specific fixes */
          [dir="rtl"] .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
            transform: translateZ(0) !important;
            z-index: 0 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [dir="rtl"] .global-background-effect * {
            direction: ltr !important;
          }

          [dir="rtl"] .global-background-effect canvas {
            direction: ltr !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            transform: translateZ(0) !important;
            backface-visibility: hidden !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          /* Arabic mobile specific fixes */
          html[lang="ar"] .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
            z-index: 0 !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          html[lang="ar"] .global-background-effect * {
            direction: ltr !important;
          }

          html[lang="ar"] .global-background-effect canvas {
            direction: ltr !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            transform: translateZ(0) !important;
            backface-visibility: hidden !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          /* Arabic mobile visibility - Same as English */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.8) contrast(1.5) saturate(1.5);
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(0.2) contrast(2.0) saturate(2.0);
          }
        }

        /* Small mobile with maintained visibility */
        @media (max-width: 480px) {
          .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 0 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.6) contrast(1.4) saturate(1.4);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(0.15) contrast(1.8) saturate(1.8);
          }

          /* Arabic small mobile visibility - Same as English */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.6) contrast(1.4) saturate(1.4);
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(0.15) contrast(1.8) saturate(1.8);
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 0 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.5) contrast(1.3) saturate(1.3);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(0.12) contrast(1.6) saturate(1.6);
          }

          /* Arabic extra small visibility - Same as English */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.5) contrast(1.3) saturate(1.3);
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(0.12) contrast(1.6) saturate(1.6);
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
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          direction: ltr !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        [data-theme="dark"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 25px rgba(139, 124, 200, 0.8)) 
                  drop-shadow(0 0 50px rgba(91, 67, 137, 0.6));
        }

        [data-theme="light"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 22px rgba(76, 29, 149, 0.7)) 
                  drop-shadow(0 0 45px rgba(91, 67, 137, 0.5));
        }

        /* Arabic canvas glow - Same as English */
        html[lang="ar"][data-theme="dark"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 25px rgba(139, 124, 200, 0.8)) 
                  drop-shadow(0 0 50px rgba(91, 67, 137, 0.6));
        }

        html[lang="ar"][data-theme="light"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 22px rgba(76, 29, 149, 0.7)) 
                  drop-shadow(0 0 45px rgba(91, 67, 137, 0.5));
        }

        /* Mobile glow adjustments */
        @media (max-width: 768px) {
          .global-background-effect :global(canvas) {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            direction: ltr !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [data-theme="dark"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 22px rgba(139, 124, 200, 0.7)) 
                    drop-shadow(0 0 45px rgba(91, 67, 137, 0.5));
          }

          [data-theme="light"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 20px rgba(76, 29, 149, 0.6)) 
                    drop-shadow(0 0 40px rgba(91, 67, 137, 0.4));
          }

          /* Arabic mobile canvas - Same as English */
          html[lang="ar"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 22px rgba(139, 124, 200, 0.7)) 
                    drop-shadow(0 0 45px rgba(91, 67, 137, 0.5));
            direction: ltr !important;
            transform: translateZ(0) !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
        }

        /* Landscape mobile optimization */
        @media (max-width: 768px) and (orientation: landscape) {
          .global-background-effect {
            position: fixed !important;
            width: 100vw !important;
            height: 100vh !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
          }

          /* Arabic landscape - Same as English */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.8) contrast(1.5) saturate(1.5);
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(0.2) contrast(2.0) saturate(2.0);
          }
        }

        /* High DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 0 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [data-theme="light"] .global-background-effect {
            filter: brightness(0.15) contrast(2.2) saturate(2.2);
          }

          /* Arabic high DPI - Same as English */
          html[lang="ar"][data-theme="light"] .global-background-effect {
            filter: brightness(0.15) contrast(2.2) saturate(2.2);
          }
        }

        /* Force LTR for particles in RTL layouts */
        [dir="rtl"] .global-background-effect,
        [dir="rtl"] .global-background-effect *,
        [dir="rtl"] .global-background-effect canvas {
          direction: ltr !important;
          text-align: left !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Arabic language specific fixes */
        html[lang="ar"] .global-background-effect,
        html[lang="ar"] .global-background-effect *,
        html[lang="ar"] .global-background-effect canvas {
          direction: ltr !important;
          text-align: left !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Ensure particles cover entire viewport in all languages */
        .global-background-effect {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 0 !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  )
}