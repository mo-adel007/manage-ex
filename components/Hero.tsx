'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <AnimatedElement animation="roll-in-left" delay={0.1}>
              <h1 className="hero-title">
                <span className="title-line">{t('hero.title.line1')}</span>
                <span className="title-line">{t('hero.title.line2')}</span>
                <span className="title-line">{t('hero.title.line3')}</span>
                <span className="title-line">{t('hero.title.line4')}</span>
                <span className="title-line">{t('hero.title.line5')}</span>
                <span className="title-line highlight">{t('hero.title.line6')}</span>
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="text-focus" delay={0.4}>
              <p className="hero-description">
                {t('hero.description')}
              </p>
            </AnimatedElement>

            <AnimatedElement animation="scale-in" delay={0.6}>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">{t('hero.getStarted')}</Link>
                <Link href="/services" className="btn-secondary">{t('hero.ourServices')}</Link>
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="slide-fwd" delay={0.3}>
            <div className="hero-image">
              <div className="image-wrapper">
                {/* <Image
                  src="../public/logo0.png"
                  alt="Business Management Workspace"
                  width={800}
                  height={600}
                  className="workspace-image"
                  priority
                /> */}
                <div className="image-overlay">
                  <div className="stats-card">
                    <div className="stat">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">{t('hero.stats.projects')}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">98%</span>
                      <span className="stat-label">{t('hero.stats.successRate')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}