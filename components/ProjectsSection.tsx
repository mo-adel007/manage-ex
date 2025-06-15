'use client'

import Image from 'next/image'
import AnimatedElement from './AnimatedElement'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Modern e-commerce solution with advanced features'
  },
  {
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete brand identity for tech startup'
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Viral social media campaign that increased engagement by 300%'
  },
  {
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'User-friendly mobile app with intuitive design'
  }
]

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="container">
        <AnimatedElement animation="roll-in-top">
          <div className="section-header">
            <span className="section-tag">OUR PROJECTS</span>
            <h2 className="section-title">Latest Work Showcase</h2>
            <p className="section-subtitle">Discover our recent successful projects and client transformations.</p>
          </div>
        </AnimatedElement>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedElement 
              key={project.title}
              animation={index % 2 === 0 ? 'slide-fwd' : 'scale-in'}
              delay={index * 0.2}
            >
              <div className="project-card">
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                  />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 100px 0;
          background: var(--current-bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: var(--current-bg-primary);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(91, 67, 137, 0.2);
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
        }

        .project-category {
          background: var(--primary-color);
          color: var(--accent-white);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .project-content {
          padding: 25px;
        }

        .project-content h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--current-text-primary);
        }

        .project-content p {
          color: var(--current-text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}