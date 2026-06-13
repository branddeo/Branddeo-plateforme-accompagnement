import { useState } from 'react'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { Reveal } from './reveal'

/**
 * Carrousel de témoignages alumni (cartes verticales avec poster vidéo + nom
 * + bouton "Voir le témoignage"). Placeholders explicites en attendant les
 * vraies vidéos/photos/verbatims de Fanel. NE PAS INVENTER.
 */
const PLACEHOLDER_COUNT = 6

export function TestimonialsCarousel() {
  const [start, setStart] = useState(0)

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ils l'ont fait.{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                À ton tour.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Salariés, étudiants, parents ou indépendants : tous sont partis
              du même point. Découvre leurs parcours.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            className="mt-12 overflow-hidden sm:mt-14"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
            }}
          >
            <div
              className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:gap-5"
              style={{ transform: `translateX(-${start * 280}px)` }}
            >
              {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <TestimonialCard key={i} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-8 flex items-center justify-between gap-6">
            <p className="text-xs text-white/40 sm:text-sm">
              Témoignages réels à fournir par Fanel.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Témoignage précédent"
                onClick={() => setStart((s) => Math.max(0, s - 1))}
                disabled={start === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[var(--coral)] transition-colors hover:border-[var(--coral)]/40 hover:bg-[var(--coral)]/10 disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Témoignage suivant"
                onClick={() => setStart((s) => Math.min(PLACEHOLDER_COUNT - 1, s + 1))}
                disabled={start >= PLACEHOLDER_COUNT - 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[var(--coral)] transition-colors hover:border-[var(--coral)]/40 hover:bg-[var(--coral)]/10 disabled:opacity-30"
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

function TestimonialCard() {
  return (
    <div className="relative aspect-[9/14] w-64 shrink-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] sm:w-72">
      {/* Glow violet/magenta interne */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(174,8,183,0.4) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(93,41,153,0.4) 0%, transparent 60%)',
        }}
      />
      {/* Play button centré */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          aria-label="Voir le témoignage"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--coral)] shadow-2xl shadow-[var(--coral)]/40 transition-transform hover:scale-110"
        >
          <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
        </button>
      </div>
      {/* Footer carte : prénom + CTA */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
        <p className="font-display text-base font-bold text-white sm:text-lg">
          [Prénom alumni]
        </p>
        <p className="mt-1 text-xs text-white/55">
          Témoignage à fournir
        </p>
      </div>
    </div>
  )
}
