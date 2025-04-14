// lib/fetchers/trials.ts
export async function fetchTrials(term: string) {
  const url =
    'https://clinicaltrials.gov/api/v2/studies' +
    `?query.cond=${encodeURIComponent(term)}&countTotal=true&pageSize=0`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`CT.gov error ${res.status}`)
  const data = await res.json()
  return data.totalCount ?? 0
}
