import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AboutHero from '@/components/AboutHero'
import VisionMission from '@/components/VisionMission'
import Strategy from '@/components/Strategy'
import ContactSection from '@/components/ContactSection'

export default function About() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta.about.title')}</title>
        <meta name="description" content={t('meta.about.description')} />
        <meta property="og:title" content={t('meta.about.title')} />
        <meta property="og:description" content={t('meta.about.description')} />
        <meta name="twitter:title" content={t('meta.about.title')} />
        <meta name="twitter:description" content={t('meta.about.description')} />
      </Head>
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