// libs/utils/sendSiteContactEmail.ts
export interface SiteContactFormData {
  name: string
  email: string
  subject: string
  message: string
  category:
    | 'MEDIA'
    | 'ACCESSIBILITY'
    | 'TECHNICAL'
    | 'GENERAL'
    | 'DEVELOPER'
    | 'VOLUNTEER'
}

export type SiteContactCategory =
  | 'MEDIA'
  | 'ACCESSIBILITY'
  | 'TECHNICAL'
  | 'GENERAL'
  | 'DEVELOPER'
  | 'VOLUNTEER'

export async function sendSiteContactEmail(
  data: SiteContactFormData
): Promise<void> {
  const response = await fetch('/api/site-contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error('Error sending site contact email')
  }
}
