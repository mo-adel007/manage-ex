import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ServicesHero from '@/components/ServicesHero'
import ServicesGrid from '@/components/ServicesGrid'
import ServiceCategories from '@/components/ServiceCategories'

export default function Services() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta.services.title')}</title>
        <meta name="description" content={t('meta.services.description')} />
        <meta property="og:title" content={t('meta.services.title')} />
        <meta property="og:description" content={t('meta.services.description')} />
        <meta name="twitter:title" content={t('meta.services.title')} />
        <meta name="twitter:description" content={t('meta.services.description')} />
      </Head>
      <ServicesHero />
      <ServicesGrid />
      <ServiceCategories />
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