'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function VisionMission() {
  const { t } = useTranslation('common')

  return (
    <section className="vision-mission">
      <div className="container">
        <div className="content-grid">
          <AnimatedElement animation="roll-in-left">
            <div className="vision-card">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="card-content">
                <h2 className="card-title">{t('about.vision.title')}</h2>
                <p className="card-description">
                  {t('about.vision.description')}
                </p>
              </div>
              <div className="card-decoration"></div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="roll-in-right" delay={0.3}>
            <div className="mission-card">
              <div className="card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="card-content">
                <h2 className="card-title">{t('about.mission.title')}</h2>
                <p className="card-description">
                  {t('about.mission.description')}
                </p>
              </div>
              <div className="card-decoration"></div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .vision-mission {
          padding: 100px 0;
          background: var(--current-bg-secondary);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: stretch;
        }

        .vision-card,
        .mission-card {
          background: var(--current-bg-primary);
          border-radius: 20px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .vision-card:hover,
        .mission-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 20px 50px rgba(91, 67, 137, 0.2);
        }

        .card-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .vision-card .card-decoration {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--golden-accent) 100%);
        }

        .mission-card .card-decoration {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: var(--accent-white);
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
        }

        .vision-card .card-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--golden-accent) 100%);
        }

        .mission-card .card-icon {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
        }

        .card-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .vision-card:hover .card-icon::before,
        .mission-card:hover .card-icon::before {
          left: 100%;
        }

        .card-content {
          flex: 1;
        }

        .card-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .card-description {
          font-size: 16px;
          color: var(--current-text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .content-grid {
            gap: 40px;
          }

          .vision-card,
          .mission-card {
            padding: 35px;
          }

          .card-title {
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .vision-mission {
            padding: 80px 0;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .vision-card,
          .mission-card {
            padding: 30px;
          }

          .card-icon {
            width: 70px;
            height: 70px;
            font-size: 28px;
            margin-bottom: 25px;
          }

          .card-title {
            font-size: 22px;
          }

          .card-description {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  )
}