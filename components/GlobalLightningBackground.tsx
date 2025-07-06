'use client'

import { useEffect, useState } from 'react'
import Lightning from './Lightning'
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

  return (
    <div className="global-background-effect">
      {theme === 'dark' ? (
        <Particles
          particleColors={[
            "#5b4389",  // Primary purple
            "#8b7cc8",  // Golden accent purple
            "#c297c1",  // Secondary purple
            "#9d8bd1",  // Light purple variant
            "#6750A2",  // Deep purple
            "#7a6bb5"   // Medium purple
          ]}
          particleCount={800}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          sizeRandomness={1.2}
          cameraDistance={25}
          disableRotation={false}
          particleHoverFactor={0.8}
        />
      ) : (
        <Lightning
          hue={270}
          xOffset={0}
          speed={0.4}
          intensity={0.6}
          size={1.5}
        />
      )}

      <style jsx>{`
        .global-background-effect {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          pointer-events: none;
          opacity: ${theme === 'dark' ? '0.85' : '0.7'};
          mix-blend-mode: ${theme === 'dark' ? 'screen' : 'multiply'};
          transition: opacity 0.5s ease, mix-blend-mode 0.5s ease;
        }

        /* Enhanced visibility for dark theme particles */
        [data-theme="dark"] .global-background-effect {
          opacity: 0.9;
          mix-blend-mode: screen;
          filter: brightness(1.2) contrast(1.1);
        }

        /* Subtle effect for light theme */
        [data-theme="light"] .global-background-effect {
          opacity: 0.6;
          mix-blend-mode: multiply;
          filter: brightness(0.9);
        }

        @media (max-width: 768px) {
          .global-background-effect {
            opacity: ${theme === 'dark' ? '0.7' : '0.5'};
          }
          
          [data-theme="dark"] .global-background-effect {
            opacity: 0.75;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .global-background-effect {
            display: none;
          }
        }

        /* Performance optimization for low-end devices */
        @media (max-width: 480px) {
          .global-background-effect {
            opacity: ${theme === 'dark' ? '0.6' : '0.4'};
          }
        }
      `}</style>
    </div>
  )
}