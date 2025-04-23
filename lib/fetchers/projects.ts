// ─────────────────────────────────────────────────────────
// /lib/fetchers/projects.ts
// ─────────────────────────────────────────────────────────
import { safeFetchJson } from './safeFetchJson'

/** NIH institute/center codes (Admin or Funding agency) */
const NIH_ICS = [
  'NCI',
  'NIAID',
  'NHLBI',
  'NINDS',
  'NIDDK',
  'NIEHS',
  'NIA',
  'NIGMS',
  'NICHD',
  'NIMH',
  'NIDCR',
  'NIBIB',
  'NIDA',
  'NHGRI',
  'NEI',
  'NCCIH',
  'NINR',
  'NIMHD',
  'NIDCD',
  'NLM',
  'NCATS',
  'OD', // add/remove as needed
]

/** Shape of the tiny response we request from RePORTER */
interface NIHProjectsResponse {
  meta?: {
    total?: number
    search_id?: string
    properties?: { URL?: string }
  }
}

export interface ProjectsResult {
  total: number | null
  searchId: string | null
  reporterURL: string | null
}

/**
 * Count NIH-funded projects that mention `term`
 * and return the RePORTER search URL for transparency.
 */
export async function fetchProjects(
  term: string
): Promise<ProjectsResult | null> {
  const payload = {
    criteria: {
      agencies: NIH_ICS,
      advanced_text_search: {
        operator: 'and',
        search_field: 'all',
        search_text: term,
      },
    },
    offset: 0, // 0 rows returned → faster
    limit: 0,
    include_fields: ['ProjectNum'],
  }

  const data = await safeFetchJson<NIHProjectsResponse>(
    'https://api.reporter.nih.gov/v2/projects/search',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  )

  if (!data) return null

  return {
    total: data.meta?.total ?? null,
    searchId: data.meta?.search_id ?? null,
    reporterURL: data.meta?.properties?.URL ?? null,
  }
}
