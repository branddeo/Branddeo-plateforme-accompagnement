import { Check, X } from 'lucide-react'
import { Reveal } from './reveal'

const FORMATION_CLASSIQUE = [
  'Vidéos préenregistrées que tu regardes seul',
  'Tu avances seul, à ton rythme',
  'Aucun retour sur ton travail',
  'Personne ne te pousse à publier',
  'Tu abandonnes souvent en cours de route',
]

const INCUBATEUR = [
  'Entrée sur sélection (candidature)',
  'Méthode structurée étape par étape',
  'Parcours faceless OU créateur face caméra',
  'Communauté privée + lives réguliers',
  'Retours réguliers sur ton travail',
  "Accompagnement jusqu'à ton premier revenu, en parallèle de ton salaire",
]

export function ComparisonSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              YouTube Impact, c'est un{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                incubateur
              </span>
              , pas une formation
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Tu ne rejoins pas une bibliothèque de vidéos à regarder seul. Tu
              intègres un incubateur qui te suit, te corrige et te pousse
              jusqu'à ton premier revenu.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {/* Colonne 1 — formation classique (grisée) */}
          <Reveal>
            <div className="relative h-full rounded-3xl border border-white/[0.05] bg-[#0F081E] p-7 sm:p-8">
              <span className="inline-block rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Une formation classique
              </span>
              <p className="mt-6 font-display text-2xl font-bold text-white/65 sm:text-3xl">
                Tu te débrouilles
              </p>
              <ul className="mt-6 space-y-3">
                {FORMATION_CLASSIQUE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/35">
                      <X className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/45 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Colonne 2 — incubateur YouTube Impact (mise en avant) */}
          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-[var(--coral)]/30 bg-gradient-to-br from-[#1a1030] to-[#150b28] p-7 shadow-2xl shadow-[var(--coral)]/10 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,96,92,0.45) 0%, rgba(174,8,183,0.2) 50%, transparent 75%)',
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative">
                <span className="inline-block rounded-md border border-[var(--coral)]/40 bg-[var(--coral)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
                  L'incubateur YouTube Impact
                </span>
                <p className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">
                  On t'emmène jusqu'au résultat
                </p>
                <ul className="mt-6 space-y-3">
                  {INCUBATEUR.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--coral)]/15 text-[var(--coral)]">
                        <Check className="h-3 w-3" strokeWidth={3.5} />
                      </span>
                      <span className="text-sm leading-relaxed text-white/85 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
