// lib/fetchers/patents.ts
export async function fetchPatents(term: string) {
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

  const res = await fetch('https://api.patentsview.org/patents/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error(`PatentsView error ${res.status}`)
  const data = await res.json()
  return data.total_patent_count ?? 0
}
