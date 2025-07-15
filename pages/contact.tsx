import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ContactHero from '@/components/ContactHero'
import ContactSection from '@/components/ContactSection'
import ContactInfoSection from '@/components/ContactInfoSection'

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactInfoSection />
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