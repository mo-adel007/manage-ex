'use client'

import Image from 'next/image'
import AnimatedElement from './AnimatedElement'
import { useTranslation } from 'next-i18next'

export default function BlogSection() {
  const { t } = useTranslation('common')

  const blogPosts = [
    {
      title: t('blog.posts.digitalTrends.title'),
      excerpt: t('blog.posts.digitalTrends.excerpt'),
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: t('blog.posts.digitalTrends.date'),
      readTime: t('blog.posts.digitalTrends.readTime')
    },
    {
      title: t('blog.posts.brandStorytelling.title'),
      excerpt: t('blog.posts.brandStorytelling.excerpt'),
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: t('blog.posts.brandStorytelling.date'),
      readTime: t('blog.posts.brandStorytelling.readTime')
    },
    {
      title: t('blog.posts.seoBest.title'),
      excerpt: t('blog.posts.seoBest.excerpt'),
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: t('blog.posts.seoBest.date'),
      readTime: t('blog.posts.seoBest.readTime')
    }
  ]

  return (
    <section className="blog-section">
      <div className="container">
        <AnimatedElement animation="text-focus">
          <div className="section-header">
            <span className="section-tag">{t('blog.tag')}</span>
            <h2 className="section-title">{t('blog.title')}</h2>
            <p className="section-subtitle">{t('blog.subtitle')}</p>
          </div>
        </AnimatedElement>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <AnimatedElement 
              key={post.title}
              animation="slide-bottom"
              delay={index * 0.2}
            >
              <article className="blog-card">
                <div className="blog-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="read-more">{t('common.readMoreArrow')}</a>
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          padding: 100px 0;
          background: var(--current-bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .blog-card {
          background: var(--current-bg-secondary);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(91, 67, 137, 0.15);
        }

        .blog-image {
          height: 200px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }

        .blog-content {
          padding: 25px;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-size: 12px;
          color: var(--current-text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }

        .blog-content h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--current-text-primary);
          line-height: 1.4;
        }

        .blog-content p {
          color: var(--current-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          color: var(--secondary-color);
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}