import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import WhyChooseUsHero from '@/components/WhyChooseUsHero'
import WhyChooseUsContent from '@/components/WhyChooseUsContent'
import WhyChooseUsFeatures from '@/components/WhyChooseUsFeatures'
import WhyChooseUsTeam from '@/components/WhyChooseUsTeam'
import WhyChooseUsSuccess from '@/components/WhyChooseUsSuccess'
import ContactSection from '@/components/ContactSection'

export default function WhyChooseUs() {
  return (
    <>
      <WhyChooseUsHero />
      <WhyChooseUsContent />
      <WhyChooseUsFeatures />
      <WhyChooseUsTeam />
      <WhyChooseUsSuccess />
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