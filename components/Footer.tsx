'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">
              <div className="logo-image">
                <Image
                  src="/logo.png"
                  alt="ManageEx Logo"
                  width={60}
                  height={36}
                  className="logo-img"
                />
              </div>
            </div>
          </div>
          
          <div className="footer-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>info@manageex.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Business St, City, State 12345</span>
            </div>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="social-link"><i className="fab fa-tiktok"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ManageEx. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--current-bg-tertiary);
          padding: 60px 0 30px;
          border-top: 1px solid rgba(91, 67, 137, 0.2);
        }

        .footer-content {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 60px;
          align-items: center;
          margin-bottom: 40px;
        }

        .footer-logo .logo-icon {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-image {
          position: relative;
          width: 160px;
          height: 136px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo-image:hover {
          transform: scale(1.08);
          filter: drop-shadow(0 8px 20px rgba(91, 67, 137, 0.5));
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
          animation: logo-breathe 3s ease-in-out infinite;
        }

        @keyframes logo-breathe {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 3px 10px rgba(91, 67, 137, 0.4));
          }
          50% {
            transform: scale(1.03);
            filter: drop-shadow(0 5px 15px rgba(91, 67, 137, 0.6));
          }
        }

        .logo-text {
          font-size: 20px;
          font-weight: 800;
          color: var(--primary-color);
          letter-spacing: -1px;
          animation: text-breathe 3s ease-in-out infinite;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-info {
          display: flex;
          gap: 40px;
          justify-content: center;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--current-text-secondary);
          font-size: 14px;
        }

        .info-item i {
          color: var(--primary-color);
          font-size: 16px;
        }

        .footer-social {
          display: flex;
          gap: 15px;
        }

        .social-link {
          color: var(--current-text-primary);
          font-size: 16px;
          transition: all 0.3s ease;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(91, 67, 137, 0.1);
          text-decoration: none;
        }

        .social-link:hover {
          color: var(--accent-white);
          background: var(--primary-color);
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(91, 67, 137, 0.2);
          color: var(--current-text-muted);
          font-size: 14px;
        }

        .footer-links {
          display: flex;
          gap: 30px;
        }

        .footer-links a {
          color: var(--current-text-muted);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
            justify-content: center;
            align-items: center;
          }
          
          .footer-info {
            flex-direction: column;
            gap: 20px;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
            align-items: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            align-items: center;
            justify-content: center;
          }

          .logo-image {
            width: 150px;
            height: 130px;
            margin: 0 auto;
          }

          .logo-text {
            font-size: 18px;
          }
        }
      `}</style>
    </footer>
  )
}