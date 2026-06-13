import {
  ArrowRight,
  Compass,
  ListChecks,
  Sparkles,
  Users,
  Coins,
  Wrench,
} from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const PILLARS = [
  {
    icon: Compass,
    title: 'Deux parcours, un seul programme',
    body:
      "Faceless ou face caméra : le programme s'adapte à ton profil, module par module.",
  },
  {
    icon: ListChecks,
    title: 'La méthode complète',
    body:
      'Niche, stratégie de contenu, packaging, scripts, production, publication, analyse. Rien à deviner.',
  },
  {
    icon: Sparkles,
    title: "L'IA comme assistant de production",
    body:
      "Scripts, voix off, visuels, montage : tu produis plus vite, en restant conforme aux règles YouTube.",
  },
  {
    icon: Users,
    title: "Tu n'avances plus seul",
    body:
      "Communauté privée, lives réguliers, retours sur ton travail. Les blocages se débloquent.",
  },
  {
    icon: Coins,
    title: 'Premiers revenus en parallèle de ton activité',
    body:
      "La méthode est pensée pour générer tes premiers revenus en parallèle de ton activité actuelle, brique par brique.",
  },
  {
    icon: Wrench,
    title: 'Toolbox IA complète (BONUS)',
    body:
      'Outils, prompts, workflows prêts à coller. Tu accélères ta production dès la première semaine.',
  },
]

export function FourPillars() {
  return (
    <section
      id="programme"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Le programme</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Une méthode complète,{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                de zéro à ta chaîne monétisée
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Tu choisis ton profil, tu suis les étapes, tu construis ton actif.
            </p>
          </Reveal>
        </div>

        {/* Grille 3 × 2 de piliers */}
        <div className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <PillarCard {...p} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-12 text-center">
            <a
              href="#tarif"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:text-base"
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

function PillarCard({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: typeof Compass
  title: string
  body: string
  index: number
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 transition-all hover:border-[var(--coral)]/30 sm:p-7">
      {/* Visuel lumineux en haut de carte */}
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
