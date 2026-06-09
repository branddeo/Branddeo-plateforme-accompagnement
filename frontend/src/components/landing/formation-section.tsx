import { ArrowRight, Sparkles, Rocket } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

interface FormationCard {
  icon: typeof Sparkles
  badge: string
  title: string
  tagline: string
  description: string
  modules: string[]
}

const FORMATIONS: FormationCard[] = [
  {
    icon: Sparkles,
    badge: 'Formation 1',
    title: 'YouTube Starter',
    tagline: 'Pose les fondations.',
    description:
      "Pour partir du bon pied : ton profil YouTube, ta première vidéo imparfaite, et tous les pièges qu'on évite quand on démarre.",
    modules: [
      'Module 0 · Fondations YouTube (mindset, ton profil, les règles du jeu)',
      'Module 1 · Créer et configurer ta chaîne (matériel, setup, monétisation)',
      'Module 2 · Ta première vidéo imparfaite (base de données créatives)',
    ],
  },
  {
    icon: Rocket,
    badge: 'Formation 2',
    title: 'YouTube Accelerator',
    tagline: 'Construis le système complet.',
    description:
      "Le programme complet pour devenir une référence dans ta niche : packaging, scriptwriting IA, montage dynamique, publication et itération.",
    modules: [
      'Chapitre spécial · Faceless (chaîne sans visage, niches à fort potentiel)',
      'I · Trouver sa niche claire, précise et stratégique',
      'II · Packaging (titres & miniatures qui font cliquer)',
      'III · Stratégie de contenu (algorithme & idées)',
      'IV · Production assistée par IA (script, storytelling, outils)',
      'V · Tournage et setup (créateur ou faceless)',
      'VI · Montage YouTube dynamique',
      'VII · Publier, analyser, itérer',
    ],
  },
]

export function FormationSection() {
  return (
    <section
      id="formations"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-[var(--coral)]/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Les 2 formations incluses</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              De zéro à{' '}
              <span className="serif-accent">référence.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Branddeo Academy = les 2 formations dans le même accès. Tu pars
              de zéro avec Starter, tu construis ton système avec Accelerator.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {FORMATIONS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] p-8 transition-all hover:border-[var(--coral)]/40 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
                      {f.badge}
                    </span>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {f.title}
                    </h3>
                    <p className="mt-1 font-display text-lg italic text-white/60">
                      {f.tagline}
                    </p>
                  </div>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-[var(--violet)]/30">
                    <f.icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                </div>

                <p className="mt-5 text-base leading-relaxed text-white/75">
                  {f.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                  {f.modules.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--coral)]" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#offre"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[var(--coral)]"
            >
              Voir l'offre complète
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
