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

  // Much more visible colors for light theme - ENHANCED
  const lightThemeColors = [
    "#3730a3",  // Very dark indigo
    "#4338ca",  // Dark blue purple
    "#4c1d95",  // Very dark purple
    "#5b21b6",  // Dark purple
    "#6d28d9",  // Medium dark purple
    "#7c3aed",  // Purple
    "#1e1b4b",  // Very dark navy
    "#312e81"   // Dark slate blue
  ]

  const colors = theme === 'dark' ? darkThemeColors : lightThemeColors
  const isRTL = router.locale === 'ar'

  return (
    <div className={`global-background-effect ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}>
      <Particles
        particleColors={colors}
        particleCount={isRTL ? 1400 : (theme === 'dark' ? 1200 : 1000)}
        particleSpread={isRTL ? 18 : (theme === 'dark' ? 16 : 14)}
        speed={isRTL ? 0.15 : (theme === 'dark' ? 0.12 : 0.1)}
        particleBaseSize={isRTL ? 180 : (theme === 'dark' ? 160 : 140)}
        moveParticlesOnHover={true}
        alphaParticles={true}
        sizeRandomness={isRTL ? 1.8 : (theme === 'dark' ? 1.6 : 1.4)}
        cameraDistance={isRTL ? 32 : (theme === 'dark' ? 30 : 28)}
        disableRotation={false}
        particleHoverFactor={isRTL ? 1.4 : (theme === 'dark' ? 1.2 : 1.0)}
        glowIntensity={isRTL ? 2.2 : (theme === 'dark' ? 1.8 : 2.0)}
        brightnessMultiplier={isRTL ? 1.8 : (theme === 'dark' ? 1.4 : 1.6)}
        contrastLevel={isRTL ? 1.6 : (theme === 'dark' ? 1.4 : 1.5)}
        saturationLevel={isRTL ? 1.6 : (theme === 'dark' ? 1.4 : 1.5)}
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
        }

        /* Force LTR for all particles regardless of page direction */
        .global-background-effect,
        .global-background-effect *,
        .global-background-effect canvas {
          direction: ltr !important;
          text-align: left !important;
        }

        /* RTL Layout Specific Fixes - CRITICAL */
        .rtl-layout {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 0 !important;
          direction: ltr !important;
          transform: translateZ(0) !important;
        }

        .rtl-layout * {
          direction: ltr !important;
        }

        .rtl-layout canvas {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
          direction: ltr !important;
          transform: translateZ(0) !important;
        }

        .ltr-layout {
          direction: ltr;
          transform: translateZ(0);
        }

        /* Enhanced visibility for dark theme particles */
        [data-theme="dark"] .global-background-effect {
          opacity: 1.0;
          mix-blend-mode: screen;
          filter: brightness(1.6) contrast(1.5) saturate(1.5);
        }

        /* MUCH more visible effect for light theme */
        [data-theme="light"] .global-background-effect {
          opacity: 1.0;
          mix-blend-mode: multiply;
          filter: brightness(0.4) contrast(1.8) saturate(1.8);
        }

        /* Arabic/RTL specific particle fixes - ENHANCED */
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
        }

        /* Arabic language specific fixes - ENHANCED */
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
        }

        /* Enhanced Arabic visibility - CRITICAL */
        html[lang="ar"][data-theme="dark"] .global-background-effect {
          opacity: 1.0 !important;
          mix-blend-mode: screen !important;
          filter: brightness(1.8) contrast(1.6) saturate(1.6) !important;
        }

        html[lang="ar"][data-theme="light"] .global-background-effect {
          opacity: 1.0 !important;
          mix-blend-mode: multiply !important;
          filter: brightness(0.3) contrast(2.0) saturate(2.0) !important;
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
            opacity: 1.0;
            filter: brightness(1.5) contrast(1.4) saturate(1.4);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.95;
            filter: brightness(0.35) contrast(1.6) saturate(1.6);
          }

          /* RTL Mobile specific fixes - ENHANCED */
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
          }

          /* Arabic mobile specific fixes - ENHANCED */
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
          }

          /* Enhanced Arabic mobile visibility */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 1.0 !important;
            filter: brightness(1.7) contrast(1.5) saturate(1.5) !important;
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 0.95 !important;
            filter: brightness(0.25) contrast(1.8) saturate(1.8) !important;
          }
        }

        /* Small mobile with maintained visibility */
        @media (max-width: 480px) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.98;
            filter: brightness(1.4) contrast(1.3) saturate(1.3);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.9;
            filter: brightness(0.3) contrast(1.5) saturate(1.5);
          }

          /* Enhanced RTL mobile fixes */
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
          }

          [dir="rtl"] .global-background-effect canvas {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            direction: ltr !important;
            transform: translateZ(0) !important;
            backface-visibility: hidden !important;
          }

          /* Arabic small mobile fixes */
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
          }

          html[lang="ar"] .global-background-effect canvas {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            direction: ltr !important;
            transform: translateZ(0) !important;
          }

          /* Enhanced Arabic small mobile visibility */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 0.98 !important;
            filter: brightness(1.6) contrast(1.4) saturate(1.4) !important;
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 0.9 !important;
            filter: brightness(0.2) contrast(1.6) saturate(1.6) !important;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.95;
            filter: brightness(1.3) contrast(1.2) saturate(1.2);
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.85;
            filter: brightness(0.25) contrast(1.4) saturate(1.4);
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
          
          html[lang="ar"] .global-background-effect {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
            z-index: 0 !important;
          }

          /* Enhanced Arabic extra small visibility */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 0.95 !important;
            filter: brightness(1.5) contrast(1.3) saturate(1.3) !important;
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 0.85 !important;
            filter: brightness(0.15) contrast(1.5) saturate(1.5) !important;
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
          filter: drop-shadow(0 0 20px rgba(139, 124, 200, 0.6)) 
                  drop-shadow(0 0 40px rgba(91, 67, 137, 0.4));
        }

        [data-theme="light"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 18px rgba(76, 29, 149, 0.5)) 
                  drop-shadow(0 0 35px rgba(91, 67, 137, 0.3));
        }

        /* Enhanced Arabic canvas glow */
        html[lang="ar"][data-theme="dark"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 25px rgba(139, 124, 200, 0.7)) 
                  drop-shadow(0 0 45px rgba(91, 67, 137, 0.5)) !important;
        }

        html[lang="ar"][data-theme="light"] .global-background-effect :global(canvas) {
          filter: drop-shadow(0 0 22px rgba(76, 29, 149, 0.6)) 
                  drop-shadow(0 0 40px rgba(91, 67, 137, 0.4)) !important;
        }

        /* Mobile glow adjustments */
        @media (max-width: 768px) {
          [data-theme="dark"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 18px rgba(139, 124, 200, 0.5)) 
                    drop-shadow(0 0 35px rgba(91, 67, 137, 0.3));
          }

          [data-theme="light"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 15px rgba(76, 29, 149, 0.4)) 
                    drop-shadow(0 0 30px rgba(91, 67, 137, 0.25));
          }

          /* RTL Canvas glow fixes */
          [dir="rtl"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 15px rgba(139, 124, 200, 0.45)) 
                    drop-shadow(0 0 30px rgba(91, 67, 137, 0.25));
            direction: ltr !important;
            transform: translateZ(0) !important;
          }

          html[lang="ar"] .global-background-effect :global(canvas) {
            filter: drop-shadow(0 0 20px rgba(139, 124, 200, 0.6)) 
                    drop-shadow(0 0 35px rgba(91, 67, 137, 0.3)) !important;
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

          html[lang="ar"] .global-background-effect {
            will-change: transform !important;
            transform: translateZ(0) !important;
            backface-visibility: hidden !important;
          }
        }

        /* Landscape mobile optimization */
        @media (max-width: 768px) and (orientation: landscape) {
          [data-theme="dark"] .global-background-effect {
            opacity: 0.9;
          }
          
          [data-theme="light"] .global-background-effect {
            opacity: 0.8;
          }

          [dir="rtl"] .global-background-effect {
            position: fixed !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
          }

          html[lang="ar"] .global-background-effect {
            position: fixed !important;
            width: 100vw !important;
            height: 100vh !important;
            direction: ltr !important;
          }

          /* Enhanced Arabic landscape visibility */
          html[lang="ar"][data-theme="dark"] .global-background-effect {
            opacity: 0.9 !important;
            filter: brightness(1.5) contrast(1.3) saturate(1.3) !important;
          }

          html[lang="ar"][data-theme="light"] .global-background-effect {
            opacity: 0.8 !important;
            filter: brightness(0.2) contrast(1.5) saturate(1.5) !important;
          }
        }

        /* High DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          [data-theme="light"] .global-background-effect {
            filter: brightness(0.25) contrast(1.8) saturate(1.8);
          }

          [dir="rtl"] .global-background-effect {
            direction: ltr !important;
            transform: translateZ(0) !important;
          }

          html[lang="ar"] .global-background-effect {
            direction: ltr !important;
            transform: translateZ(0) !important;
          }

          /* Enhanced Arabic high DPI visibility */
          html[lang="ar"][data-theme="light"] .global-background-effect {
            filter: brightness(0.15) contrast(2.0) saturate(2.0) !important;
          }
        }

        /* Force LTR for particles in RTL layouts - CRITICAL */
        [dir="rtl"] .global-background-effect,
        [dir="rtl"] .global-background-effect *,
        [dir="rtl"] .global-background-effect canvas {
          direction: ltr !important;
          text-align: left !important;
        }

        /* Arabic language specific fixes - CRITICAL */
        html[lang="ar"] .global-background-effect,
        html[lang="ar"] .global-background-effect *,
        html[lang="ar"] .global-background-effect canvas {
          direction: ltr !important;
          text-align: left !important;
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
        }

        /* Mobile Arabic specific fixes - CRITICAL */
        @media (max-width: 768px) {
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
          }

          html[lang="ar"] .global-background-effect canvas {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            direction: ltr !important;
            transform: translateZ(0) !important;
          }
        }

        /* Force visibility for Arabic - CRITICAL OVERRIDE */
        html[lang="ar"] .global-background-effect {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        html[lang="ar"] .global-background-effect canvas {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  )
}