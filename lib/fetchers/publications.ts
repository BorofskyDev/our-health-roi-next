// File: /lib/fetchers/publications.ts
import { safeFetchJson } from './safeFetchJson'

type PubMedCount = { esearchresult?: { count: string } }

/**
 * Fetch publication count from PubMed with NIH funding filter
 * @param term - search term
 */
export async function fetchPublications(term: string): Promise<number | null> {
  try {
    // Use the NIH funding filter (nih[gr]) to limit to NIH-funded research
    const nihFilter = encodeURIComponent('nih[gr]')
    const url =
      'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi' +
      `?db=pubmed&retmode=json&rettype=count&term=${encodeURIComponent(
        term
      )}+AND+${nihFilter}`

    const data = await safeFetchJson<PubMedCount>(url)
    return data?.esearchresult?.count ? Number(data.esearchresult.count) : null
  } catch (err) {
    console.error('[fetchPublications]', err)
    return null
  }
}
