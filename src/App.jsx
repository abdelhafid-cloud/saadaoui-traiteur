import { Toaster } from 'sonner'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Trust } from '@/components/sections/Trust'
import { Services } from '@/components/sections/Services'
import { Mourning } from '@/components/sections/Mourning'
import { About } from '@/components/sections/About'
import { Culinary } from '@/components/sections/Culinary'
import { WhyUs } from '@/components/sections/WhyUs'
import { Gallery } from '@/components/sections/Gallery'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { ContactCta } from '@/components/sections/ContactCta'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-surface)] focus:px-4 focus:py-2 focus:text-[var(--color-heading)]"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Trust />
        <Services />
        <Mourning />
        <About />
        <Culinary />
        <WhyUs />
        <Gallery />
        <QuoteForm />
        <ContactCta />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          className: 'font-sans',
        }}
      />
    </>
  )
}
