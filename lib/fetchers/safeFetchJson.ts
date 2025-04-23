// lib/fetchers/safeFetchJson.ts

import { fetchWithRetry } from './fetchWithRetry'


export async function safeFetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T | null> {
  try {
    const res = await fetchWithRetry(input, init)
    if (!res.ok) {
      console.error(
        `Failed to fetch from ${input}: ${res.status} ${res.statusText}`
      )
      const errorText = await res.text()
      console.error(`Error details: ${errorText}`)
      return null
    }
    const data = (await res.json()) as unknown
    return data as T
  } catch (error) {
    console.error(`Exception when fetching from ${input}:`, error)
    return null
  }
}
