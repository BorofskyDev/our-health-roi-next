// lib/fetchers/projects.ts
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
  searchId: string | null
  reporterURL: string | null
} | null

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
    limit: 1,
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
  // use for testing bad connections
  // const data = await safeFetchJson<NIHProjectsResponse>(
  //   'https://api.reporter.nih.gov-BAD-API/v2/projects/search',
  //   {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(payload),
  //   }
  // )

  if (!data) return null

  return {
    total: data.meta?.total ?? null,
    searchId: data.meta?.search_id ?? null,
    reporterURL: data.meta?.properties?.URL ?? null,
  }
}



