import { safeFetchJson } from './safeFetchJson'

type PubMedCount = { esearchresult?: { count: string } }

export async function fetchPublications(term: string): Promise<number | null> {
  const url =
    'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi' +
    `?db=pubmed&retmode=json&rettype=count&term=${encodeURIComponent(term)}`

    // use for testing bad connections
  // const url =
  //   'https://eutils.ncbi.nlm.nih.gov-BAD/api/entrez/eutils/esearch.fcgi' +
  //   `?db=pubmed&retmode=json&rettype=count&term=${encodeURIComponent(term)}`

  const data = await safeFetchJson<PubMedCount>(url)
  return data ? (data.esearchresult?.count ? Number(data.esearchresult.count) : 0) : null;
}
