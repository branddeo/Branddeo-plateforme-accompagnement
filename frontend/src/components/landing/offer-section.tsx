import { ArrowRight, Check } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const INCLUSIONS = [
  'Accès complet aux deux parcours : faceless et créateur',
  'Tous les modules : niche, stratégie de contenu, production IA, tournage, montage, publication, analyse',
  'Communauté privée + lives réguliers',
  'BONUS : la Toolbox IA complète (outils, prompts, workflows)',
  'Accès à la plateforme Branddeo Academy',
]

export function OfferSection() {
  return (
    <section
      id="tarif"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[var(--violet)]/30 to-transparent blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>
              Tarif transparent — pas de frais cachés, pas de partage de
              revenus
            </Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Une offre unique, tout inclus.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Carte pricing avec bordure dégradée violet → corail */}
          <div className="relative mx-auto mt-14 max-w-3xl rounded-3xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] p-[2px] shadow-2xl shadow-[var(--violet)]/30">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-[var(--card)] p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-[80px]"
              />

              <div className="relative text-center">
                <span className="inline-flex items-center rounded-full border border-[var(--coral)]/30 bg-[var(--coral)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
                  YouTube Impact · Branddeo Academy
                </span>

                <p className="mt-6 font-display text-6xl font-bold tracking-tight text-white sm:text-7xl">
                  <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
                    497€
                  </span>
                  <span className="text-3xl font-semibold text-white/60">
                    {' '}HT
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                  Paiement unique
                </p>
              </div>

              <ul className="mt-10 grid gap-4 border-t border-white/10 pt-10 text-left">
                {INCLUSIONS.map((inc) => (
                  <li key={inc} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--green)]/15 text-[var(--green)]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-base leading-relaxed text-white/90">
                      {inc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-10">
                <a
                  href="#tarif"
                  className="cta-black cta-black-xl group relative w-full overflow-hidden sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Rejoindre YouTube Impact — 497€ HT
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </a>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                  Paiement sécurisé · Accès immédiat
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
