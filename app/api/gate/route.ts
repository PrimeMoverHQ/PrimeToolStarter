import { NextResponse } from 'next/server'
import { signGateToken } from '@/lib/gate'

const isDev = process.env.NODE_ENV === 'development'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 })
    }

    let token: string

    if (isDev) {
      // Dev mode: accept any password, self-sign
      token = await signGateToken()
    } else {
      // Production: forward to AuthHub
      const authHubUrl = process.env.AUTH_HUB_URL
      if (!authHubUrl) {
        return NextResponse.json({ error: 'AUTH_HUB_URL not configured' }, { status: 500 })
      }

      const response = await fetch(`${authHubUrl}/primetools/gate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        return NextResponse.json(
          { error: data.error || 'Invalid password' },
          { status: response.status },
        )
      }

      const data = await response.json()
      token = data.token
    }

    const res = NextResponse.json({ success: true })

    const cookieOptions: Record<string, unknown> = {
      httpOnly: true,
      sameSite: 'lax' as const,
      path: '/',
      maxAge: 43200, // 12 hours
    }

    if (!isDev) {
      cookieOptions.secure = true
    }

    const cookieDomain = process.env.COOKIE_DOMAIN
    if (cookieDomain) {
      cookieOptions.domain = cookieDomain
    }

    res.cookies.set('primetools_session', token, cookieOptions)

    return res
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
