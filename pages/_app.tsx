import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'
import ThemeProvider from '@/components/ThemeProvider'
import GlobalLightningBackground from '@/components/GlobalLightningBackground'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Set document direction based on locale
    const direction = router.locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = direction
    document.documentElement.lang = router.locale || 'en'
  }, [router.locale])

  return (
    <ThemeProvider>
      <GlobalLightningBackground />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)