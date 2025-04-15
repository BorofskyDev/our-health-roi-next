// context/ContactDetailsContext.tsx

'use client'
import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
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

  useEffect(() => {
    console.log('ContactDetailsContext state updated:', contactDetails)
  }, [contactDetails])

  // Use useCallback to ensure the function reference is stable
  // context/ContactDetailsContext.tsx (partial)
  const setContactDetails = (details: MessageFormValues) => {
    console.log(
      'BEFORE setting contact details, current state:',
      contactDetails
    )
    console.log('Setting contact details to:', details)
    setContactDetailsState({ ...details })
    console.log('AFTER calling setContactDetailsState with:', details)

    // Force a log of the updated state (this will be from the previous state due to closure)
    setTimeout(() => {
      console.log('After timeout, contactDetails is now:', contactDetails)
    }, 0)
  }
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
