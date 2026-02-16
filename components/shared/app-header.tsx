'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { signOutAction } from '@/app/(auth)/actions'

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/design-system', label: 'Design System' },
]

interface AppHeaderProps {
  className?: string
}

export function AppHeader({ className }: AppHeaderProps) {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 backdrop-blur-xl',
        'bg-[oklch(0.30_0.05_55/85%)] text-primary-foreground border-b border-[oklch(0.25_0.04_55/30%)] shadow-[0_1px_3px_0_oklch(0.20_0.03_50/15%)]',
        'dark:bg-[oklch(0.10_0.02_50/80%)] dark:text-[oklch(0.90_0.015_72)] dark:border-[oklch(0.93_0.015_72/8%)] dark:shadow-[0_1px_3px_0_oklch(0_0_0/30%)]',
        className,
      )}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="PM Framework"
              className="h-6 w-auto"
            />
          </Link>

          <div className="flex items-center gap-1">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3 py-1.5 rounded-md text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-white/15 text-primary-foreground dark:text-white'
                        : 'text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/10 dark:text-white/60 dark:hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="ml-2 border-l border-primary-foreground/20 dark:border-white/20 pl-2">
              <ThemeToggle />
            </div>
            {session?.user && (
              <div className="ml-1 border-l border-primary-foreground/20 dark:border-white/20 pl-2 flex items-center gap-2">
                <span className="text-xs text-primary-foreground/70 dark:text-white/70 hidden sm:inline">
                  {session.user.email}
                </span>
                <form action={signOutAction}>
                  <button
                    type="submit"
                    className="p-1.5 rounded-md text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/10 dark:text-white/60 dark:hover:text-white transition-colors"
                    title="Sign out"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
