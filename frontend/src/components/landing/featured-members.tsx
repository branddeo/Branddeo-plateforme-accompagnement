import { ArrowRight, BarChart3, Eye, Activity } from 'lucide-react'
import { Reveal } from './reveal'

/**
 * Résultats — chaînes sous gestion Branddeo (cf. spec section 9).
 * NE PAS INVENTER de chiffres ni de noms. Placeholders explicites.
 */
const NICHE_PLACEHOLDERS = [
  { label: '[Niche 1 — à compléter]', color: 'from-[var(--violet)] to-[#7E3FCB]' },
  { label: '[Niche 2 — à compléter]', color: 'from-[var(--coral)] to-[#FF8985]' },
  { label: '[Niche 3 — à compléter]', color: 'from-[#AE08B7] to-[var(--violet)]' },
]

export function FeaturedMembers() {
  return (
    <section
      id="resultats"
      className="relative bg-[var(--light-bg)] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* SOUS-SECTION A — visuel gauche, texte droit */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <AnalyticsMockup />
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--light-muted)]">
                Branddeo, c'est d'abord du terrain
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-[var(--light-foreground)] sm:text-5xl">
                Les résultats des chaînes{' '}
                <em className="font-display italic">
                  <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] bg-clip-text text-transparent">
                    sous gestion Branddeo
                  </span>
                </em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--light-muted)]">
                Avant d'enseigner la méthode, on l'applique. Branddeo accompagne
                et produit des chaînes YouTube au quotidien : stratégie,
                packaging, production, optimisation. Voici ce que ça donne.
              </p>

              <p className="mt-6 text-sm font-medium text-[var(--light-muted)]">
                Les niches couvertes :
              </p>
              <ul className="mt-3 space-y-2.5">
                {NICHE_PLACEHOLDERS.map((n) => (
                  <li key={n.label} className="flex items-center gap-3">
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full bg-gradient-to-br ${n.color}`}
                    />
                    <span className="text-base font-semibold text-[var(--light-foreground)]/55">
                      {n.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic text-[var(--light-muted)]/70">
                [À compléter par Fanel : noms des chaînes sous gestion + chiffres vérifiés + autorisations]
              </p>
            </div>
          </Reveal>
        </div>

        {/* SOUS-SECTION B — texte gauche, visuel droit (preuve long format) */}
        <div className="mt-28 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--coral)]">
                Preuve long format
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-[var(--light-foreground)] sm:text-4xl lg:text-5xl">
                Une vidéo de{' '}
                <em className="font-display italic">
                  <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] bg-clip-text text-transparent">
                    plus de 3 heures
                  </span>
                </em>{' '}
                qui retient l'attention de bout en bout.
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-[var(--light-muted)]">
                Quand la stratégie de contenu est juste, le format long
                performe — même contre toutes les croyances sur YouTube.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[var(--light-border)] bg-[var(--light-card)] p-5 shadow-sm">
                  <Eye className="h-5 w-5 text-[var(--coral)]" />
                  <p className="mt-3 font-display text-3xl font-bold text-[var(--light-foreground)]">
                    ~134k
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--light-muted)]">
                    Vues
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--light-border)] bg-[var(--light-card)] p-5 shadow-sm">
                  <Activity className="h-5 w-5 text-[var(--coral)]" />
                  <p className="mt-3 font-display text-3xl font-bold text-[var(--light-foreground)]">
                    ~9 %
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--light-muted)]">
                    Jusqu'à la fin
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs italic text-[var(--light-muted)]/70">
                [Chiffres à vérifier et actualiser avant mise en ligne]
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <AnalyticsMockup variant="long-form" />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <a
              href="#tarif"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-10 py-4 font-display text-base font-bold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-12 sm:py-5 sm:text-lg"
            >
              Rejoindre YouTube Impact
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function AnalyticsMockup({ variant = 'channel' }: { variant?: 'channel' | 'long-form' }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--light-border)] bg-[var(--light-card)] p-6 shadow-xl sm:p-8">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs font-medium text-[var(--light-muted)]">
          YouTube Studio · Analytics
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center sm:gap-4">
        {[
          { label: 'Vues', value: '—' },
          { label: 'Watch time', value: '—' },
          { label: 'Abonnés', value: '—' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-[var(--light-bg-soft)] py-4">
            <p className="font-display text-xl font-bold text-[var(--light-foreground)]/60 sm:text-2xl">
              {s.value}
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--light-muted)]">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex h-40 items-end gap-1.5 rounded-xl bg-[var(--light-bg-soft)] p-4">
        {Array.from({ length: variant === 'long-form' ? 18 : 14 }, (_, i) => {
          const height =
            variant === 'long-form'
              ? 20 + Math.sin(i * 0.5) * 25 + i * 2.5
              : 20 + Math.sin(i * 0.6) * 20 + i * 3
          return (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[var(--violet)] to-[var(--coral)] opacity-80"
              style={{ height: `${Math.max(15, Math.min(100, height))}%` }}
            />
          )
        })}
      </div>

      <p className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--light-muted)]">
        <BarChart3 className="h-4 w-4" />
        [Visuel à remplacer par capture réelle fournie par Fanel]
      </p>
    </div>
  )
}
