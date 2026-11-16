import { cn } from '@/lib/utils'

/** Renders Arabic copy with proper RTL direction and Arabic typeface. */
export function ArabicText({ as: Component = 'p', className, children, ...props }) {
  return (
    <Component
      lang="ar"
      dir="rtl"
      className={cn('font-arabic', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

/** Section eyebrow + French title + Arabic subtitle. */
export function SectionHeading({
  eyebrow,
  eyebrowAr,
  title,
  titleAr,
  description,
  descriptionAr,
  align = 'left',
  className,
  titleId,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'flex flex-wrap items-center gap-x-3 gap-y-1',
            align === 'center' && 'justify-center',
          )}
        >
          <p className="text-eyebrow">{eyebrow}</p>
          {eyebrowAr && (
            <ArabicText className="text-sm text-[var(--color-gold)]">{eyebrowAr}</ArabicText>
          )}
        </div>
      )}
      <h2 id={titleId} className="mt-4 text-h1">
        {title}
      </h2>
      {titleAr && (
        <ArabicText className="mt-3 text-2xl leading-relaxed text-[var(--color-heading)] md:text-[1.75rem]">
          {titleAr}
        </ArabicText>
      )}
      {description && <p className="mt-4 text-body">{description}</p>}
      {descriptionAr && (
        <ArabicText className="mt-2 text-base leading-relaxed text-[var(--color-text)]">
          {descriptionAr}
        </ArabicText>
      )}
    </div>
  )
}
