import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-primary to-[oklch(0.25_0.05_55)] text-primary-foreground shadow-md hover:from-[oklch(0.34_0.05_55)] hover:to-[oklch(0.28_0.05_55)] active:from-[oklch(0.22_0.05_55)] active:to-[oklch(0.20_0.05_55)] dark:from-accent dark:to-[oklch(0.68_0.14_80)] dark:text-accent-foreground dark:shadow-[0_1px_3px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] dark:hover:from-[oklch(0.82_0.15_85)] dark:hover:to-[oklch(0.72_0.14_80)] dark:active:from-[oklch(0.70_0.14_80)] dark:active:to-[oklch(0.64_0.13_78)]',
        destructive:
          'bg-gradient-to-b from-destructive to-[oklch(0.50_0.24_27)] text-white shadow-md hover:from-[oklch(0.62_0.24_27)] hover:to-[oklch(0.54_0.24_27)] active:from-[oklch(0.48_0.24_27)] active:to-[oklch(0.45_0.24_27)] dark:from-destructive dark:to-[oklch(0.60_0.19_22)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] dark:hover:from-[oklch(0.75_0.19_22)] dark:hover:to-[oklch(0.65_0.19_22)] dark:active:from-[oklch(0.62_0.19_22)] dark:active:to-[oklch(0.58_0.19_22)] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-input bg-card shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] hover:bg-accent/20 hover:border-ring/50 hover:text-accent-foreground active:bg-accent/30 dark:bg-input/20 dark:border-input dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] dark:hover:bg-input/40 dark:hover:border-ring/40 dark:active:bg-input/50',
        secondary:
          'bg-gradient-to-b from-secondary to-[oklch(0.86_0.02_70)] text-secondary-foreground shadow-sm hover:from-[oklch(0.93_0.02_70)] hover:to-[oklch(0.89_0.02_70)] active:from-[oklch(0.84_0.02_70)] active:to-[oklch(0.82_0.02_70)] dark:from-secondary dark:to-[oklch(0.18_0.03_52)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:from-[oklch(0.26_0.03_52)] dark:hover:to-[oklch(0.22_0.03_52)] dark:active:from-[oklch(0.19_0.03_52)] dark:active:to-[oklch(0.17_0.03_52)]',
        ghost:
          'hover:bg-accent/15 hover:text-accent-foreground active:bg-accent/25 dark:hover:bg-accent/10 dark:active:bg-accent/20',
        link: 'text-primary underline-offset-4 hover:underline active:opacity-80',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
