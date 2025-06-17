'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedElement from './AnimatedElement'

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <AnimatedElement animation="roll-in-left" delay={0.1}>
              <h1 className="hero-title">
                <span className="title-line">PROFESSIONAL</span>
                <span className="title-line">BUSINESS</span>
                <span className="title-line">MANAGEMENT</span>
                <span className="title-line">SOLUTIONS</span>
                <span className="title-line">THAT</span>
                <span className="title-line highlight">TRANSFORM</span>
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="text-focus" delay={0.4}>
              <p className="hero-description">
                Streamline your operations to a new level of efficiency with our
                <span className="highlight-text"> innovative approach</span> to business management.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="scale-in" delay={0.6}>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Get Started</Link>
                <Link href="/services" className="btn-secondary">Our Services</Link>
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="slide-fwd" delay={0.3}>
            <div className="hero-image">
              <div className="image-wrapper">
                {/* <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business Management Workspace"
                  width={800}
                  height={600}
                  className="workspace-image"
                  priority
                /> */}
                <div className="image-overlay">
                  <div className="stats-card">
                    <div className="stat">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">98%</span>
                      <span className="stat-label">Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}