'use client'

import { useEffect, useState } from 'react'
import Lightning from './Lightning'

interface LightningBackgroundProps {
  children: React.ReactNode
  hue?: number
  intensity?: number
  speed?: number
  className?: string
}

export default function LightningBackground({ 
  children, 
  hue = 270, 
  intensity = 0.3, 
  speed = 0.5,
  className = ''
}: LightningBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={`lightning-background-wrapper ${className}`}>
      <div className="lightning-background">
        <Lightning
          hue={hue}
          xOffset={0}
          speed={speed}
          intensity={intensity}
          size={1.5}
        />
      </div>
      <div className="lightning-content">
        {children}
      </div>

      <style jsx>{`
        .lightning-background-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .lightning-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.4;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .lightning-content {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .lightning-background {
            opacity: 0.2;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lightning-background {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}