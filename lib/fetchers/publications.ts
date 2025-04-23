// ─────────────────────────────────────────────────────────
// /lib/fetchers/publications.ts   (PubMed + NIH grant filter)
// ─────────────────────────────────────────────────────────
import { safeFetchJson } from './safeFetchJson'

interface ESearchResponse {
  esearchresult?: { count?: string }
}

export type PublicationsResult = {
  total: number | null
  reporterURL: string | null
} | null

const BASE =
  'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi' +
  '?db=pubmed&retmode=json&retmax=0' 

export async function fetchPublications(
  term: string
): Promise<PublicationsResult> {
  const query = `${encodeURIComponent(term)}+AND+nih%5Bgr%5D`
  const url = `${BASE}&term=${query}`

  const data = await safeFetchJson<ESearchResponse>(url)
  const total = data?.esearchresult?.count
    ? Number(data.esearchresult.count)
    : null

  return {
    total,
    reporterURL: `https://pubmed.ncbi.nlm.nih.gov/?term=${query}`,
  }
}
