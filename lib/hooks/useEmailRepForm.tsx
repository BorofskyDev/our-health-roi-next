// lib/hooks/useEmailRepForm.tsx
'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import {
  EmailRepFormValues,
  generateEmailRepPreview,
  ResearchCounts,
} from '@/lib/utils/emailTemplates'

export function useEmailRepForm(searchTerm: string, research: ResearchCounts) {
  const [values, setValues] = useState<EmailRepFormValues>({
    repName: '',
    cityState: '',
    personalImpact: '',
    fullName: '',
  })

  const [preview, setPreview] = useState<string | null>(null)

  const handleChange =
    (field: keyof EmailRepFormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setPreview(generateEmailRepPreview(values, searchTerm, research))
  }

  const resetPreview = () => setPreview(null)

  return { values, handleChange, handleSubmit, preview, resetPreview }
}
