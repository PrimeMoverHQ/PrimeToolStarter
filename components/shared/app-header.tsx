'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/shared/theme-toggle'

interface AppHeaderProps {
  className?: string
}

export function AppHeader({ className }: AppHeaderProps) {
  return (
    <header
      className={cn(
        'bg-primary text-primary-foreground border-b border-primary/80 dark:bg-background/80 dark:text-foreground dark:border-input dark:backdrop-blur-md',
        className,
      )}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="PrimeTools"
              className="h-7 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
