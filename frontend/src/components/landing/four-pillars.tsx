import {
  ArrowRight,
  Target,
  PenLine,
  Image as ImageIcon,
  Video,
  Film,
  LineChart,
} from 'lucide-react'
import { Reveal } from './reveal'

const SERVICES = [
  {
    icon: Target,
    title: 'Stratégie de contenu',
    body:
      "On identifie ce que tes prospects cherchent, on produit les bonnes vidéos, et on les transforme en vues, abonnés et clients.",
  },
  {
    icon: PenLine,
    title: 'Angle & script',
    body:
      "On choisit l'angle qui capte l'attention, on structure le message, et on transforme chaque vidéo en machine à conversion.",
  },
  {
    icon: ImageIcon,
    title: 'Packaging vidéo',
    body:
      "On rend la vidéo impossible à ignorer avec un titre et une miniature pensés pour déclencher le clic.",
  },
  {
    icon: Video,
    title: 'Production vidéo dans un studio',
    body:
      "On produit des vidéos de qualité professionnelle dans un environnement optimisé pour la performance et la régularité.",
  },
  {
    icon: Film,
    title: 'Montage vidéo engageant',
    body:
      "On transforme les rushs en vidéos rythmées qui retiennent l'attention et maximisent le temps de visionnage.",
  },
  {
    icon: LineChart,
    title: 'Gestion chaîne YouTube & optimisation',
    body:
      "On pilote la chaîne, on analyse les données, et on optimise chaque vidéo pour accélérer la croissance.",
  },
]

export function FourPillars() {
  return (
    <section
      id="systeme"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ce qu'on met en place pour que{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                tu deviennes une référence
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Branddeo ne « gère pas une chaîne ».
              <br />
              On installe un système d'acquisition qui fonctionne avec ou sans
              nous.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <a
                href="#candidater"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:text-base"
              >
                Candidater
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Grille 3 × 2 de services */}
        <div className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <ServiceCard {...s} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: typeof Target
  title: string
  body: string
  index: number
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 transition-all hover:border-[var(--coral)]/30 sm:p-7">
      {/* Visuel lumineux en haut de carte (à branddeo.fr) */}
      <div className="relative mb-6 flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0F081E]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              index % 2 === 0
                ? 'radial-gradient(circle, rgba(174,8,183,0.45) 0%, rgba(93,41,153,0.25) 40%, transparent 70%)'
                : 'radial-gradient(circle, rgba(255,96,92,0.4) 0%, rgba(174,8,183,0.2) 45%, transparent 75%)',
            filter: 'blur(20px)',
          }}
        />
        {/* Quadrillage subtil */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] shadow-lg shadow-[var(--violet)]/30">
          <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
        </div>
      </div>

      <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
    </div>
  )
}
