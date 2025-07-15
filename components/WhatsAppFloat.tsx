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
      <div className="whatsapp-float" onClick={handleClick}>
        <i className="fab fa-whatsapp"></i>
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
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }

        @media (max-width: 480px) {
          .whatsapp-float {
            bottom: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
      `}</style>
    </AnimatedElement>
  )
}