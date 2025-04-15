// lib/fetchers/trials.ts
import { safeFetchJson } from './safeFetchJson'

interface TrialsResponse {
  totalCount?: number
}

export async function fetchTrials(term: string): Promise<number | null> {
  const url =
    'https://clinicaltrials.gov/api/v2/studies' +
    `?query.cond=${encodeURIComponent(term)}&countTotal=true&pageSize=0`
  
    // use for testing bad connections
    // const url =
    // 'https://clinicaltrials.gov-BAD-API/api/v2/studies' +
    // `?query.cond=${encodeURIComponent(term)}&countTotal=true&pageSize=0`

  const data = await safeFetchJson<TrialsResponse>(url)
  return data?.totalCount ?? null
}

