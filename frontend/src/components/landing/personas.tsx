import { AlertCircle, Eye, Clock, TrendingDown } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const PAINS = [
  {
    icon: AlertCircle,
    title: 'Tu as essayé. Et tu ne sais pas pourquoi ça ne décolle pas.',
    body:
      "Idées floues. Vidéos qui font 200 vues. Tu publies, tu doutes, tu abandonnes, tu recommences. Ce n'est pas la motivation qui manque — c'est le système.",
  },
  {
    icon: Eye,
    title: 'Tu vois des créateurs avec moins d\'expertise que toi cartonner.',
    body:
      "Eux ont compris quelque chose que tu n'as pas encore vu. Ce n'est pas du talent — c'est une méthode. Une méthode qui s'apprend.",
  },
  {
    icon: Clock,
    title: 'Tu travailles dur. Et le temps file.',
    body:
      "Ton salaire tombe chaque mois, mais ton vrai projet attend. Tu veux construire un actif qui bosse pour toi — pas juste un job qui te bouffe.",
  },
  {
    icon: TrendingDown,
    title: 'Tu confonds "créer du contenu" et "construire un actif".',
    body:
      "Filmer une vidéo, c'est facile. Construire une chaîne YouTube qui amène des revenus mois après mois, c'est un système — pas de l'inspiration.",
  },
]

export function Personas() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Tu te reconnais ?</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Le problème,{' '}
              <span className="serif-accent">ce n'est pas toi.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              C'est qu'on ne t'a jamais montré le système. Voilà ce qu'on entend
              le plus souvent.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--coral)]/40">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--coral)]/15 text-[var(--coral)]">
                  <p.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
