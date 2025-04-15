// context/ContactDetailsContext.tsx

'use client'
import { ReactNode, createContext, useState, useCallback } from 'react'
import { MessageFormValues } from '@/lib/utils/messageTemplates'

export type ContactDetailsContextType = {
  contactDetails: MessageFormValues | null
  setContactDetails: (details: MessageFormValues) => void
  clearContactDetails: () => void
  hasCompletedDetails: boolean
}

// Create the context with undefined as default value
export const ContactDetailsContext = createContext<
  ContactDetailsContextType | undefined
>(undefined)

// Provider component
export default function ContactDetailsProvider({
  children,
}: {
  children: ReactNode
}) {
  const [contactDetails, setContactDetailsState] =
    useState<MessageFormValues | null>(null)

  // Use useCallback to ensure the function reference is stable
  const setContactDetails = useCallback((details: MessageFormValues) => {
    console.log('Setting contact details:', details)
    setContactDetailsState({ ...details }) // Create a new object reference to ensure state update
  }, [])

  // Use useCallback for clearContactDetails as well
  const clearContactDetails = useCallback(() => {
    console.log('Clearing contact details')
    setContactDetailsState(null)
  }, [])

  // Compute this value whenever contactDetails changes
  const hasCompletedDetails =
    !!contactDetails?.cityState &&
    !!contactDetails?.personalImpact &&
    !!contactDetails?.fullName

  // Log when the value changes
  console.log('ContactDetailsContext updated:', {
    contactDetails,
    hasCompletedDetails,
  })

  return (
    <ContactDetailsContext.Provider
      value={{
        contactDetails,
        setContactDetails,
        clearContactDetails,
        hasCompletedDetails,
      }}
    >
      {children}
    </ContactDetailsContext.Provider>
  )
}