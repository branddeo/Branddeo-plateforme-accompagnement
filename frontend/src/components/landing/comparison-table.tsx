import { ArrowRight, Check, X } from 'lucide-react'
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
  switch (cell.kind) {
    case 'ok':
      return (
        <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[var(--green)] text-white shadow-sm">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      )
    case 'no':
      return (
        <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[var(--light-bg-soft)] text-[var(--light-muted)]/50">
          <X className="h-4 w-4" />
        </span>
      )
    case 'partial':
    case 'text':
      return (
        <span
          className={`text-center text-sm font-medium ${
            highlight ? 'text-[var(--light-foreground)] font-bold' : 'text-[var(--light-muted)]'
          }`}
        >
          {cell.text}
        </span>
      )
  }
}

export function ComparisonTable() {
  return (
    <section className="relative bg-[var(--light-bg)] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--light-muted)]">
              Comparaison
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--light-foreground)] sm:text-5xl lg:text-6xl">
              YouTube Impact face aux alternatives
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-16">
            {/* Bandeau "Recommandé" sombre arrondi au-dessus de la colonne YouTube Impact */}
            <div className="hidden sm:block">
              <div
                className="absolute -top-5 right-0 z-10 w-[26%] rounded-t-2xl bg-[var(--background)] py-2.5 text-center shadow-lg"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  ⭐ Recommandé
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--light-border)] bg-[var(--light-card)] shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-2 border-b border-[var(--light-border)] bg-[var(--light-bg-soft)] px-4 py-5 sm:gap-4 sm:px-6">
                <div />
                <div className="text-center">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-[var(--light-muted)] sm:text-sm">
                    Avancer seul
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-[var(--light-muted)] sm:text-sm">
                    Formation classique
                  </p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-[var(--violet)]/10 to-[var(--coral)]/10 py-2 text-center">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-[var(--coral)] sm:text-sm">
                    YouTube Impact
                  </p>
                </div>
              </div>

              {/* Rows */}
              {ROWS.map((r, i) => (
                <div
                  key={r.criterion}
                  className={`grid grid-cols-[1.5fr_1fr_1fr_1.3fr] items-center gap-2 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 ${
                    i % 2 === 0 ? 'bg-transparent' : 'bg-[var(--light-bg-soft)]/40'
                  }`}
                >
                  <p className="text-sm font-medium text-[var(--light-foreground)] sm:text-base">
                    {r.criterion}
                  </p>
                  <div className="flex items-center justify-center">
                    <CellRender cell={r.alone} />
                  </div>
                  <div className="flex items-center justify-center">
                    <CellRender cell={r.classic} />
                  </div>
                  <div className="flex items-center justify-center rounded-md bg-gradient-to-br from-[var(--violet)]/5 to-[var(--coral)]/5">
                    <CellRender cell={r.impact} highlight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mini carte récap sombre sous le tableau */}
        <Reveal delay={0.3}>
          <div className="mt-10 mx-auto max-w-md">
            <div className="rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] p-[2px] shadow-xl">
              <div className="rounded-[14px] bg-[#0F081E] p-6 text-center">
                <p className="font-display text-4xl font-bold text-white">
                  497€ <span className="text-xl text-white/60">HT</span>
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  Conçu pour les débutants
                </p>
                <a
                  href="#tarif"
                  className="group mt-6 flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-6 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)]"
                >
                  Rejoindre maintenant
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
