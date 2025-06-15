'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedElement from './AnimatedElement'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <AnimatedElement animation="roll-in-left" delay={0.1}>
              <h1 className="hero-title">
                <span className="title-line">PROFESSIONAL</span>
                <span className="title-line">BUSINESS</span>
                <span className="title-line">MANAGEMENT</span>
                <span className="title-line">SOLUTIONS</span>
                <span className="title-line">THAT</span>
                <span className="title-line highlight">TRANSFORM</span>
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="text-focus" delay={0.4}>
              <p className="hero-description">
                Streamline your operations to a new level of efficiency with our
                <span className="highlight-text"> innovative approach</span> to business management.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="scale-in" delay={0.6}>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Get Started</Link>
                <Link href="/services" className="btn-secondary">Our Services</Link>
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="slide-fwd" delay={0.3}>
            <div className="hero-image">
              <div className="image-wrapper">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business Management Workspace"
                  width={800}
                  height={600}
                  className="workspace-image"
                  priority
                />
                <div className="image-overlay">
                  <div className="stats-card">
                    <div className="stat">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">98%</span>
                      <span className="stat-label">Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 0 60px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--current-bg-primary) 0%, var(--current-bg-secondary) 50%, var(--current-bg-primary) 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: -2px;
          color: var(--current-text-primary);
        }

        .title-line {
          display: block;
          margin-bottom: 0.1em;
        }

        .title-line.highlight {
          color: var(--primary-color);
          position: relative;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: clamp(16px, 2.5vw, 20px);
          color: var(--current-text-secondary);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .highlight-text {
          color: var(--primary-color);
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
          padding: 14px 28px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          display: inline-block;
          min-height: 44px;
          text-align: center;
        }

        .btn-secondary:hover {
          background: var(--primary-color);
          color: var(--accent-white);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(91, 67, 137, 0.3);
        }

        .hero-image {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .workspace-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover .workspace-image {
          transform: scale(1.02);
        }

        .image-overlay {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 15px;
          display: flex;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 24px;
          font-weight: 900;
          color: var(--primary-color);
          line-height: 1;
        }

        .stat-label {
          display: block;
          font-size: 12px;
          color: var(--current-text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 5px;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .hero {
            padding: 100px 0 50px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .hero-text {
            max-width: 100%;
          }

          .hero-title {
            font-size: clamp(2rem, 6vw, 3.5rem);
            margin-bottom: 25px;
          }

          .hero-description {
            font-size: clamp(16px, 3vw, 18px);
            max-width: 600px;
            margin: 0 auto 35px;
          }

          .hero-actions {
            justify-content: center;
          }

          .image-wrapper {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero {
            min-height: 90vh;
            padding: 90px 0 40px;
          }

          .hero-content {
            gap: 40px;
          }

          .hero-title {
            font-size: clamp(1.8rem, 8vw, 2.8rem);
            letter-spacing: -1px;
            margin-bottom: 20px;
          }

          .hero-description {
            font-size: 16px;
            margin-bottom: 30px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            padding: 16px 24px;
            font-size: 14px;
          }

          .image-wrapper {
            border-radius: 15px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          }

          .stats-card {
            padding: 15px;
            gap: 15px;
          }

          .stat-number {
            font-size: 20px;
          }

          .stat-label {
            font-size: 11px;
          }

          .image-overlay {
            bottom: 15px;
            right: 15px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .hero {
            padding: 80px 0 30px;
          }

          .hero-content {
            gap: 30px;
          }

          .hero-title {
            font-size: clamp(1.5rem, 9vw, 2.2rem);
            margin-bottom: 15px;
          }

          .hero-description {
            font-size: 15px;
            line-height: 1.5;
            margin-bottom: 25px;
          }

          .hero-actions {
            gap: 12px;
          }

          .btn-primary,
          .btn-secondary {
            padding: 14px 20px;
            font-size: 13px;
          }

          .image-wrapper {
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          }

          .stats-card {
            padding: 12px;
            gap: 12px;
          }

          .stat-number {
            font-size: 18px;
          }

          .stat-label {
            font-size: 10px;
          }
        }

        /* Extra Small Screens */
        @media (max-width: 360px) {
          .hero {
            padding: 70px 0 25px;
          }

          .hero-title {
            font-size: clamp(1.3rem, 10vw, 1.8rem);
          }

          .hero-description {
            font-size: 14px;
          }

          .stats-card {
            padding: 10px;
            gap: 10px;
          }

          .image-overlay {
            bottom: 10px;
            right: 10px;
          }
        }
      `}</style>
    </section>
  )
}