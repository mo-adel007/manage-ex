import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import AnimatedElement from '@/components/AnimatedElement'

export default function MarketingServices() {
  const { t } = useTranslation('common')

  const services = [
    {
      key: 'social',
      icon: 'fab fa-facebook',
      color: 'social',
      number: '01'
    },
    {
      key: 'content', 
      icon: 'fas fa-pen-fancy',
      color: 'content',
      number: '02'
    },
    {
      key: 'advertising',
      icon: 'fas fa-bullhorn',
      color: 'advertising',
      number: '03'
    },
    {
      key: 'seo',
      icon: 'fas fa-search',
      color: 'seo',
      number: '04'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="marketing-hero">
        <div className="hero-background">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
        <div className="container">
          <AnimatedElement animation="text-focus">
            <div className="hero-content">
              <Link href="/services" className="back-link">
                <i className="fas fa-arrow-left"></i>
                <span>{t('common.backToServices')}</span>
              </Link>
              <span className="section-tag">{t('services.tag')}</span>
              <h1 className="hero-title">{t('services.marketing.title')}</h1>
              <p className="hero-description">
                {t('services.marketing.description')}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Cards */}
      <section className="marketing-services">
        <div className="container">
          <div className="services-floating-grid">
            {services.map((service, index) => (
              <AnimatedElement 
                key={service.key}
                animation="scale-in"
                delay={index * 0.2}
              >
                <div className={`floating-service-card ${service.color}`}>
                  <div className="card-background"></div>
                  <div className="card-content">
                    <div className="service-header">
                      <div className="service-number">{service.number}</div>
                      <div className="service-icon">
                        <i className={service.icon}></i>
                      </div>
                    </div>
                    
                    <h3 className="service-title">
                      {t(`services.marketing.services.${service.key}.title`)}
                    </h3>
                    
                    <div className="service-details">
                      <ul className="service-list">
                        {(t(`services.marketing.services.${service.key}.items`, { returnObjects: true }) as string[]).map((item, itemIndex) => (
                          <li key={itemIndex} className="service-item">
                            <div className="item-icon">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="card-glow"></div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="marketing-cta">
        <div className="cta-background">
          <div className="animated-gradient"></div>
        </div>
        <div className="container">
          <AnimatedElement animation="bounce-in">
            <div className="cta-content">
              <div className="cta-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h2>{t('contact.discussBusiness')}</h2>
              <p>{t('services.marketing.cta')}</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn-primary">
                  {t('contact.discoverMore')}
                </Link>
                <Link href="/services" className="btn-secondary">
                  {t('servicesSec.viewAllServices')}
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <style jsx>{`
        .marketing-hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--current-bg-primary) 0%, var(--current-bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .element-1 {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .element-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 70%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
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

        .marketing-services {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .services-floating-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          perspective: 1000px;
        }

        .floating-service-card {
          position: relative;
          background: var(--current-bg-secondary);
          border-radius: 25px;
          padding: 40px 30px;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
          border: 2px solid transparent;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .card-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 25px;
          opacity: 0.05;
          transition: opacity 0.3s ease;
        }

        .social .card-background {
          background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
        }

        .content .card-background {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
        }

        .advertising .card-background {
          background: linear-gradient(135deg, #f59e0b 0%, #fb923c 100%);
        }

        .seo .card-background {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .floating-service-card:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
          border-color: var(--primary-color);
          box-shadow: 
            0 25px 50px rgba(91, 67, 137, 0.2),
            0 0 0 1px rgba(91, 67, 137, 0.1);
        }

        .floating-service-card:hover .card-background {
          opacity: 0.1;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .service-number {
          font-size: 20px;
          font-weight: 900;
          color: var(--accent-white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .social .service-number {
          background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
        }

        .content .service-number {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
        }

        .advertising .service-number {
          background: linear-gradient(135deg, #f59e0b 0%, #fb923c 100%);
        }

        .seo .service-number {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .service-number::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .floating-service-card:hover .service-number::before {
          left: 100%;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: var(--accent-white);
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .social .service-icon {
          background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
        }

        .content .service-icon {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
        }

        .advertising .service-icon {
          background: linear-gradient(135deg, #f59e0b 0%, #fb923c 100%);
        }

        .seo .service-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .service-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
        }

        .floating-service-card:hover .service-icon::after {
          width: 100%;
          height: 100%;
        }

        .service-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 25px;
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

        .item-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .social .item-icon {
          background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
        }

        .content .item-icon {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
        }

        .advertising .item-icon {
          background: linear-gradient(135deg, #f59e0b 0%, #fb923c 100%);
        }

        .seo .item-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .service-item span {
          color: var(--current-text-secondary);
          line-height: 1.6;
          font-size: 15px;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 25px 25px 0 0;
        }

        .social .card-glow {
          background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
        }

        .content .card-glow {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
        }

        .advertising .card-glow {
          background: linear-gradient(135deg, #f59e0b 0%, #fb923c 100%);
        }

        .seo .card-glow {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .floating-service-card:hover .card-glow {
          opacity: 1;
        }

        .marketing-cta {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .animated-gradient {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            var(--primary-color),
            var(--secondary-color),
            var(--golden-accent),
            var(--primary-color)
          );
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
          color: var(--accent-white);
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
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
          }
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
          .services-floating-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .floating-service-card {
            padding: 30px 25px;
          }

          .floating-service-card:hover {
            transform: translateY(-10px);
          }

          .service-header {
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

          .element-1,
          .element-2,
          .element-3 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .marketing-hero {
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 16px;
          }

          .floating-service-card {
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