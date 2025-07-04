"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <AnimatedElement animation="roll-in-left">
            <div className="contact-content">
              <div className="logo-icon">
                <div className="logo-image">
                  <Image
                    src="/logo.png"
                    alt="ManageEx Logo"
                    width={80}
                    height={48}
                    className="logo-img"
                  />
                </div>
              </div>
              <h2>Let's Discuss How to Make your Business Better.</h2>
              <Link href="/contact" className="btn-golden">
                DISCOVER MORE
              </Link>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="roll-in-right" delay={0.3}>
            <div className="contact-info">
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>
                      Zahraa Al Maadi 50 St, Saint Anthony Church Square, Cairo,
                      Egypt
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>
                      info@manageex.com
                      <br />
                      01022333634
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-content">
                    <h4>Working Hours</h4>
                    <p>Sun - Thu: 10 AM to 7 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .contact-content {
          text-align: left;
        }

        .logo-icon {
          width: 120px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          border: 3px solid var(--golden-accent);
          border-radius: 20px;
          padding: 15px;
          animation: icon-pulse 3s ease-in-out infinite;
          background: rgba(139, 124, 200, 0.05);
        }

        @keyframes icon-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(139, 124, 200, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(139, 124, 200, 0);
            transform: scale(1.02);
          }
        }

        .logo-image {
          position: relative;
          width: 180px;
          height: 148px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo-image:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 8px 20px rgba(91, 67, 137, 0.5));
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
          animation: logo-breathe 4s ease-in-out infinite;
        }

        @keyframes logo-breathe {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 5px 15px rgba(91, 67, 137, 0.4));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 8px 25px rgba(91, 67, 137, 0.6));
          }
        }

        .contact-content h2 {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 800;
          color: var(--current-text-primary);
          margin-bottom: 40px;
          line-height: 1.3;
        }

        .info-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--golden-accent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 18px;
          flex-shrink: 0;
        }

        .info-content h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 5px;
        }

        .info-content p {
          color: var(--current-text-secondary);
          line-height: 1.6;
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .info-item {
            flex-direction: column;
            margin: 0 auto;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .info-icon {
            text-align: center;
            margin: 0 auto; /* Center horizontally */
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-icon {
            width: 200px;
            height: 165px;
            margin: 0 auto 30px;
          }

          .logo-image {
            width: 165px;
            height: 139px;
          }
         
        }
      `}</style>
    </section>
  );
}
