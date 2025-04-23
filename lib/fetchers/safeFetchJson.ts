// lib/fetchers/safeFetchJson.ts

import { fetchWithRetry } from './fetchWithRetry'


export async function safeFetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T | null> {
  try {
    const res = await fetchWithRetry(input, init)
    if (!res.ok) return null
    const data = (await res.json()) as unknown
    return data as T
  } catch {
    return null
  }
}
