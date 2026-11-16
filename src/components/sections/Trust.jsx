import { trustItems } from '@/data/content'
import { Reveal } from '@/components/motion/Reveal'
import { Separator } from '@/components/ui/separator'
import { ArabicText } from '@/components/ui/ArabicText'

export function Trust() {
  return (
    <section
      id="confiance"
      className="pattern-zellij border-b border-[var(--color-border)] py-12 md:py-16"
      aria-label="Nos engagements"
    >
      <div className="container-site">
        <Reveal>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {trustItems.map((item, index) => (
              <li
                key={item.title}
                className="relative lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="absolute left-0 top-1 hidden h-[calc(100%-0.5rem)] lg:block"
                  />
                )}
                <p className="font-display text-xl text-[var(--color-heading)] md:text-[1.35rem]">
                  {item.title}
                </p>
                <ArabicText className="mt-1 text-lg text-[var(--color-gold)]">
                  {item.titleAr}
                </ArabicText>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]">
                  {item.description}
                </p>
                <ArabicText className="mt-1 text-sm text-[var(--color-muted)]">
                  {item.descriptionAr}
                </ArabicText>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
