'use client'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function Footer() {
  const { t } = useTranslation('common')

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
          
          <div className="footer-contact">
            <h3 className="contact-title">{t('footer.contactUs')}</h3>
            
            <div className="contact-sections">
              {/* Saudi Arabia Section */}
              <div className="contact-section saudi-section">
                <h4 className="section-title">{t('footer.saudiArabia')}</h4>
                <div className="contact-items">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div className="contact-details">
                      <span className="contact-label">{t('footer.call')}</span>
                      <span className="contact-value">+966 53 094 2000</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-whatsapp"></i>
                    <div className="contact-details">
                      <span className="contact-label">{t('footer.whatsapp')}</span>
                      <span className="contact-value">+966 53 240 2275</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-whatsapp"></i>
                    <div className="contact-details">
                      <span className="contact-label">{t('footer.whatsapp')}</span>
                      <span className="contact-value">+966 50 515 4013</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="contact-details">
                      <span className="contact-value">{t('contact.info.saudi.address')}</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div className="contact-details">
                      <span className="contact-value">Hi@ManageEx.com</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-file-alt"></i>
                    <div className="contact-details">
                      <span className="contact-label">{t('footer.commercialReg')}</span>
                      <span className="contact-value">1009077936</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-receipt"></i>
                    <div className="contact-details">
                      <span className="contact-label">{t('footer.taxNumber')}</span>
                      <span className="contact-value">311888007800003</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Egypt Section */}
              <div className="contact-section egypt-section">
                <h4 className="section-title">{t('footer.egypt')}</h4>
                <div className="contact-items">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div className="contact-details">
                      <span className="contact-value">(+02)1150038400</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="contact-details">
                      <span className="contact-value">{t('contact.info.egypt.address')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
              <h4 className="section-title">{t('footer.location')}</h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d46.761707760745026!3d24.586786583006752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzEyLjQiTiA0NsKwNDUnNDIuMSJF!5e0!3m2!1sen!2ssa!4v1234567890123"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ManageEx Location"
                ></iframe>
              </div>
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
          <p>{t('footer.copyright')}</p>
          <div className="footer-links">
            <a href="#">{t('footer.privacyPolicy')}</a>
            <a href="#">{t('footer.termsOfService')}</a>
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
          align-items: start;
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

        .footer-contact {
          max-width: 800px;
        }

        .contact-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 30px;
        }

        .contact-section {
          background: var(--current-bg-primary);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--golden-accent);
          margin-bottom: 20px;
          text-align: center;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(139, 124, 200, 0.2);
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
        }

        .contact-item i {
          color: var(--primary-color);
          font-size: 16px;
          width: 20px;
          text-align: center;
          flex-shrink: 0;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-label {
          font-size: 12px;
          color: var(--current-text-muted);
          font-weight: 500;
        }

        .contact-value {
          color: var(--current-text-secondary);
          font-size: 14px;
          font-weight: 500;
        }

        .map-section {
          background: var(--current-bg-primary);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .map-container {
          margin-top: 15px;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
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

        /* RTL Support */
        [dir="rtl"] .contact-sections {
          direction: rtl;
        }

        [dir="rtl"] .contact-item {
          flex-direction: row-reverse;
          text-align: right;
        }

        [dir="rtl"] .contact-item i {
          margin-left: 12px;
          margin-right: 0;
        }

        [dir="rtl"] .contact-details {
          text-align: right;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .contact-sections {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .footer-social {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            gap: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .logo-image {
            width: 150px;
            height: 130px;
            margin: 0 auto;
          }

          .contact-title {
            font-size: 20px;
          }

          .section-title {
            font-size: 16px;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .contact-item i {
            margin: 0;
          }

          .contact-details {
            text-align: center;
          }

          [dir="rtl"] .contact-item {
            flex-direction: column;
            text-align: center;
          }

          [dir="rtl"] .contact-details {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}