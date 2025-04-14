// app/providers.tsx

'use client'

import { ReactNode } from 'react'
import { ModalProvider } from '@/context/ModalContext'
import SearchResultsProvider from '@/context/SearchResultsContext'
// import { ThemeProvider } from 'next-themes'  // add others here later

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <SearchResultsProvider>
        {/* <ThemeProvider attribute='class'> */}
        {children}
        {/* </ThemeProvider> */}
      </SearchResultsProvider>
    </ModalProvider>
  )
}
