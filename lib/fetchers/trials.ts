export async function fetchTrials(term: string): Promise<number | null> {
  try {
    const classes = ['NIH', 'FED']
    let total = 0

    for (const cls of classes) {
      const adv = encodeURIComponent(`AREA[LeadSponsorClass]${cls}`)
      const url =
        'https://clinicaltrials.gov/api/v2/studies' +
        `?query.term=${encodeURIComponent(term)}` +
        `&filter.advanced=${adv}` +
        `&countTotal=true` +
        `&pageSize=0` +
        `&format=json`

      console.log(`[fetchTrials] URL for ${cls} →`, url)
      const res = await fetch(url, { headers: { Accept: 'application/json' } })
      console.log(
        `[fetchTrials] status for ${cls} →`,
        res.status,
        res.statusText
      )

      const raw = await res.text()
      console.log(`[fetchTrials] raw body for ${cls} →`, raw)

      const json = JSON.parse(raw)
      console.log(
        `[fetchTrials] parsed JSON for ${cls} → totalCount:`,
        json.totalCount
      )
      if (typeof json.totalCount !== 'number') return null

      total += json.totalCount
    }

    console.log('[fetchTrials] combined total →', total)
    return total
  } catch (err) {
    console.error('[fetchTrials]', err)
    return null
  }
}
