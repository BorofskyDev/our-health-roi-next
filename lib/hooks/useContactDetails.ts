// lib/hooks/useContactDetails.ts

'use client'
import { useContext } from 'react'
import { ContactDetailsContext } from '@/context/ContactDetailsContext'

export const useContactDetails = () => {
  const ctx = useContext(ContactDetailsContext)

  if (!ctx) {
    return {
      contactDetails: null,
      setContactDetails: (details: unknown) => {
        console.warn(
          'Attempted to set contact details outside of context:',
          details
        )
      },
      clearContactDetails: () => {},
      hasCompletedDetails: false,
    }
  }
  return ctx
}
