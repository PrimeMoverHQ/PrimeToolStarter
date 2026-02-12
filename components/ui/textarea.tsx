import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-card px-3 py-2 text-base shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] transition-[color,box-shadow,border-color] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'hover:border-ring/50',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]',
        'dark:bg-input/30 dark:border-input dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] dark:hover:border-ring/40 dark:focus-visible:shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
