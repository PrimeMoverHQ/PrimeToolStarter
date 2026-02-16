'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GatePage() {
  const router = useRouter()
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

      router.push('/')
      router.refresh()
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
            width={56}
            height={56}
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
            className="w-full rounded-lg bg-amber-600 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
      <p className="mt-8 text-xs text-muted-foreground">Prime Mover LLC</p>
    </div>
  )
}
