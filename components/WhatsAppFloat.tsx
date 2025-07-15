'use client'

import AnimatedElement from './AnimatedElement'

export default function WhatsAppFloat() {
  const handleClick = () => {
    const phoneNumber = '966505154013' // +966 50 515 4013
    const message = 'Hello! I\'m interested in your business management services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatedElement animation="bounce-in" delay={2}>
      <div 
        className="whatsapp-float" 
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
        {/* Fallback text if icon doesn't load */}
        <span className="whatsapp-fallback" style={{display: 'none'}}>WA</span>
      </div>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 60px;
          height: 60px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-float:active {
          transform: scale(0.95);
        }

        /* Tablet adjustments */
        @media (max-width: 768px) and (min-width: 481px) {
          .whatsapp-float {
            bottom: 25px;
            left: 25px;
            width: 55px;
            height: 55px;
            font-size: 22px;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .whatsapp-float {
            bottom: 20px;
            left: 20px;
            width: 52px;
            height: 52px;
            font-size: 20px;
            box-shadow: 0 3px 15px rgba(37, 211, 102, 0.5);
          }
          
          .whatsapp-float:hover {
            transform: none; /* Disable hover effects on mobile */
            box-shadow: 0 3px 15px rgba(37, 211, 102, 0.5);
          }
        }

        /* Very small mobile screens */
        @media (max-width: 360px) {
          .whatsapp-float {
            bottom: 15px;
            left: 15px;
            width: 48px;
            height: 48px;
            font-size: 18px;
          }
        }

        /* Landscape mobile adjustments */
        @media (max-height: 500px) and (max-width: 900px) {
          .whatsapp-float {
            bottom: 15px;
            left: 15px;
            width: 50px;
            height: 50px;
            font-size: 19px;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .whatsapp-float {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
          }
        }

        /* Fallback for when Font Awesome doesn't load */
        .whatsapp-float .fab.fa-whatsapp:before {
          content: "\f232";
        }
        
        .whatsapp-float .fab:before {
          font-family: "Font Awesome 6 Brands", "FontAwesome", sans-serif;
        }
        
        /* Show fallback text if icon doesn't work */
        .whatsapp-float:not(:has(.fab.fa-whatsapp:before)) .whatsapp-fallback {
          display: block !important;
          font-weight: bold;
          font-size: 14px;
        }
      `}</style>
    </AnimatedElement>
  )
}