'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function Strategy() {
  const { t } = useTranslation('common')

  const strategyItems = [
    {
      icon: 'fas fa-gem',
      title: t('about.strategy.quality'),
      color: 'quality'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: t('about.strategy.cost'),
      color: 'cost'
    },
    {
      icon: 'fas fa-clock',
      title: t('about.strategy.time'),
      color: 'time'
    },
    {
      icon: 'fas fa-magic',
      title: t('about.strategy.simplicity'),
      color: 'simplicity'
    },
    {
      icon: 'fas fa-shield-alt',
      title: t('about.strategy.control'),
      color: 'control'
    }
  ]

  return (
    <section className="strategy">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <h2 className="section-title">{t('about.strategy.title')}</h2>
          </div>
        </AnimatedElement>

        <div className="strategy-grid">
          {strategyItems.map((item, index) => (
            <AnimatedElement 
              key={index}
              animation="scale-in"
              delay={index * 0.1}
            >
              <div className={`strategy-card ${item.color}`}>
                <div className="card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="card-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="card-content">
                  <p className="card-text">{item.title}</p>
                </div>
                <div className="card-glow"></div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .strategy {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
          line-height: 1.2;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .strategy-card {
          background: var(--current-bg-secondary);
          border-radius: 20px;
          padding: 35px 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          cursor: pointer;
          text-align: center;
        }

        .strategy-card:hover {
          transform: translateY(-15px);
          border-color: var(--primary-color);
          box-shadow: 0 25px 50px rgba(91, 67, 137, 0.2);
        }

        .card-number {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 48px;
          font-weight: 900;
          color: rgba(91, 67, 137, 0.1);
          line-height: 1;
          transition: all 0.3s ease;
        }

        [dir="rtl"] .card-number {
          right: auto;
          left: 20px;
        }

        .strategy-card:hover .card-number {
          color: rgba(91, 67, 137, 0.2);
          transform: scale(1.1);
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
          margin: 0 auto 25px;
          position: relative;
          overflow: hidden;
        }

        .quality .card-icon {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
        }

        .cost .card-icon {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .time .card-icon {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .simplicity .card-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }

        .control .card-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
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
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .strategy-card:hover .card-icon::before {
          left: 100%;
        }

        .card-content {
          flex: 1;
        }

        .card-text {
          font-size: 16px;
          color: var(--current-text-secondary);
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .quality .card-glow {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
        }

        .cost .card-glow {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .time .card-glow {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .simplicity .card-glow {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }

        .control .card-glow {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .strategy-card:hover .card-glow {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .strategy-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .strategy {
            padding: 80px 0;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .section-title {
            font-size: 2rem;
          }

          .strategy-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .strategy-card {
            padding: 30px 20px;
          }

          .card-icon {
            width: 70px;
            height: 70px;
            font-size: 28px;
            margin-bottom: 20px;
          }

          .card-number {
            font-size: 40px;
            top: 15px;
            right: 15px;
          }

          [dir="rtl"] .card-number {
            right: auto;
            left: 15px;
          }

          .card-text {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  )
}