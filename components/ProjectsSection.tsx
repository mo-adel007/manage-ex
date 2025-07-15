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
  { name: "ALELYANI", logo: "/logos/ALELYANI.svg" },
  { name: "ALGAWDA", logo: "/logos/ALGAWDA.svg" },
  { name: "ALMOKHTS", logo: "/logos/ALMOKHTS.svg" },
  { name: "ALMSALYA", logo: "/logos/ALMSALYA.svg" },
  { name: "ALNAGHAM", logo: "/logos/ALNAGHAM.svg" },
  { name: "ALSAFWA", logo: "/logos/ALSAFWA.svg" },
  { name: "ALSHARQ", logo: "/logos/ALSHARQ.svg" },
  { name: "ALSHATRY", logo: "/logos/ALSHATRY.svg" },
  { name: "ALWATANIYA", logo: "/logos/ALWATANIYA.svg" },
  { name: "AMAAN", logo: "/logos/AMAAN.svg" },
  { name: "AMAN", logo: "/logos/AMAN.svg" },
  { name: "AMLAK", logo: "/logos/AMLAK.svg" },
  { name: "DELTA", logo: "/logos/DELTA.svg" },
  { name: "ELKHESHY", logo: "/logos/ELKHESHY.svg" },
  { name: "ERADA", logo: "/logos/ERADA.svg" },
  { name: "etlala", logo: "/logos/etlala.svg" },
  { name: "HMASRI", logo: "/logos/HMASRI.svg" },
  { name: "ITFA", logo: "/logos/ITFA.svg" },
  { name: "KANAN", logo: "/logos/KANAN.svg" },
  { name: "KUNOOZ", logo: "/logos/KUNOOZ.svg" },
  { name: "MAAN", logo: "/logos/MAAN.svg" },
  { name: "MONKEY", logo: "/logos/MONKEY.svg" },
  { name: "MSB", logo: "/logos/MSB.svg" },
  { name: "MSTAND", logo: "/logos/MSTAND.svg" },
  { name: "OTC", logo: "/logos/OTC.svg" },
  { name: "PETCARE", logo: "/logos/PETCARE.svg" },
  { name: "RAWABT", logo: "/logos/RAWABT.svg" },
  { name: "RICHY", logo: "/logos/RICHY.svg" },
  { name: "RIYADA", logo: "/logos/RIYADA.svg" },
  { name: "SAFINATALSAHRA", logo: "/logos/SAFINATALSAHRA.svg" },
  { name: "SERAJ", logo: "/logos/SERAJ.svg" },
  { name: "SIMSIM", logo: "/logos/SIMSIM.svg" },
  { name: "TAMLUK", logo: "/logos/TAMLUK.svg" },
  { name: "TAWASOL", logo: "/logos/TAWASOL.svg" },
  { name: "TAWKUD", logo: "/logos/TAWKUD.svg" },
  { name: "YADOM", logo: "/logos/YADOM.svg" },
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
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .partner-logo {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .logo-container {
          width: 160px;
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
          gap: 12px;
          margin-top: 40px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(91, 67, 137, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--primary-color);
          transform: scale(1.2);
          box-shadow: 0 0 0 4px rgba(91, 67, 137, 0.2);
        }

        .dot:hover {
          background: var(--secondary-color);
          transform: scale(1.1);
        }

        /* RTL Support */
        [dir="rtl"] .slider-track {
          direction: ltr !important;
        }

        [dir="rtl"] .slide {
          direction: ltr !important;
        }

        [dir="rtl"] .partners-grid {
          direction: ltr !important;
        }

        [dir="rtl"] .partner-logo {
          direction: ltr !important;
        }

        [dir="rtl"] .logo-container {
          direction: ltr !important;
        }

        [dir="rtl"] .logo-image {
          direction: ltr !important;
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
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 20px;
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
            height: 90px;
            padding: 12px;
          }

          .logo-image {
            max-width: 110px;
            max-height: 70px;
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
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            max-width: 400px;
            margin: 0 auto;
          }

          .slide {
            padding: 25px 15px;
          }

          .logo-container {
            width: 160px;
            height: 100px;
            padding: 12px;
          }

          .logo-image {
            max-width: 130px;
            max-height: 80px;
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
            max-width: 320px;
          }

          .slide {
            padding: 20px 10px;
          }

          .logo-container {
            width: 140px;
            height: 90px;
            padding: 10px;
          }

          .logo-image {
            max-width: 115px;
            max-height: 70px;
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
            width: 10px;
            height: 10px;
          }

          .slider-dots {
            margin-top: 30px;
            gap: 8px;
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
