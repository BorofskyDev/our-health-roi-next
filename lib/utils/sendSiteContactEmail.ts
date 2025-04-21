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
  try {
    console.log('Sending contact form data:', data)

    const response = await fetch('/api/site-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('API response error:', errorData)
      throw new Error(errorData.error || 'Error sending site contact email')
    }
  } catch (error) {
    console.error('Error in sendSiteContactEmail:', error)
    throw error
  }
}
