import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import AnimatedElement from '@/components/AnimatedElement'

export default function WebDevelopmentServices() {
  const { t } = useTranslation('common')

  const services = [
    {
      key: 'design',
      icon: 'fas fa-palette',
      color: 'design',
      number: '01'
    },
    {
      key: 'development', 
      icon: 'fas fa-code',
      color: 'development',
      number: '02'
    },
    {
      key: 'optimization',
      icon: 'fas fa-search',
      color: 'optimization',
      number: '03'
    },
    {
      key: 'management',
      icon: 'fas fa-cogs',
      color: 'management',
      number: '04'
    },
    {
      key: 'integration',
      icon: 'fas fa-link',
      color: 'integration',
      number: '05'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('meta.web.title')}</title>
        <meta name="description" content={t('meta.web.description')} />
        <meta property="og:title" content={t('meta.web.title')} />
        <meta property="og:description" content={t('meta.web.description')} />
        <meta name="twitter:title" content={t('meta.web.title')} />
        <meta name="twitter:description" content={t('meta.web.description')} />
      </Head>
      {/* Hero Section */}
      <section className="web-hero">
        <div className="container">
          <AnimatedElement animation="text-focus">
            <div className="hero-content">
              <Link href="/services" className="back-link">
                <i className="fas fa-arrow-left"></i>
                <span>{t('common.backToServices')}</span>
              </Link>
              <span className="section-tag">{t('services.tag')}</span>
              <h1 className="hero-title">{t('services.webDevelopment.title')}</h1>
              <p className="hero-description">
                {t('services.webDevelopment.description')}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Grid */}
      <section className="web-services">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedElement 
                key={service.key}
                animation="scale-in"
                delay={index * 0.15}
              >
                <div className={`service-card ${service.color}`}>
                  <div className="card-header">
                    <div className="service-number">{service.number}</div>
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <h3 className="service-title">
                      {t(`services.webDevelopment.services.${service.key}.title`)}
                    </h3>
                    
                    <ul className="service-list">
                      {(t(`services.webDevelopment.services.${service.key}.items`, { returnObjects: true }) as string[]).map((item, itemIndex) => (
                        <li key={itemIndex} className="service-item">
                          <div className="item-bullet">
                            <i className="fas fa-check"></i>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-glow"></div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="web-cta">
        <div className="container">
          <AnimatedElement animation="bounce-in">
            <div className="cta-content">
              <div className="cta-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h2>{t('contact.discussBusiness')}</h2>
              <p>{t('services.webDevelopment.cta')}</p>
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
        .web-hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .web-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="code-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><text x="2" y="10" font-family="monospace" font-size="8" fill="%23ffffff" opacity="0.1">{'<>'}</text><text x="2" y="18" font-family="monospace" font-size="8" fill="%23ffffff" opacity="0.1">{'{}'}</text></pattern></defs><rect width="100" height="100" fill="url(%23code-pattern)"/></svg>');
          opacity: 0.3;
        }

        .web-hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(102,126,234,0.3) 0%, transparent 50%);
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
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 20px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .back-link:hover {
          color: white;
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
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 14px;
          font-weight: 600;
          border-radius: 9999px;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: white;
          margin-bottom: 25px;
          line-height: 1.2;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .web-services {
          padding: 100px 0;
          background: var(--current-bg-primary);
          position: relative;
        }

        .web-services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 49%, rgba(102,126,234,0.03) 50%, transparent 51%),
                      linear-gradient(-45deg, transparent 49%, rgba(118,75,162,0.03) 50%, transparent 51%);
          background-size: 60px 60px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .service-card {
          background: var(--current-bg-secondary);
          border-radius: 20px;
          padding: 35px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          border-radius: 20px 20px 0 0;
        }

        .design .service-card::before {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .development .service-card::before {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .optimization .service-card::before {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .management .service-card::before {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .integration .service-card::before {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .service-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2);
        }

        .design:hover {
          border-color: #667eea;
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
        }

        .development:hover {
          border-color: #f093fb;
          box-shadow: 0 25px 50px rgba(240, 147, 251, 0.3);
        }

        .optimization:hover {
          border-color: #4facfe;
          box-shadow: 0 25px 50px rgba(79, 172, 254, 0.3);
        }

        .management:hover {
          border-color: #43e97b;
          box-shadow: 0 25px 50px rgba(67, 233, 123, 0.3);
        }

        .integration:hover {
          border-color: #fa709a;
          box-shadow: 0 25px 50px rgba(250, 112, 154, 0.3);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .design .card-glow {
          background: radial-gradient(circle at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
        }

        .development .card-glow {
          background: radial-gradient(circle at center, rgba(240, 147, 251, 0.1) 0%, transparent 70%);
        }

        .optimization .card-glow {
          background: radial-gradient(circle at center, rgba(79, 172, 254, 0.1) 0%, transparent 70%);
        }

        .management .card-glow {
          background: radial-gradient(circle at center, rgba(67, 233, 123, 0.1) 0%, transparent 70%);
        }

        .integration .card-glow {
          background: radial-gradient(circle at center, rgba(250, 112, 154, 0.1) 0%, transparent 70%);
        }

        .service-card:hover .card-glow {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .service-number {
          font-size: 24px;
          font-weight: 900;
          color: var(--current-text-secondary);
          background: rgba(102, 126, 234, 0.1);
          width: 55px;
          height: 55px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          flex-shrink: 0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-icon::before {
          opacity: 1;
        }

        .design .service-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .development .service-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .optimization .service-icon {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .management .service-icon {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .integration .service-icon {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .service-card:hover .service-number {
          background: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .service-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0 0 20px 0;
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
          transition: all 0.3s ease;
        }

        .service-item:hover {
          transform: translateX(5px);
        }

        [dir="rtl"] .service-item:hover {
          transform: translateX(-5px);
        }

        .item-bullet {
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s ease;
        }

        .service-item:hover .item-bullet {
          transform: scale(1.2);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .service-item span {
          color: var(--current-text-secondary);
          line-height: 1.6;
          font-size: 15px;
          transition: color 0.3s ease;
        }

        .service-item:hover span {
          color: var(--current-text-primary);
        }

        .web-cta {
          padding: 100px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .web-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="web-pattern" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="%23ffffff" opacity="0.1"/><circle cx="10" cy="30" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="30" cy="10" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23web-pattern)"/></svg>');
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-icon {
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin: 0 auto 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .cta-icon:hover {
          transform: scale(1.1) rotate(5deg);
          background: rgba(255, 255, 255, 0.2);
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
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 0 20px;
          }

          .service-card {
            padding: 30px 25px;
          }

          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .service-number {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .service-title {
            font-size: 20px;
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
          .web-hero {
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

          .service-item span {
            font-size: 14px;
          }

          .cta-icon {
            width: 70px;
            height: 70px;
            font-size: 28px;
          }
        }

        /* RTL Support */
        [dir="rtl"] .card-header {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .service-item {
          flex-direction: row-reverse;
          text-align: right;
        }

        @media (max-width: 768px) {
          [dir="rtl"] .card-header {
            flex-direction: column;
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
