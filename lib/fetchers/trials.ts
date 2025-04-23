import { safeFetchJson } from './safeFetchJson'

interface TrialsResponse {
  totalCount?: number
}

export type TrialsResult = {
  total: number | null
  reporterURL: string | null
} | null

export async function fetchTrials(term: string): Promise<TrialsResult> {
  const url =
    'https://clinicaltrials.gov/api/v2/studies' +
    `?query.cond=${encodeURIComponent(term)}` +
    '&query.funder_type=NIH&countTotal=true&pageSize=0'

  const data = await safeFetchJson<TrialsResponse>(url)

  return {
    total: data?.totalCount ?? null,
    reporterURL: `https://clinicaltrials.gov/search?cond=${encodeURIComponent(
      term
    )}&funder_type=NIH`,
  }
}
