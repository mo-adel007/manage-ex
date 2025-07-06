import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'ManageEx - Business Management Solutions',
    template: '%s | ManageEx'
  },
  description: 'Professional business management solutions that streamline operations and boost productivity. Expert consulting, digital transformation, and strategic planning services.',
  keywords: ['business management', 'consulting', 'digital transformation', 'strategic planning', 'operations management', 'productivity solutions', 'business optimization'],
  authors: [{ name: 'ManageEx' }],
  creator: 'ManageEx',
  publisher: 'ManageEx',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://manageex.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manageex.com',
    title: 'ManageEx - Business Management Solutions',
    description: 'Professional business management solutions that streamline operations and boost productivity.',
    siteName: 'ManageEx',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ManageEx - Business Management Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ManageEx - Business Management Solutions',
    description: 'Professional business management solutions that streamline operations and boost productivity.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className={nunito.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}