import { ArrowRight, Check, ChevronsRight, Zap, Users, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'

const INCLUDED_DISCOVERY = [
  'Accompagnement 1:1 en présentiel et en ligne pendant 30 jours',
  'Stratégie de contenu & positionnement',
  'Packaging vidéos (miniatures & titres)',
  'Scripts',
  'Production studio',
  'Montages vidéos',
  '4 vidéos YouTube performantes publiées',
  'Gestion chaîne YouTube',
]

const INCLUDED_GROWTH = [
  'Accompagnement 1:1 en présentiel et en ligne pendant 90 jours',
  'Stratégie de contenu & positionnement',
  'Packaging vidéos (miniatures & titres)',
  'Scripts',
  'Production studio',
  'Montages vidéos',
  '12 vidéos YouTube performantes publiées (4 vidéos/mois)',
  'Gestion chaîne YouTube',
]

const ACCELERATORS = [
  'Accélérateur 1 : Accès aux outils Branddeo (plateformes de gestion de projet)',
  'Accélérateur 2 : Branding chaîne YouTube (Shooting, photo de profil, bannière YouTube)',
  'Accélérateur 3 : Accès en illimité au studio de tournage offert',
  'Accélérateur 4 : Collaboration possible avec nos chaînes YouTube partenaires',
  'Accélérateur 5 : Flexibilité : Démarrer le projet quand vous voulez',
]

const GUARANTEES = [
  { icon: Zap, label: 'Atteindre les\n30K vues' },
  { icon: Users, label: '+20 prospects\nqualifiés' },
  { icon: Sparkles, label: 'Débloquer la\nmonétisation' },
]

export function OfferSection() {
  return (
    <section id="candidater" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Choisis ton accélérateur YouTube
              <br />
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                pour devenir incontournable
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-8">
          <Reveal>
            <PricingCard
              duration="30 jours"
              name="Branddeo Découverte"
              price="2997€ HT"
              priceCompare={undefined}
              objective="Publier 4 vidéos YouTubes performantes qui mettent en avant ton expertise."
              prerequisite="être disponible 2-3h en studio + expertise claire. Pas besoin d'offre parfaite."
              included={INCLUDED_DISCOVERY}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <PricingCard
              duration="60 jours"
              name="Branddeo Croissance"
              price="7500€ HT"
              priceCompare="8991€ HT"
              objective="Publier 12 vidéos YouTubes performantes qui mettent en avant ton expertise."
              prerequisite="avoir une offre monétisable (même simple) ou être prêt à la clarifier rapidement."
              included={INCLUDED_GROWTH}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  duration,
  name,
  price,
  priceCompare,
  objective,
  prerequisite,
  included,
}: {
  duration: string
  name: string
  price: string
  priceCompare?: string
  objective: string
  prerequisite: string
  included: string[]
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 sm:p-8 lg:p-10">
      {/* Glow violet/magenta interne en angle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 -z-0 h-96 w-96 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(174,8,183,0.22) 0%, rgba(93,41,153,0.1) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
        {/* Colonne gauche : prix + objectif + CTA */}
        <div>
          <span className="inline-flex items-center rounded-md border border-[var(--coral)]/40 bg-[var(--coral)]/5 px-3 py-1 text-xs font-semibold text-[var(--coral)]">
            {duration}
          </span>

          <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
            {name}
          </h3>

          <div className="mt-5">
            {priceCompare && (
              <p className="font-display text-base text-white/40 line-through sm:text-lg">
                {priceCompare}
              </p>
            )}
            <p className="font-display text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
              {price}
            </p>
          </div>

          <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/70 sm:text-base">
            <p>
              <span className="font-semibold text-white">Objectif :</span>{' '}
              {objective}
            </p>
            <p>
              <span className="font-semibold text-white">Pré-requis :</span>{' '}
              {prerequisite}
            </p>
          </div>

          <a
            href="#candidater"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:text-base"
          >
            Candidater
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Colonne droite : inclusions + accélérateurs + garanties */}
        <div className="space-y-5">
          {/* Ce qui est inclus */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#1a1030]/60 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Ce qui est inclus :
            </p>
            <ul className="mt-4 space-y-2.5">
              {included.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--coral)]"
                    strokeWidth={3}
                  />
                  <span className="text-sm leading-relaxed text-white/85">
                    {inc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Accélérateur */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#1a1030]/60 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Accélérateur
            </p>
            <ul className="mt-4 space-y-2.5">
              {ACCELERATORS.map((acc) => (
                <li key={acc} className="flex items-start gap-2.5">
                  <ChevronsRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--coral)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm leading-relaxed text-white/85">
                    {acc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Garanties */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#1a1030]/60 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Garanties :
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
              {GUARANTEES.map((g) => (
                <GuaranteePebble key={g.label} icon={g.icon} label={g.label} />
              ))}
            </div>
            <p className="mt-5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs">
              On continue de vous accompagner jusqu'au résultat
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function GuaranteePebble({
  icon: Icon,
  label,
}: {
  icon: typeof Zap
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.05] bg-[#150b28] p-4 text-center">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,96,92,0.45) 0%, rgba(174,8,183,0.25) 50%, transparent 75%)',
            filter: 'blur(8px)',
          }}
        />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--magenta)] shadow-lg shadow-[var(--coral)]/30">
          <Icon className="h-5 w-5 text-white" strokeWidth={2} />
        </div>
      </div>
      <p className="whitespace-pre-line text-[11px] font-medium leading-tight text-white/85 sm:text-xs">
        {label}
      </p>
    </div>
  )
}
