'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function AboutHero() {
  const { t } = useTranslation('common')

  return (
    <section className="about-hero">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="hero-content">
            <span className="section-tag">{t('about.tag')}</span>
            <h1 className="hero-title">{t('about.title')}</h1>
            <div className="hero-description">
              <p className="main-description">
                {t('about.description')}
              </p>
              <p className="commitment-description">
                {t('about.commitment')}
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .about-hero {
          padding: 120px 0 80px;
          background: var(--current-bg-primary);
          text-align: center;
          margin-top: 80px;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
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

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--current-text-primary);
          margin-bottom: 40px;
          line-height: 1.2;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .main-description,
        .commitment-description {
          font-size: 18px;
          color: var(--current-text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        .main-description {
          font-weight: 500;
        }

        .commitment-description {
          font-style: italic;
          color: var(--current-text-muted);
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 100px 0 60px;
          }

          .hero-description {
            gap: 20px;
          }

          .main-description,
          .commitment-description {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  )
}