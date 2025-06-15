'use client'

import AnimatedElement from './AnimatedElement'

export default function ContactInfoSection() {
  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="contact-grid">
          <AnimatedElement animation="flip-in">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-content">
                <h4>Address</h4>
                <p>Zahraa Al Maadi 50 St, Saint Anthony Church Square, Cairo, Egypt</p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="flip-in" delay={0.2}>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-content">
                <h4>Email & Phone</h4>
                <p>info@manageex.com<br />01022333634</p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="flip-in" delay={0.4}>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-content">
                <h4>Working Hours</h4>
                <p>Sun - Thu: 10 AM to 7 PM</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .contact-info-section {
          padding: 80px 0;
          background: var(--current-bg-secondary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .contact-item {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 30px;
          background: var(--current-bg-primary);
          border-radius: 15px;
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: var(--golden-accent);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 20px;
          flex-shrink: 0;
        }

        .contact-content h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 8px;
        }

        .contact-content p {
          color: var(--current-text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}