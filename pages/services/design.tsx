import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import AnimatedElement from '@/components/AnimatedElement'

export default function DesignServices() {
  const { t } = useTranslation('common')

  const services = [
    {
      key: 'identity',
      icon: 'fas fa-palette',
      color: 'identity',
      number: '01'
    },
    {
      key: 'profiles', 
      icon: 'fas fa-file-alt',
      color: 'profiles',
      number: '02'
    },
    {
      key: 'social',
      icon: 'fas fa-share-alt',
      color: 'social',
      number: '03'
    },
    {
      key: 'packaging',
      icon: 'fas fa-box',
      color: 'packaging',
      number: '04'
    },
    {
      key: 'motion',
      icon: 'fas fa-video',
      color: 'motion',
      number: '05'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="design-hero">
        <div className="container">
          <AnimatedElement animation="text-focus">
            <div className="hero-content">
              <Link href="/services" className="back-link">
                <i className="fas fa-arrow-left"></i>
                <span>{t('common.backToServices')}</span>
              </Link>
              <span className="section-tag">{t('services.tag')}</span>
              <h1 className="hero-title">{t('services.design.title')}</h1>
              <p className="hero-description">
                {t('services.design.description')}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Timeline */}
      <section className="design-services">
        <div className="container">
          <div className="services-timeline">
            {services.map((service, index) => (
              <AnimatedElement 
                key={service.key}
                animation={index % 2 === 0 ? 'roll-in-left' : 'roll-in-right'}
                delay={index * 0.2}
              >
                <div className={`timeline-item ${service.color} ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <div className="service-header">
                      <div className="service-number">{service.number}</div>
                      <div className="service-icon">
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="service-title">
                        {t(`services.design.services.${service.key}.title`)}
                      </h3>
                    </div>
                    
                    <div className="service-details">
                      <ul className="service-list">
                        {(t(`services.design.services.${service.key}.items`, { returnObjects: true }) as string[]).map((item, itemIndex) => (
                          <li key={itemIndex} className="service-item">
                            <div className="item-bullet">
                              <i className="fas fa-check"></i>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="timeline-connector">
                    <div className="connector-line"></div>
                    <div className="connector-dot"></div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="design-cta">
        <div className="container">
          <AnimatedElement animation="bounce-in">
            <div className="cta-content">
              <div className="cta-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h2>{t('contact.discussBusiness')}</h2>
              <p>{t('services.design.cta')}</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn-primary">
                  {t('contact.discoverMore')}
                </Link>
                <Link href="/services" className="btn-secondary">
                  {t('services.viewAllServices')}
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <style jsx>{`
        .design-hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--current-bg-primary) 0%, var(--current-bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .design-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23c297c1" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%235b4389" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%238b7cc8" opacity="0.15"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 20px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .back-link:hover {
          color: var(--secondary-color);
          transform: translateX(-5px);
        }

        [dir="rtl"] .back-link {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .back-link:hover {
          transform: translateX(5px);
        }

        [dir="rtl"] .back-link i {
          transform: rotate(180deg);
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
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: var(--current-text-primary);
          margin-bottom: 25px;
          line-height: 1.2;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 18px;
          color: var(--current-text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        .design-services {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .services-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .services-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--golden-accent) 100%);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 80px;
          display: flex;
          align-items: center;
        }

        .timeline-item.left {
          justify-content: flex-end;
          padding-right: 60px;
        }

        .timeline-item.right {
          justify-content: flex-start;
          padding-left: 60px;
        }

        .timeline-content {
          background: var(--current-bg-secondary);
          border-radius: 20px;
          padding: 40px;
          max-width: 450px;
          position: relative;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          transition: all 0.4s ease;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          border-radius: 20px 20px 0 0;
        }

        .identity .timeline-content::before {
          background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
        }

        .profiles .timeline-content::before {
          background: linear-gradient(135deg, #2196f3 0%, #64b5f6 100%);
        }

        .social .timeline-content::before {
          background: linear-gradient(135deg, #4caf50 0%, #81c784 100%);
        }

        .packaging .timeline-content::before {
          background: linear-gradient(135deg, #ff9800 0%, #ffb74d 100%);
        }

        .motion .timeline-content::before {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .timeline-item:hover .timeline-content {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 25px 50px rgba(91, 67, 137, 0.2);
        }

        .timeline-item.left .timeline-content::after {
          content: '';
          position: absolute;
          right: -15px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 15px solid var(--current-bg-secondary);
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
        }

        .timeline-item.right .timeline-content::after {
          content: '';
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-right: 15px solid var(--current-bg-secondary);
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .service-number {
          font-size: 24px;
          font-weight: 900;
          color: var(--primary-color);
          background: rgba(91, 67, 137, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: var(--accent-white);
          flex-shrink: 0;
        }

        .identity .service-icon {
          background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
        }

        .profiles .service-icon {
          background: linear-gradient(135deg, #2196f3 0%, #64b5f6 100%);
        }

        .social .service-icon {
          background: linear-gradient(135deg, #4caf50 0%, #81c784 100%);
        }

        .packaging .service-icon {
          background: linear-gradient(135deg, #ff9800 0%, #ffb74d 100%);
        }

        .motion .service-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .service-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0;
          flex: 1;
          line-height: 1.4;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          padding: 8px 0;
        }

        .item-bullet {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-item span {
          color: var(--current-text-secondary);
          line-height: 1.6;
          font-size: 15px;
        }

        .timeline-connector {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .connector-dot {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          border: 4px solid var(--current-bg-primary);
          box-shadow: 0 0 0 4px rgba(91, 67, 137, 0.2);
        }

        .design-cta {
          padding: 100px 0;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: var(--accent-white);
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 30px;
          backdrop-filter: blur(10px);
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .cta-content p {
          font-size: 18px;
          margin-bottom: 40px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary {
          background: var(--accent-white);
          color: var(--primary-color);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--accent-white);
          border: 2px solid var(--accent-white);
        }

        .btn-secondary:hover {
          background: var(--accent-white);
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .services-timeline::before {
            left: 30px;
          }

          .timeline-item {
            margin-bottom: 60px;
          }

          .timeline-item.left,
          .timeline-item.right {
            justify-content: flex-start;
            padding-left: 70px;
            padding-right: 0;
          }

          .timeline-item.left .timeline-content::after,
          .timeline-item.right .timeline-content::after {
            left: -15px;
            right: auto;
            border-right: 15px solid var(--current-bg-secondary);
            border-left: none;
          }

          .timeline-connector {
            left: 30px;
          }

          .timeline-content {
            padding: 30px 25px;
            max-width: none;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .service-number {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .service-icon {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }

          .service-title {
            font-size: 18px;
            text-align: center;
          }

          .cta-content h2 {
            font-size: 2rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .design-hero {
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 16px;
          }

          .timeline-content {
            padding: 25px 20px;
          }

          .service-item span {
            font-size: 14px;
          }

          .cta-icon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }
        }
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}