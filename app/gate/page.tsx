'use client'

import { useState } from 'react'

export default function GatePage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/gate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Invalid password')
        return
      }

      window.location.href = '/'
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-border bg-gradient-to-b from-amber-950/40 to-background px-4 py-6 pt-8 text-center sm:px-16">
          <img
            src="/logo.png"
            alt="PM Framework"
            width={240}
            height={240}
            className="rounded-xl"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-muted/50 px-4 py-8 sm:px-16">
          {error && (
            <div className="rounded-md bg-red-500/10 border border-red-500/20 px-3 py-1.5 text-center text-xs font-medium text-red-400">
              {error}
            </div>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            autoFocus
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '13px 24px',
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              cursor: loading ? 'default' : 'pointer',
              border: 'none',
              borderRadius: '10px',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: loading ? 0.6 : 1,
            }}
            className={[
              'dark:text-[#3b2506] dark:bg-[linear-gradient(175deg,#e8cf8b_0%,#c9a84e_40%,#b8922f_70%,#a67c1a_100%)]',
              'dark:shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset,0_-1px_0_0_rgba(0,0,0,0.15)_inset,0_4px_12px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.25),0_0_0_1px_rgba(120,80,10,0.4)]',
              'dark:hover:shadow-[0_1px_0_0_rgba(255,255,255,0.45)_inset,0_-1px_0_0_rgba(0,0,0,0.15)_inset,0_6px_16px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,80,10,0.5)]',
              'dark:hover:brightness-110',
              'text-white bg-[linear-gradient(175deg,#8b6914_0%,#6b4f10_40%,#5a420d_70%,#4a350a_100%)]',
              'shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_-1px_0_0_rgba(0,0,0,0.2)_inset,0_4px_12px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.1),0_0_0_1px_rgba(90,60,10,0.3)]',
              'hover:shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_-1px_0_0_rgba(0,0,0,0.2)_inset,0_6px_16px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15),0_0_0_1px_rgba(90,60,10,0.4)]',
              'hover:brightness-115',
            ].join(' ')}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">password: Think&amp;GrowRich$100M</p>
      <p className="mt-2 text-xs text-muted-foreground">Prime Mover LLC</p>
    </div>
  )
}
