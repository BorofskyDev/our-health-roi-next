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
  metadataBase: new URL('https://www.ourhealthroi.com'),
  title: { default: 'Our Health ROI', template: '%s | Our Health ROI' },
  description:
    'Explore how your tax dollars fund life‑saving medical research.',
  openGraph: {
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image.png'], 
  },
  alternates: { canonical: 'https://www.ourhealthroi.com' },
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
