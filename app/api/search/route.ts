// /app/api/search/route.ts

import { NextRequest, NextResponse } from 'next/server'


// -------- DEVELOPMENT‑ONLY SETTINGS ---------------------
// Uncomment **only** while debugging locally:
// export const dynamic = 'force-dynamic' // ensures fresh data every hit
// --------------------------------------------------------


export const revalidate = 86400


const API_BASE = process.env.DATA_API_BASE_URL!
if (!API_BASE) {
  throw new Error('Missing DATA_API_BASE_URL env var')
}


const TIMEOUT_MS = 8_000 
const MAX_RETRIES = 2 
const BACKOFF_BASE_MS = 1_000 

const MAX_TERM_LEN = 80

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchWithTimeout(
  input: RequestInfo,
  init: RequestInit = {},
  timeoutMs = TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)
  try {
    return await fetch(input, { ...init, signal: controller.signal })
  } catch (err: unknown) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error('Request timed out')
    } else if (err instanceof Error) {
      throw err
    }
    throw new Error(String(err))
  } finally {
    clearTimeout(id)
  }
}

async function fetchWithRetry(
  input: RequestInfo,
  init: RequestInit = {},
  retries = MAX_RETRIES,
  backoffBase = BACKOFF_BASE_MS
): Promise<Response> {
  let attempt = 0
  while (true) {
    try {
      const res = await fetchWithTimeout(input, init)
      if (!res.ok) {
        throw new Error(`Upstream error: ${res.status}`)
      }
      return res
    } catch (err) {
      attempt++
      if (attempt > retries) throw err
      await delay(backoffBase * Math.pow(2, attempt - 1))
    }
  }
}

export async function GET(req: NextRequest) {
  const term = req.nextUrl.searchParams.get('q')?.trim().toLowerCase() ?? ''
  if (!term) {
    return NextResponse.json({ error: 'Missing q' }, { status: 400 })
  }
  if (term.length > MAX_TERM_LEN) {
    return NextResponse.json({ error: 'Query too long' }, { status: 422 })
  }

  try {
   
    const projectsP = fetchWithRetry(
      `${API_BASE}/projects?q=${encodeURIComponent(term)}`
    ).then((r) => r.json())
    const publicationsP = fetchWithRetry(
      `${API_BASE}/publications?q=${encodeURIComponent(term)}`
    ).then((r) => r.json())
    const patentsP = fetchWithRetry(
      `${API_BASE}/patents?q=${encodeURIComponent(term)}`
    ).then((r) => r.json())
    const trialsP = fetchWithRetry(
      `${API_BASE}/trials?q=${encodeURIComponent(term)}`
    ).then((r) => r.json())

    const [projects, publications, patents, trials] = await Promise.all([
      projectsP,
      publicationsP,
      patentsP,
      trialsP,
    ])

    const headers = {
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    }
    return NextResponse.json(
      { term, projects, publications, patents, trials },
      { headers }
    )
  } catch (err: unknown) {
    console.error('[search route]', err)
    const isTimeout = err instanceof Error && err.message === 'Request timed out'
    const message = isTimeout
      ? 'The request took too long. Please try again.'
      : err instanceof Error
      ? err.message
      : 'Unknown error'
    const status = isTimeout ? 504 : 500
    return NextResponse.json({ error: message }, { status })
  }
}
