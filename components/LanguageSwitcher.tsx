'use client'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const { locale, locales, asPath } = router

  const switchLanguage = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale })
  }

  return (
    <div className="language-switcher">
      <div className="language-dropdown">
        <button className="current-language">
          <span className="language-flag">
            {locale === 'ar' ? '🇸🇦' : '🇺🇸'}
          </span>
          <span className="language-code">
            {locale?.toUpperCase()}
          </span>
          <i className="fas fa-chevron-down"></i>
        </button>
        
        <div className="language-options">
          {locales?.map((lng) => (
            <button
              key={lng}
              onClick={() => switchLanguage(lng)}
              className={`language-option ${locale === lng ? 'active' : ''}`}
            >
              <span className="language-flag">
                {lng === 'ar' ? '🇸🇦' : '🇺🇸'}
              </span>
              <span className="language-name">
                {lng === 'ar' ? 'العربية' : 'English'}
              </span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .language-switcher {
          position: relative;
        }

        .language-dropdown {
          position: relative;
        }

        .current-language {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(91, 67, 137, 0.1);
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 8px 12px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 600;
          min-width: 80px;
        }

        .current-language:hover {
          background: var(--primary-color);
          color: var(--accent-white);
          transform: translateY(-2px);
        }

        .language-flag {
          font-size: 16px;
        }

        .language-code {
          font-size: 12px;
          letter-spacing: 1px;
        }

        .current-language i {
          font-size: 10px;
          transition: transform 0.3s ease;
        }

        .language-dropdown:hover .current-language i {
          transform: rotate(180deg);
        }

        .language-options {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--current-bg-primary);
          border: 2px solid var(--primary-color);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(91, 67, 137, 0.2);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1000;
          min-width: 140px;
          margin-top: 5px;
        }

        .language-dropdown:hover .language-options {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 15px;
          background: none;
          border: none;
          color: var(--current-text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          text-align: left;
        }

        .language-option:first-child {
          border-radius: 13px 13px 0 0;
        }

        .language-option:last-child {
          border-radius: 0 0 13px 13px;
        }

        .language-option:hover {
          background: rgba(91, 67, 137, 0.1);
          color: var(--primary-color);
        }

        .language-option.active {
          background: var(--primary-color);
          color: var(--accent-white);
        }

        .language-name {
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .current-language {
            padding: 6px 10px;
            min-width: 70px;
          }

          .language-code {
            font-size: 11px;
          }

          .language-options {
            min-width: 120px;
          }

          .language-option {
            padding: 10px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}