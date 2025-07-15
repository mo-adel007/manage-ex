"use client";
import React, { useState } from 'react';
import { User, Mail, MessageSquare, PlaneIcon as PaperPlaneIcon, Briefcase, Check, Phone, MapPin, Upload, X } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import { useTranslation } from 'next-i18next';

export default function CareersForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '',
    cv: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { t } = useTranslation('common');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type (PDF, DOC, DOCX)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setFormData((prev) => ({ ...prev, cv: file }));
      } else {
        alert('Please upload a PDF, DOC, or DOCX file');
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setFormData((prev) => ({ ...prev, cv: file }));
      } else {
        alert('Please upload a PDF, DOC, or DOCX file');
      }
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, cv: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email body with form data
      let emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      
      if (formData.cv) {
        emailBody += `\n\nCV attached: ${formData.cv.name}`;
      }

      const mailtoLink = `mailto:Hi@ManageEx.com?subject=Career Application - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="careers-form" className="careers-section">
        <div className="container">
          <AnimatedElement animation="text-focus">
            <div className="section-header">
              <span className="section-badge">
                {t('careers.tag')}
              </span>
              <h2 className="section-title">
                {t('careers.title')}
              </h2>
              <p className="section-description">
                {t('careers.description')}
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-fwd" delay={0.3}>
            <div className="form-grid">
              {/* Main Form */}
              <div className="form-column">
                <form className="careers-form" onSubmit={handleSubmit}>
                  <AnimatedElement animation="flip-in" delay={0.5}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <User className="label-icon" />
                        {t('careers.form.fullName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('careers.form.fullName')}
                        required
                        className="form-input"
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="flip-in" delay={0.6}>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <Mail className="label-icon" />
                        {t('careers.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('careers.form.email')}
                        required
                        className="form-input"
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="flip-in" delay={0.65}>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        <Phone className="label-icon" />
                        {t('careers.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('careers.form.phone')}
                        required
                        className="form-input"
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="flip-in" delay={0.7}>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        <MessageSquare className="label-icon" />
                        {t('careers.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('careers.form.messagePlaceholder')}
                        required
                        rows={6}
                        className="form-textarea"
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="flip-in" delay={0.75}>
                    <div className="form-group">
                      <label className="form-label">
                        <Upload className="label-icon" />
                        {t('careers.form.cv')}
                      </label>
                      <div 
                        className={`file-upload-area ${dragActive ? 'drag-active' : ''} ${formData.cv ? 'has-file' : ''}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        {formData.cv ? (
                          <div className="file-preview">
                            <div className="file-info">
                              <i className="fas fa-file-pdf file-icon"></i>
                              <div className="file-details">
                                <span className="file-name">{formData.cv.name}</span>
                                <span className="file-size">{(formData.cv.size / 1024 / 1024).toFixed(2)} MB</span>
                              </div>
                            </div>
                            <button type="button" onClick={removeFile} className="remove-file">
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="upload-content">
                            <Upload className="upload-icon" />
                            <p className="upload-text">
                              Drag & drop your CV here or <span className="upload-link">browse files</span>
                            </p>
                            <p className="upload-hint">PDF, DOC, DOCX (Max 10MB)</p>
                          </div>
                        )}
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="file-input"
                        />
                      </div>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="scale-in" delay={0.8}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-button"
                    >
                      <PaperPlaneIcon className="button-icon" />
                      {isSubmitting ? t('careers.form.sending') : t('careers.form.submit')}
                    </button>
                  </AnimatedElement>
                </form>
              </div>

              {/* Sidebar */}
              <div className="sidebar">
                <AnimatedElement animation="scale-in" delay={0.4}>
                  <div className="sidebar-card">
                    <div className="card-icon-wrapper">
                      <Briefcase className="card-icon" />
                    </div>
                    <h3 className="card-title">
                      {t('careers.whyJoinUs')}
                    </h3>
                    <ul className="benefits-list">
                      {[
                        t('careers.benefits.salary'),
                        t('careers.benefits.growth'),
                        t('careers.benefits.flexible'),
                        t('careers.benefits.projects')
                      ].map((benefit, index) => (
                        <li key={index} className="benefit-item">
                          <Check className="check-icon" />
                          <span className="benefit-text">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement animation="scale-in" delay={0.5}>
                  <div className="contact-card">
                    <h3 className="contact-title">
                      {t('careers.getInTouch')}
                    </h3>
                    <div className="contact-info">
                      <div className="contact-item">
                        <div className="contact-icon email-icon">
                          <Mail className="icon" />
                        </div>
                        <div className="contact-details">
                          <p className="contact-label">{t('contact.email')}</p>
                          <p className="contact-value">{t('contact.info.email')}</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon phone-icon">
                          <Phone className="icon" />
                        </div>
                        <div className="contact-details">
                          <p className="contact-label">{t('careers.form.phone')}</p>
                          <p className="contact-value">{t('contact.info.phone')}</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon location-icon">
                          <MapPin className="icon" />
                        </div>
                        <div className="contact-details">
                          <p className="contact-label">Location</p>
                          <p className="contact-value">{t('contact.info.saudi.address')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <style jsx>{`
        :root {
          --primary-color: #5b4389;
          --secondary-color: #c297c1;
          --accent-black: #000000;
          --accent-white: #ffffff;
          --golden-accent: #8b7cc8;
          
          /* Dark Theme Colors */
          --bg-primary: #1a1a1a;
          --bg-secondary: #2d2d2d;
          --bg-tertiary: #0d0d0d;
          --text-primary: #ffffff;
          --text-secondary: #cccccc;
          --text-muted: #888888;
          
          /* Light Theme Colors */
          --bg-primary-light: #ffffff;
          --bg-secondary-light: #f8f9fa;
          --bg-tertiary-light: #e9ecef;
          --text-primary-light: #000000;
          --text-secondary-light: #333333;
          --text-muted-light: #666666;
          
          /* Current theme variables */
          --current-bg-primary: var(--bg-primary-light);
          --current-bg-secondary: var(--bg-secondary-light);
          --current-bg-tertiary: var(--bg-tertiary-light);
          --current-text-primary: var(--text-primary-light);
          --current-text-secondary: var(--text-secondary-light);
          --current-text-muted: var(--text-muted-light);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --current-bg-primary: var(--bg-primary);
            --current-bg-secondary: var(--bg-secondary);
            --current-bg-tertiary: var(--bg-tertiary);
            --current-text-primary: var(--text-primary);
            --current-text-secondary: var(--text-secondary);
            --current-text-muted: var(--text-muted);
          }
        }

        .careers-section {
          margin-top: 80px;
          padding: 96px 0;
          min-height: 100vh;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
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

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3.75rem;
          }
        }

        .section-description {
          font-size: 1.25rem;
          color: var(--current-text-secondary);
          max-width: 672px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .form-grid {
            grid-template-columns: 2fr 1fr;
          }
        }

        .careers-form {
          background: var(--current-bg-primary);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--current-bg-tertiary);
          backdrop-filter: blur(8px);
        }

        @media (min-width: 768px) {
          .careers-form {
            padding: 48px;
          }
        }

        .form-group {
          margin-bottom: 32px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          color: var(--current-text-secondary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .label-icon {
          width: 20px;
          height: 20px;
          color: var(--primary-color);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px 24px;
          border: 2px solid var(--current-bg-tertiary);
          border-radius: 12px;
          background: var(--current-bg-secondary);
          color: var(--current-text-primary);
          font-size: 18px;
          font-weight: 500;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--current-text-muted);
        }

        .form-textarea {
          resize: none;
          min-height: 144px;
        }

        .form-input:hover,
        .form-textarea:hover {
          border-color: var(--secondary-color);
          transform: translateY(-4px);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 4px rgba(91, 67, 137, 0.1);
          transform: translateY(-4px);
        }

        .file-upload-area {
          position: relative;
          border: 2px dashed var(--current-bg-tertiary);
          border-radius: 12px;
          padding: 40px 20px;
          text-align: center;
          background: var(--current-bg-secondary);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .file-upload-area:hover,
        .file-upload-area.drag-active {
          border-color: var(--primary-color);
          background: rgba(91, 67, 137, 0.05);
        }

        .file-upload-area.has-file {
          border-style: solid;
          border-color: var(--golden-accent);
          background: rgba(139, 124, 200, 0.05);
        }

        .file-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        .upload-content {
          pointer-events: none;
        }

        .upload-icon {
          width: 48px;
          height: 48px;
          color: var(--primary-color);
          margin: 0 auto 16px;
        }

        .upload-text {
          font-size: 16px;
          color: var(--current-text-secondary);
          margin-bottom: 8px;
        }

        .upload-link {
          color: var(--primary-color);
          font-weight: 600;
        }

        .upload-hint {
          font-size: 14px;
          color: var(--current-text-muted);
        }

        .file-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          background: var(--current-bg-primary);
          border-radius: 8px;
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .file-icon {
          font-size: 24px;
          color: var(--primary-color);
        }

        .file-details {
          display: flex;
          flex-direction: column;
        }

        .file-name {
          font-weight: 600;
          color: var(--current-text-primary);
          font-size: 14px;
        }

        .file-size {
          font-size: 12px;
          color: var(--current-text-muted);
        }

        .remove-file {
          background: rgba(239, 68, 68, 0.1);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ef4444;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .remove-file:hover {
          background: rgba(239, 68, 68, 0.2);
          transform: scale(1.1);
        }

        .submit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--golden-accent) 100%);
          color: var(--accent-white);
          font-weight: 600;
          padding: 20px 32px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 18px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .submit-button:hover {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .button-icon {
          width: 20px;
          height: 20px;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .sidebar-card,
        .contact-card {
          background: var(--current-bg-primary);
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--current-bg-tertiary);
        }

        .sidebar-card {
          text-align: center;
        }

        .card-icon-wrapper {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--golden-accent) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .card-icon {
          width: 32px;
          height: 32px;
          color: var(--accent-white);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 24px;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .check-icon {
          width: 20px;
          height: 20px;
          color: var(--golden-accent);
          flex-shrink: 0;
        }

        .benefit-text {
          font-weight: 500;
          color: var(--current-text-secondary);
        }

        .contact-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--current-text-primary);
          margin-bottom: 24px;
          text-align: center;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .email-icon {
          background: linear-gradient(135deg, var(--golden-accent) 0%, var(--primary-color) 100%);
        }

        .phone-icon {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
        }

        .location-icon {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        .icon {
          width: 20px;
          height: 20px;
          color: var(--accent-white);
        }

        .contact-details {
          flex: 1;
        }

        .contact-label {
          font-size: 14px;
          color: var(--current-text-muted);
          font-weight: 500;
          margin: 0 0 4px 0;
        }

        .contact-value {
          font-weight: 600;
          color: var(--current-text-primary);
          margin: 0;
        }

        @media (max-width: 768px) {
          .careers-section {
            padding: 48px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 1rem;
          }

          .careers-form {
            padding: 24px;
          }

          .form-input,
          .form-textarea {
            padding: 12px 16px;
            font-size: 16px;
          }

          .submit-button {
            padding: 16px 24px;
            font-size: 16px;
          }

          .sidebar-card,
          .contact-card {
            padding: 24px;
          }

          .file-upload-area {
            padding: 30px 15px;
          }

          .upload-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}