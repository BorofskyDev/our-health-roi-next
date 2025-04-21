// /middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_req: NextRequest) {
  void _req;
  const res = NextResponse.next()

  res.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' https: 'unsafe-inline'; " +
      "style-src 'self' https: 'unsafe-inline'; img-src 'self' data: https:; " +
      "connect-src 'self' https:;"
  )
  res.headers.set('X-Frame-Options', 'DENY')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return res
}

export const config = {
  matcher: '/:path*',
}
