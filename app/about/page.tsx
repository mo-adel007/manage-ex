import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsSection from '@/components/ProjectsSection'
import BlogSection from '@/components/BlogSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Home - Professional Business Management Solutions',
  description: 'Transform your business operations with our comprehensive management solutions. Expert consulting, digital transformation, and strategic planning services.',
  openGraph: {
    title: 'ManageEx - Professional Business Management Solutions',
    description: 'Transform your business operations with our comprehensive management solutions.',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProjectsSection />
      <BlogSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  )
}