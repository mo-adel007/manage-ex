'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function WhyChooseUsHero() {
  const { t } = useTranslation('common')

  return (
    <section className="why-choose-us-hero">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="hero-content">
            <span className="section-tag">{t('whyChooseUs.tag')}</span>
            <h1 className="hero-title">{t('whyChooseUs.title')}</h1>
            <p className="hero-description">
              {t('whyChooseUs.description')}
            </p>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .why-choose-us-hero {
          padding: 120px 0 80px;
          background: var(--current-bg-primary);
          text-align: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--current-text-primary);
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 18px;
          color: var(--current-text-secondary);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}