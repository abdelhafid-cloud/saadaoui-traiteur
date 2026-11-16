import { useState } from 'react'
import { Menu } from 'lucide-react'
import { siteConfig, navLinks } from '@/config/site'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArabicText } from '@/components/ui/ArabicText'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

export function Navbar() {
  const scrolled = useScrollPosition(48)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_92%,transparent)] backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6 md:h-[5rem]">
        <a
          href="#accueil"
          className={cn(
            'flex items-baseline gap-2 transition-colors duration-300',
            scrolled ? 'text-[var(--color-heading)]' : 'text-white',
          )}
          aria-label={`${siteConfig.name} ${siteConfig.nameAr} — Accueil`}
        >
          <span className="font-display text-[1.5rem] tracking-[0.08em] md:text-[1.75rem]">
            {siteConfig.name}
          </span>
          <ArabicText
            className={cn(
              'hidden text-lg sm:inline md:text-xl',
              scrolled ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold-soft)]',
            )}
          >
            {siteConfig.nameAr}
          </ArabicText>
        </a>

        <nav className="hidden items-center gap-3 xl:gap-6 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'whitespace-nowrap text-[0.75rem] font-medium tracking-wide transition-colors duration-300 link-underline xl:text-[0.8125rem]',
                scrolled
                  ? 'text-[var(--color-text)] hover:text-[var(--color-heading)]'
                  : 'text-white/85 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            size="default"
            variant={scrolled ? 'default' : 'secondary'}
            className={!scrolled ? 'bg-white text-[var(--color-primary)] hover:bg-white/90' : undefined}
          >
            <a href="#devis">Demander un devis</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'lg:hidden',
                scrolled
                  ? 'text-[var(--color-heading)]'
                  : 'text-white hover:bg-white/10 hover:text-white',
              )}
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="tracking-[0.08em]">
                {siteConfig.name}
                <ArabicText as="span" className="mr-2 text-[var(--color-gold)]">
                  {' '}
                  {siteConfig.nameAr}
                </ArabicText>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-10 flex flex-col gap-1" aria-label="Navigation mobile">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="border-b border-[var(--color-border)] py-4 font-display text-2xl text-[var(--color-heading)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <SheetClose asChild>
                <Button asChild className="w-full" size="lg">
                  <a href="#devis">Demander un devis</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
