'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimatedElement from './AnimatedElement'

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive, modern websites that drive results and engage your audience effectively.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Graphic Design',
    description: 'Stunning visual designs that capture your brand essence and communicate your message powerfully.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Brand Identity',
    description: 'Complete brand identity solutions that make your business memorable and distinctive in the market.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social media management that builds communities and drives engagement across all platforms.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing services that tell your story and captivate your audience with compelling visuals.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Planning & Strategy',
    description: 'Comprehensive marketing strategies that align with your business goals and drive measurable results.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Search Engine Optimization',
    description: 'Advanced SEO strategies that improve your search rankings and drive organic traffic to your website.',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Influencer Marketing',
    description: 'Strategic influencer partnerships that amplify your brand reach and connect with your target audience authentically.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

export default function ServicesGrid() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const handleCardClick = (index: number) => {
    if (window.innerWidth <= 768) {
      setFlippedCards(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    }
  }

  return (
    <section className="services-grid">
      <div className="container">
        <AnimatedElement animation="roll-in-top">
          <div className="section-header">
            <span className="section-tag">OUR SERVICES</span>
            <h2 className="section-title">We Shape the Perfect Solution.</h2>
            <p className="section-subtitle">You Name IT We Make IT.</p>
          </div>
        </AnimatedElement>
        
        <div className="services-container">
          {services.map((service, index) => (
            <AnimatedElement 
              key={service.title}
              animation={index % 2 === 0 ? 'roll-in-left' : 'roll-in-right'}
              delay={index * 0.1}
            >
              <div 
                className={`service-card rotating-card ${flippedCards.includes(index) ? 'mobile-flipped' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="service-image">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={200}
                      />
                    </div>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-back-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .rotating-card {
          perspective: 1000px;
          height: 300px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .rotating-card:hover .card-inner {
          transform: rotateY(180deg);
        }

        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 15px;
          overflow: hidden;
        }

        .card-front {
          background: var(--current-bg-secondary);
        }

        .card-back {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: var(--accent-white);
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .card-back-content {
          text-align: center;
        }

        .card-back-content h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .card-back-content p {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .service-image {
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          filter: grayscale(100%);
        }

        .rotating-card:hover .service-image img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .service-content {
          padding: 25px;
        }

        .service-content h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--current-text-primary);
        }

        @media (max-width: 768px) {
          .rotating-card .card-inner {
            transform: none;
          }
          
          .rotating-card.mobile-flipped .card-inner {
            transform: rotateY(180deg);
          }

          .services-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}