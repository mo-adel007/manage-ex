'use client'

import Image from 'next/image'
import AnimatedElement from './AnimatedElement'

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <AnimatedElement animation="roll-in-left">
              <span className="section-tag">WATCH US LIVE</span>
            </AnimatedElement>
            <AnimatedElement animation="swing-in" delay={0.2}>
              <h1 className="hero-title">
                Business Management<br />
                Experts You Trust.
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="text-focus" delay={0.4}>
              <p className="hero-description">
                There are many variations of business challenges available, but we provide solutions that have proven successful in transforming organizations.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={0.6}>
              <div className="features-list">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Urgent business solutions</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Top quality services with reasonable price</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Professional & experienced team</span>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="scale-in" delay={0.8}>
              <a href="/contact" className="btn-golden">DISCOVER MORE</a>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="slide-fwd" delay={0.5}>
            <div className="hero-image">
              <div className="image-container">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business Management Team"
                  width={600}
                  height={400}
                  className="main-image"
                />
                <div className="floating-card">
                  <div className="card-content">
                    <h3>We Do More than Platforms</h3>
                    <div className="platform-icons">
                      <i className="fab fa-youtube"></i>
                      <i className="fab fa-facebook"></i>
                      <i className="fab fa-instagram"></i>
                      <i className="fab fa-twitter"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .about-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          background: var(--current-bg-primary);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--current-text-primary);
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 16px;
          color: var(--current-text-secondary);
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .features-list {
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          color: var(--current-text-primary);
        }

        .feature-item i {
          color: var(--primary-color);
          font-size: 16px;
        }

        .image-container {
          position: relative;
        }

        .main-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .floating-card {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--current-bg-secondary);
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .floating-card h3 {
          font-size: 14px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 15px;
        }

        .platform-icons {
          display: flex;
          gap: 10px;
        }

        .platform-icons i {
          width: 30px;
          height: 30px;
          background: var(--primary-color);
          color: var(--accent-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .floating-card {
            position: static;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  )
}