import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsSection from '@/components/ProjectsSection'
import BlogSection from '@/components/BlogSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta.home.title')}</title>
        <meta name="description" content={t('meta.home.description')} />
        <meta property="og:title" content={t('meta.home.title')} />
        <meta property="og:description" content={t('meta.home.description')} />
        <meta name="twitter:title" content={t('meta.home.title')} />
        <meta name="twitter:description" content={t('meta.home.description')} />
      </Head>
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