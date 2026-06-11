import { ArrowRight, TrendingUp, Eye, BarChart3 } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

/**
 * Résultats — captures réelles de revenus à fournir par Fanel (cf. spec
 * section 5). NE PAS INVENTER de chiffres ni de captures. Placeholders
 * explicites tant que les vraies captures ne sont pas fournies.
 */
const PROOFS = [
  {
    icon: TrendingUp,
    niche: '[Niche 1 — à compléter]',
    period: '[Période — à compléter]',
  },
  {
    icon: Eye,
    niche: '[Niche 2 — à compléter]',
    period: '[Période — à compléter]',
  },
  {
    icon: BarChart3,
    niche: '[Niche 3 — à compléter]',
    period: '[Période — à compléter]',
  },
]

export function FeaturedMembers() {
  return (
    <section id="resultats" className="relative py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Les résultats</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Des chaînes qui rapportent,{' '}
              <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
                pas des promesses
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              Avant d'enseigner la méthode, on l'applique. Voici des résultats
              réels de chaînes construites avec elle.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              À compléter par Fanel
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/65">
              Captures réelles de revenus (AdSense / YouTube Studio) + ligne
              de contexte (niche + période). Infos sensibles à flouter.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {PROOFS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <ProofCard {...p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-10 text-center text-xs text-white/45 sm:text-sm">
            Résultats réels, non garantis : ils dépendent de ta niche, de ta
            régularité et de ton travail.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-10 text-center">
            <a
              href="#tarif"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:text-base"
            >
              Rejoindre YouTube Impact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProofCard({
  icon: Icon,
  niche,
  period,
}: {
  icon: typeof TrendingUp
  niche: string
  period: string
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#1A1030] p-6 transition-all hover:border-[var(--coral)]/30">
      {/* Visuel placeholder en haut (à remplacer par capture réelle) */}
      <div className="relative mb-5 flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.05] bg-gradient-to-br from-[#1A1030] to-[#0F081E]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-32 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-30 blur-[40px]"
        />
        {/* Mini graph factice */}
        <div className="relative flex h-full w-full items-end gap-1 p-5">
          {Array.from({ length: 12 }, (_, i) => {
            const height = 25 + Math.sin(i * 0.6) * 15 + i * 4
            return (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-[var(--violet)]/60 to-[var(--coral)]/60"
                style={{ height: `${Math.max(20, Math.min(100, height))}%` }}
              />
            )
          })}
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white/70 backdrop-blur">
          <Icon className="h-3 w-3 text-[var(--coral)]" />
          Analytics
        </div>
      </div>

      <p className="text-sm font-semibold text-white/60">{niche}</p>
      <p className="mt-1 text-xs text-white/40">{period}</p>
    </div>
  )
}
