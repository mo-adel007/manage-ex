'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function WhyChooseUsTeam() {
  const { t } = useTranslation('common')

  const teamQualities = [
    {
      icon: 'fas fa-graduation-cap',
      title: t('whyChooseUs.team.training'),
      description: t('whyChooseUs.team.trainingDesc')
    },
    {
      icon: 'fas fa-bullseye',
      title: t('whyChooseUs.team.precision'),
      description: t('whyChooseUs.team.precisionDesc')
    },
    {
      icon: 'fas fa-rocket',
      title: t('whyChooseUs.team.delivery'),
      description: t('whyChooseUs.team.deliveryDesc')
    }
  ]

  return (
    <section className="why-choose-us-team">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <h2 className="section-title">{t('whyChooseUs.team.title')}</h2>
            <p className="section-subtitle">
              {t('whyChooseUs.team.description')}
            </p>
          </div>
        </AnimatedElement>

        <div className="team-qualities">
          {teamQualities.map((quality, index) => (
            <AnimatedElement 
              key={quality.title}
              animation="scale-in"
              delay={index * 0.2}
            >
              <div className="quality-card">
                <div className="quality-icon">
                  <i className={quality.icon}></i>
                </div>
                <div className="quality-content">
                  <h3>{quality.title}</h3>
                  <p>{quality.description}</p>
                </div>
                <div className="quality-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="slide-fwd" delay={0.6}>
          <div className="team-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .why-choose-us-team {
          padding: 100px 0;
          background: var(--current-bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--current-text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .team-qualities {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .quality-card {
          background: var(--current-bg-primary);
          padding: 40px 30px;
          border-radius: 20px;
          position: relative;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          overflow: hidden;
        }

        .quality-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .quality-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 20px 40px rgba(91, 67, 137, 0.2);
        }

        .quality-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 28px;
          margin-bottom: 25px;
        }

        .quality-content h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 15px;
        }

        .quality-content p {
          color: var(--current-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .quality-number {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 48px;
          font-weight: 900;
          color: rgba(91, 67, 137, 0.1);
          line-height: 1;
        }

        .team-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          background: var(--current-bg-primary);
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-item {
          text-align: center;
          padding: 20px;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          color: var(--primary-color);
          margin-bottom: 10px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: var(--current-text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .team-qualities {
            grid-template-columns: 1fr;
          }

          .quality-card {
            padding: 30px 25px;
          }

          .quality-number {
            font-size: 36px;
            top: 25px;
            right: 25px;
          }

          .team-stats {
            padding: 30px;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}