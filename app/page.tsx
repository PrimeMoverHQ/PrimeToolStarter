import { AppHeader } from '@/components/shared/app-header'
import { AppFooter } from '@/components/shared/app-footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg">
          <img
            src="/logo.png"
            alt="PrimeTools"
            className="h-10 w-auto mx-auto mb-6"
          />
          <h1 className="text-2xl font-semibold text-foreground">
            Welcome to your app
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Built with PrimeTools starter template. Edit{' '}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-md">
              app/page.tsx
            </code>{' '}
            to get started.
          </p>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
