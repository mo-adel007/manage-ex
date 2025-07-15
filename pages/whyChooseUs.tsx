import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import WhyChooseUsHero from '@/components/WhyChooseUsHero'
import WhyChooseUsContent from '@/components/WhyChooseUsContent'
import WhyChooseUsFeatures from '@/components/WhyChooseUsFeatures'
import WhyChooseUsTeam from '@/components/WhyChooseUsTeam'
import WhyChooseUsSuccess from '@/components/WhyChooseUsSuccess'
import ContactSection from '@/components/ContactSection'

export default function WhyChooseUs() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta.whyChooseUs.title')}</title>
        <meta name="description" content={t('meta.whyChooseUs.description')} />
        <meta property="og:title" content={t('meta.whyChooseUs.title')} />
        <meta property="og:description" content={t('meta.whyChooseUs.description')} />
        <meta name="twitter:title" content={t('meta.whyChooseUs.title')} />
        <meta name="twitter:description" content={t('meta.whyChooseUs.description')} />
      </Head>
      <WhyChooseUsHero />
      <WhyChooseUsContent />
      {/* <WhyChooseUsFeatures /> */}
      <WhyChooseUsTeam />
      {/* <WhyChooseUsSuccess /> */}
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