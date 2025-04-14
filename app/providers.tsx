'use client'

import { ReactNode } from 'react'
import { ModalProvider } from '@/components/modals/ModalContext'
// import { ThemeProvider } from 'next-themes'  // add others here later

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      {/* <ThemeProvider attribute='class'> */}
      {children}
      {/* </ThemeProvider> */}
    </ModalProvider>
  )
}
