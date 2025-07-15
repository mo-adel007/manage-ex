import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useState } from 'react'
import AnimatedElement from '@/components/AnimatedElement'

export default function BusinessServices() {
  const { t } = useTranslation('common')
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    needs: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create email body
    const emailBody = `Name: ${formData.name}\nContact: ${formData.contact}\nEmail: ${formData.email}\nNeeds: ${formData.needs}`
    const mailtoLink = `mailto:Hi@ManageEx.com?subject=Business Services Inquiry - ${formData.name}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  return (
    <>
      <Head>
        <title>{t('meta.business.title')}</title>
        <meta name="description" content={t('meta.business.description')} />
        <meta property="og:title" content={t('meta.business.title')} />
        <meta property="og:description" content={t('meta.business.description')} />
        <meta name="twitter:title" content={t('meta.business.title')} />
        <meta name="twitter:description" content={t('meta.business.description')} />
      </Head>
      {/* Hero Section */}
      <section className="business-hero">
        <div className="hero-background">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="geometric-shape shape-4"></div>
        </div>
        <div className="container">
          <AnimatedElement animation="text-focus">
            <div className="hero-content">
              <Link href="/services" className="back-link">
                <i className="fas fa-arrow-left"></i>
                <span>{t('common.backToServices')}</span>
              </Link>
              <span className="section-tag">{t('services.tag')}</span>
              <h1 className="hero-title">Business Services</h1>
              <p className="hero-subtitle">Customized services, just for you</p>
              <p className="hero-description">
                At ManageEx, we understand that entrepreneurs need more than just strong ideas — they need a solid administrative foundation that supports their journey. That's why our Business Services offer integrated solutions designed to empower companies, drive sustainable growth, and enhance operational efficiency — all while keeping full focus on core objectives.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="business-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Side - Information */}
            <AnimatedElement animation="roll-in-left">
              <div className="info-section">
                <div className="info-card">
                  <div className="card-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Tailored Solutions</h3>
                  <p>We create customized business packages that align perfectly with your specific needs and goals.</p>
                </div>

                <div className="info-card">
                  <div className="card-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Growth-Focused</h3>
                  <p>Our services are designed to drive sustainable growth while maintaining operational efficiency.</p>
                </div>

                <div className="info-card">
                  <div className="card-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3>Administrative Excellence</h3>
                  <p>Strong administrative foundation that supports your entrepreneurial journey every step of the way.</p>
                </div>
              </div>
            </AnimatedElement>

            {/* Right Side - Contact Form */}
            <AnimatedElement animation="roll-in-right" delay={0.3}>
              <div className="form-section">
                <div className="form-header">
                  <h2>Let's Build Your Perfect Package</h2>
                  <p>Tell us about your needs, and we'll create a customized solution just for you.</p>
                </div>

                <form className="business-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact">Contact Number</label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="needs">Let us know your needs</label>
                    <textarea
                      id="needs"
                      name="needs"
                      value={formData.needs}
                      onChange={handleChange}
                      placeholder="Tell us about your business needs and we'll build your perfect package..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <i className="fas fa-paper-plane"></i>
                    Send Request
                  </button>
                </form>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="business-cta">
        <div className="container">
          <AnimatedElement animation="bounce-in">
            <div className="cta-content">
              <div className="cta-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h2>{t('contact.discussBusiness')}</h2>
              <p>Ready to build a strong administrative foundation for your business? Let's discuss how our customized solutions can support your entrepreneurial journey.</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn-primary">
                  {t('contact.discoverMore')}
                </Link>
             
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <style jsx>{`
        .business-hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--current-bg-primary) 0%, var(--current-bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .geometric-shape {
          position: absolute;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 120px;
          height: 120px;
          top: 15%;
          left: 8%;
          border-radius: 20px;
          animation-delay: 0s;
          transform: rotate(45deg);
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          top: 70%;
          right: 10%;
          border-radius: 50%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 75%;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          animation-delay: 4s;
        }

        .shape-4 {
          width: 60px;
          height: 60px;
          top: 40%;
          right: 25%;
          border-radius: 10px;
          animation-delay: 6s;
          transform: rotate(30deg);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 20px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .back-link:hover {
          color: var(--secondary-color);
          transform: translateX(-5px);
        }

        [dir="rtl"] .back-link {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .back-link:hover {
          transform: translateX(5px);
        }

        [dir="rtl"] .back-link i {
          transform: rotate(180deg);
        }

        .section-tag {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--golden-accent) 100%);
          color: var(--accent-white);
          font-size: 14px;
          font-weight: 600;
          border-radius: 9999px;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: var(--current-text-primary);
          margin-bottom: 15px;
          line-height: 1.2;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--golden-accent);
          font-weight: 600;
          margin-bottom: 25px;
          font-style: italic;
        }

        .hero-description {
          font-size: 18px;
          color: var(--current-text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        .business-content {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .info-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          background: var(--current-bg-secondary);
          padding: 30px;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .info-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: 0 20px 40px rgba(91, 67, 137, 0.2);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-white);
          font-size: 24px;
          margin-bottom: 20px;
        }

        .info-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 15px;
        }

        .info-card p {
          color: var(--current-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .form-section {
          background: var(--current-bg-secondary);
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(91, 67, 137, 0.1);
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 15px;
        }

        .form-header p {
          color: var(--current-text-secondary);
          line-height: 1.6;
        }

        .business-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          color: var(--current-text-primary);
          margin-bottom: 8px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group textarea {
          padding: 15px 20px;
          border: 2px solid rgba(91, 67, 137, 0.2);
          border-radius: 12px;
          background: var(--current-bg-primary);
          color: var(--current-text-primary);
          font-size: 16px;
          transition: all 0.3s ease;
          resize: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 4px rgba(91, 67, 137, 0.1);
          transform: translateY(-2px);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--current-text-muted);
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: var(--accent-white);
          padding: 18px 30px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(91, 67, 137, 0.3);
        }

        .business-cta {
          padding: 100px 0;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: var(--accent-white);
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 30px;
          backdrop-filter: blur(10px);
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .cta-content p {
          font-size: 18px;
          margin-bottom: 40px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary {
          background: var(--accent-white);
          color: var(--primary-color);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--accent-white);
          border: 2px solid var(--accent-white);
        }

        .btn-secondary:hover {
          background: var(--accent-white);
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .business-hero {
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .hero-description {
            font-size: 16px;
          }

          .form-section {
            padding: 30px 25px;
          }

          .form-header h2 {
            font-size: 1.5rem;
          }

          .info-card {
            padding: 25px;
          }

          .card-icon {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }

          .cta-content h2 {
            font-size: 2rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }

          .geometric-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .form-section {
            padding: 25px 20px;
          }

          .info-card {
            padding: 20px;
          }

          .cta-icon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }
        }
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}