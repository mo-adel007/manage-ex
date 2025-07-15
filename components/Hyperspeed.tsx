'use client'

import { useRef, useEffect } from 'react'

interface HyperspeedProps {
  effectOptions?: {
    onSpeedUp?: () => void
    onSlowDown?: () => void
    distortion?: string
    length?: number
    roadWidth?: number
    islandWidth?: number
    lanesPerRoad?: number
    fov?: number
    fovSpeedUp?: number
    speedUp?: number
    carLightsFade?: number
    totalSideLightSticks?: number
    lightPairsPerRoadWay?: number
    shoulderLinesWidthPercentage?: number
    brokenLinesWidthPercentage?: number
    brokenLinesLengthPercentage?: number
    lightStickWidth?: [number, number]
    lightStickHeight?: [number, number]
    movingAwaySpeed?: [number, number]
    movingCloserSpeed?: [number, number]
    carLightsLength?: [number, number]
    carLightsRadius?: [number, number]
    carWidthPercentage?: [number, number]
    carShiftX?: [number, number]
    carFloorSeparation?: [number, number]
    colors?: {
      roadColor?: string
      islandColor?: string
      background?: string
      shoulderLines?: string
      brokenLines?: string
      leftCars?: string[]
      rightCars?: string[]
      sticks?: string
    }
  }
}

export default function Hyperspeed({ effectOptions }: HyperspeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const canvas = canvasRef.current
    const container = containerRef.current

    // Set up canvas
    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Default options
    const options = {
      length: 400,
      roadWidth: 12,
      islandWidth: 3,
      lanesPerRoad: 4,
      fov: 90,
      speedUp: 1.5,
      carLightsFade: 0.8,
      totalSideLightSticks: 30,
      lightPairsPerRoadWay: 50,
      shoulderLinesWidthPercentage: 0.08,
      brokenLinesWidthPercentage: 0.12,
      brokenLinesLengthPercentage: 0.6,
      lightStickWidth: [0.15, 0.6] as [number, number],
      lightStickHeight: [1.5, 2.0] as [number, number],
      movingAwaySpeed: [40, 60] as [number, number],
      movingCloserSpeed: [-100, -140] as [number, number],
      carLightsLength: [15, 100] as [number, number],
      carLightsRadius: [0.08, 0.18] as [number, number],
      carWidthPercentage: [0.4, 0.6] as [number, number],
      carShiftX: [-1.0, 1.0] as [number, number],
      carFloorSeparation: [0, 8] as [number, number],
      colors: {
        roadColor: '#e9ecef',
        islandColor: '#dee2e6',
        background: '#f8f9fa',
        shoulderLines: '#5b4389',
        brokenLines: '#8b7cc8',
        leftCars: ['#5b4389', '#8b7cc8', '#c297c1'],
        rightCars: ['#6750A2', '#8b7cc8', '#5b4389'],
        sticks: '#c297c1',
      },
      ...effectOptions
    }

    // Animation state
    let animationId: number
    let time = 0
    const cars: Array<{
      x: number
      y: number
      z: number
      speed: number
      color: string
      side: 'left' | 'right'
      width: number
      height: number
    }> = []

    const sticks: Array<{
      x: number
      y: number
      z: number
      height: number
    }> = []

    const roadLines: Array<{
      x: number
      z: number
      length: number
    }> = []

    // Initialize cars
    for (let i = 0; i < 80; i++) {
      cars.push({
        x: (Math.random() - 0.5) * options.roadWidth,
        y: 0,
        z: Math.random() * options.length,
        speed: options.movingAwaySpeed[0] + Math.random() * (options.movingAwaySpeed[1] - options.movingAwaySpeed[0]),
        color: Math.random() > 0.5
          ? (options.colors.leftCars ?? ['#5b4389', '#8b7cc8', '#c297c1'])[Math.floor(Math.random() * (options.colors.leftCars?.length ?? 3))]
          : (options.colors.rightCars ?? ['#6750A2', '#8b7cc8', '#5b4389'])[Math.floor(Math.random() * (options.colors.rightCars?.length ?? 3))],
        side: Math.random() > 0.5 ? 'left' : 'right',
        width: 0.3 + Math.random() * 0.3,
        height: 1.5 + Math.random() * 1.0
      })
    }

    // Initialize light sticks
    for (let i = 0; i < options.totalSideLightSticks; i++) {
      sticks.push({
        x: (Math.random() - 0.5) * (options.roadWidth + 8),
        y: 0,
        z: Math.random() * options.length,
        height: options.lightStickHeight[0] + Math.random() * (options.lightStickHeight[1] - options.lightStickHeight[0])
      })
    }

    // Initialize road lines
    for (let i = 0; i < options.lightPairsPerRoadWay; i++) {
      roadLines.push({
        x: 0,
        z: (i / options.lightPairsPerRoadWay) * options.length,
        length: 20 + Math.random() * 30
      })
    }

    const render = () => {
      time += 0.016 // ~60fps

      // Clear canvas with background
      ctx.fillStyle = options.colors.background ?? '#f8f9fa'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height * 0.6 // Lower horizon for better perspective

      // Draw road base
      const roadPerspectiveNear = canvas.width * 0.4
      const roadPerspectiveFar = 50
      
      // Road surface
      ctx.fillStyle = options.colors.roadColor ?? '#e9ecef'
      ctx.beginPath()
      ctx.moveTo(centerX - roadPerspectiveNear, canvas.height)
      ctx.lineTo(centerX + roadPerspectiveNear, canvas.height)
      ctx.lineTo(centerX + roadPerspectiveFar, centerY)
      ctx.lineTo(centerX - roadPerspectiveFar, centerY)
      ctx.closePath()
      ctx.fill()

      // Draw road center island
      ctx.fillStyle = options.colors.islandColor ?? '#dee2e6'
      const islandWidth = 20
      ctx.beginPath()
      ctx.moveTo(centerX - islandWidth/2, canvas.height)
      ctx.lineTo(centerX + islandWidth/2, canvas.height)
      ctx.lineTo(centerX + 2, centerY)
      ctx.lineTo(centerX - 2, centerY)
      ctx.closePath()
      ctx.fill()

      // Draw road lines (dashed center line)
      roadLines.forEach(line => {
        line.z -= 50 * 0.016
        if (line.z < 0) {
          line.z = options.length
        }

        const progress = 1 - (line.z / options.length)
        const scale = progress * 0.8 + 0.2
        const screenY = centerY + (canvas.height - centerY) * progress
        
        if (scale > 0.1) {
          ctx.fillStyle = options.colors.brokenLines ?? '#8b7cc8'
          ctx.globalAlpha = scale * 0.8
          const lineWidth = scale * 8
          const lineHeight = scale * line.length
          ctx.fillRect(centerX - lineWidth/2, screenY, lineWidth, lineHeight)
          ctx.globalAlpha = 1
        }
      })

      // Draw shoulder lines
      ctx.strokeStyle = options.colors.shoulderLines ?? '#5b4389'
      ctx.lineWidth = 3
      ctx.globalAlpha = 0.7
      
      // Left shoulder
      ctx.beginPath()
      ctx.moveTo(centerX - roadPerspectiveNear, canvas.height)
      ctx.lineTo(centerX - roadPerspectiveFar, centerY)
      ctx.stroke()
      
      // Right shoulder
      ctx.beginPath()
      ctx.moveTo(centerX + roadPerspectiveNear, canvas.height)
      ctx.lineTo(centerX + roadPerspectiveFar, centerY)
      ctx.stroke()
      
      ctx.globalAlpha = 1

      // Draw light sticks
      sticks.forEach(stick => {
        stick.z -= 40 * 0.016
        if (stick.z < 0) {
          stick.z = options.length
        }

        const progress = 1 - (stick.z / options.length)
        const scale = progress * 0.9 + 0.1
        const screenX = centerX + stick.x * scale * 15
        const screenY = centerY + (canvas.height - centerY) * progress
        
        if (scale > 0.05) {
          // Stick base
          ctx.fillStyle = options.colors.sticks ?? '#c297c1'
          ctx.globalAlpha = scale * 0.6
          const stickWidth = scale * 4
          const stickHeight = scale * stick.height * 30
          ctx.fillRect(screenX - stickWidth/2, screenY - stickHeight, stickWidth, stickHeight)
          
          // Stick light glow
          ctx.fillStyle = options.colors.sticks ?? '#c297c1'
          ctx.globalAlpha = scale * 0.3
          ctx.fillRect(screenX - stickWidth, screenY - stickHeight - 5, stickWidth * 2, 10)
          
          ctx.globalAlpha = 1
        }
      })

      // Draw cars with enhanced visibility
      cars.forEach(car => {
        car.z -= car.speed * 0.016
        if (car.z < 0) {
          car.z = options.length
          car.x = (Math.random() - 0.5) * options.roadWidth
        }

        const progress = 1 - (car.z / options.length)
        const scale = progress * 0.8 + 0.2
        const screenX = centerX + car.x * scale * 20
        const screenY = centerY + (canvas.height - centerY) * progress

        if (scale > 0.05) {
          const carWidth = scale * car.width * 25
          const carHeight = scale * car.height * 15
          
          // Car body
          ctx.fillStyle = car.color
          ctx.globalAlpha = scale * 0.8
          ctx.fillRect(screenX - carWidth/2, screenY - carHeight, carWidth, carHeight)
          
          // Car light trail
          ctx.fillStyle = car.color
          ctx.globalAlpha = options.carLightsFade * scale * 0.6
          const trailHeight = carHeight * 3
          ctx.fillRect(screenX - carWidth/3, screenY, carWidth * 0.6, trailHeight)
          
          // Bright light points
          ctx.fillStyle = '#ffffff'
          ctx.globalAlpha = scale * 0.9
          ctx.fillRect(screenX - 2, screenY - carHeight/2, 4, 4)
          
          ctx.globalAlpha = 1
        }
      })

      // Add perspective grid lines for depth
      ctx.strokeStyle = options.colors.shoulderLines ?? '#5b4389'
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.3
      
      for (let i = 0; i < 10; i++) {
        const y = centerY + (canvas.height - centerY) * (i / 10)
        const width = roadPerspectiveFar + (roadPerspectiveNear - roadPerspectiveFar) * (i / 10)
        ctx.beginPath()
        ctx.moveTo(centerX - width, y)
        ctx.lineTo(centerX + width, y)
        ctx.stroke()
      }
      
      ctx.globalAlpha = 1

      animationId = requestAnimationFrame(render)
    }

    animationId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [effectOptions])

  return (
    <div ref={containerRef} className="hyperspeed-container">
      <canvas ref={canvasRef} />
      
      <style jsx>{`
        .hyperspeed-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
        }

        canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </div>
  )
}