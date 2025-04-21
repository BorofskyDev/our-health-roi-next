// ─────────────────────────────────────────────────────────
// /app/api/search/route.ts
// ─────────────────────────────────────────────────────────
import { NextRequest, NextResponse } from 'next/server'
import {
  fetchProjects,
  fetchPublications,
  fetchPatents,
  fetchTrials,
} from '@/lib'

// -------- DEVELOPMENT‑ONLY SETTINGS ---------------------
// Uncomment **only** while debugging locally:
// export const dynamic = 'force-dynamic' // ensures fresh data every hit
// --------------------------------------------------------


export const revalidate = 86400


const MAX_TERM_LEN = 80

export async function GET(req: NextRequest) {
  const term = req.nextUrl.searchParams.get('q')?.trim().toLowerCase() ?? ''

  if (!term) return NextResponse.json({ error: 'Missing q' }, { status: 400 })
  if (term.length > MAX_TERM_LEN)
    return NextResponse.json({ error: 'Query too long' }, { status: 422 })

  try {
    // Fan‑out in parallel
    const [projects, publications, patents, trials] = await Promise.all([
      fetchProjects(term),
      fetchPublications(term),
      fetchPatents(term),
      fetchTrials(term),
    ])

    const headers = {
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    }

    return NextResponse.json(
      { term, projects, publications, patents, trials },
      { headers }
    )
  } catch (err) {
    console.error('[search route]', err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
