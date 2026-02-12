import Link from 'next/link'
import { AppHeader } from '@/components/shared/app-header'
import { AppFooter } from '@/components/shared/app-footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="text-6xl font-bold text-primary">404</p>
          <h1 className="mt-4 text-xl font-semibold text-foreground">
            Page not found
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
