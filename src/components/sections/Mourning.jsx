import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { ArabicText } from '@/components/ui/ArabicText'
import { images } from '@/data/content'

export function Mourning() {
  return (
    <section
      id="deces"
      className="section-space bg-[var(--color-primary)] text-white"
      aria-labelledby="mourning-heading"
    >
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <img
              src={images.services.mourning}
              alt="Hommes musulmans lisant le Coran lors d'une cérémonie de deuil"
              className="img-cover opacity-90"
              loading="lazy"
              decoding="async"
              width={1000}
              height={1200}
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-eyebrow !text-[var(--color-gold-soft)]">
              Décès & cérémonies funéraires
            </p>
            <ArabicText className="text-sm text-[var(--color-gold-soft)]">
              الجنائز ومناسبات العزاء
            </ArabicText>
          </div>

          <h2 id="mourning-heading" className="mt-4 text-h1 !text-white">
            Un accompagnement digne dans les moments de deuil.
          </h2>
          <ArabicText className="mt-3 text-2xl text-white/90 md:text-[1.75rem]">
            مواكبة كريمة في لحظات الحزن والوفاة.
          </ArabicText>

          <p className="mt-6 max-w-xl text-body text-white/80">
            SAADAOUI assure également le service traiteur pour les{' '}
            <strong className="font-medium text-white">événements de décès</strong>,
            les veillées funéraires et les cérémonies d&apos;hommage. Nous
            intervenons avec discrétion, respect et organisation, afin de
            soulager les familles dans ces moments difficiles.
          </p>
          <ArabicText className="mt-3 max-w-xl text-base text-white/65">
            يوفر سعداوي أيضاً خدمة التموين لمناسبات الوفاة والعزاء. نتدخل بكل
            تحفظ واحترام وتنظيم، لنخفّف عن العائلات في هذه الأوقات الصعبة.
          </ArabicText>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                fr: 'Service discret et respectueux',
                ar: 'خدمة متحفظة ومحترمة',
              },
              {
                fr: 'Organisation rapide et flexible',
                ar: 'تنظيم سريع ومرن',
              },
              {
                fr: 'Menus adaptés aux rites et à la famille',
                ar: 'قوائم تناسب الطقوس والعائلة',
              },
              {
                fr: 'Présence professionnelle le jour J',
                ar: 'حضور احترافي يوم المناسبة',
              },
            ].map((item) => (
              <li
                key={item.fr}
                className="border-t border-white/15 pt-4"
              >
                <p className="font-display text-lg text-white">{item.fr}</p>
                <ArabicText className="mt-1 text-sm text-[var(--color-gold-soft)]">
                  {item.ar}
                </ArabicText>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-white/90"
            >
              <a href="#devis">Demander un devis deuil</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white hover:text-[var(--color-primary)]"
            >
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
