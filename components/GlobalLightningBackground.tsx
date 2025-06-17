'use client'

import { useEffect, useState } from 'react'
import Lightning from './Lightning'
import Hyperspeed from './Hyperspeed'
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

  // Enhanced Hyperspeed options for better visibility in light theme
  const hyperspeedOptions = {
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 14,
    islandWidth: 4,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 1.8,
    carLightsFade: 0.9,
    totalSideLightSticks: 40,
    lightPairsPerRoadWay: 60,
    shoulderLinesWidthPercentage: 0.1,
    brokenLinesWidthPercentage: 0.15,
    brokenLinesLengthPercentage: 0.7,
    lightStickWidth: [0.2, 0.8] as [number, number],
    lightStickHeight: [1.8, 2.5] as [number, number],
    movingAwaySpeed: [50, 80] as [number, number],
    movingCloserSpeed: [-120, -160] as [number, number],
    carLightsLength: [20, 120] as [number, number],
    carLightsRadius: [0.1, 0.25] as [number, number],
    carWidthPercentage: [0.5, 0.8] as [number, number],
    carShiftX: [-1.2, 1.2] as [number, number],
    carFloorSeparation: [0, 10] as [number, number],
    colors: {
      roadColor: '#dee2e6',
      islandColor: '#ced4da',
      background: 'transparent',
      shoulderLines: '#5b4389',
      brokenLines: '#8b7cc8',
      leftCars: ['#5b4389', '#8b7cc8', '#c297c1'],
      rightCars: ['#6750A2', '#8b7cc8', '#5b4389'],
      sticks: '#c297c1',
    }
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
        <Hyperspeed effectOptions={hyperspeedOptions} />
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