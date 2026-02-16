import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.json({ success: true })

  const cookieOptions: Record<string, unknown> = {
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 0,
  }

  const cookieDomain = process.env.COOKIE_DOMAIN
  if (cookieDomain) {
    cookieOptions.domain = cookieDomain
  }

  res.cookies.set('primetools_session', '', cookieOptions)

  return res
}
