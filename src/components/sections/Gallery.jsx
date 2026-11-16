import { useState } from 'react'
import { images } from '@/data/content'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/ArabicText'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const spanClass = {
  tall: 'md:row-span-2 min-h-[320px] md:min-h-[480px]',
  wide: 'md:col-span-2 min-h-[240px]',
  default: 'min-h-[240px]',
}

export function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section
      id="galerie"
      className="section-space bg-[var(--color-background)]"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Galerie"
            eyebrowAr="المعرض"
            title="Des moments façonnés avec soin."
            titleAr="لحظات صُنعت بعناية."
            description="Mariages, cérémonies traditionnelles, buffets et réceptions : un aperçu de l'univers SAADAOUI."
            descriptionAr="أعراس ومناسبات تقليدية وبوفيهات واستقبالات: نظرة على عالم سعداوي."
            titleId="gallery-heading"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[minmax(220px,auto)] md:gap-5">
          {images.gallery.map((item, index) => (
            <Reveal
              key={`${item.src}-${index}`}
              delay={index * 0.04}
              className={cn('group overflow-hidden', spanClass[item.span])}
            >
              <button
                type="button"
                className="relative h-full w-full min-h-[240px] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2"
                onClick={() => setActive(item)}
                aria-label={`Agrandir : ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="img-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={800}
                />
                <span className="absolute inset-0 bg-[rgb(20_28_24/0)] transition-colors duration-300 group-hover:bg-[rgb(20_28_24/0.2)]" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="overflow-hidden border-0 bg-transparent p-0 shadow-none sm:max-w-4xl">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                Aperçu agrandi de la photographie sélectionnée.
              </DialogDescription>
              <img
                src={active.src.replace('w=1000', 'w=1600').replace('w=900', 'w=1600')}
                alt={active.alt}
                className="max-h-[85vh] w-full object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
