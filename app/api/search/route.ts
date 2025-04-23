// ─────────────────────────────────────────────────────────
// /app/api/search/route.ts
// ─────────────────────────────────────────────────────────
import { NextRequest, NextResponse } from 'next/server'
import {
  fetchProjects,
  fetchPublications,
  fetchPatents,
  fetchTrials,
} from '@/lib/fetchers' 

export const revalidate = 86400 // 24 h edge cache

const MAX_TERM_LEN = 80

export async function GET(req: NextRequest) {
  const term = req.nextUrl.searchParams.get('q')?.trim().toLowerCase() ?? ''

  if (!term) return NextResponse.json({ error: 'Missing q' }, { status: 400 })
  if (term.length > MAX_TERM_LEN)
    return NextResponse.json({ error: 'Query too long' }, { status: 422 })

  try {
    // fan-out the four NIH calls in parallel
    const [projects, publications, patents, trials] = await Promise.all([
      fetchProjects(term),
      fetchPublications(term),
      fetchPatents(term),
      fetchTrials(term),
    ])

    return NextResponse.json(
      { term, projects, publications, patents, trials },
      { headers: { 'Cache-Control': 's-maxage=86400, stale-while-revalidate' } }
    )
  } catch (err) {
    console.error('[search route]', err)
    const msg = err instanceof Error ? err.message : 'Unknown downstream error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
