// lib/utils/fetchWithRetry.ts

export async function fetchWithRetry(
  input: RequestInfo | URL,
  init?: RequestInit,
  maxRetries = 2,
  baseDelay = 500
) {
  let attempt = 0
  // eslint‑disable-next-line no-constant-condition
  while (true) {
    try {
      const res = await fetch(input, init)
      if (res.ok || (res.status >= 400 && res.status < 500)) return res

      throw new Error(`HTTP ${res.status}`)
    } catch (err: unknown) {
      if (attempt >= maxRetries) throw err
      const delay = baseDelay * 2 ** attempt
      await new Promise((r) => setTimeout(r, delay))
      attempt++
    }
  }
}
