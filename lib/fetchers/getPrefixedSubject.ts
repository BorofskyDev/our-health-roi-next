// libs/fetchers/getPrefixedSubject.ts

import type { SiteContactCategory } from '@/lib/utils/sendSiteContactEmail'

// Map each category to its email subject prefix
const prefixMap: Record<SiteContactCategory, string> = {
  MEDIA: 'MEDIA:',
  ACCESSIBILITY: 'ACCESSIBILITY:',
  TECHNICAL: 'TECHNICAL:',
  GENERAL: 'GENERAL:',
  DEVELOPER: 'DEVELOPER:',
  VOLUNTEER: 'VOLUNTEER:',
}

/**
 * Prepend the category-specific prefix to the user-provided subject.
 */
export function getPrefixedSubject(
  category: SiteContactCategory,
  subject: string
): string {
  const prefix = prefixMap[category] || ''
  return `${prefix} ${subject}`.trim()
}
