import { siteConfig, navLinks } from '@/config/site'
import { services } from '@/data/content'
import { Separator } from '@/components/ui/separator'
import { ArabicText } from '@/components/ui/ArabicText'
import { ZellijPattern } from '@/components/ui/ZellijPattern'

export function Footer() {
  const year = new Date().getFullYear()
  const { contact, social } = siteConfig

  return (
    <footer className="relative overflow-hidden bg-[var(--color-primary)] text-white">
      <ZellijPattern className="text-[var(--color-gold-soft)]" opacity={0.05} />
      <div className="container-site section-space relative z-10 !pb-12 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <p className="font-display text-3xl tracking-[0.08em]">{siteConfig.name}</p>
            <ArabicText className="mt-1 text-2xl text-[var(--color-gold-soft)]">
              {siteConfig.nameAr}
            </ArabicText>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Traiteur professionnel pour mariages, cérémonies, événements de
              deuil, entreprises et réceptions sur mesure.
            </p>
            <ArabicText className="mt-2 max-w-xs text-sm text-white/55">
              {siteConfig.descriptionAr}
            </ArabicText>
          </div>

          <div>
            <p className="text-eyebrow !text-[var(--color-gold-soft)]">Navigation</p>
            <ArabicText className="mt-1 text-sm text-white/45">التصفح</ArabicText>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                    <span
                      lang="ar"
                      dir="rtl"
                      className="font-arabic mr-2 text-white/45"
                    >
                      {' '}
                      · {link.labelAr}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow !text-[var(--color-gold-soft)]">Services</p>
            <ArabicText className="mt-1 text-sm text-white/45">الخدمات</ArabicText>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-white/75 transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow !text-[var(--color-gold-soft)]">Contact</p>
            <ArabicText className="mt-1 text-sm text-white/45">اتصل بنا</ArabicText>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                {contact.email ? (
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                ) : (
                  <span className="italic opacity-60">E-mail à configurer</span>
                )}
              </li>
              <li>
                {contact.phone ? (
                  <a href={`tel:${contact.phone}`} className="hover:text-white">
                    {contact.phoneDisplay || contact.phone}
                  </a>
                ) : (
                  <span className="italic opacity-60">Téléphone à configurer</span>
                )}
              </li>
              <li>
                {contact.address || (
                  <span className="italic opacity-60">Adresse à configurer</span>
                )}
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              {social.instagram ? (
                <a href={social.instagram} className="text-sm text-white/75 hover:text-white" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              ) : (
                <span className="text-sm italic text-white/45">Instagram</span>
              )}
              {social.facebook ? (
                <a href={social.facebook} className="text-sm text-white/75 hover:text-white" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              ) : (
                <span className="text-sm italic text-white/45">Facebook</span>
              )}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/15" />

        <div className="flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name} · {siteConfig.nameAr}. Tous droits réservés.
          </p>
          <p>Traiteur marocain — événements & réceptions</p>
        </div>
      </div>
    </footer>
  )
}
