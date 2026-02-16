'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AppFooterProps {
  className?: string
}

export function AppFooter({ className }: AppFooterProps) {
  return (
    <footer
      className={cn(
        'border-t border-border bg-muted px-4 sm:px-6 lg:px-8 py-4',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/pm-icon.png"
            alt="PrimeMover"
            className="h-5 w-5 rounded-sm opacity-70"
          />
          <span className="text-xs text-muted-foreground">
            &copy; Prime Mover LLC
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
