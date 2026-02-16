import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const isDevelopment = process.env.NODE_ENV === 'development'

const authHubProvider = {
  id: 'auth-hub',
  name: 'Auth Hub',
  type: 'oidc' as const,
  issuer: process.env.AUTH_HUB_ISSUER,
  clientId: process.env.AUTH_HUB_CLIENT_ID,
  clientSecret: process.env.AUTH_HUB_CLIENT_SECRET,
  authorization: {
    params: {
      scope: 'openid email profile',
    },
  },
}

const devCredentialsProvider = Credentials({
  id: 'dev-credentials',
  name: 'Dev Login',
  credentials: {
    email: { label: 'Email', type: 'email' },
  },
  async authorize(credentials) {
    const email = credentials.email as string
    if (!email) return null
    return { id: email, email, name: email.split('@')[0] }
  },
})

const cookieDomain = process.env.AUTH_COOKIE_DOMAIN

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: '/login',
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: isDevelopment
    ? [devCredentialsProvider, authHubProvider]
    : [authHubProvider],
  callbacks: {},
  ...(cookieDomain && {
    cookies: {
      sessionToken: {
        name: 'authjs.session-token',
        options: {
          httpOnly: true,
          sameSite: 'lax' as const,
          path: '/',
          secure: true,
          domain: cookieDomain,
        },
      },
    },
  }),
} satisfies NextAuthConfig
