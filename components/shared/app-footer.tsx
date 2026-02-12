'use client'

import { cn } from '@/lib/utils'

interface AppFooterProps {
  className?: string
}

export function AppFooter({ className }: AppFooterProps) {
  return (
    <footer
      className={cn(
        'border-t border-border bg-card px-4 sm:px-6 lg:px-8 py-4',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="PrimeTools"
            className="h-5 w-auto opacity-70"
          />
          <div className="text-xs text-muted-foreground">
            <span>Built with PrimeTools</span>
            <span className="mx-1.5 text-border">|</span>
            <span>PrimeMover Internal Tools Platform</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href="#"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
          >
            Help
          </a>
        </div>
      </div>
    </footer>
  )
}
