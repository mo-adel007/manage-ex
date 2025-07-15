'use client'

import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function WhyChooseUsSuccess() {
  const { t } = useTranslation('common')

  const successStories = [
    {
      percentage: '60%',
      metric: t('whyChooseUs.success.stories.costReduction'),
      description: t('whyChooseUs.success.stories.costReductionDesc'),
      icon: 'fas fa-chart-line'
    },
    {
      percentage: '50%',
      metric: t('whyChooseUs.success.stories.efficiencyIncrease'),
      description: t('whyChooseUs.success.stories.efficiencyIncreaseDesc'),
      icon: 'fas fa-rocket'
    },
    {
      percentage: '100%',
      metric: t('whyChooseUs.success.stories.clientSatisfaction'),
      description: t('whyChooseUs.success.stories.clientSatisfactionDesc'),
      icon: 'fas fa-heart'
    }
  ]

  const partnerLogos = [
    { name: 'SARA', logo: 'SARA' },
    { name: 'RSA', logo: 'RSA' },
    { name: 'MOUNTAIN', logo: '⛰️' },
    { name: 'TECH', logo: 'TECH' },
    { name: 'GLOBAL', logo: 'GLOBAL' },
    { name: 'INNOVATE', logo: 'INNOVATE' }
  ]

  return (
    <section className="why-choose-us-success">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <h2 className="section-title">{t('whyChooseUs.success.title')}</h2>
            <p className="section-description">{t('whyChooseUs.success.description')}</p>
          </div>
        </AnimatedElement>

        <div className="success-stories">
          {successStories.map((story, index) => (
            <AnimatedElement 
              key={story.metric}
              animation="scale-in"
              delay={index * 0.2}
            >
              <div className="success-card">
                <div className="success-icon">
                  <i className={story.icon}></i>
                </div>
                <div className="success-percentage">{story.percentage}</div>
                <h3 className="success-metric">{story.metric}</h3>
                <p className="success-description">{story.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

       

        <AnimatedElement animation="bounce-in" delay={1.2}>
          <div className="cta-section">
            <h3>{t('whyChooseUs.success.cta.title')}</h3>
            <p>{t('whyChooseUs.success.cta.description')}</p>
            <a href="/contact" className="btn-primary">{t('whyChooseUs.success.cta.button')}</a>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .why-choose-us-success {
          padding: 100px 0;
          background: var(--current-bg-primary);
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

        .section-description {
          font-size: 18px;
          color: var(--current-text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .success-stories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 100px;
        }

        .success-card {
          background: var(--current-bg-secondary);
          padding: 50px 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .success-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .success-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 50px rgba(91, 67, 137, 0.2);
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 32px;
          margin: 0 auto 30px;
        }

        .success-percentage {
          font-size: 4rem;
          font-weight: 900;
          color: var(--primary-color);
          margin-bottom: 15px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .success-metric {
          font-size: 20px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 15px;
        }

        .success-description {
          color: var(--current-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .partners-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .partners-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 50px;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .partner-logo {
          background: var(--current-bg-secondary);
          padding: 30px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .partner-logo:hover {
          border-color: var(--primary-color);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(91, 67, 137, 0.15);
        }

        .partner-logo span {
          font-size: 18px;
          font-weight: 700;
          color: var(--golden-accent);
        }

        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          padding: 60px 40px;
          border-radius: 20px;
          color: var(--accent-white);
        }

        .cta-section h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .cta-section p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .btn-primary {
          background: var(--accent-white);
          color: var(--primary-color);
          padding: 15px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .why-choose-us-success {
            padding: 60px 0;
          }

          .section-header {
            margin-bottom: 50px;
          }

          .section-title {
            font-size: 2rem;
          }

          .success-stories {
            grid-template-columns: 1fr;
            margin-bottom: 60px;
          }

          .success-card {
            padding: 40px 25px;
          }

          .success-percentage {
            font-size: 3rem;
          }

          .cta-section {
            padding: 40px 30px;
          }

          .cta-section h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .success-stories {
            gap: 20px;
          }

          .success-card {
            padding: 30px 20px;
          }

          .success-percentage {
            font-size: 2.5rem;
          }

          .cta-section {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  )
}