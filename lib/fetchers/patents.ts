// ─────────────────────────────────────────────────────────
// /lib/fetchers/patents.ts   (NIH RePORTER source)
// ─────────────────────────────────────────────────────────
import { safeFetchJson } from './safeFetchJson'

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
  'OD',
]

interface NIHPatentsResponse {
  meta?: { total?: number; properties?: { URL?: string } }
}

export type PatentsResult = {
  total: number | null
  reporterURL: string | null
} | null

export async function fetchPatents(term: string): Promise<PatentsResult> {
  const payload = {
    criteria: {
      agencies: NIH_ICS,
      advanced_text_search: {
        operator: 'and',
        search_field: 'all',
        search_text: term,
      },
    },
    offset: 0,
    limit: 0,
    include_fields: ['PatentNum'],
  }

  const data = await safeFetchJson<NIHPatentsResponse>(
    'https://api.reporter.nih.gov/v2/patents/search',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  )

  if (!data) return null
  return {
    total: data.meta?.total ?? null,
    reporterURL: data.meta?.properties?.URL ?? null,
  }
}
