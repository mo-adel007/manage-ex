'use client'

import Image from 'next/image'
import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

const serviceHighlights = [
  {
    title: 'services.highlights.highQuality',
    icon: 'fas fa-award',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'services.highlights.skilledDevelopers',
    icon: 'fas fa-code',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'services.highlights.perfectSolution',
    icon: 'fas fa-laptop-code',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

export default function ServicesHero() {
  const { t } = useTranslation('common')

  return (
    <section className="services-hero">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <span className="section-tag">{t('services.tag')}</span>
            <h1 className="section-title">{t('services.title')}</h1>
          </div>
        </AnimatedElement>

        <div className="highlights-grid">
          {serviceHighlights.map((highlight, index) => (
            <AnimatedElement 
              key={highlight.title}
              animation="scale-in"
              delay={index * 0.2}
            >
              <div className="highlight-card">
                <div className="highlight-image">
                  <Image
                    src={highlight.image}
                    alt={t(highlight.title)}
                    width={300}
                    height={200}
                  />
                  <div className="highlight-overlay">
                    <i className={highlight.icon}></i>
                  </div>
                </div>
                <h3>{t(highlight.title)}</h3>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-hero {
          padding: 120px 0 80px;
          background: var(--current-bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .highlight-card {
          text-align: center;
        }

        .highlight-image {
          position: relative;
          height: 200px;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .highlight-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .highlight-card:hover .highlight-image img {
          filter: grayscale(0%);
          transform: scale(1.1);
        }

        .highlight-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(91, 67, 137, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 24px;
        }

        .highlight-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--golden-accent);
        }
      `}</style>
    </section>
  )
}