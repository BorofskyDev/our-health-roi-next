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

export const ContactDetailsContext = createContext<
  ContactDetailsContextType | undefined
>(undefined)

export default function ContactDetailsProvider({
  children,
}: {
  children: ReactNode
}) {
  const [contactDetails, setContactDetailsState] =
    useState<MessageFormValues | null>(null)

  const setContactDetails = (details: MessageFormValues) => {
    console.log(
      'BEFORE setting contact details, current state:',
      contactDetails
    )
    console.log('Setting contact details to:', details)
    setContactDetailsState({ ...details })
    console.log('AFTER calling setContactDetailsState with:', details)
  }

  const clearContactDetails = useCallback(() => {
    console.log('Clearing contact details')
    setContactDetailsState(null)
  }, [])

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
