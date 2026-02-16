import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '../auth'
import { signInAction, devSignInAction } from '../actions'

const isDevelopment = process.env.NODE_ENV === 'development'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default async function LoginPage() {
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-border bg-gradient-to-b from-amber-950/40 to-background px-4 py-6 pt-8 text-center sm:px-16">
          <img
            src="/logo.png"
            alt="PM Framework"
            width={56}
            height={56}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col space-y-4 bg-muted/50 px-4 py-8 sm:px-16">
          {isDevelopment && (
            <form action={devSignInAction} className="flex flex-col gap-3">
              <div className="rounded-md bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 text-center text-xs font-medium text-amber-400">
                Dev Mode
              </div>
              <input
                name="email"
                type="email"
                placeholder="dev@example.com"
                defaultValue="dev@primemoverhq.com"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-600 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors"
              >
                Dev Sign In
              </button>
            </form>
          )}
          {!isDevelopment && (
            <form action={signInAction}>
              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "13px 24px",
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  color: "#3b2506",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "10px",
                  background: "linear-gradient(175deg, #e8cf8b 0%, #c9a84e 40%, #b8922f 70%, #a67c1a 100%)",
                  boxShadow: "0 1px 0 0 rgba(255,255,255,0.35) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 4px 12px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.25), 0 0 0 1px rgba(120,80,10,0.4)",
                  textShadow: "0 1px 0 rgba(255,220,140,0.4)",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85, flexShrink: 0 }}>
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span>Sign in with Auth Hub</span>
              </button>
            </form>
          )}
        </div>
      </div>
      <p className="mt-8 text-xs text-muted-foreground">Prime Mover LLC</p>
    </div>
  )
}
