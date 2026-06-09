import { ArrowRight, Eye, TrendingUp, Users } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

interface CaseStudy {
  initials: string
  name: string
  niche: string
  story: string
  metrics: Array<{ icon: typeof Users; label: string; value: string }>
}

const CASES: CaseStudy[] = [
  {
    initials: 'FS',
    name: 'Fatoumata SIBY',
    niche: 'BYSIFATOU · Lifestyle & business féminin',
    story:
      "Partie de 1 000 abonnés. En 12 mois, BYSIFATOU est devenue une référence dans sa niche.",
    metrics: [
      { icon: Users, label: 'Abonnés', value: '1k → 40k' },
      { icon: Eye, label: 'Vues / vidéo', value: '+40k' },
      { icon: TrendingUp, label: 'Revenus / mois', value: '+3 700€' },
    ],
  },
  {
    initials: 'FI',
    name: 'Frederick Itoua',
    niche: 'Expert grands groupes · Stratégie & leadership',
    story:
      'Une expertise solide mais aucune visibilité. En quelques mois, la chaîne est devenue le moteur de son business.',
    metrics: [
      { icon: Users, label: 'Abonnés', value: '3,5k → 45k' },
      { icon: Eye, label: 'Vues / vidéo', value: '+500k' },
      { icon: TrendingUp, label: 'Revenus / mois', value: '+2 000€' },
    ],
  },
]

export function FeaturedMembers() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--coral)]/15 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[var(--violet)]/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Avant · Après</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              La méthode appliquée.{' '}
              <span className="serif-accent">Les résultats.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Ces personnes ont appliqué exactement la méthode que tu vas
              apprendre. Voici ce qui s'est passé.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] p-8 sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-brand opacity-25 blur-[60px]"
                />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand font-display text-lg font-bold text-white">
                      {c.initials}
                    </span>
                    <div>
                      <p className="font-display text-xl font-bold text-white">
                        {c.name}
                      </p>
                      <p className="text-sm text-white/60">{c.niche}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-white/75">
                    {c.story}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                          {m.label}
                        </p>
                        <p className="mt-1 font-display text-xl font-bold tracking-tight text-[var(--coral)] sm:text-2xl">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-white/50">
              +14 autres chaînes propulsées avec la même méthode
            </p>
            <a
              href="#offre"
              className="cta-ghost group text-white/70 hover:text-white"
            >
              Voir ce que tu obtiens
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
