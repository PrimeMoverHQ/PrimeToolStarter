import { AppHeader } from '@/components/shared/app-header'
import { AppFooter } from '@/components/shared/app-footer'

export const metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: February 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">
              1. Scope
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This privacy policy applies to this internal PrimeMover tool. It
              is not a public-facing application and is used exclusively by
              PrimeMover team members.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">
              2. Data We Collect
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We collect basic authentication information (name, email) through
              PrimeMover&apos;s internal auth system, along with any data you
              enter while using the tool. Usage logs may be collected for
              debugging and improvement purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">
              3. How We Use Your Data
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your data is used to provide the tool&apos;s functionality,
              authenticate your identity, and improve the application. We do not
              sell, share, or distribute your data outside of PrimeMover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">
              4. Data Storage
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data is stored securely using industry-standard practices. Access
              is restricted to authorized team members and systems required for
              the tool to function.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">
              5. Third-Party Services
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This tool may integrate with third-party APIs and services to
              provide its functionality. Data shared with these services is
              limited to what is necessary for operation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">
              6. Contact
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have questions about this policy, reach out to the
              PrimeMover team through internal channels.
            </p>
          </section>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
