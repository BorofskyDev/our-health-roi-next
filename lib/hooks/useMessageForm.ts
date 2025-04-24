// lib/hooks/useMessageForm.ts
'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import {
  MessageFormValues,
  generateMessagePreview,
  
} from '@/lib/utils/messageTemplates'
import {
  ContactType,
  RecipientType,
} from '@/components/modals/contact-congress/messages/MessageBody'
import type { ResearchCounts } from '@/types/research'



export function useMessageForm(
  searchTerm: string,
  research: ResearchCounts,
  contactType: ContactType,
  recipientType: RecipientType
) {
  const [values, setValues] = useState<MessageFormValues>({
    repName: '',
    senatorName1: '',
    senatorName2: '',
    cityState: '',
    personalImpact: '',
    fullName: '',
  })

  const [preview, setPreview] = useState<string | null>(null)

  const handleChange =
    (field: keyof MessageFormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // If this is for senators, we'll generate a preview for each senator
    if (recipientType === 'senators' && contactType === 'email') {
      // Generate for the first senator
      const preview1 = values.senatorName1
        ? generateMessagePreview(
            { ...values, currentSenator: values.senatorName1 },
            searchTerm,
            research,
            contactType,
            recipientType
          )
        : null

      // Generate for the second senator
      const preview2 = values.senatorName2
        ? generateMessagePreview(
            { ...values, currentSenator: values.senatorName2 },
            searchTerm,
            research,
            contactType,
            recipientType
          )
        : null

      // Combine the previews with a separator
      let combinedPreview = ''

      if (preview1) {
        combinedPreview += preview1
      }

      if (preview1 && preview2) {
        combinedPreview += '\n\n----------- SECOND SENATOR -----------\n\n'
      }

      if (preview2) {
        combinedPreview += preview2
      }

      setPreview(combinedPreview || null)
    } else {
      // For representatives or call scripts, just generate a single preview
      setPreview(
        generateMessagePreview(
          values,
          searchTerm,
          research,
          contactType,
          recipientType
        )
      )
    }
  }

  const resetPreview = () => setPreview(null)

  return { values, handleChange, handleSubmit, preview, resetPreview }
}
