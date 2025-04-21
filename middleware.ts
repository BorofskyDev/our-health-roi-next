// /middleware.ts
import { NextResponse } from 'next/server'

export function middleware() {
  const res = NextResponse.next()


  if (process.env.NODE_ENV === 'production') {
    res.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' https: 'unsafe-inline'; " +
        "style-src 'self' https: 'unsafe-inline'; img-src 'self' data: https:; " +
        "connect-src 'self' https:;"
    )
    res.headers.set('X-Frame-Options', 'DENY')
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  } else {
   
    res.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: blob: https:; " +
        "connect-src 'self' http: https: ws:;"
    )
  }

  return res
}

export const config = {
  matcher: '/:path*',
}
