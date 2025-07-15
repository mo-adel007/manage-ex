"use client";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <div className="logo-icon">
              <div className="logo-image">
                <Image
                  src="/logoo.svg"
                  alt="ManageEx Logo"
                  width={80}
                  height={48}
                  className="logo-img"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-section">
            <h3 className="contact-title">{t("footer.contactUs")}</h3>

            <div className="contact-grid">
              {/* Saudi Arabia Office */}
              <div className="contact-card saudi-office">
                <div className="office-header">
                  <div className="flag-icon">🇸🇦</div>
                  <h4>{t("footer.saudiArabia")}</h4>
                </div>

                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone contact-icon"></i>
                    <div className="contact-info">
                      <span className="contact-label">{t("footer.call")}</span>
                      <a href="tel:+966530942000" className="contact-value">
                        +966 53 094 2000
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fab fa-whatsapp contact-icon whatsapp"></i>
                    <div className="contact-info">
                      <span className="contact-label">
                        {t("footer.whatsapp")}
                      </span>
                      <div className="whatsapp-numbers">
                        <a
                          href="https://wa.me/966532402275"
                          className="contact-value"
                        >
                          +966 53 240 2275
                        </a>
                        <a
                          href="https://wa.me/966505154013"
                          className="contact-value"
                        >
                          +966 50 515 4013
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fas fa-envelope contact-icon"></i>
                    <div className="contact-info">
                      <span className="contact-label">Email</span>
                      <a
                        href="mailto:Hi@ManageEx.com"
                        className="contact-value"
                      >
                        Hi@ManageEx.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt contact-icon"></i>
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d46.761707760745026!3d24.586786583006752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzEyLjQiTiA0NsKwNDUnNDIuMSJF!5e0!3m2!1sen!2ssa!4v1234567890123"
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: "12px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ManageEx Saudi Arabia Location"
                      ></iframe>
                      <div className="map-overlay">
                        <a
                          href={`https://www.google.com/maps?q=24.586786583006752,46.761707760745026`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="map-link"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Open in Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Egypt Office */}
              <div className="contact-card egypt-office">
                <div className="office-header">
                  <div className="flag-icon">🇪🇬</div>
                  <h4>{t("footer.egypt")}</h4>
                </div>

                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone contact-icon"></i>
                    <div className="contact-info">
                      <span className="contact-label">{t("footer.call")}</span>
                      <a href="tel:+201150038400" className="contact-value">
                        (+02) 1150038400
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt contact-icon"></i>
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d46.761707760745026!3d24.586786583006752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzEyLjQiTiA0NsKwNDUnNDIuMSJF!5e0!3m2!1sen!2ssa!4v1234567890123"
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: "12px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ManageEx Saudi Arabia Location"
                      ></iframe>
                      <div className="map-overlay">
                        <a
                          href={`https://www.google.com/maps?q=30.018548948712592,31.42971189642575`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="map-link"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Open in Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-section">
            <h4 className="social-title">Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-link" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
          <div className="footer-links">
            <a href="#">{t("footer.privacyPolicy")}</a>
            <a href="#">{t("footer.termsOfService")}</a>
          </div>
          <div className="legal-info">
            <div className="legal-item">
              <span className="legal-label">{t("footer.commercialReg")}:</span>
              <span className="legal-value">1009077936</span>
            </div>
            <div className="legal-item">
              <span className="legal-label">{t("footer.taxNumber")}:</span>
              <span className="legal-value">311888007800003</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: rgba(133, 123, 149, 0.2);
          padding: 80px 0 30px;
          border-top: 1px solid rgba(91, 67, 137, 0.2);
        }

        .footer-content {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 60px;
          align-items: start;
          margin-bottom: 50px;
        }

        /* Logo Section */
        .footer-logo .logo-icon {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-image {
          position: relative;
          width: 120px;
          height: 102px;
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
          animation: logo-breathe 3s ease-in-out infinite;
        }

        @keyframes logo-breathe {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 3px 10px rgba(91, 67, 137, 0.4));
          }
          50% {
            transform: scale(1.03);
            filter: drop-shadow(0 5px 15px rgba(91, 67, 137, 0.6));
          }
        }

        /* Contact Section */
        .contact-section {
          flex: 1;
       
        }

        .contact-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(
            135deg,
            var(--primary-color) 0%,
            var(--secondary-color) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-grid {
           display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 30px;
        }

        .contact-card {
          background: var(--current-bg-primary);
          border-radius: 16px;
          padding: 25px;
          border: 2px solid rgba(91, 67, 137, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          flex: 1;
          max-width: 350px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .contact-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            135deg,
            var(--primary-color) 0%,
            var(--secondary-color) 100%
          );
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          box-shadow: 0 15px 35px rgba(91, 67, 137, 0.15);
        }

        .office-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(91, 67, 137, 0.1);
        }

        .flag-icon {
          font-size: 24px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(91, 67, 137, 0.1);
          border-radius: 8px;
        }

        .office-header h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin: 0;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex: 1;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 0;
        }

        .contact-icon {
          width: 18px;
          height: 18px;
          color: var(--primary-color);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .contact-icon.whatsapp {
          color: #25d366;
          font-size: 18px;
        }

        .contact-info {
          flex: 1;
        }

        .contact-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: var(--current-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        .contact-value {
          color: var(--current-text-primary);
          font-weight: 500;
          text-decoration: none;
          font-size: 14px;
          line-height: 1.4;
          display: block;
          transition: color 0.3s ease;
        }

        .contact-value:hover {
          color: var(--primary-color);
        }

        .whatsapp-numbers {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .whatsapp-numbers .contact-value {
          font-size: 13px;
          padding: 2px 0;
        }

        .legal-info {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(91, 67, 137, 0.1);
        }

        .legal-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .legal-label {
          font-size: 11px;
          color: var(--current-text-muted);
          font-weight: 600;
        }

        .legal-value {
          font-size: 12px;
          color: var(--current-text-primary);
          font-weight: 500;
        }

        /* Map Section */
        .map-section {
          background: var(--current-bg-primary);
          border-radius: 16px;
          padding: 25px;
          border: 2px solid rgba(91, 67, 137, 0.1);
          position: relative;
          overflow: hidden;
        }

        .map-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            135deg,
            var(--golden-accent) 0%,
            var(--primary-color) 100%
          );
        }

        .map-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 15px;
          text-align: center;
        }

        .map-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .map-overlay {
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .map-link {
          background: rgba(91, 67, 137, 0.9);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .map-link:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
        }

        /* Social Section */
        .footer-social-section {
          text-align: center;
        }

        .social-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .social-link {
          color: #fff;
          font-size: 16px;
          transition: all 0.3s ease;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--primary-color);
          text-decoration: none;
        }

        .social-link i {
          color: #fff !important;
        }

        .social-link:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
        }

        /* Footer Bottom */
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

        /* Responsive Design */
        @media (max-width: 1200px) {
          .contact-grid {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .contact-card {
            max-width: 500px;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .contact-grid {
            flex-direction: column;
            gap: 20px;
          }

          .contact-card {
            min-height: auto;
            max-width: none;
          }

          .footer-social {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .logo-image {
            width: 100px;
            height: 85px;
            margin: 0 auto;
          }

          .contact-title {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 60px 0 20px;
          }

          .contact-card {
            padding: 20px;
          }

          .contact-item {
            align-items: center;
            gap: 12px;
            padding: 10px 0;
          }

          .contact-icon {
            width: 16px;
            height: 16px;
            font-size: 14px;
          }

          .contact-icon.whatsapp {
            font-size: 16px;
          }

          .legal-item {
            flex-direction: column;
            gap: 4px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
