# SAADAOUI — Site traiteur

Site vitrine premium pour SAADAOUI, traiteur professionnel.

## Stack

- React (JSX) + Vite
- Tailwind CSS v4
- Framer Motion
- Radix UI / composants style shadcn
- Lucide React
- Sonner

## Démarrage

```bash
npm install
npm run dev
```

Build production :

```bash
npm run build
npm run preview
```

## Configuration

1. **Contact & réseaux** — renseigner `src/config/site.js` (e-mail, téléphone, WhatsApp, adresse, réseaux sociaux).
2. **Formulaire de devis** — copier `.env.example` vers `.env` et définir `VITE_QUOTE_API_URL` (optionnel : `VITE_QUOTE_API_KEY`). Sans endpoint, le formulaire valide les champs puis affiche une erreur claire (aucune fausse confirmation).
