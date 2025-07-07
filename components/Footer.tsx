'use client'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <div className="logo-image">
              <Image
                src="/logo.png"
                alt="ManageEx Logo"
                width={120}
                height={72}
                className="logo-img"
              />
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="footer-contact">
            <h3 className="contact-title">{t('footer.contactUs')}</h3>
            
            <div className="contact-grid">
              {/* Saudi Arabia */}
              <div className="contact-column">
                <h4 className="column-title">{t('footer.saudiArabia')}</h4>
                <div className="contact-list">
                  <div className="contact-row">
                    <i className="fas fa-phone"></i>
                    <span>+966 53 094 2000</span>
                  </div>
                  <div className="contact-row">
                    <i className="fab fa-whatsapp"></i>
                    <span>+966 53 240 2275</span>
                  </div>
                  <div className="contact-row">
                    <i className="fab fa-whatsapp"></i>
                    <span>+966 50 515 4013</span>
                  </div>
                  <div className="contact-row">
                    <i className="fas fa-envelope"></i>
                    <span>Hi@ManageEx.com</span>
                  </div>
                  <div className="contact-row">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{t('contact.info.saudi.address')}</span>
                  </div>
                  <div className="contact-row">
                    <i className="fas fa-file-alt"></i>
                    <span>{t('footer.commercialReg')}: 1009077936</span>
                  </div>
                  <div className="contact-row">
                    <i className="fas fa-receipt"></i>
                    <span>{t('footer.taxNumber')}: 311888007800003</span>
                  </div>
                </div>
              </div>

              {/* Egypt */}
              <div className="contact-column">
                <h4 className="column-title">{t('footer.egypt')}</h4>
                <div className="contact-list">
                  <div className="contact-row">
                    <i className="fas fa-phone"></i>
                    <span>(+02)1150038400</span>
                  </div>
                  <div className="contact-row">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{t('contact.info.egypt.address')}</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="contact-column map-column">
                <h4 className="column-title">{t('footer.location')}</h4>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d46.761707760745026!3d24.586786583006752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzEyLjQiTiA0NsKwNDUnNDIuMSJF!5e0!3m2!1sen!2ssa!4v1234567890123"
                    width="100%"
                    height="180"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ManageEx Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="footer-social">
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="social-link"><i className="fab fa-tiktok"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
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
          padding: 50px 0 30px;
          border-top: 1px solid rgba(91, 67, 137, 0.2);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 200px 1fr 80px;
          gap: 40px;
          align-items: start;
          margin-bottom: 40px;
        }

        /* Logo Section */
        .footer-logo {
          display: flex;
          justify-content: center;
        }

        .logo-image {
          position: relative;
          width: 140px;
          height: 120px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo-image:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 8px 20px rgba(91, 67, 137, 0.5));
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        /* Contact Section */
        .footer-contact {
          width: 100%;
        }

        .contact-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 25px;
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 30px;
        }

        .contact-column {
          background: var(--current-bg-primary);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }

        .map-column {
          min-height: 220px;
        }

        .column-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--golden-accent);
          margin-bottom: 15px;
          text-align: center;
          padding-bottom: 8px;
          border-bottom: 2px solid rgba(139, 124, 200, 0.2);
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 0;
          font-size: 13px;
        }

        .contact-row i {
          color: var(--primary-color);
          font-size: 14px;
          width: 16px;
          text-align: center;
          flex-shrink: 0;
        }

        .contact-row span {
          color: var(--current-text-secondary);
          font-weight: 500;
          line-height: 1.4;
        }

        .map-container {
          margin-top: 10px;
          border-radius: 8px;
          overflow: hidden;
        }

        /* Social Links */
        .footer-social {
          display: flex;
          justify-content: center;
          align-items: start;
          padding-top: 10px;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .social-link {
          color: var(--current-text-primary);
          font-size: 16px;
          transition: all 0.3s ease;
          width: 40px;
          height: 40px;
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

        /* Footer Bottom */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 25px;
          border-top: 1px solid rgba(91, 67, 137, 0.2);
          color: var(--current-text-muted);
          font-size: 14px;
        }

        .footer-links {
          display: flex;
          gap: 25px;
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
        [dir="rtl"] .contact-row {
          flex-direction: row-reverse;
          text-align: right;
        }

        [dir="rtl"] .contact-row span {
          text-align: right;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .footer-content {
            grid-template-columns: 180px 1fr 70px;
            gap: 30px;
          }

          .contact-grid {
            gap: 20px;
          }

          .contact-column {
            padding: 18px;
          }
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .contact-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .map-column {
            grid-column: 1 / -1;
          }

          .social-links {
            flex-direction: row;
            justify-content: center;
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 25px;
          }

          .footer-content {
            gap: 25px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .contact-column {
            padding: 15px;
          }

          .contact-title {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .column-title {
            font-size: 15px;
          }

          .contact-row {
            font-size: 12px;
            gap: 8px;
          }

          .logo-image {
            width: 120px;
            height: 100px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .footer-links {
            gap: 20px;
          }

          .map-container iframe {
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .contact-row {
            flex-direction: column;
            text-align: center;
            gap: 5px;
          }

          .contact-row i {
            margin: 0;
          }

          .contact-row span {
            text-align: center;
          }

          [dir="rtl"] .contact-row {
            flex-direction: column;
            text-align: center;
          }

          [dir="rtl"] .contact-row span {
            text-align: center;
          }

          .social-links {
            gap: 12px;
          }

          .social-link {
            width: 35px;
            height: 35px;
            font-size: 14px;
          }
        }
      `}</style>
    </footer>
  )
}