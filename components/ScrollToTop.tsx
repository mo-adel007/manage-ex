'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>

      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 100px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: var(--accent-white);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          font-size: 18px;
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .scroll-to-top:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(91, 67, 137, 0.4);
        }
      `}</style>
    </button>
  )
}