'use client'

import AnimatedElement from './AnimatedElement'

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="hero-content">
            <span className="section-tag">CONTACT US</span>
            <h1 className="hero-title">Let's Start a New Step For Your Business</h1>
            <p className="hero-description">
              Ready to transform your business? Get in touch with us today and let's build an exceptional website together.
            </p>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .contact-hero {
          padding: 120px 0 80px;
          background: var(--current-bg-primary);
          text-align: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--current-text-primary);
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 18px;
          color: var(--current-text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}