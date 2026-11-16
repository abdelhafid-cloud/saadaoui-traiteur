import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-[var(--radius-sm)] border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--color-primary)] text-white',
        secondary:
          'border-transparent bg-[color-mix(in_srgb,var(--color-gold)_18%,transparent)] text-[var(--color-gold)]',
        outline: 'border-[var(--color-border)] text-[var(--color-text)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
