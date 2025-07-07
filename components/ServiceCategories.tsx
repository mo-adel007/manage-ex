'use client'

import Image from 'next/image'
import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

const serviceCategories = [
  {
    title: 'services.categories.webDevelopment',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    title: 'services.categories.graphicDesigning',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    title: 'services.categories.mediaBuying',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    title: 'services.categories.socialMediaManagement',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500'
  },

  {
    title: 'services.categories.seo',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=500'
  },

 
 
  {
    title: 'services.categories.videographyEditing',
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=500'
  },

]

export default function ServiceCategories() {
  const { t } = useTranslation('common')

  return (
    <section className="service-categories">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <h2 className="section-title">{t('services.youNameItTitle')}</h2>
          </div>
        </AnimatedElement>

        <div className="categories-grid">
          {serviceCategories.map((category, index) => (
            <AnimatedElement 
              key={category.title}
              animation={index % 3 === 0 ? 'roll-in-left' : index % 3 === 1 ? 'roll-in-top' : 'roll-in-right'}
              delay={index * 0.1}
            >
              <div className="category-card">
                <div className="category-image">
                  <Image
                    src={category.image}
                    alt={t(category.title)}
                    width={400}
                    height={250}
                  />
                </div>
                <div className="category-overlay">
                  <h3>{t(category.title)}</h3>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-categories {
          padding: 100px 0;
          background: var(--current-bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .category-card {
          position: relative;
          height: 250px;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-10px);
        }

        .category-image {
          width: 100%;
          height: 100%;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-image img {
          transform: scale(1.1);
        }

        .category-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 40px 20px 20px;
          color: var(--accent-white);
        }

        .category-overlay h3 {
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}