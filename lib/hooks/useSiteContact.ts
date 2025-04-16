// libs/hooks/useSiteContact.ts
import { useState } from 'react'
import {
  sendSiteContactEmail,
  SiteContactFormData,
} from '@/lib/utils/sendSiteContactEmail'

export function useSiteContact() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function submitContact(data: SiteContactFormData): Promise<void> {
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      await sendSiteContactEmail(data)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return { submitContact, loading, error, success }
}
