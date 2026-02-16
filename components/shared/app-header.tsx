'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AppHeaderProps {
  className?: string
}

export function AppHeader({ className }: AppHeaderProps) {
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
        <div className="flex items-center justify-center h-14">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="PM Framework"
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
