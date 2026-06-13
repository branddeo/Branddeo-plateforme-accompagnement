import { useState } from 'react'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { Reveal } from './reveal'

/**
 * Carrousel cas alumni de YouTube Impact. En attendant les vraies captures et
 * témoignages de Fanel : 1 slide placeholder explicite, chiffres signalés.
 */
const CASES = [
  {
    duration: '90 jours',
    name: '[Alumni à venir]',
    text: "[PLACEHOLDER — témoignage alumni à fournir par Fanel] Quelques lignes sur le parcours dans le programme : point de départ, déclic, premiers résultats. Tutoiement, parlé, court. Aucun chiffre inventé.",
    stats: [
      { value: '[?]', label: 'Vues cumulées' },
      { value: '[?]', label: 'Abonnés' },
      { value: '[?]', label: 'Premiers revenus' },
    ],
  },
]

const TOTAL_PLACEHOLDER_SLIDES = 5

export function CaseStudyCarousel() {
  const [index, setIndex] = useState(0)
  const current = CASES[Math.min(index, CASES.length - 1)]

  return (
    <section id="resultats" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Des chaînes qui rapportent,
              <br />
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                pas des promesses
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Avant d'enseigner la méthode, on l'applique. Voici des résultats
              réels de chaînes construites avec elle.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12 lg:items-center">
            {/* Vidéo verticale alumni (poster + play) */}
            <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    'radial-gradient(ellipse at bottom, rgba(93,41,153,0.5) 0%, transparent 60%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Lecture témoignage"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-[var(--coral)] shadow-2xl shadow-[var(--coral)]/40 transition-transform hover:scale-110"
                >
                  <Play className="ml-1 h-6 w-6 fill-white text-white" />
                </button>
              </div>
              <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/55">
                Vidéo placeholder
              </p>
            </div>

            {/* Texte témoignage */}
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Programme {current.duration}
              </h3>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                {current.text}
              </p>

              <div className="border-t border-white/[0.08] pt-8">
                <p className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
                  {current.name}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-6">
                  {current.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-display text-2xl font-bold leading-none tracking-tight text-[var(--coral)] sm:text-3xl lg:text-4xl">
                        {s.value}
                      </p>
                      <p className="mt-2 text-xs text-white/60 sm:text-sm">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 text-center text-xs text-white/45 sm:text-sm">
            Résultats réels non garantis : ils dépendent de ta niche, de ta
            régularité et de ton travail.
          </p>
        </Reveal>

        {/* Dots + flèches */}
        <Reveal delay={0.5}>
          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              {Array.from({ length: TOTAL_PLACEHOLDER_SLIDES }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Aller au témoignage ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? 'h-2 w-2 rounded-full bg-[var(--coral)] transition-all'
                      : 'h-2 w-2 rounded-full bg-white/15 transition-all hover:bg-white/30'
                  }
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Témoignage précédent"
                onClick={() =>
                  setIndex((i) => (i - 1 + TOTAL_PLACEHOLDER_SLIDES) % TOTAL_PLACEHOLDER_SLIDES)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[var(--coral)] transition-colors hover:border-[var(--coral)]/40 hover:bg-[var(--coral)]/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Témoignage suivant"
                onClick={() =>
                  setIndex((i) => (i + 1) % TOTAL_PLACEHOLDER_SLIDES)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[var(--coral)] transition-colors hover:border-[var(--coral)]/40 hover:bg-[var(--coral)]/10"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
