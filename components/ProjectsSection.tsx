'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function ProjectsSection() {
  const { t } = useTranslation('common')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isRTL, setIsRTL] = useState(false)

  // Check RTL direction
  useEffect(() => {
    const checkRTL = () => {
      setIsRTL(document.documentElement.dir === 'rtl')
    }
    
    checkRTL()
    // Listen for direction changes
    const observer = new MutationObserver(checkRTL)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir']
    })
    
    return () => observer.disconnect()
  }, [])
  // Partner logos array - using the actual logo files from your public/logos folder
 const partnerLogos = [
  { name: "advancedpet", logo: "/logos/advancedpet.svg" },
  { name: "advncedpet", logo: "/logos/advncedpet.svg" },
  { name: "aman", logo: "/logos/aman.svg" },
  { name: "amanex", logo: "/logos/amanex.svg" },
  { name: "amk", logo: "/logos/amk.svg" },
  { name: "delta", logo: "/logos/delta.svg" },
  { name: "elkheshy", logo: "/logos/elkheshy.svg" },
  { name: "elmokhtas", logo: "/logos/elmokhtas.svg" },
  { name: "elyani", logo: "/logos/elyani.svg" },
  { name: "erada", logo: "/logos/erada.svg" },
  { name: "etlala", logo: "/logos/etlala.svg" },
  { name: "gawda", logo: "/logos/gawda.svg" },
  { name: "hmasri", logo: "/logos/hmasri.svg" },
  { name: "holol", logo: "/logos/holol.svg" },
  { name: "itaf", logo: "/logos/itaf.svg" },
  { name: "kanan", logo: "/logos/kanan.svg" },
  { name: "kunooz", logo: "/logos/kunooz.svg" },
  { name: "maan", logo: "/logos/maan.svg" },
  { name: "monkey", logo: "/logos/monkey.svg" },
  { name: "mostnd", logo: "/logos/mostnd.svg" },
  { name: "naghm", logo: "/logos/naghm.svg" },
  { name: "otc", logo: "/logos/otc.svg" },
  { name: "rawabt", logo: "/logos/rawabt.svg" },
  { name: "richy", logo: "/logos/richy.svg" },
  { name: "safina", logo: "/logos/safina.svg" },
  { name: "safwa", logo: "/logos/safwa.svg" },
  { name: "seraj", logo: "/logos/seraj.svg" },
  { name: "sharq", logo: "/logos/sharq.svg" },
  { name: "smsm", logo: "/logos/smsm.svg" },
  { name: "sre", logo: "/logos/sre.svg" },
  { name: "tamluk", logo: "/logos/tamluk.svg" },
  { name: "tawkid", logo: "/logos/tawkid.svg" },
  { name: "tawsol", logo: "/logos/tawsol.svg" },
  { name: "watnya", logo: "/logos/watnya.svg" },
  { name: "yadoom", logo: "/logos/yadoom.svg" },
];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partnerLogos.length / 6))
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [partnerLogos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partnerLogos.length / 6))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partnerLogos.length / 6)) % Math.ceil(partnerLogos.length / 6))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="projects-section">
      <div className="container">
        <AnimatedElement animation="roll-in-top">
          <div className="section-header">
            <span className="section-tag">{t('whyChooseUs.partners')}</span>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-fwd" delay={0.3}>
          <div className="partners-slider">
            <div className="slider-container">
              <div 
                className="slider-track"
                style={{ 
                  transform: `translateX(${isRTL ? currentSlide * 100 : -currentSlide * 100}%)` 
                }}
              >
                {Array.from({ length: Math.ceil(partnerLogos.length / 6) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="slide">
                    <div className="partners-grid">
                      {partnerLogos
                        .slice(slideIndex * 6, (slideIndex + 1) * 6)
                        .map((partner, index) => (
                          <div key={`${slideIndex}-${index}`} className="partner-logo">
                            <div className="logo-container">
                              <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={120}
                                height={80}
                                className="logo-image"
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="slider-controls">
              <button 
                className="slider-btn prev-btn" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <i className={`fas ${isRTL ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
              </button>
              <button 
                className="slider-btn next-btn" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <i className={`fas ${isRTL ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="slider-dots">
              {Array.from({ length: Math.ceil(partnerLogos.length / 6) }).map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 100px 0;
          background: var(--current-bg-secondary);
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-tag {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--golden-accent) 100%);
          color: var(--accent-white);
          font-size: 14px;
          font-weight: 600;
          border-radius: 9999px;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--current-text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .partners-slider {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .slider-container {
          overflow: hidden;
          border-radius: 20px;
          background: var(--current-bg-primary);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(91, 67, 137, 0.1);
        }

        .slider-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .slide {
          min-width: 100%;
          padding: 40px 20px;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          align-items: center;
          justify-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .partner-logo {
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .logo-container {
          width: 150px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          border-radius: 15px;
          background: rgba(91, 67, 137, 0.02);
          border: 2px solid transparent;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(91, 67, 137, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }

        .partner-logo:hover .logo-container {
          transform: translateY(-8px);
          border-color: var(--primary-color);
          background: rgba(91, 67, 137, 0.08);
          box-shadow: 0 15px 35px rgba(91, 67, 137, 0.15);
        }

        .partner-logo:hover .logo-container::before {
          left: 100%;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          max-width: 120px;
          max-height: 80px;
          filter: grayscale(100%) opacity(0.7);
          transition: all 0.4s ease;
        }

        .partner-logo:hover .logo-image {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.05);
        }

        .slider-controls {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 -60px;
          pointer-events: none;
        }

        .slider-btn {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: var(--accent-white);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
          pointer-events: all;
          box-shadow: 0 8px 25px rgba(91, 67, 137, 0.3);
          z-index: 10;
        }

        .prev-btn {
          transform: translateX(-25px);
        }

        .next-btn {
          transform: translateX(25px);
        }

        .slider-btn:hover {
          transform: translateX(-25px) scale(1.1);
          box-shadow: 0 12px 35px rgba(91, 67, 137, 0.4);
        }

        .next-btn:hover {
          transform: translateX(25px) scale(1.1);
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 40px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: none;
          background: rgba(91, 67, 137, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--primary-color);
          transform: scale(1.2);
          box-shadow: 0 0 0 2px rgba(91, 67, 137, 0.2);
        }

        .dot:hover {
          background: var(--secondary-color);
          transform: scale(1.1);
        }

        /* RTL Support */
        [dir="rtl"] .slider-track {
          direction: ltr;
        }

        [dir="rtl"] .slide {
          direction: ltr;
        }

        [dir="rtl"] .prev-btn {
          transform: translateX(25px);
        }

        [dir="rtl"] .next-btn {
          transform: translateX(-25px);
        }

        [dir="rtl"] .prev-btn:hover {
          transform: translateX(25px) scale(1.1);
        }

        [dir="rtl"] .next-btn:hover {
          transform: translateX(-25px) scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
            max-width: 800px;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .slider-btn {
            width: 45px;
            height: 45px;
            font-size: 16px;
          }

          .logo-container {
            width: 140px;
            height: 95px;
            padding: 15px;
          }

          .logo-image {
            max-width: 110px;
            max-height: 75px;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 0;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .partners-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            max-width: 500px;
            margin: 0 auto;
          }

          .slide {
            padding: 25px 15px;
          }

          .logo-container {
            width: 130px;
            height: 90px;
            padding: 12px;
          }

          .logo-image {
            max-width: 100px;
            max-height: 70px;
          }

          .slider-btn {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }

          .prev-btn {
            transform: translateX(-15px);
          }

          .next-btn {
            transform: translateX(15px);
          }

          .slider-btn:hover {
            transform: translateX(-15px) scale(1.05);
          }

          .next-btn:hover {
            transform: translateX(15px) scale(1.05);
          }

          [dir="rtl"] .prev-btn {
            transform: translateX(15px);
          }

          [dir="rtl"] .next-btn {
            transform: translateX(-15px);
          }

          [dir="rtl"] .prev-btn:hover {
            transform: translateX(15px) scale(1.05);
          }

          [dir="rtl"] .next-btn:hover {
            transform: translateX(-15px) scale(1.05);
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }

          .partners-slider {
            margin: 0 10px;
          }

          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 350px;
          }

          .slide {
            padding: 20px 10px;
          }

          .logo-container {
            width: 120px;
            height: 80px;
            padding: 10px;
          }

          .logo-image {
            max-width: 90px;
            max-height: 60px;
          }

          .slider-controls {
            padding: 0 -40px;
          }

          .slider-btn {
            width: 35px;
            height: 35px;
            font-size: 12px;
          }

          .prev-btn {
            transform: translateX(-10px);
          }

          .next-btn {
            transform: translateX(10px);
          }

          .slider-btn:hover {
            transform: translateX(-10px) scale(1.05);
          }

          .next-btn:hover {
            transform: translateX(10px) scale(1.05);
          }

          [dir="rtl"] .prev-btn {
            transform: translateX(10px);
          }

          [dir="rtl"] .next-btn {
            transform: translateX(-10px);
          }

          [dir="rtl"] .prev-btn:hover {
            transform: translateX(10px) scale(1.05);
          }

          [dir="rtl"] .next-btn:hover {
            transform: translateX(-10px) scale(1.05);
          }

          .dot {
            width: 3px;
            height: 3px;
          }

          .slider-dots {
            margin-top: 30px;
            gap: 6px;
          }
        }

        /* Animation for smooth logo loading */
        @keyframes logoFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .partner-logo {
          animation: logoFadeIn 0.6s ease-out;
        }

        /* Pause animation on hover */
        .partners-slider:hover .slider-track {
          animation-play-state: paused;
        }

        /* Enhanced focus states for accessibility */
        .slider-btn:focus,
        .dot:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        /* Smooth transitions for theme changes */
        .logo-container,
        .slider-btn,
        .dot {
          transition: all 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </section>
  )
}
