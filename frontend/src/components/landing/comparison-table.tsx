import { Check, X } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

type Cell =
  | { kind: 'ok' }
  | { kind: 'no' }
  | { kind: 'partial'; text: string }
  | { kind: 'text'; text: string }

interface Row {
  criterion: string
  alone: Cell
  classic: Cell
  impact: Cell
}

const ROWS: Row[] = [
  {
    criterion: 'Méthode structurée étape par étape',
    alone: { kind: 'no' },
    classic: { kind: 'ok' },
    impact: { kind: 'ok' },
  },
  {
    criterion: 'Parcours faceless dédié (multi-chaînes, IA)',
    alone: { kind: 'no' },
    classic: { kind: 'no' },
    impact: { kind: 'ok' },
  },
  {
    criterion: 'Production assistée par IA (workflows complets)',
    alone: { kind: 'no' },
    classic: { kind: 'partial', text: 'Partiel' },
    impact: { kind: 'ok' },
  },
  {
    criterion: 'Communauté privée + lives',
    alone: { kind: 'no' },
    classic: { kind: 'partial', text: 'Variable' },
    impact: { kind: 'ok' },
  },
  {
    criterion: 'Conforme aux règles YouTube (contenu inauthentique)',
    alone: { kind: 'text', text: 'À tes risques' },
    classic: { kind: 'partial', text: 'Variable' },
    impact: { kind: 'ok' },
  },
  {
    criterion: 'Premiers revenus visés en parallèle de ton activité',
    alone: { kind: 'no' },
    classic: { kind: 'no' },
    impact: { kind: 'ok' },
  },
  {
    criterion: 'Coût',
    alone: { kind: 'text', text: "Des mois d'essais-erreurs" },
    classic: { kind: 'text', text: 'Souvent 1 000 €+' },
    impact: { kind: 'text', text: '497 € HT' },
  },
]

function CellRender({ cell, highlight }: { cell: Cell; highlight?: boolean }) {
  const color = highlight ? 'text-[var(--coral)]' : 'text-white/60'
  switch (cell.kind) {
    case 'ok':
      return (
        <span
          className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${
            highlight ? 'bg-[var(--coral)]/20 text-[var(--coral)]' : 'bg-[var(--green)]/15 text-[var(--green)]'
          }`}
        >
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      )
    case 'no':
      return (
        <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/40">
          <X className="h-4 w-4" />
        </span>
      )
    case 'partial':
    case 'text':
      return (
        <span className={`text-center text-sm font-medium ${color}`}>
          {cell.text}
        </span>
      )
  }
}

export function ComparisonTable() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Comparaison</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              YouTube Impact face aux alternatives
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-2 border-b border-white/10 bg-[var(--background)]/40 px-4 py-5 sm:gap-4 sm:px-6">
              <div />
              <div className="text-center">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-sm">
                  Avancer seul
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-sm">
                  Formation classique
                </p>
              </div>
              <div className="relative text-center">
                <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--coral)] sm:text-sm">
                  YouTube Impact
                </p>
                <span className="mt-1 inline-block rounded-full bg-[var(--coral)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                  Recommandé
                </span>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((r, i) => (
              <div
                key={r.criterion}
                className={`grid grid-cols-[1.4fr_1fr_1fr_1.2fr] items-center gap-2 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 ${
                  i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.015]'
                }`}
              >
                <p className="text-sm font-medium text-white/90 sm:text-base">
                  {r.criterion}
                </p>
                <div className="flex items-center justify-center">
                  <CellRender cell={r.alone} />
                </div>
                <div className="flex items-center justify-center">
                  <CellRender cell={r.classic} />
                </div>
                <div className="flex items-center justify-center">
                  <CellRender cell={r.impact} highlight />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
