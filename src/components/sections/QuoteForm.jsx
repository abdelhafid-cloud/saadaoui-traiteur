import { useState } from 'react'
import { toast } from 'sonner'
import { eventTypes } from '@/data/content'
import { submitQuoteRequest } from '@/lib/submitQuote'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/ArabicText'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  guests: '',
  location: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Veuillez indiquer votre nom complet.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Veuillez indiquer un numéro de téléphone.'
  } else if (!/^[+\d\s().-]{8,}$/.test(values.phone.trim())) {
    errors.phone = 'Numéro de téléphone invalide.'
  }

  if (!values.email.trim()) {
    errors.email = 'Veuillez indiquer votre adresse e-mail.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Adresse e-mail invalide.'
  }

  if (!values.eventType) {
    errors.eventType = 'Veuillez sélectionner un type d’événement.'
  }

  if (!values.eventDate) {
    errors.eventDate = 'Veuillez indiquer la date de l’événement.'
  }

  if (!values.guests.trim()) {
    errors.guests = 'Veuillez indiquer le nombre d’invités.'
  } else if (Number(values.guests) < 1) {
    errors.guests = 'Le nombre d’invités doit être au moins 1.'
  }

  if (!values.location.trim()) {
    errors.location = 'Veuillez indiquer le lieu de l’événement.'
  }

  return errors
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-xs text-[var(--color-error)]" role="alert">
      {message}
    </p>
  )
}

export function QuoteForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      toast.error('Veuillez corriger les champs indiqués.')
      return
    }

    setLoading(true)
    try {
      await submitQuoteRequest({
        fullName: values.fullName.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        eventType: values.eventType,
        eventDate: values.eventDate,
        guests: Number(values.guests),
        location: values.location.trim(),
        message: values.message.trim(),
      })
      toast.success('Votre demande a bien été envoyée. Nous vous recontacterons rapidement.')
      setValues(initialValues)
      setErrors({})
    } catch (error) {
      toast.error(
        error?.message ||
          'Impossible d’envoyer votre demande pour le moment. Réessayez plus tard.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="devis"
      className="section-space bg-[var(--color-surface)]"
      aria-labelledby="quote-heading"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            eyebrow="Demande de devis"
            eyebrowAr="طلب عرض سعر"
            title="Imaginons ensemble votre prochain événement."
            titleAr="لنخطّط معاً لمناسبتكم القادمة."
            description="Parlez-nous de votre projet et recevez une proposition adaptée à vos besoins — y compris les événements de deuil."
            descriptionAr="أخبرونا عن مشروعكم واحصلوا على عرض يناسب احتياجاتكم، بما في ذلك مناسبات العزاء."
            titleId="quote-heading"
          />
          <p className="mt-6 text-small text-[var(--color-muted)]">
            Les champs marqués d&apos;un astérisque sont obligatoires. Nous
            vous répondons dans les meilleurs délais.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
            aria-describedby="quote-heading"
          >
            <div className="sm:col-span-1">
              <Label htmlFor="fullName">
                Nom complet <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                autoComplete="name"
                className={cn('mt-2', errors.fullName && 'border-[var(--color-error)]')}
                value={values.fullName}
                onChange={(e) => setField('fullName', e.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                required
              />
              <FieldError id="fullName-error" message={errors.fullName} />
            </div>

            <div className="sm:col-span-1">
              <Label htmlFor="phone">
                Téléphone <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={cn('mt-2', errors.phone && 'border-[var(--color-error)]')}
                value={values.phone}
                onChange={(e) => setField('phone', e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                required
              />
              <FieldError id="phone-error" message={errors.phone} />
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="email">
                Adresse e-mail <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={cn('mt-2', errors.email && 'border-[var(--color-error)]')}
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              <FieldError id="email-error" message={errors.email} />
            </div>

            <div className="sm:col-span-1">
              <Label htmlFor="eventType">
                Type d&apos;événement <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Select
                value={values.eventType}
                onValueChange={(value) => setField('eventType', value)}
              >
                <SelectTrigger
                  id="eventType"
                  className={cn('mt-2', errors.eventType && 'border-[var(--color-error)]')}
                  aria-invalid={Boolean(errors.eventType)}
                  aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                >
                  <SelectValue placeholder="Sélectionnez" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError id="eventType-error" message={errors.eventType} />
            </div>

            <div className="sm:col-span-1">
              <Label htmlFor="eventDate">
                Date de l&apos;événement <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                id="eventDate"
                name="eventDate"
                type="date"
                className={cn('mt-2', errors.eventDate && 'border-[var(--color-error)]')}
                value={values.eventDate}
                onChange={(e) => setField('eventDate', e.target.value)}
                aria-invalid={Boolean(errors.eventDate)}
                aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                required
              />
              <FieldError id="eventDate-error" message={errors.eventDate} />
            </div>

            <div className="sm:col-span-1">
              <Label htmlFor="guests">
                Nombre d&apos;invités <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                inputMode="numeric"
                className={cn('mt-2', errors.guests && 'border-[var(--color-error)]')}
                value={values.guests}
                onChange={(e) => setField('guests', e.target.value)}
                aria-invalid={Boolean(errors.guests)}
                aria-describedby={errors.guests ? 'guests-error' : undefined}
                required
              />
              <FieldError id="guests-error" message={errors.guests} />
            </div>

            <div className="sm:col-span-1">
              <Label htmlFor="location">
                Lieu de l&apos;événement <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                id="location"
                name="location"
                className={cn('mt-2', errors.location && 'border-[var(--color-error)]')}
                value={values.location}
                onChange={(e) => setField('location', e.target.value)}
                aria-invalid={Boolean(errors.location)}
                aria-describedby={errors.location ? 'location-error' : undefined}
                required
              />
              <FieldError id="location-error" message={errors.location} />
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="message">Informations complémentaires</Label>
              <Textarea
                id="message"
                name="message"
                className="mt-2"
                placeholder="Menus souhaités, contraintes, style de réception…"
                value={values.message}
                onChange={(e) => setField('message', e.target.value)}
              />
            </div>

            <div className="sm:col-span-2 mt-2">
              <Button type="submit" size="lg" loading={loading} className="w-full sm:w-auto">
                Envoyer ma demande
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
