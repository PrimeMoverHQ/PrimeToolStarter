import type { Metadata } from 'next'
import { Fira_Sans, Fira_Code } from 'next/font/google'
import { consoleCaptureScript } from '@/lib/console-capture'
import './globals.css'

const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'PrimeTools',
    template: '%s | PrimeTools',
  },
  description:
    'Built with PrimeTools - PrimeMover Internal Tools Platform',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var prefersDark = !window.matchMedia('(prefers-color-scheme: light)').matches;
                if (prefersDark) {
                  document.documentElement.classList.add('dark');
                }
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                  if (e.matches) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                });
              })();
            `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: consoleCaptureScript }} />
      </head>
      <body
        className={`${firaSans.variable} ${firaCode.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
        </div>
        {children}
      </body>
    </html>
  )
}
