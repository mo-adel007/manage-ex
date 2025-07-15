import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CareersForm from '@/components/CareersForm'

export default function Careers() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta.careers.title')}</title>
        <meta name="description" content={t('meta.careers.description')} />
        <meta property="og:title" content={t('meta.careers.title')} />
        <meta property="og:description" content={t('meta.careers.description')} />
        <meta name="twitter:title" content={t('meta.careers.title')} />
        <meta name="twitter:description" content={t('meta.careers.description')} />
      </Head>
      <div className="min-h-screen">
        <CareersForm />
      </div>
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