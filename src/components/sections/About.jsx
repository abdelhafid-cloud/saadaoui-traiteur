import { images } from '@/data/content'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { ArabicText, SectionHeading } from '@/components/ui/ArabicText'
import { MoroccanFrame } from '@/components/ui/ZellijPattern'

export function About() {
  return (
    <section
      id="savoir-faire"
      className="section-space relative overflow-hidden bg-[var(--color-surface)]"
      aria-labelledby="about-heading"
    >
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <img
              src={images.about}
              alt="Présentation gastronomique raffinée signée SAADAOUI"
              className="img-cover"
              loading="lazy"
              decoding="async"
              width={1400}
              height={1680}
            />
            <MoroccanFrame className="text-[var(--color-gold)]" />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:pl-4" delay={0.1}>
          <SectionHeading
            eyebrow="À propos"
            eyebrowAr="من نحن"
            title="L'art de recevoir, notre passion."
            titleAr="فن الضيافة، شغفنا."
            titleId="about-heading"
          />
          <p className="mt-6 max-w-xl text-body">
            Chez SAADAOUI, chaque événement est une occasion de créer des
            souvenirs inoubliables — ou d&apos;accompagner les moments les plus
            sensibles avec dignité. Nous mettons notre savoir-faire, notre
            passion pour la gastronomie marocaine et notre sens du détail au
            service de vos occasions.
          </p>
          <ArabicText className="mt-3 max-w-xl text-base text-[var(--color-text)]">
            في سعداوي، كل مناسبة فرصة لصناعة ذكريات لا تُنسى، أو لمواكبة اللحظات
            الحساسة بكرامة. نضع خبرتنا وشغفنا بالمطبخ المغربي في خدمة مناسباتكم.
          </ArabicText>
          <p className="mt-4 max-w-xl text-body">
            Mariages, cérémonies traditionnelles, événements de deuil,
            réceptions d&apos;entreprise : nous orchestrons une expérience
            fluide, élégante et authentiquement marocaine.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="#cuisine">Découvrir notre univers</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
