import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/content'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/ArabicText'
import { cn } from '@/lib/utils'

const layoutClasses = [
  'md:col-span-7 md:row-span-2',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
]

function getServiceLayout(service, index) {
  if (service.id === 'deuil') {
    return 'md:col-span-4 min-h-[280px]'
  }
  return layoutClasses[index] || 'md:col-span-4'
}

export function Services() {
  return (
    <section id="services" className="section-space bg-[var(--color-background)]">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Nos services"
            eyebrowAr="خدماتنا"
            title="Un savoir-faire pour chaque occasion."
            titleAr="خبرة لكل مناسبة."
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(240px,auto)] gap-4 md:grid-cols-12 md:gap-5">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.05}
              className={cn(
                'group relative overflow-hidden',
                getServiceLayout(service, index),
              )}
            >
              <a
                href={service.href}
                className="relative block h-full min-h-[260px] focus-visible:outline-none md:min-h-[280px]"
                aria-label={`${service.title} — ${service.titleAr}`}
              >
                <img
                  src={service.image}
                  alt=""
                  className="img-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={750}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[rgb(18_36_30/0.92)] via-[rgb(18_36_30/0.4)] to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <h3 className="font-display text-xl text-white md:text-2xl">
                    {service.title}
                  </h3>
                  <p
                    lang="ar"
                    dir="rtl"
                    className="font-arabic mt-1 text-base text-[var(--color-gold-soft)] md:text-lg"
                  >
                    {service.titleAr}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-gold-soft)] transition-transform duration-300 group-hover:translate-x-1">
                    Découvrir
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
