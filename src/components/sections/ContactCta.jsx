import { siteConfig } from '@/config/site'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'
import { ArabicText } from '@/components/ui/ArabicText'
import { ZellijPattern } from '@/components/ui/ZellijPattern'

export function ContactCta() {
  const whatsapp = siteConfig.contact.whatsapp

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-primary)] py-[clamp(4.5rem,10vw,7rem)] text-white"
      aria-labelledby="contact-cta-heading"
    >
      <ZellijPattern className="text-[var(--color-gold-soft)]" opacity={0.08} />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgb(176 138 62 / 0.28), transparent 55%), radial-gradient(ellipse at 80% 80%, rgb(26 92 99 / 0.35), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 text-center">
        <Reveal>
          <div className="ornament-line justify-center">
            <p className="text-eyebrow !text-[var(--color-gold-soft)]">Contact</p>
            <ArabicText className="text-sm text-[var(--color-gold-soft)]">اتصل بنا</ArabicText>
          </div>
          <h2
            id="contact-cta-heading"
            className="mx-auto mt-4 max-w-3xl text-h1 !text-white"
          >
            Confiez-nous vos plus beaux moments.
          </h2>
          <ArabicText className="mx-auto mt-3 max-w-2xl text-2xl text-white/85">
            ائتمنونا على أجمل لحظاتكم.
          </ArabicText>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-white/90"
            >
              <a href="#devis">Demander un devis</a>
            </Button>
            {whatsapp ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white hover:text-[var(--color-primary)]"
              >
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  Nous contacter sur WhatsApp
                </a>
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white/70"
                disabled
                title="Configurez siteConfig.contact.whatsapp"
              >
                Nous contacter sur WhatsApp
              </Button>
            )}
          </div>
          {!whatsapp && (
            <p className="mt-4 text-small text-white/50">
              Lien WhatsApp à configurer dans{' '}
              <code className="text-white/70">src/config/site.js</code>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
