'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function WhyChooseUsFeatures() {
  const { t } = useTranslation('common')

  return (
    <section className="why-choose-us-features">
      <div className="container">
        <div className="features-wrapper">
          <AnimatedElement animation="text-focus">
            <div className="measuring-success">
              <h2 className="section-title">{t('whyChooseUs.measuring.title')}</h2>
              <p className="section-description">{t('whyChooseUs.measuring.description')}</p>
              
              <div className="success-metrics">
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="metric-content">
                    <h3>60%</h3>
                    <p>{t('whyChooseUs.whatSetsUsApart.cost')}</p>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="metric-content">
                    <h3>50%</h3>
                    <p>{t('whyChooseUs.whatSetsUsApart.efficiency')}</p>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div className="metric-content">
                    <h3>100%</h3>
                    <p>{t('whyChooseUs.whatSetsUsApart.processes')}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="scale-in" delay={0.3}>
            <div className="consulting-services">
              <h2 className="section-title">{t('whyChooseUs.consulting.title')}</h2>
              <p className="section-description">{t('whyChooseUs.consulting.description')}</p>
              
              <div className="consulting-areas">
                <div className="consulting-card">
                  <div className="consulting-icon">
                    <i className="fas fa-users-cog"></i>
                  </div>
                  <h3>{t('services.hr.title')}</h3>
                </div>
                <div className="consulting-card">
                  <div className="consulting-icon">
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <h3>{t('services.marketing.title')}</h3>
                </div>
                <div className="consulting-card">
                  <div className="consulting-icon">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h3>{t('services.design.title')}</h3>
                </div>
                <div className="consulting-card">
                  <div className="consulting-icon">
                    <i className="fas fa-calculator"></i>
                  </div>
                  <h3>{t('services.accounting.title')}</h3>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .why-choose-us-features {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .features-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 80px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
          text-align: center;
        }

        .section-description {
          font-size: 18px;
          color: var(--current-text-secondary);
          text-align: center;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .success-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .metric-card {
          background: var(--current-bg-secondary);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .metric-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 20px 40px rgba(91, 67, 137, 0.2);
        }

        .metric-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 32px;
          margin: 0 auto 25px;
        }

        .metric-content h3 {
          font-size: 3rem;
          font-weight: 900;
          color: var(--primary-color);
          margin-bottom: 10px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .metric-content p {
          color: var(--current-text-secondary);
          font-weight: 600;
          margin: 0;
        }

        .consulting-areas {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 25px;
        }

        .consulting-card {
          background: var(--current-bg-secondary);
          padding: 30px 20px;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .consulting-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(91, 67, 137, 0.15);
        }

        .consulting-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--golden-accent) 0%, var(--primary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 24px;
          margin: 0 auto 20px;
        }

        .consulting-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0;
        }

        @media (max-width: 768px) {
          .why-choose-us-features {
            padding: 60px 0;
          }

          .features-wrapper {
            gap: 50px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            margin-bottom: 40px;
          }

          .success-metrics {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .metric-card {
            padding: 30px 25px;
          }

          .consulting-areas {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .consulting-card {
            padding: 25px 15px;
          }
        }

        @media (max-width: 480px) {
          .consulting-areas {
            grid-template-columns: 1fr;
          }

          .metric-card {
            padding: 25px 20px;
          }

          .metric-content h3 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}