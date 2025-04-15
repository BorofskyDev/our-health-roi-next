// lib/fetchers/patents.ts
import { safeFetchJson } from './safeFetchJson'

interface PatentsViewResponse {
  total_patent_count?: number
}

export async function fetchPatents(term: string): Promise<number | null> {
  const payload = {
    q: {
      _or: [
        { _text_any: { patent_title: term } },
        { _text_any: { patent_abstract: term } },
      ],
    },
    f: ['patent_number'],
    o: { per_page: 1 },
  }

  const data = await safeFetchJson<PatentsViewResponse>(
    'https://api.patentsview.org/patents/query',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  )

  // use for testing bad connections

  //  const data = await safeFetchJson<PatentsViewResponse>(
  //    'https://api.patentsview.org-BAD-API/patents/query',
  //    {
  //      method: 'POST',
  //      headers: { 'Content-Type': 'application/json' },
  //      body: JSON.stringify(payload),
  //    }
  //  )

  return data?.total_patent_count ?? null
}
