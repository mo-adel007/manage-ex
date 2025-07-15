import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ContactHero from '@/components/ContactHero'
import ContactSection from '@/components/ContactSection'
import ContactInfoSection from '@/components/ContactInfoSection'

export default function Contact() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta.contact.title')}</title>
        <meta name="description" content={t('meta.contact.description')} />
        <meta property="og:title" content={t('meta.contact.title')} />
        <meta property="og:description" content={t('meta.contact.description')} />
        <meta name="twitter:title" content={t('meta.contact.title')} />
        <meta name="twitter:description" content={t('meta.contact.description')} />
      </Head>
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