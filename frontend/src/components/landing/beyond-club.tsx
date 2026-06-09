import { MessageSquare, Video, Mic, RefreshCw, type LucideIcon } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

interface Pillar {
  icon: LucideIcon
  title: string
  body: string
}

const PILLARS: Pillar[] = [
  {
    icon: MessageSquare,
    title: 'Espace privé',
    body:
      "Une communauté directement dans la plateforme. Tu échanges avec les autres apprenants, tu partages tes essais, tu reçois du feedback réel — pas du Discord poussiéreux que personne n'ouvre.",
  },
  {
    icon: Video,
    title: 'Lives mensuels',
    body:
      'Une fois par mois, je suis en direct avec les coachs Branddeo. On décortique vos vidéos, on revoit ce qui bloque, on pousse ce qui marche. Replay accessible si tu rates.',
  },
  {
    icon: Mic,
    title: 'Q&A en direct',
    body:
      "Tu poses tes questions, tu obtiens des réponses précises sur ta situation. Pas du conseil générique — du retour ciblé sur ta chaîne, ta niche, ta dernière vidéo.",
  },
  {
    icon: RefreshCw,
    title: 'Mises à jour à vie',
    body:
      "YouTube change, l'algorithme évolue, l'IA bouge tout. Chaque nouvelle leçon, chaque mise à jour de la méthode est incluse pour toujours. Tu ne paies plus jamais.",
  },
]

export function BeyondClub() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--violet)]/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Au-delà des formations</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tu n'apprends pas seul.{' '}
              <span className="serif-accent">Jamais.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Branddeo Academy, c'est aussi une communauté qui te tire vers le
              haut et un accompagnement vivant qui suit l'évolution de YouTube.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group flex h-full gap-5 rounded-2xl border border-white/10 bg-[var(--card)] p-7 transition-all hover:border-[var(--coral)]/40 hover:shadow-xl hover:shadow-[var(--violet)]/10">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-[var(--violet)]/30">
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
