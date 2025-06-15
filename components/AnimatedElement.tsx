'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedElementProps {
  children: React.ReactNode
  animation: 'roll-in-top' | 'roll-in-left' | 'roll-in-right' | 'slide-elliptic' | 'slide-fwd' | 'bounce-in' | 'flip-in' | 'swing-in' | 'text-focus' | 'fade-in' | 'scale-in' | 'slide-bottom'
  delay?: number
  className?: string
}

export default function AnimatedElement({ children, animation, delay = 0, className = '' }: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${isVisible ? `animate-${animation}` : ''} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}