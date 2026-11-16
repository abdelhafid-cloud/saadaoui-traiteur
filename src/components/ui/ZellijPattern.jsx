import { cn } from '@/lib/utils'

/** Subtle Moroccan geometric motif — decorative only. */
export function ZellijPattern({ className, opacity = 0.07 }) {
  return (
    <svg
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="zellij-star"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 4 L28 18 L42 18 L31 27 L35 41 L24 33 L13 41 L17 27 L6 18 L20 18 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellij-star)" />
    </svg>
  )
}

export function MoroccanFrame({ className }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-3 border border-[var(--color-gold)]/25 md:inset-4',
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[var(--color-gold)]/55" />
      <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-[var(--color-gold)]/55" />
      <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-[var(--color-gold)]/55" />
      <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[var(--color-gold)]/55" />
    </div>
  )
}
