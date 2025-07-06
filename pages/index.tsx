import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsSection from '@/components/ProjectsSection'
import BlogSection from '@/components/BlogSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <WhyChooseUs />
      <ContactSection />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}