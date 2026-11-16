import { culinaryCategories } from '@/data/content'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/ArabicText'
import { cn } from '@/lib/utils'

const sizeMap = {
  large: 'md:col-span-7 md:row-span-2 min-h-[360px] md:min-h-[520px]',
  medium: 'md:col-span-5 min-h-[260px]',
  small: 'md:col-span-5 min-h-[240px]',
  wide: 'md:col-span-8 min-h-[280px]',
}

export function Culinary() {
  return (
    <section
      id="cuisine"
      className="section-space pattern-zellij"
      aria-labelledby="culinary-heading"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="L'expérience culinaire"
            eyebrowAr="التجربة الذوقية"
            title="La gastronomie au cœur de chaque célébration."
            titleAr="المطبخ في قلب كل احتفال."
            titleId="culinary-heading"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
          {culinaryCategories.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className={cn(
                'group relative overflow-hidden',
                sizeMap[item.size],
                item.size === 'wide' && 'md:col-start-1',
                index === 4 && 'md:col-span-4',
              )}
            >
              <figure className="relative h-full min-h-[240px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="img-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                  width={1100}
                  height={800}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgb(18_36_30/0.85)] to-transparent p-5 md:p-6">
                  <span className="font-display text-xl text-white md:text-2xl">
                    {item.title}
                  </span>
                  <span
                    lang="ar"
                    dir="rtl"
                    className="font-arabic mt-1 block text-lg text-[var(--color-gold-soft)]"
                  >
                    {item.titleAr}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
