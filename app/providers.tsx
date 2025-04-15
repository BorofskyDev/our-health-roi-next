// app/providers.tsx

'use client'

import { ReactNode } from 'react'
import { ModalProvider } from '@/context/ModalContext'
import SearchResultsProvider from '@/context/SearchResultsContext'
import ContactDetailsProvider from '@/context/ContactDetailsContext'
// import { ThemeProvider } from 'next-themes'  // add others here later

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ContactDetailsProvider>
      <SearchResultsProvider>
        <ModalProvider>
          {/* <ThemeProvider attribute='class'> */}
          {children}
          {/* </ThemeProvider> */}
        </ModalProvider>
      </SearchResultsProvider>
    </ContactDetailsProvider>
  )
}
