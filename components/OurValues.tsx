'use client'

import AnimatedElement from './AnimatedElement'

export default function OurValues() {
  return (
    <section className="our-values">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="values-subtitle">
              Commitment • Making it Happen Working Smart • Caring
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="scale-in" delay={0.3}>
          <div className="company-profile">
            <a href="/about" className="btn-golden">COMPANY PROFILE</a>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .our-values {
          padding: 100px 0;
          background: var(--current-bg-secondary);
          text-align: center;
        }

        .section-header {
          margin-bottom: 50px;
        }

        .values-subtitle {
          font-size: 18px;
          color: var(--golden-accent);
          font-weight: 600;
          margin-top: 20px;
        }

        .company-profile {
          margin-top: 40px;
        }
      `}</style>
    </section>
  )
}