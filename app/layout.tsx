// app/layout.tsx

import type { Metadata } from 'next'
import { Libre_Franklin, Inter } from 'next/font/google'
import '@/styles/index.scss'
import { Providers } from './providers'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import SkipToContent from '@/components/accessibility/skip-to-content/SkipToContent'

const libreFranklin = Libre_Franklin({
  variable: '--font-libre-franklin',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ourhealthroi.com'),
  title: {
    default: 'Our Health ROI',
    template: '%s | Our Health ROI',
  },
  description:
    'Explore how your tax dollars fund life-saving medical research. Search NIH-funded projects by condition, view real impact data, and contact your representatives to support continued investment in science and health.',
 
  authors: [{ name: 'Our Health ROI Team' }],
  creator: 'Our Health ROI',
  publisher: 'Our Health ROI',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ourhealthroi.com',
    siteName: 'Our Health ROI',
    title: 'Our Health ROI',
    description:
      'Explore how your tax dollars fund life-saving medical research.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Our Health ROI - Explore Medical Research Impact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Health ROI',
    description:
      'Explore how your tax dollars fund life-saving medical research.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://ourhealthroi.com',
  },
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${libreFranklin.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        <Providers>
          <SkipToContent />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
