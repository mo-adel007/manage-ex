'use client'

import AnimatedElement from './AnimatedElement'

export default function MissionStatement() {
  return (
    <section className="mission-statement">
      <div className="container">
        <div className="mission-content">
          <AnimatedElement animation="slide-fwd">
            <div className="logo-section">
              <div className="main-logo">
                <div className="logo-circle">
                  <div className="cloud-logo">
                    <div className="cloud-back"></div>
                    <div className="cloud-front"></div>
                    <div className="cloud-sparkles">
                      <div className="sparkle sparkle-1"></div>
                      <div className="sparkle sparkle-2"></div>
                      <div className="sparkle sparkle-3"></div>
                      <div className="sparkle sparkle-4"></div>
                      <div className="sparkle sparkle-5"></div>
                    </div>
                  </div>
                </div>
                <div className="logo-text">
                  <h3>ManageEx</h3>
                  <p>BUSINESS SOLUTIONS</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="text-focus" delay={0.3}>
            <div className="mission-text">
              <p>
                We work with a passion of taking challenges and creating new ones in business management sector.
              </p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .mission-statement {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .mission-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .main-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .logo-circle {
          width: 200px;
          height: 200px;
          border: 4px solid var(--golden-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 30px;
          animation: circle-pulse 3s ease-in-out infinite;
        }

        @keyframes circle-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(139, 124, 200, 0.4);
          }
          50% {
            box-shadow: 0 0 0 30px rgba(139, 124, 200, 0);
          }
        }

        .logo-circle::before {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border: 2px solid rgba(139, 124, 200, 0.3);
          border-radius: 50%;
          animation: circle-rotate 15s linear infinite;
        }

        @keyframes circle-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .cloud-logo {
          position: relative;
          width: 100px;
          height: 60px;
          cursor: pointer;
        }

        .cloud-back {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--golden-accent) 0%, #9d8bd1 100%);
          border-radius: 50px;
          right: 0;
          top: 0;
          animation: cloud-breathe 4s ease-in-out infinite;
          box-shadow: 
            0 0 30px rgba(139, 124, 200, 0.6),
            inset 0 3px 6px rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .cloud-back::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: cloud-shimmer 3s ease-in-out infinite;
        }

        .cloud-front {
          position: absolute;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--secondary-color) 0%, #e1b3e0 100%);
          border-radius: 50px;
          left: 0;
          top: 5px;
          animation: cloud-float 5s ease-in-out infinite;
          box-shadow: 
            0 0 25px rgba(194, 151, 193, 0.7),
            inset 0 2px 5px rgba(255, 255, 255, 0.4);
          position: relative;
          overflow: hidden;
        }

        .cloud-front::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            -45deg,
            transparent,
            rgba(255, 255, 255, 0.25),
            transparent
          );
          animation: cloud-shimmer 4s ease-in-out infinite reverse;
        }

        .cloud-sparkles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          animation: sparkle-twinkle 2s ease-in-out infinite;
        }

        .sparkle-1 {
          top: 5px;
          right: 15px;
          animation-delay: 0s;
        }

        .sparkle-2 {
          bottom: 8px;
          left: 10px;
          animation-delay: 0.4s;
        }

        .sparkle-3 {
          top: 25px;
          left: 35px;
          animation-delay: 0.8s;
        }

        .sparkle-4 {
          top: 15px;
          right: 5px;
          animation-delay: 1.2s;
        }

        .sparkle-5 {
          bottom: 20px;
          right: 25px;
          animation-delay: 1.6s;
        }

        @keyframes sparkle-twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .logo-text h3 {
          font-size: 28px;
          font-weight: 900;
          color: var(--golden-accent);
          margin-bottom: 5px;
          letter-spacing: 2px;
          animation: text-breathe 3s ease-in-out infinite;
          background: linear-gradient(135deg, var(--golden-accent) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-text p {
          font-size: 12px;
          color: var(--current-text-muted);
          letter-spacing: 3px;
          text-transform: uppercase;
          animation: text-breathe 3s ease-in-out infinite 0.5s;
        }

        .mission-text p {
          font-size: 18px;
          color: var(--current-text-primary);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .social-links {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-links a {
          width: 45px;
          height: 45px;
          background: var(--current-bg-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--current-text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: var(--primary-color);
          color: var(--accent-white);
          transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          .mission-content {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .logo-circle {
            width: 150px;
            height: 150px;
          }

          .cloud-logo {
            width: 80px;
            height: 48px;
          }

          .cloud-back {
            width: 48px;
            height: 48px;
          }

          .cloud-front {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  )
}