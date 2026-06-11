import { ArrowRight, Compass, ListChecks, Sparkles, Users, Coins } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const BENTO = [
  {
    icon: Compass,
    title: 'Deux parcours, un seul programme',
    body:
      "Faceless ou face caméra : le programme s'adapte à ton profil, module par module.",
    large: false,
  },
  {
    icon: ListChecks,
    title: 'La méthode complète',
    body:
      'Niche, stratégie de contenu, packaging, scripts, production, publication, analyse. Rien à deviner.',
    large: false,
  },
  {
    icon: Sparkles,
    title: "L'IA comme assistant de production",
    body:
      "Scripts, voix off, visuels, montage : tu produis plus vite, en restant conforme aux règles YouTube.",
    large: false,
  },
  {
    icon: Users,
    title: "Tu n'avances plus seul",
    body:
      "Communauté privée, lives réguliers, retours sur ton travail. Les blocages se débloquent, et tu avances entouré de créateurs qui visent la même chose que toi.",
    large: true,
  },
  {
    icon: Coins,
    title: 'Des premiers revenus sans saut dans le vide',
    body:
      "La méthode est pensée pour générer tes premiers revenus en parallèle de ton activité actuelle. Tu construis ton indépendance brique par brique, avec un plan clair.",
    large: true,
  },
]

export function FourPillars() {
  return (
    <section
      id="programme"
      className="relative py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Le programme</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Une méthode complète,{' '}
              <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
                de zéro à ta chaîne monétisée
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Tu choisis ton profil, tu suis les étapes, tu construis ton actif.
            </p>
          </Reveal>
        </div>

        {/* Bento grid : 3 cartes + 2 cartes larges */}
        <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {BENTO.slice(0, 3).map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <BentoCard {...b} />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {BENTO.slice(3).map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <BentoCard {...b} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-14 text-center">
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

function BentoCard({
  icon: Icon,
  title,
  body,
  large,
}: {
  icon: typeof Compass
  title: string
  body: string
  large?: boolean
}) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#1A1030] p-7 transition-all hover:border-[var(--coral)]/30 sm:p-8 ${large ? '' : ''}`}
    >
      {/* Visuel lumineux en haut de carte */}
      <div className="relative mb-6 flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.05] bg-gradient-to-br from-[#1A1030] to-[#0F081E]">
        {/* Glow violet derrière l'icône */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-50 blur-[40px]"
        />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] shadow-lg shadow-[var(--violet)]/30">
          <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
        </div>
      </div>

      <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
        {body}
      </p>
    </div>
  )
}
