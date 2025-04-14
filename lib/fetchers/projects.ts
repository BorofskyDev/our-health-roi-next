// lib/fetchers/projects.ts
export async function fetchProjects(term: string) {
  const payload = {
    criteria: {
      advanced_text_search: {
        operator: 'and',
        search_field: 'all',
        search_text: term,
      },
    },
    offset: 0,
    limit: 1,
    include_fields: ['ProjectNum'],
  }

  const res = await fetch('https://api.reporter.nih.gov/v2/projects/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    // NIH asks for ≤ 1 req / sec per IP
  })

  if (!res.ok) throw new Error(`NIH error ${res.status}`)
  const data = await res.json()

  return {
    total: data.meta?.total ?? 0,
    searchId: data.meta?.search_id ?? null,
    reporterURL: data.meta?.properties?.URL ?? null,
  }
}




