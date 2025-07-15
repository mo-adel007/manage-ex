import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AboutHero from '@/components/AboutHero'
import VisionMission from '@/components/VisionMission'
import Strategy from '@/components/Strategy'
import ContactSection from '@/components/ContactSection'

export default function About() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <Strategy />
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