import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import ServicesGrid from '@/components/ServicesGrid'
import ServiceCategories from '@/components/ServiceCategories'

export const metadata: Metadata = {
  title: 'Our Services - Comprehensive Business Solutions',
  description: 'Professional business management services including strategic consulting, operations optimization, digital transformation, process improvement, and organizational development.',
  openGraph: {
    title: 'Our Services - Comprehensive Business Solutions',
    description: 'Professional business management services tailored to your organization needs.',
  },
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceCategories />
    </>
  )
}