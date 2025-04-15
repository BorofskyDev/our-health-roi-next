// lib/hooks/useContactDetails.ts

'use client'
import { useContext } from 'react'
import { ContactDetailsContext } from '@/context/ContactDetailsContext'

export const useContactDetails = () => {
  const ctx = useContext(ContactDetailsContext)
  if (!ctx) {
    // Return default values instead of throwing an error
    // This makes the hook more robust when used outside the provider
    return {
      contactDetails: null,
      setContactDetails: () => {},
      clearContactDetails: () => {},
      hasCompletedDetails: false,
    }
  }
  return ctx
}
