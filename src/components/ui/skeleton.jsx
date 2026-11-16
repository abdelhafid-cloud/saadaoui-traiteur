import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-border)_70%,transparent)]',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
