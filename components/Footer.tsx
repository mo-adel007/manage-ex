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
            <div className="logo-wrapper">
              <div className="logo-image">
                <Image
                  src="/logo.png"
                  alt="ManageEx Logo"
                  width={140}
                  height={84}
                  className="logo-img"
                />
              </div>
              <div className="logo-text">
                <h3>ManageEx</h3>
                <p>Business Excellence</p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="footer-contact">
            <div className="contact-header">
              <div className="header-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className="contact-title">{t('footer.contactUs')}</h3>
            </div>
            
            <div className="contact-grid">
              {/* Saudi Arabia Card */}
              <div className="contact-card saudi-card">
                <div className="card-header">
                  <div className="country-flag">🇸🇦</div>
                  <h4 className="card-title">{t('footer.saudiArabia')}</h4>
                </div>
                <div className="card-content">
                  <div className="contact-group">
                    <div className="contact-item">
                      <div className="contact-icon phone-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{t('footer.call')}</span>
                        <span className="contact-value">+966 53 094 2000</span>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon whatsapp-icon">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{t('footer.whatsapp')}</span>
                        <span className="contact-value">+966 53 240 2275</span>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon whatsapp-icon">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{t('footer.whatsapp')}</span>
                        <span className="contact-value">+966 50 515 4013</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-group">
                    <div className="contact-item">
                      <div className="contact-icon email-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">Email</span>
                        <span className="contact-value">Hi@ManageEx.com</span>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon location-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{t('footer.location')}</span>
                        <span className="contact-value">{t('contact.info.saudi.address')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="legal-info">
                    <div className="legal-item">
                      <i className="fas fa-file-contract"></i>
                      <span>{t('footer.commercialReg')}: 1009077936</span>
                    </div>
                    <div className="legal-item">
                      <i className="fas fa-receipt"></i>
                      <span>{t('footer.taxNumber')}: 311888007800003</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Egypt Card */}
              <div className="contact-card egypt-card">
                <div className="card-header">
                  <div className="country-flag">🇪🇬</div>
                  <h4 className="card-title">{t('footer.egypt')}</h4>
                </div>
                <div className="card-content">
                  <div className="contact-group">
                    <div className="contact-item">
                      <div className="contact-icon phone-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{t('footer.call')}</span>
                        <span className="contact-value">(+02)1150038400</span>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon location-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{t('footer.location')}</span>
                        <span className="contact-value">{t('contact.info.egypt.address')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="contact-card map-card">
                <div className="card-header">
                  <div className="map-icon">
                    <i className="fas fa-map"></i>
                  </div>
                  <h4 className="card-title">{t('footer.location')}</h4>
                </div>
                <div className="card-content">
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d46.761707760745026!3d24.586786583006752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzEyLjQiTiA0NsKwNDUnNDIuMSJF!5e0!3m2!1sen!2ssa!4v1234567890123"
                      width="100%"
                      height="200"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ManageEx Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="footer-social">
            <div className="social-header">
              <div className="social-icon-wrapper">
                <i className="fas fa-share-alt"></i>
              </div>
              <h4>Follow Us</h4>
            </div>
            <div className="social-links">
              <a href="#" className="social-link facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link instagram">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="#" className="social-link whatsapp">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="#" className="social-link tiktok">
                <i className="fab fa-tiktok"></i>
                <span>TikTok</span>
              </a>
              <a href="#" className="social-link linkedin">
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">{t('footer.copyright')}</p>
            <div className="footer-links">
              <a href="#" className="footer-link">{t('footer.privacyPolicy')}</a>
              <span className="separator">•</span>
              <a href="#" className="footer-link">{t('footer.termsOfService')}</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, var(--current-bg-tertiary) 0%, rgba(26, 26, 26, 0.95) 100%);
          padding: 60px 0 30px;
          border-top: 3px solid var(--primary-color);
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(91, 67, 137, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 124, 200, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 280px 1fr 200px;
          gap: 50px;
          align-items: start;
          margin-bottom: 50px;
        }

        /* Logo Section */
        .footer-logo {
          display: flex;
          justify-content: center;
        }

        .logo-wrapper {
          text-align: center;
          padding: 30px;
          background: var(--current-bg-primary);
          border-radius: 20px;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(91, 67, 137, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .logo-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(91, 67, 137, 0.2);
          border-color: rgba(91, 67, 137, 0.3);
        }

        .logo-image {
          position: relative;
          width: 120px;
          height: 72px;
          margin: 0 auto 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo-image:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 8px 20px rgba(91, 67, 137, 0.4));
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .logo-text h3 {
          font-size: 24px;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 5px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-text p {
          font-size: 12px;
          color: var(--current-text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }

        /* Contact Section */
        .footer-contact {
          width: 100%;
        }

        .contact-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          justify-content: center;
        }

        .header-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 20px;
          box-shadow: 0 8px 25px rgba(91, 67, 137, 0.3);
        }

        .contact-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 25px;
        }

        .contact-card {
          background: var(--current-bg-primary);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(91, 67, 137, 0.05);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(91, 67, 137, 0.1);
          border-color: rgba(91, 67, 137, 0.2);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid rgba(91, 67, 137, 0.1);
        }

        .country-flag {
          font-size: 24px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(91, 67, 137, 0.1);
          border-radius: 10px;
        }

        .map-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--golden-accent) 0%, var(--primary-color) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 18px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-group {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: rgba(91, 67, 137, 0.03);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(91, 67, 137, 0.08);
          transform: translateX(5px);
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 14px;
          flex-shrink: 0;
        }

        .phone-icon {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .whatsapp-icon {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        }

        .email-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }

        .location-icon {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .contact-label {
          font-size: 11px;
          color: var(--current-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-value {
          font-size: 13px;
          color: var(--current-text-primary);
          font-weight: 600;
          line-height: 1.4;
        }

        .legal-info {
          padding-top: 15px;
          border-top: 1px solid rgba(91, 67, 137, 0.1);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .legal-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--current-text-muted);
        }

        .legal-item i {
          color: var(--golden-accent);
          font-size: 12px;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* Social Links */
        .footer-social {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .social-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
        }

        .social-icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 20px;
          box-shadow: 0 8px 25px rgba(194, 151, 193, 0.3);
        }

        .social-header h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--current-bg-primary);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }

        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-color: rgba(91, 67, 137, 0.2);
        }

        .social-link i {
          font-size: 16px;
          width: 20px;
          text-align: center;
        }

        .social-link span {
          font-size: 13px;
          font-weight: 600;
          color: var(--current-text-primary);
        }

        .social-link.facebook i { color: #1877f2; }
        .social-link.instagram i { color: #e4405f; }
        .social-link.whatsapp i { color: #25d366; }
        .social-link.tiktok i { color: #000000; }
        .social-link.linkedin i { color: #0077b5; }

        [data-theme="dark"] .social-link.tiktok i { color: #ffffff; }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 2px solid rgba(91, 67, 137, 0.1);
          padding-top: 30px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-size: 14px;
          color: var(--current-text-muted);
          margin: 0;
          font-weight: 500;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-link {
          color: var(--current-text-muted);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--primary-color);
        }

        .separator {
          color: var(--current-text-muted);
          font-weight: 300;
        }

        /* RTL Support */
        [dir="rtl"] .contact-item {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .contact-item:hover {
          transform: translateX(-5px);
        }

        [dir="rtl"] .card-header {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .social-link {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .footer-bottom-content {
          flex-direction: row-reverse;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .footer-content {
            grid-template-columns: 250px 1fr 180px;
            gap: 40px;
          }

          .contact-grid {
            gap: 20px;
          }
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .contact-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .map-card {
            grid-column: 1 / -1;
          }

          .social-links {
            max-width: 200px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 25px;
          }

          .footer-content {
            gap: 30px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-card {
            padding: 20px;
          }

          .contact-title {
            font-size: 24px;
          }

          .card-title {
            font-size: 16px;
          }

          .contact-value {
            font-size: 12px;
          }

          .logo-wrapper {
            padding: 25px;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .map-container iframe {
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .contact-item:hover {
            transform: none;
          }

          [dir="rtl"] .contact-item {
            flex-direction: column;
          }

          [dir="rtl"] .contact-item:hover {
            transform: none;
          }

          .contact-details {
            align-items: center;
          }

          .social-links {
            gap: 10px;
          }

          .social-link {
            padding: 10px 14px;
          }

          .contact-header {
            flex-direction: column;
            gap: 10px;
          }

          .header-icon {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }

          .contact-title {
            font-size: 20px;
          }
        }
      `}</style>
    </footer>
  )
}