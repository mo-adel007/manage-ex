"use client";

import Image from "next/image";
import AnimatedElement from "./AnimatedElement";
import { useTranslation } from "next-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation("common");

  const features = [
    {
      icon: "fas fa-rocket",
      title: t("whyChooseUs.latestTechnology.title"),
      description: t("whyChooseUs.latestTechnology.description"),
    },
    {
      icon: "fas fa-users",
      title: t("whyChooseUs.certifiedExperts.title"),
      description: t("whyChooseUs.certifiedExperts.description"),
    },
    {
      icon: "fas fa-dollar-sign",
      title: t("whyChooseUs.reasonablePrice.title"),
      description: t("whyChooseUs.reasonablePrice.description"),
    },
    {
      icon: "fas fa-clock",
      title: t("whyChooseUs.support.title"),
      description: t("whyChooseUs.support.description"),
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <AnimatedElement animation="roll-in-left">
              <span className="section-tag">{t("whyChooseUs.tag")}</span>
            </AnimatedElement>
            <AnimatedElement animation="swing-in" delay={0.2}>
              <h2 className="section-title">{t("whyChooseUs.title")}</h2>
            </AnimatedElement>

            <div className="features-list">
              {features.map((feature, index) => (
                <AnimatedElement
                  key={feature.title}
                  animation="flip-in"
                  delay={0.4 + index * 0.1}
                >
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>

          <AnimatedElement animation="slide-fwd" delay={0.3}>
            <div className="logo-showcase">
              <div className="main-logo">
                <div className="logo-circle">
                  <div className="logo-image">
                    <Image
                      src="/logo.svg"
                      alt="ManageEx Logo"
                      width={120}
                      height={72}
                      className="logo-img"
                    />
                  </div>
                </div>
                <div className="logo-text">
                  <h3>ManageEx</h3>
                  <p>BUSINESS SOLUTIONS</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <style jsx>{`
        .why-choose-us {
          padding: 100px 0;
          background: var(--current-bg-secondary);
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .features-list {
          margin-top: 40px;
        }
        
        [dir="rtl"] .feature-item {
          flex-direction: row-reverse;
          text-align: right;
          transition: all 0.3s ease;
        }

      [dir="ltr"] .feature-item {
          flex-direction: row;
          text-align: left;
          transition: all 0.3s ease;

        }
        .feature-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(91, 67, 137, 0.1);
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 18px;
          flex-shrink: 0;
        }

        .feature-content h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--current-text-primary);
        }

        .feature-content p {
          color: var(--current-text-secondary);
          line-height: 1.6;
          font-size: 14px;
        }

        .logo-showcase {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .main-logo {
          text-align: center;
          padding: 60px;
          background: var(--current-bg-primary);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .logo-circle {
          width: 160px;
          height: 160px;
          border: 4px solid var(--golden-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          position: relative;
          animation: circle-pulse 3s ease-in-out infinite;
          padding: 15px;
        }

        @keyframes circle-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(139, 124, 200, 0.4);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(139, 124, 200, 0);
          }
        }

        .logo-circle::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid rgba(139, 124, 200, 0.3);
          border-radius: 50%;
          animation: circle-rotate 10s linear infinite;
        }

        @keyframes circle-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .logo-image {
          position: relative;
          width: 200px;
          height: 172px;
          cursor: pointer;
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
          animation: logo-breathe 4s ease-in-out infinite;
        }

        @keyframes logo-breathe {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 5px 15px rgba(91, 67, 137, 0.4));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 8px 25px rgba(91, 67, 137, 0.6));
          }
        }

        .logo-text h3 {
          font-size: 28px;
          font-weight: 900;
          color: var(--golden-accent);
          margin-bottom: 5px;
          letter-spacing: 2px;
          animation: text-breathe 3s ease-in-out infinite;
          background: linear-gradient(135deg, var(--golden-accent) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-text p {
          font-size: 12px;
          color: var(--current-text-muted);
          letter-spacing: 3px;
          text-transform: uppercase;
          animation: text-breathe 3s ease-in-out infinite 0.5s;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }

        @media (max-width: 768px) {
          .feature-item {
            flex-direction: column;
            text-align: center;
          }
          
          .main-logo {
            padding: 30px;
          }

          .logo-circle {
            width: 170px;
            height: 170px;
          }

          .logo-image {
            width: 150px;
            height: 120px;
          }

          .logo-text h3 {
            font-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .main-logo {
            padding: 18px;
          }
          .logo-circle {
            width: 160px;
            height: 160px;
          }
          .logo-image {
            width: 200px;
            height: 180px;
          }
          .logo-text h3 {
            font-size: 24px;
          }
            .feature-icon {
            margin: auto
        }
      `}</style>
    </section>
  );
}
