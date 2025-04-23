import { safeFetchJson } from './safeFetchJson'

interface NIHProjectsResponse {
  meta?: {
    total?: number
    search_id?: string
    properties?: { URL?: string }
  }
}

export type ProjectsResult = {
  total: number | null
  reporterURL: string | null
  /** used by downstream tab calls */
  searchId: string | null
} | null

/** Zero-result query just to get the roll-up total + search_id */
export async function fetchProjects(term: string): Promise<ProjectsResult> {
  const payload = {
    criteria: {
      advanced_text_search: {
        operator: 'and',
        search_field: 'all',
        search_text: term,
      },
    },
    offset: 0,
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

  if (!data?.meta) return null

  return {
    total: data.meta.total ?? null,
    reporterURL: data.meta.properties?.URL ?? null,
    searchId: data.meta.search_id ?? null,
  }
}
