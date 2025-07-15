"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";
import { useTranslation } from "next-i18next";

export default function ServicesGrid() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const { t } = useTranslation("common");

  const services = [
    {
      slug: "design",
      title: t("services.designServices.title"),
      description: t("services.designServices.description"),
      image: "/gd.jpg",
    },
    {
      slug: "accounting",
      title: t("services.accountingSolutions.title"),
      description: t("services.accountingSolutions.description"),
      image: "/b.jpg",
    },
    {
      slug: "marketing",
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
      image: "/md.jpg",
    },
    {
      slug: "business",
      title: t("services.businessServices.title"),
      description: t("services.businessServices.description"),
      image: "/marketing.jpg",
    },
  ];

  const handleCardClick = (index: number) => {
    if (window.innerWidth <= 768) {
      setFlippedCards((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <section className="services-grid">
      <div className="container">
        <AnimatedElement animation="roll-in-top">
          <div className="section-header">
            <span className="section-tag">{t("services.tag")}</span>
            <h2 className="section-title">{t("services.title")}</h2>
            <p className="section-subtitle">{t("services.subtitle")}</p>
          </div>
        </AnimatedElement>

        <div className="services-container">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animation={index % 2 === 0 ? "roll-in-left" : "roll-in-right"}
              delay={index * 0.1}
            >
              <Link href={`/services/${service.slug}`} className="service-link">
                <div
                  className={`service-card rotating-card ${
                    flippedCards.includes(index) ? "mobile-flipped" : ""
                  }`}
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
                        <div className="learn-more">
                          <span>{t('common.learnMore')}</span>
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }
        .section-tag {
        
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

        .service-link {
          text-decoration: none;
          display: block;
          height: 100%;
        }

        .rotating-card {
          perspective: 1000px;
          height: 300px;
          cursor: pointer;
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

        .card-front,
        .card-back {
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
          background: linear-gradient(
            135deg,
            var(--primary-color) 0%,
            var(--secondary-color) 100%
          );
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
          margin-bottom: 20px;
        }

        .learn-more {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          opacity: 0.9;
          transition: all 0.3s ease;
        }

        .learn-more i {
          transition: transform 0.3s ease;
        }

        .service-card:hover .learn-more i {
          transform: translateX(5px);
        }

        [dir="rtl"] .learn-more {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .learn-more i {
          transform: rotate(180deg);
        }

        [dir="rtl"] .service-card:hover .learn-more i {
          transform: rotate(180deg) translateX(5px);
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
  );
}
