'use client'

import { useState } from 'react'
import AnimatedElement from './AnimatedElement'

export default function CareersForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:info@manageex.com?subject=Career Inquiry&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section className="careers-form-section">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <span className="section-tag">JOIN OUR TEAM</span>
            <h2 className="section-title">Start Your Career Journey</h2>
            <p className="section-subtitle">Ready to be part of something amazing? Let's discuss your future with us.</p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="slide-fwd" delay={0.3}>
          <div className="form-wrapper">
            <form className="careers-form" onSubmit={handleSubmit}>
              <AnimatedElement animation="flip-in" delay={0.5}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </AnimatedElement>

              <AnimatedElement animation="flip-in" delay={0.6}>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </AnimatedElement>

              <AnimatedElement animation="flip-in" delay={0.7}>
                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-comment"></i>
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your experience, skills, and why you want to join our team..."
                    required
                  ></textarea>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="scale-in" delay={0.8}>
                <button type="submit" className="btn-primary submit-btn">
                  <i className="fas fa-paper-plane"></i>
                  Submit Application
                </button>
              </AnimatedElement>
            </form>

            <AnimatedElement animation="scale-in" delay={0.4}>
              <div className="form-sidebar">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3>Why Join Us?</h3>
                  <ul className="benefits-list">
                    <li><i className="fas fa-check"></i> Competitive salary packages</li>
                    <li><i className="fas fa-check"></i> Professional growth opportunities</li>
                    <li><i className="fas fa-check"></i> Flexible working environment</li>
                    <li><i className="fas fa-check"></i> Creative and innovative projects</li>
                  </ul>
                </div>

                <div className="contact-info">
                  <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <span>info@manageex.com</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <span>01022333634</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>

      <style jsx>{`
        .careers-form-section {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .form-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .careers-form {
          background: var(--current-bg-secondary);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(91, 67, 137, 0.1);
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-weight: 600;
          color: var(--current-text-primary);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-group label i {
          color: var(--primary-color);
          font-size: 16px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid rgba(91, 67, 137, 0.1);
          border-radius: 10px;
          background: var(--current-bg-primary);
          color: var(--current-text-primary);
          font-size: 16px;
          font-family: 'Nunito', sans-serif;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--current-text-muted);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.6;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary-color);
          outline: none;
          box-shadow: 0 0 0 3px rgba(91, 67, 137, 0.1);
          transform: translateY(-2px);
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          padding: 18px;
          margin-top: 20px;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
        }

        .form-sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-card {
          background: var(--current-bg-secondary);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: var(--accent-white);
          font-size: 24px;
        }

        .contact-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 20px;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          text-align: left;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: var(--current-text-secondary);
          font-size: 14px;
        }

        .benefits-list li i {
          color: var(--primary-color);
          font-size: 12px;
        }

        .contact-info {
          background: var(--current-bg-secondary);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          color: var(--current-text-secondary);
          font-size: 14px;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-item i {
          color: var(--golden-accent);
          font-size: 16px;
          width: 20px;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .form-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .careers-form {
            padding: 25px;
          }

          .form-group input,
          .form-group textarea {
            padding: 12px 15px;
            font-size: 14px;
          }

          .submit-btn {
            padding: 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  )
}