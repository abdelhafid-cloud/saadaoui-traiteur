import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
        secondary:
          'bg-[var(--color-gold)] text-white hover:bg-[color-mix(in_srgb,var(--color-gold)_88%,black)]',
        outline:
          'border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
        ghost:
          'bg-transparent text-[var(--color-heading)] hover:bg-[color-mix(in_srgb,var(--color-primary)_8%,transparent)]',
        link: 'rounded-none bg-transparent p-0 h-auto text-[var(--color-primary)] underline-offset-4 hover:underline',
        destructive:
          'bg-[var(--color-error)] text-white hover:bg-[color-mix(in_srgb,var(--color-error)_90%,black)]',
      },
      size: {
        sm: 'h-9 px-3.5 text-xs',
        default: 'h-11 px-5',
        lg: 'h-12 px-7 text-[0.9375rem]',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            <span>{typeof children === 'string' ? children : 'Chargement…'}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
