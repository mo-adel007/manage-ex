'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function WhyChooseUsContent() {
  const { t } = useTranslation('common')

  const challenges = [
    t('whyChooseUs.solutions.management'),
    t('whyChooseUs.solutions.cost'),
    t('whyChooseUs.solutions.efficiency'),
    t('whyChooseUs.solutions.training'),
    t('whyChooseUs.solutions.followup')
  ]

  return (
    <section className="why-choose-us-content">
      <div className="container">
        <div className="content-grid">
          <AnimatedElement animation="roll-in-left">
            <div className="challenges-section">
              <h2 className="section-title">{t('whyChooseUs.challenges')}</h2>
              <div className="challenges-list">
                {challenges.map((challenge, index) => (
                  <AnimatedElement 
                    key={index}
                    animation="flip-in"
                    delay={index * 0.1}
                  >
                    <div className="challenge-item">
                      <div className="challenge-icon">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <p>{challenge}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="roll-in-right" delay={0.3}>
            <div className="what-sets-us-apart">
              <h2 className="section-title">{t('whyChooseUs.whatSetsUsApart.title')}</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon cost">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h3>{t('whyChooseUs.whatSetsUsApart.cost')}</h3>
                </div>
                <div className="feature-card">
                  <div className="feature-icon efficiency">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>{t('whyChooseUs.whatSetsUsApart.efficiency')}</h3>
                </div>
                <div className="feature-card">
                  <div className="feature-icon processes">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3>{t('whyChooseUs.whatSetsUsApart.processes')}</h3>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .why-choose-us-content {
          padding: 100px 0;
          background: var(--current-bg-secondary);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 40px;
          line-height: 1.3;
        }

        .challenges-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .challenge-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 20px;
          background: var(--current-bg-primary);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .challenge-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(91, 67, 137, 0.1);
        }

        .challenge-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 16px;
          flex-shrink: 0;
        }

        .challenge-item p {
          color: var(--current-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
        }

        .feature-card {
          background: var(--current-bg-primary);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          box-shadow: 0 15px 35px rgba(91, 67, 137, 0.15);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 24px;
          margin: 0 auto 20px;
        }

        .feature-icon.cost {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        }

        .feature-icon.efficiency {
          background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
        }

        .feature-icon.processes {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .feature-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .challenge-item {
            flex-direction: column;
            text-align: center;
          }

          .challenge-icon {
            margin: 0 auto 15px;
          }
        }
      `}</style>
    </section>
  )
}