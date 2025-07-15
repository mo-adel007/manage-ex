'use client'

import AnimatedElement from './AnimatedElement'

const partners = [
  { name: 'SARA', logo: 'SARA' },
  { name: 'RSA', logo: 'RSA' },
  { name: 'MOUNTAIN', logo: '⛰️' }
]

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <AnimatedElement 
              key={partner.name}
              animation="scale-in"
              delay={index * 0.2}
            >
              <div className="partner-logo">
                <span>{partner.logo}</span>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          padding: 80px 0;
          background: var(--current-bg-primary);
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          align-items: center;
          justify-items: center;
        }

        .partner-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .partner-logo:hover {
          opacity: 1;
        }

        .partner-logo span {
          font-size: 24px;
          font-weight: 700;
          color: var(--golden-accent);
        }
      `}</style>
    </section>
  )
}