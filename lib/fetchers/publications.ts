// lib/fetchers/publications.ts
export async function fetchPublications(term: string) {
  const url =
    'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi' +
    `?db=pubmed&retmode=json&rettype=count&term=${encodeURIComponent(term)}`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`PubMed error ${res.status}`)
  const data = await res.json()
  return +data.esearchresult?.count || 0
}
