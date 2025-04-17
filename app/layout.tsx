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
  title: 'Our Health ROI',
  description:
    'Explore how your tax dollars fund life-saving medical research. Search NIH-funded projects by condition, view real impact data, and contact your representatives to support continued investment in science and health.',
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
