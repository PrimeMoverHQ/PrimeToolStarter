import NextAuth from 'next-auth'
import { authConfig } from './app/(auth)/auth.config'
import { NextResponse } from 'next/server'

export default NextAuth(authConfig).auth((req) => {
  const { pathname } = req.nextUrl
  const isLoggedIn = !!req.auth

  if (!isLoggedIn) {
    if (pathname === '/login') {
      return
    }
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api/auth|.*\\.png$|.*\\.svg$|.*\\.jpg$|.*\\.ico$|.*\\.webp$).*)',
  ],
}
