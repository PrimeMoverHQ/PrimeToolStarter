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
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#faf8f5] dark:bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-amber-200/60 shadow-[0_8px_30px_rgba(120,80,20,0.08)] dark:border-border dark:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-amber-200/60 bg-gradient-to-b from-amber-50 to-white px-4 py-6 pt-8 text-center sm:px-16 dark:border-border dark:from-amber-950/40 dark:to-background">
          <img
            src="/logo.png"
            alt="PM Framework"
            width={240}
            height={240}
            className="rounded-xl"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-16 dark:bg-muted/50">
          {error && (
            <div className="rounded-md bg-red-50 border border-red-200 px-3 py-1.5 text-center text-xs font-medium text-red-600 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400">
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
            className="w-full rounded-lg border border-amber-200/80 bg-amber-50/30 px-4 py-3 text-sm text-foreground outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 dark:border-border dark:bg-background dark:focus:border-amber-500/50 dark:focus:ring-amber-500/50"
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
              'text-[#5a3a08] bg-[linear-gradient(175deg,#f0d78a_0%,#e2be5a_40%,#d4a83a_70%,#c89628_100%)]',
              'shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_-1px_0_0_rgba(0,0,0,0.08)_inset,0_4px_12px_rgba(180,130,30,0.2),0_1px_3px_rgba(180,130,30,0.15),0_0_0_1px_rgba(180,130,30,0.25)]',
              'hover:shadow-[0_1px_0_0_rgba(255,255,255,0.55)_inset,0_-1px_0_0_rgba(0,0,0,0.08)_inset,0_6px_16px_rgba(180,130,30,0.25),0_2px_4px_rgba(180,130,30,0.2),0_0_0_1px_rgba(180,130,30,0.3)]',
              'hover:brightness-105',
              'dark:text-[#3b2506] dark:bg-[linear-gradient(175deg,#e8cf8b_0%,#c9a84e_40%,#b8922f_70%,#a67c1a_100%)]',
              'dark:shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset,0_-1px_0_0_rgba(0,0,0,0.15)_inset,0_4px_12px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.25),0_0_0_1px_rgba(120,80,10,0.4)]',
              'dark:hover:shadow-[0_1px_0_0_rgba(255,255,255,0.45)_inset,0_-1px_0_0_rgba(0,0,0,0.15)_inset,0_6px_16px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,80,10,0.5)]',
              'dark:hover:brightness-110',
            ].join(' ')}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
      <p className="mt-8 text-xs text-amber-800/40 dark:text-muted-foreground">Prime Mover LLC</p>
    </div>
  )
}
