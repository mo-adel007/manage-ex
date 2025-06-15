import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsSection from '@/components/ProjectsSection'
import BlogSection from '@/components/BlogSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Home - Mind-Bending Marketing Strategies',
  description: 'Elevate your website to a new level of visual fidelity with our innovative digital marketing approach. Professional web development, graphic design, and marketing services.',
  openGraph: {
    title: 'AceTech Marketing - Mind-Bending Marketing Strategies',
    description: 'Elevate your website to a new level of visual fidelity with our innovative digital marketing approach.',
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