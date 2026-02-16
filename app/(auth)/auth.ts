import NextAuth, { type DefaultSession } from 'next-auth'
import { authConfig } from './auth.config'
import type { DefaultJWT, JWT } from 'next-auth/jwt'

const isDevelopment = process.env.NODE_ENV === 'development'

if (!process.env.AUTH_SECRET && isDevelopment) {
  console.warn(
    '⚠️  AUTH_SECRET not found. Using default secret for development.\n' +
      'For production, please set AUTH_SECRET in your environment variables.\n',
  )
  process.env.AUTH_SECRET = 'dev-secret-key-not-for-production'
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user']
    error?: 'RefreshTokenError'
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
    error?: 'RefreshTokenError'
  }
}

async function refreshAccessToken(
  token: JWT,
) {
  const issuer = process.env.AUTH_HUB_ISSUER
  const clientId = process.env.AUTH_HUB_CLIENT_ID
  const clientSecret = process.env.AUTH_HUB_CLIENT_SECRET

  if (!issuer || !clientId || !clientSecret || !token.refreshToken) {
    return { ...token, error: 'RefreshTokenError' as const }
  }

  try {
    const response = await fetch(`${issuer}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    })

    if (!response.ok) {
      console.warn(`Token refresh failed (${response.status})`)
      return { ...token, error: 'RefreshTokenError' as const }
    }

    const data = await response.json()

    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? token.refreshToken,
      expiresAt: Math.floor(Date.now() / 1000) + (data.expires_in ?? 3600),
      error: undefined,
    }
  } catch (error) {
    console.error('Token refresh error:', error)
    return { ...token, error: 'RefreshTokenError' as const }
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === 'dev-credentials') {
        return !!user?.email
      }
      if (!profile?.email) return false
      return true
    },
    async jwt({ token, profile, account }) {
      // Dev credentials sign-in
      if (account?.provider === 'dev-credentials') {
        return token
      }

      // Initial OIDC sign-in: capture tokens from callback
      if (account && profile) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at
        return token
      }

      // Token still valid — return as-is
      if (token.expiresAt && Date.now() / 1000 < token.expiresAt - 300) {
        return token
      }

      // Access token expired — attempt refresh
      return refreshAccessToken(token)
    },
    async session({ session, token }) {
      if (token.error) {
        session.error = token.error
      }
      return session
    },
  },
})
