import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-3 text-sm text-[var(--color-heading)] transition-colors placeholder:text-[var(--color-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
