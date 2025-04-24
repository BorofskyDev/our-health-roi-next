// File: /app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { fetchProjects, fetchPublications, fetchTrials } from '@/lib/fetchers'

export const revalidate = 86400 // 24h cache
const MAX_TERM_LEN = 80

export async function GET(req: NextRequest) {
  const term = req.nextUrl.searchParams.get('q')?.trim().toLowerCase() ?? ''

  if (!term) return NextResponse.json({ error: 'Missing q' }, { status: 400 })
  if (term.length > MAX_TERM_LEN)
    return NextResponse.json({ error: 'Query too long' }, { status: 422 })

  try {

    const projects = await fetchProjects(term)
    if (!projects) throw new Error('Failed to fetch NIH projects')

    const { searchId } = projects
    if (!searchId)
      throw new Error('No search_id returned - cannot create NIH Reporter URLs')

  
    const baseURL = `https://reporter.nih.gov/search/${searchId}`
    const urls = {
      projects: `${baseURL}/projects`,
      publications: `${baseURL}/publications`,
      trials: `${baseURL}/clinicalStudies`,
    }

  
    const [pubCount, trialCount] = await Promise.all([
      fetchPublications(term), // Use the search term
      fetchTrials(term), // Use the search term
    ])


    return NextResponse.json(
      {
        term,
        projects: {
          total: projects.total,
          reporterURL: urls.projects,
        },
        publications: {
          total: pubCount,
          reporterURL: urls.publications,
        },
        trials: {
          total: trialCount,
          reporterURL: urls.trials
        },
      },
      { headers: { 'Cache-Control': 's-maxage=86400, stale-while-revalidate' } }
    )
  } catch (err) {
    console.error('[search route]', err)
    const msg = err instanceof Error ? err.message : 'Unknown downstream error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
