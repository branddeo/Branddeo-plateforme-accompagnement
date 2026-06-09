import { Link } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from './reveal'

const REASSURANCE = [
  'Accès immédiat',
  'Paiement sécurisé',
  'Garanti 12 mois',
]

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-25 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-40 blur-[100px]"
            />

            <div className="relative z-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--coral)]">
                Dernière étape
              </span>

              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tu sais ce que{' '}
                <span className="serif-accent">tu as à faire.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base text-white/75 sm:text-lg">
                30 secondes pour rejoindre l'Academy. Garanti pendant 12 mois.
                <br className="hidden sm:block" />
                Pas demain. Aujourd'hui.
              </p>

              <div className="mt-10 flex flex-col items-stretch gap-5 sm:items-center">
                <Link
                  to="/auth"
                  className="cta-black cta-black-xl group relative overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Rejoindre Branddeo Academy — 497€ HT
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>

                <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  {REASSURANCE.map((r) => (
                    <li key={r} className="inline-flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-[var(--coral)]" strokeWidth={3} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
