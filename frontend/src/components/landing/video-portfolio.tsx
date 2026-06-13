import { Reveal } from './reveal'

/**
 * Galerie de chaînes/vidéos construites avec la méthode (2 rangées qui défilent
 * en sens opposés, style branddeo.fr). En attendant les vraies captures
 * d'alumni de Fanel : cartes placeholder gradient stylisées.
 */
const PLACEHOLDER_THUMBS_ROW_1 = [
  { label: 'POV DUBAÏ', accent: 'from-[var(--violet)] to-[var(--coral)]' },
  { label: 'BUSINESS', accent: 'from-[var(--magenta)] to-[var(--violet)]' },
  { label: 'FINALE 2025', accent: 'from-[var(--coral)] to-[#FFB37A]' },
  { label: 'CRYPTO', accent: 'from-[var(--violet)] to-[var(--bleu)]' },
  { label: 'LIFESTYLE', accent: 'from-[var(--coral)] to-[var(--magenta)]' },
  { label: 'FASHION WEEK', accent: 'from-[var(--violet-soft)] to-[var(--coral)]' },
  { label: 'INTERVIEW', accent: 'from-[var(--magenta)] to-[var(--coral)]' },
  { label: 'TRADING', accent: 'from-[var(--bleu)] to-[var(--violet)]' },
]

const PLACEHOLDER_THUMBS_ROW_2 = [
  { label: 'DEEP DIVE', accent: 'from-[var(--violet)] to-[var(--magenta)]' },
  { label: 'AGENCE', accent: 'from-[var(--coral)] to-[var(--violet-soft)]' },
  { label: 'STARTUP', accent: 'from-[var(--bleu)] to-[var(--coral)]' },
  { label: 'BLOCKCHAIN', accent: 'from-[var(--magenta)] to-[var(--coral)]' },
  { label: 'PODCAST', accent: 'from-[var(--violet-soft)] to-[var(--magenta)]' },
  { label: 'MARKETING', accent: 'from-[var(--coral)] to-[var(--bleu)]' },
  { label: 'DOCU', accent: 'from-[var(--violet)] to-[var(--coral)]' },
  { label: 'GROWTH', accent: 'from-[var(--magenta)] to-[var(--violet-soft)]' },
]

export function VideoPortfolio() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Des chaînes construites avec la méthode,
            <br />
            <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
              dans toutes les niches
            </span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div
          className="mt-12 space-y-4 sm:mt-14 sm:space-y-5"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          }}
        >
          {/* Rangée 1 — défile vers la gauche */}
          <div className="overflow-hidden">
            <div className="tools-marquee-track flex items-center gap-4 sm:gap-5">
              {[...PLACEHOLDER_THUMBS_ROW_1, ...PLACEHOLDER_THUMBS_ROW_1].map(
                (t, i) => (
                  <ThumbCard key={`r1-${i}`} {...t} />
                ),
              )}
            </div>
          </div>

          {/* Rangée 2 — défile vers la droite */}
          <div className="overflow-hidden">
            <div className="tools-marquee-track tools-marquee-track-reverse flex items-center gap-4 sm:gap-5">
              {[...PLACEHOLDER_THUMBS_ROW_2, ...PLACEHOLDER_THUMBS_ROW_2].map(
                (t, i) => (
                  <ThumbCard key={`r2-${i}`} {...t} />
                ),
              )}
            </div>
          </div>
        </div>
      </Reveal>

      <p className="mx-auto mt-10 max-w-md px-5 text-center text-xs text-white/40 sm:text-sm">
        Miniatures placeholder. Captures de chaînes réelles à fournir.
      </p>
    </section>
  )
}

function ThumbCard({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="relative h-32 w-56 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1a1030] sm:h-40 sm:w-72">
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
      />
      <p className="absolute bottom-3 left-4 right-4 font-display text-xl font-bold uppercase tracking-tight text-white drop-shadow-lg sm:text-2xl">
        {label}
      </p>
      <span className="absolute right-2 top-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm">
        10:30
      </span>
    </div>
  )
}
