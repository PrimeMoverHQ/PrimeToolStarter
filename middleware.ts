import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

function getSecret() {
  const secret = process.env.PRIMETOOLS_SECRET
  if (!secret) throw new Error('PRIMETOOLS_SECRET is not set')
  return new TextEncoder().encode(secret)
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip auth for gate paths
  if (pathname === '/gate' || pathname === '/api/gate' || pathname === '/api/logout') {
    return NextResponse.next()
  }

  const token = request.cookies.get('primetools_session')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/gate', request.url))
  }

  try {
    await jwtVerify(token, getSecret(), { algorithms: ['HS256'] })
    return NextResponse.next()
  } catch {
    // Invalid or expired token — clear cookie and redirect
    const response = NextResponse.redirect(new URL('/gate', request.url))
    response.cookies.set('primetools_session', '', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    })
    return response
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.svg$|.*\\.jpg$|.*\\.ico$|.*\\.webp$).*)',
  ],
}
