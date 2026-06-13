import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

/**
 * Grille masonry de captures-preuves (revenus AdSense, analytics YouTube,
 * wins de la communauté). Cartes placeholder en attendant les vraies captures
 * de Fanel — NE PAS INVENTER de chiffres ni de témoignages.
 */
const CARDS = [
  { type: 'screen', height: 'h-72', tag: '[Capture analytics]' },
  { type: 'message', height: 'h-96', tag: '[Win communauté]' },
  { type: 'screen', height: 'h-80', tag: '[Capture revenus AdSense]' },
  { type: 'message', height: 'h-64', tag: '[Win communauté]' },
  { type: 'screen', height: 'h-72', tag: '[Capture analytics]' },
  { type: 'message', height: 'h-88', tag: '[Win communauté]' },
]

export function ResultsMasonry() {
  return (
    <section id="resultats" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Des{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                résultats
              </span>{' '}
              concrets, visibles et documentés
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Pas des promesses. Des captures d'écran. Des dashboards. Des
              vrais chiffres.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
              <a
                href="#candidater"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:text-base"
              >
                Voir comment ça se passe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Masonry CSS columns */}
        <Reveal delay={0.3}>
          <div className="mt-14 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
            {CARDS.map((c, i) => (
              <ProofCard key={i} {...c} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/45 sm:text-sm">
            Captures réelles à fournir par Fanel. Résultats non garantis : ils
            dépendent de ta niche, de ta régularité et de ton travail.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ProofCard({ height, tag }: { height: string; tag: string }) {
  return (
    <div
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/[0.08] bg-[#150b28] p-4 sm:mb-5 ${height}`}
    >
      <div className="flex h-full flex-col">
        {/* Top row : faux header de capture */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] font-display text-[10px] font-bold text-white">
            B
          </span>
          <div className="flex-1">
            <p className="truncate text-xs font-semibold text-white/85">
              [Capture à fournir]
            </p>
            <p className="text-[10px] text-white/45">
              Module · Date
            </p>
          </div>
        </div>
        {/* Body : zone graphique placeholder */}
        <div className="relative mt-3 flex-1 overflow-hidden rounded-xl bg-[#0F081E]">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(93,41,153,0.4) 0%, rgba(174,8,183,0.15) 50%, transparent 75%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="relative flex h-full items-end justify-center px-3 pb-3">
            <p className="text-xs font-medium text-white/45 sm:text-sm">
              {tag}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
