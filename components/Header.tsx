'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'next-i18next'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation('common')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.nav-wrapper') && !target.closest('.mobile-nav')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinksBase = [
    { href: '/', label: t('nav.home'), icon: 'fa-home' },
    { href: '/about', label: t('nav.about'), icon: 'fa-info-circle' },
    { href: '/services', label: t('nav.services'), icon: 'fa-cogs' },
    { href: '/whyChooseUs', label: t('whyChooseUs.title'), icon: 'fa-star' },
    { href: '/contact', label: t('nav.contact'), icon: 'fa-envelope' },
    { href: '/careers', label: t('nav.careers'), icon: 'fa-briefcase' },
  ];

  // Detect RTL (safe for SSR)
  const isRTL = typeof window !== 'undefined' && document.documentElement.dir === 'rtl';

  // For desktop nav: reverse if RTL, else normal
  const desktopNavLinks = isRTL ? [...navLinksBase].reverse() : navLinksBase;
  // For sidebar/mobile nav: always normal order
  const mobileNavLinks = navLinksBase;

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo" onClick={handleLinkClick}>
              <div className="logo-icon">
                <div className="logo-image">
                  <Image
                    src="/logoo.svg"
                    alt="ManageEx Logo"
                    width={65}
                    height={39}
                    className="logo-img"
                    priority
                  />
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-list">
                {desktopNavLinks.map((link) => (
                  <li key={link.href} className="nav-item">
                    <Link
                      href={link.href}
                      className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                      prefetch={true}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="header-controls">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              
              <LanguageSwitcher />
              
              <div className="social-links desktop-only">
                <Link href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                <Link href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                <Link href="#" className="social-link" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></Link>
                <Link href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
              </div>
              
              <button 
                className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <Link href="/" className="mobile-logo" onClick={handleLinkClick}>
              <span>ManageEx</span>
            </Link>
            <button 
              className="mobile-nav-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="mobile-nav-body">
            <ul className="mobile-nav-list">
              {mobileNavLinks.map((link) => (
                <li key={link.href} className="mobile-nav-item">
                  <Link
                    href={link.href}
                    className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                    onClick={handleLinkClick}
                    prefetch={true}
                  >
                    <span className="nav-icon">
                      <i className={`fas ${link.icon}`}></i>
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mobile-nav-footer">
            <div className="mobile-social-links">
              <Link href="#" className="mobile-social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="mobile-social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="mobile-social-link" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </Link>
              <Link href="#" className="mobile-social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <div className="mobile-footer-text">
              <p>&copy; 2024 ManageEx</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />}

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          z-index: 1000;
          padding: 12px 0;
          transition: all 0.3s ease;
        }

        [data-theme="dark"] .header {
          background: #181824 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }


        [data-theme="dark"] .header {
          background: #181824;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(91, 67, 137, 0.1);
          padding: 8px 0;
        }


        [data-theme="dark"] .header.scrolled {
          background: #181824;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        /* RTL Header Fixes */
        [dir="rtl"] .nav-wrapper {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .logo {
          order: 1;
        }

        [dir="rtl"] .header-controls {
          order: 2;
          flex-direction: row-reverse;
        }

        [dir="rtl"] .desktop-nav {
          order: 3;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          z-index: 1001;
        }

        .logo-icon {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-image {
          position: relative;
          width: 90px;
          height: 90px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

    

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
        }

        .nav-list {
          display: flex;
          gap: 35px;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          position: relative;
          padding: 10px 0;
          white-space: nowrap;
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .nav-link:hover {
          color: var(--secondary-color);
          transform: translateY(-2px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 2px;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: var(--primary-color);
          font-weight: 700;
        }

        .header-controls {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        [dir="rtl"] .header-controls {
          flex-direction: row-reverse;
          gap: 20px;
        }

        .theme-toggle {
          background: rgba(91, 67, 137, 0.1);
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .theme-toggle:hover {
          background: var(--primary-color);
          color: var(--accent-white);
          transform: scale(1.1);
        }

        .social-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .social-link {
          color: var(--primary-color);
          font-size: 14px;
          transition: all 0.3s ease;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(91, 67, 137, 0.08);
          text-decoration: none;
          border: 1px solid rgba(91, 67, 137, 0.15);
        }

        .social-link:hover {
          color: var(--accent-white);
          background: var(--primary-color);
          transform: translateY(-1px);
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(91, 67, 137, 0.3);
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
          z-index: 1001;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--primary-color);
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .mobile-menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          z-index: 1001;
          transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: -5px 0 25px rgba(91, 67, 137, 0.15);
          border-left: 1px solid rgba(91, 67, 137, 0.1);
        }

        /* RTL Mobile Navigation */
        [dir="rtl"] .mobile-nav {
          right: auto;
          left: -100%;
          box-shadow: 5px 0 25px rgba(91, 67, 137, 0.15);
          border-left: none;
          border-right: 1px solid rgba(91, 67, 137, 0.1);
        }

        [dir="rtl"] .mobile-nav.active {
          left: 0;
        }

        [data-theme="dark"] .mobile-nav {
          background: rgba(26, 26, 26, 0.98);
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav.active {
          right: 0;
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 0;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 2px solid rgba(91, 67, 137, 0.1);
          background: linear-gradient(135deg, rgba(91, 67, 137, 0.08) 0%, rgba(194, 151, 193, 0.05) 100%);
        }

        [dir="rtl"] .mobile-nav-header {
          flex-direction: row-reverse;
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--primary-color);
          font-weight: 800;
          font-size: 18px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-nav-close {
          background: rgba(91, 67, 137, 0.1);
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          font-size: 18px;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-nav-close:hover {
          background: var(--primary-color);
          color: var(--accent-white);
          transform: scale(1.1);
        }

        .mobile-nav-body {
          flex: 1;
          padding: 10px 0;
          overflow-y: auto;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-item {
          border-bottom: 1px solid rgba(91, 67, 137, 0.08);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--primary-color);
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          padding: 18px 20px;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        [dir="rtl"] .mobile-nav-link {
          flex-direction: row-reverse;
          text-align: right;
        }

        .nav-icon {
          width: 20px;
          display: flex;
          justify-content: center;
          font-size: 16px;
          color: var(--primary-color);
          transition: all 0.3s ease;
        }

        [dir="rtl"] .nav-icon {
          margin-left: 0;
          margin-right: 15px;
        }

        .mobile-nav-link:hover {
          background: linear-gradient(135deg, rgba(91, 67, 137, 0.1) 0%, rgba(194, 151, 193, 0.08) 100%);
          color: var(--secondary-color);
          padding-left: 30px;
        }

        [dir="rtl"] .mobile-nav-link:hover {
          padding-right: 30px;
          padding-left: 20px;
        }

        .mobile-nav-link:hover .nav-icon {
          color: var(--secondary-color);
          transform: scale(1.2);
        }

        .mobile-nav-link.active {
          background: linear-gradient(135deg, rgba(91, 67, 137, 0.15) 0%, rgba(194, 151, 193, 0.1) 100%);
          color: var(--primary-color);
          font-weight: 700;
        }

        .mobile-nav-link.active .nav-icon {
          color: var(--primary-color);
          transform: scale(1.1);
        }

        .mobile-nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }

        [dir="rtl"] .mobile-nav-link.active::before {
          left: auto;
          right: 0;
        }

        .mobile-nav-footer {
          padding: 20px;
          border-top: 2px solid rgba(91, 67, 137, 0.1);
          background: linear-gradient(135deg, rgba(91, 67, 137, 0.08) 0%, rgba(194, 151, 193, 0.05) 100%);
        }

        .mobile-social-links {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .mobile-social-link {
          color: var(--primary-color);
          font-size: 16px;
          transition: all 0.3s ease;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(91, 67, 137, 0.08);
          text-decoration: none;
          border: 1px solid rgba(91, 67, 137, 0.15);
        }

        .mobile-social-link:hover {
          color: var(--accent-white);
          background: var(--primary-color);
          transform: translateY(-1px);
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(91, 67, 137, 0.3);
        }

        .mobile-footer-text {
          text-align: center;
        }

        .mobile-footer-text p {
          color: var(--current-text-muted);
          font-size: 12px;
          margin: 0;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .desktop-only {
          display: flex;
        }

        /* Tablet Styles */
        @media (max-width: 1200px) {
          .header-controls {
            gap: 15px;
          }

          .nav-list {
            gap: 30px;
          }

          .nav-link {
            font-size: 14px;
          }
        }

        @media (max-width: 1024px) {
          .social-links {
            gap: 10px;
          }

          .social-link {
            width: 30px;
            height: 30px;
            font-size: 13px;
          }

          .theme-toggle {
            width: 36px;
            height: 36px;
            font-size: 14px;
          }

          .logo-text {
            font-size: 22px;
          }

          .logo-image {
            width: 60px;
            height: 36px;
          }

          .nav-list {
            gap: 25px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .header {
            padding: 10px 0;
          }

          .header.scrolled {
            padding: 8px 0;
          }

          .desktop-nav {
            display: none;
          }

          [dir="rtl"] .nav-wrapper {
            flex-direction: row-reverse;
            justify-content: space-between;
          }

          [dir="rtl"] .logo {
            order: 2;
          }

          [dir="rtl"] .header-controls {
            order: 1;
            flex-direction: row-reverse;
            gap: 12px;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .desktop-only {
            display: none;
          }

          .header-controls {
            gap: 12px;
          }

          .theme-toggle {
            width: 34px;
            height: 34px;
            font-size: 13px;
          }

          .logo-image {
            width: 200px;
            height: 100px;
          }

          .logo-text {
            font-size: 20px;
          }

          .mobile-nav {
            width: 85%;
            max-width: 350px;
          }

          [dir="rtl"] .mobile-nav {
            left: -85%;
            right: auto;
            width: 85%;
            max-width: 350px;
          }

          [dir="rtl"] .mobile-nav.active {
            left: 0;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .header {
            padding: 8px 0;
          }

          .header-controls {
            gap: 8px;
          }

          .theme-toggle {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }

          .logo-image {
            width: 100px;
            height: 100px;
          }

          .logo-img {
            width:200px;
            height: 200px
          }
          .logo-text {
            font-size: 18px;
          }

          .mobile-menu-toggle span {
            width: 22px;
            height: 2px;
          }

          .mobile-nav-link {
            font-size: 15px;
            padding: 16px 20px;
          }

          .mobile-nav-header,
          .mobile-nav-footer {
            padding: 15px;
          }

          .mobile-nav {
            width: 90%;
            max-width: 300px;
          }

          [dir="rtl"] .mobile-nav {
            left: -90%;
            width: 90%;
            max-width: 300px;
          }

          .mobile-social-link {
            width: 36px;
            height: 36px;
            font-size: 15px;
          }
        }

        /* Extra Small Screens */
        @media (max-width: 360px) {
          .header-controls {
            gap: 6px;
          }

          .logo-image {
            width: 45px;
            height: 27px;
          }

          .logo-text {
            font-size: 16px;
          }

          .theme-toggle {
            width: 30px;
            height: 30px;
            font-size: 11px;
          }

          .mobile-nav {
            width: 95%;
            max-width: 280px;
          }

          [dir="rtl"] .mobile-nav {
            left: -95%;
            width: 95%;
            max-width: 280px;
          }

          .mobile-nav-link {
            font-size: 14px;
            padding: 15px 18px;
          }

          .mobile-social-link {
            width: 34px;
            height: 34px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  )
}