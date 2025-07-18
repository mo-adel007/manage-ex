import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import AnimatedElement from '@/components/AnimatedElement'

export default function AccountingServices() {
  const { t } = useTranslation('common')

  const services = [
    {
      key: 'financial',
      icon: 'fas fa-chart-line',
      color: 'financial'
    },
    {
      key: 'bookkeeping', 
      icon: 'fas fa-book',
      color: 'bookkeeping'
    },
    {
      key: 'tax',
      icon: 'fas fa-calculator',
      color: 'tax'
    },
    {
      key: 'payroll',
      icon: 'fas fa-money-check-alt',
      color: 'payroll'
    },
    {
      key: 'auditing',
      icon: 'fas fa-search-dollar',
      color: 'auditing'
    },
    {
      key: 'analysis',
      icon: 'fas fa-chart-pie',
      color: 'analysis'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('meta.accounting.title')}</title>
        <meta name="description" content={t('meta.accounting.description')} />
        <meta property="og:title" content={t('meta.accounting.title')} />
        <meta property="og:description" content={t('meta.accounting.description')} />
        <meta name="twitter:title" content={t('meta.accounting.title')} />
        <meta name="twitter:description" content={t('meta.accounting.description')} />
      </Head>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <AnimatedElement animation="text-focus">
            <div className="hero-content">
              <Link href="/services" className="back-link">
                <i className="fas fa-arrow-left"></i>
                <span>{t('common.backToServices')}</span>
              </Link>
              <span className="section-tag">{t('services.tag')}</span>
              <h1 className="hero-title">{t('services.accounting.title')}</h1>
              <p className="hero-description">
                {t('services.accounting.description')}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-detail">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedElement 
                key={service.key}
                animation="scale-in"
                delay={index * 0.1}
              >
                <div className={`service-card ${service.color}`}>
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      {t(`services.accounting.services.${service.key}.title`)}
                    </h3>
                    <ul className="service-items">
                      {(t(`services.accounting.services.${service.key}.items`, { returnObjects: true }) as string[]).map((item, itemIndex) => (
                        <li key={itemIndex} className="service-item">
                          <div className="item-icon">
                            <i className="fas fa-check"></i>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <AnimatedElement animation="bounce-in">
            <div className="cta-content">
              <h2>{t('contact.discussBusiness')}</h2>
              <div className="cta-actions">
                <Link href="/contact" className="btn-primary">
                  {t('contact.discoverMore')}
                </Link>
              
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <style jsx>{`
        .service-hero {
          padding: 120px 0 80px;
          background: var(--current-bg-primary);
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
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

        .services-detail {
          padding: 100px 0;
          background: var(--current-bg-secondary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: var(--current-bg-primary);
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .service-card.financial::before {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .service-card.bookkeeping::before {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }

        .service-card.tax::before {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .service-card.payroll::before {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        }

        .service-card.auditing::before {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .service-card.analysis::before {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 25px 50px rgba(91, 67, 137, 0.2);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: var(--accent-white);
          margin-bottom: 25px;
          position: relative;
          overflow: hidden;
        }

        .financial .service-icon {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .bookkeeping .service-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }

        .tax .service-icon {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .payroll .service-icon {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        }

        .auditing .service-icon {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .analysis .service-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .service-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .service-card:hover .service-icon::before {
          left: 100%;
        }

        .service-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .service-items {
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

        .item-icon {
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

        .service-number {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 48px;
          font-weight: 900;
          color: rgba(91, 67, 137, 0.1);
          line-height: 1;
          transition: all 0.3s ease;
        }

        [dir="rtl"] .service-number {
          right: auto;
          left: 30px;
        }

        .service-card:hover .service-number {
          color: rgba(91, 67, 137, 0.2);
          transform: scale(1.1);
        }

        .service-cta {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .cta-content p {
          font-size: 18px;
          color: var(--current-text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
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
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: var(--accent-white);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(91, 67, 137, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-secondary:hover {
          background: var(--primary-color);
          color: var(--accent-white);
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card {
            padding: 30px 25px;
          }

          .service-icon {
            width: 70px;
            height: 70px;
            font-size: 28px;
            margin-bottom: 20px;
          }

          .service-title {
            font-size: 18px;
          }

          .service-item span {
            font-size: 14px;
          }

          .service-number {
            font-size: 40px;
            top: 25px;
            right: 25px;
          }

          [dir="rtl"] .service-number {
            right: auto;
            left: 25px;
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
          .service-hero {
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 16px;
          }

          .service-card {
            padding: 25px 20px;
          }

          .service-number {
            font-size: 36px;
            top: 20px;
            right: 20px;
          }

          [dir="rtl"] .service-number {
            right: auto;
            left: 20px;
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