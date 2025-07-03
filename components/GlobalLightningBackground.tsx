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
        <Lightning
          hue={270}
          xOffset={0}
          speed={0.4}
          intensity={0.6}
          size={1.5}
        />
      ) : (
        <Particles
          particleColors={["#2d1856"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
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
          opacity: ${theme === 'dark' ? '0.7' : '0.8'};
          mix-blend-mode: ${theme === 'dark' ? 'screen' : 'multiply'};
          transition: opacity 0.5s ease, mix-blend-mode 0.5s ease;
        }

        @media (max-width: 768px) {
          .global-background-effect {
            opacity: ${theme === 'dark' ? '0.5' : '0.6'};
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .global-background-effect {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}