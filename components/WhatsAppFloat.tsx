'use client'

// Direct implementation without AnimatedElement wrapper for better visibility
export default function WhatsAppFloat() {
  const handleClick = () => {
    const phoneNumber = '966532402275' // +966 53 240 2275
    const message = 'Hello! I\'m interested in your business management services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
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

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 65px;
          height: 65px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: white;
          cursor: pointer;
          z-index: 999999;
          box-shadow: 0 6px 16px 2px rgba(37, 211, 102, 0.8);
          transition: all 0.3s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          border: 3px solid rgba(255, 255, 255, 0.6);
          animation: whatsapp-pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.7);
        }

        .whatsapp-float:active {
          transform: scale(0.95);
        }

        .whatsapp-float i {
          color: white;
          font-size: 28px;
        }

        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 6px 16px 2px rgba(37, 211, 102, 0.7);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 8px 24px 4px rgba(37, 211, 102, 0.9);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 6px 16px 2px rgba(37, 211, 102, 0.7);
            transform: scale(1);
          }
        }

        /* Tablet adjustments */
        @media (max-width: 768px) and (min-width: 481px) {
          .whatsapp-float {
            bottom: 25px;
            right: 25px;
            width: 55px;
            height: 55px;
            font-size: 24px;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 52px;
            height: 52px;
            font-size: 22px;
            box-shadow: 0 3px 15px rgba(37, 211, 102, 0.5);
          }
          
          .whatsapp-float:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.7);
          }
        }

        /* Very small mobile screens */
        @media (max-width: 360px) {
          .whatsapp-float {
            bottom: 15px;
            right: 15px;
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}