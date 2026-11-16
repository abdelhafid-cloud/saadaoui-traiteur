import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { images } from '@/data/content'
import { Button } from '@/components/ui/button'
import { ArabicText } from '@/components/ui/ArabicText'
import { MoroccanFrame } from '@/components/ui/ZellijPattern'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Buffet traiteur élégant pour événement premium"
          className="img-cover scale-105"
          width={2400}
          height={1600}
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgb(18 36 30 / 0.42) 0%, rgb(18 36 30 / 0.32) 40%, rgb(18 36 30 / 0.78) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      <MoroccanFrame className="z-[1] hidden text-[var(--color-gold-soft)] sm:block" />

      <div className="relative z-10 w-full pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="container-site max-w-4xl">
          <motion.div
            className="flex flex-wrap items-end gap-x-4 gap-y-1"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[0.14em] text-white">
              {siteConfig.name}
            </p>
            <ArabicText className="pb-1 text-[clamp(1.75rem,3.5vw,2.5rem)] text-[var(--color-gold-soft)]">
              {siteConfig.nameAr}
            </ArabicText>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-5 max-w-3xl text-display text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Chaque événement mérite une expérience d&apos;exception.
          </motion.h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArabicText className="mt-3 max-w-2xl text-[clamp(1.25rem,2.5vw,1.75rem)] text-white/90">
              كل مناسبة تستحق تجربة استثنائية.
            </ArabicText>
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-body text-white/85"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            SAADAOUI vous accompagne dans tous vos événements — mariages,
            cérémonies traditionnelles, deuil, entreprises et réceptions —
            avec un service traiteur professionnel et une cuisine marocaine
            raffinée.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArabicText className="mt-3 max-w-xl text-base text-white/75 md:text-lg">
              سعداوي يرافقكم في جميع مناسباتكم بخدمة تموين احترافية ومطبخ مغربي راقٍ.
            </ArabicText>
          </motion.div>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-white/90"
            >
              <a href="#services">Découvrir nos prestations</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
            >
              <a href="#devis">Demander un devis</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <a
        href="#confiance"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
        aria-label="Défiler vers le contenu"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">Découvrir</span>
        <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
