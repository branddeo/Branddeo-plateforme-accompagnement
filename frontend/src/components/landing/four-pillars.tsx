import {
  Search,
  Target,
  Users,
  Compass,
  Layers,
  CalendarCheck,
  type LucideIcon,
} from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

interface Step {
  icon: LucideIcon
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse de la demande',
    description:
      "On part de ce que les gens cherchent vraiment. Pas de ton ego, pas de ce que TU veux dire — de ce qu'ils veulent voir.",
  },
  {
    icon: Layers,
    number: '02',
    title: 'Analyse du marché',
    description:
      'On cartographie ta niche. Volumes, tendances, opportunités qui valent le coup vs angles morts à éviter.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Analyse des concurrents',
    description:
      "On regarde qui cartonne, ce qui marche chez eux, et — surtout — ce qu'ils oublient. Là est ta brèche.",
  },
  {
    icon: Compass,
    number: '04',
    title: 'Positionnement éditorial',
    description:
      "Ton angle clair, ta posture, ce qui te rend impossible à confondre avec un autre. C'est ce qui crée la fidélité.",
  },
  {
    icon: Target,
    number: '05',
    title: 'Choix des piliers de contenu',
    description:
      'Les 3 ou 4 thématiques sur lesquelles tu vas devenir incontournable. Pas 12. Pas 8. Juste les bons.',
  },
  {
    icon: CalendarCheck,
    number: '06',
    title: 'Stratégie de publication',
    description:
      "Quand, à quel rythme, avec quel packaging. Le système qui transforme tes vidéos en machine d'acquisition.",
  },
]

export function FourPillars() {
  return (
    <section id="methode" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--violet)]/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>La méthode YouTube Impact</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              On ne te montre pas comment{' '}
              <span className="serif-accent">faire du YouTube.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              On te donne le système qui transforme une chaîne en machine
              d'autorité, de revenus et d'impact. 6 étapes, dans cet ordre.
              Jamais autrement.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--coral)]/40 hover:shadow-xl hover:shadow-[var(--coral)]/10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-[var(--coral)] tracking-tight">
                    {step.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                    <step.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
