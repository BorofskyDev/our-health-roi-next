// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server'
import {
  fetchProjects,
  fetchPublications,
  fetchPatents,
  fetchTrials,
} from '@/lib'

export const dynamic = 'force-dynamic' // ensures fresh data in dev

export async function GET(req: NextRequest) {
  const term = req.nextUrl.searchParams.get('q')?.trim().toLowerCase() || ''
  if (!term) return NextResponse.json({ error: 'Missing q' }, { status: 400 })

  try {
    const [projects, publications, patents, trials] = await Promise.all([
      fetchProjects(term),
      fetchPublications(term),
      fetchPatents(term),
      fetchTrials(term),
    ])

    /** Cache for 24 h at Vercel’s edge; tweak as you like */
    const headers = {
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    }

    return NextResponse.json(
      { term, projects, publications, patents, trials },
      { headers }
    )
  } catch (err: unknown) {
    console.error('[search route] ', err)
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
