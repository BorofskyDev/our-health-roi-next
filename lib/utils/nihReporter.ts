// lib/utils/nihReporter.ts  (full file for clarity)
import { safeFetchJson } from '../fetchers/safeFetchJson'

/** NIH institute / center (IC) codes you want to keep */
export const NIH_ICS = [
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

/** --- types -------------------------------------------------------------- */
export interface NihSearchResponse {
  meta?: {
    /** projects */
    total?: number
    /** the three *other* roll-ups we need */
    total_patent_count?: number
    total_clinical_studies?: number
    total_publications?: number

    search_id?: string
    properties?: { URL?: string }
  }
}

export interface NihSearchResult {
  projects: Metric
  publications: Metric
  trials: Metric
  searchId: string | null
}
type Metric = { total: number | null; reporterURL: string | null }

/** --- main helper -------------------------------------------------------- */
export async function fetchNihData(
  term: string
): Promise<NihSearchResult | null> {
  const payload = {
    criteria: {
      agencies: NIH_ICS,
      advanced_text_search: {
        operator: 'and',
        search_field: 'all',
        search_text: term,
      },
    },
    // we only need the roll-up numbers, so zero results keeps payload tiny
    offset: 0,
    limit: 0,
    include_fields: ['ProjectNum'],
  }

  const data = await safeFetchJson<NihSearchResponse>(
    'https://api.reporter.nih.gov/v2/projects/search',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  )

  if (!data?.meta) return null

  const {
    total: projTotal,
    total_publications: pubTotal,
    total_clinical_studies: trialTotal,
    search_id: searchId,
    properties,
  } = data.meta

  /** helper for link-outs */
  const makeFallback = (view: string) =>
    `https://reporter.nih.gov/search/results?${view}/text:${encodeURIComponent(
      term
    )}`

  return {
    projects: {
      total: projTotal ?? null,
      reporterURL: properties?.URL ?? makeFallback('projects'),
    },
   
    publications: {
      total: pubTotal ?? null,
      reporterURL: searchId
        ? `https://reporter.nih.gov/search/${searchId}/publications`
        : makeFallback('publications'),
    },
    trials: {
      total: trialTotal ?? null,
      reporterURL: searchId
        ? `https://reporter.nih.gov/search/${searchId}/clinical-studies`
        : makeFallback('clinical-studies'),
    },
    searchId: searchId ?? null,
  }
}

// Helper function for creating fallback URLs
export function createFallbackUrl(term: string, view: string): string {
  return `https://reporter.nih.gov/search/results?${view}/text:${encodeURIComponent(
    term
  )}`
}
