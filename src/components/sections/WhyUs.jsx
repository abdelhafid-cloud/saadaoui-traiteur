import { ClipboardList, Sparkles, Handshake, Heart } from 'lucide-react'
import { advantages } from '@/data/content'
import { Reveal } from '@/components/motion/Reveal'
import { ArabicText, SectionHeading } from '@/components/ui/ArabicText'

const icons = {
  ClipboardList,
  Sparkles,
  Handshake,
  Heart,
}

export function WhyUs() {
  return (
    <section
      className="section-space bg-[var(--color-surface)]"
      aria-labelledby="why-heading"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Pourquoi SAADAOUI"
            eyebrowAr="لماذا سعداوي"
            title="L'excellence dans chaque détail."
            titleAr="التميّز في كل تفصيل."
            titleId="why-heading"
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="flex h-full flex-col border-t border-[var(--color-gold)]/30 pt-6">
                  {Icon && (
                    <Icon
                      className="size-6 text-[var(--color-gold)]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="mt-5 text-h3">{item.title}</h3>
                  <ArabicText className="mt-1 text-lg text-[var(--color-gold)]">
                    {item.titleAr}
                  </ArabicText>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]">
                    {item.description}
                  </p>
                  <ArabicText className="mt-2 text-sm text-[var(--color-muted)]">
                    {item.descriptionAr}
                  </ArabicText>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
