import { BookOpen, UserPlus, Rocket, LineChart, Award } from 'lucide-react'
import { Reveal } from './reveal'

const STEPS = [
  {
    icon: BookOpen,
    title: 'Diagnostic initial',
    body: 'On fait le point : ton niveau, ton objectif, tes contraintes.',
  },
  {
    icon: UserPlus,
    title: 'Ton plan personnalisé',
    body: 'La feuille de route adaptée à ton profil (faceless ou créateur).',
  },
  {
    icon: Rocket,
    title: 'Début du programme',
    body: 'Tu lances, module par module.',
  },
  {
    icon: LineChart,
    title: 'Analyse & ajustements',
    body:
      "Tu ne publies pas dans le vide : chaque vidéo est analysée pour s'améliorer.",
  },
  {
    icon: Award,
    title: 'Objectif autonomie',
    body: 'Tu sais produire, publier et faire grandir ta chaîne seul.',
  },
]

export function StepTimeline() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Tu n'es{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                jamais
              </span>{' '}
              livré à toi-même
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Ce n'est pas un cours en ligne où on te dit « bon courage ». Ici,
              chaque étape est guidée et validée.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 sm:p-10 lg:p-12">
            {/* Glow décoratif */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 80% 80%, rgba(93,41,153,0.35) 0%, transparent 50%), radial-gradient(ellipse at 20% 20%, rgba(174,8,183,0.18) 0%, transparent 55%)',
              }}
            />

            {/* Desktop : steps alternés (haut/bas, comme Ecom) */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-5 gap-3">
                {STEPS.map((s, i) => (
                  <StepBox key={s.title} {...s} index={i} variant={i % 2 === 0 ? 'top' : 'bottom'} />
                ))}
              </div>
              {/* Ligne pointillée horizontale au milieu */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-white/15"
              />
            </div>

            {/* Mobile : vertical */}
            <div className="relative space-y-4 lg:hidden">
              {STEPS.map((s, i) => (
                <StepBoxMobile key={s.title} {...s} index={i} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StepBox({
  icon: Icon,
  title,
  body,
  index,
  variant,
}: {
  icon: typeof BookOpen
  title: string
  body: string
  index: number
  variant: 'top' | 'bottom'
}) {
  return (
    <div className={`flex flex-col ${variant === 'top' ? 'self-start' : 'self-end pt-32'}`}>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#1a1030] text-[var(--coral)]">
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
        <span className="font-display text-sm font-semibold text-white/75">
          Étape {index + 1}
        </span>
      </div>
      <div className="relative mt-3">
        {/* Trait vertical pointillé */}
        <div
          aria-hidden="true"
          className={`absolute left-4 ${variant === 'top' ? '-bottom-6 h-6' : '-top-6 h-6'} w-px border-l border-dashed border-[var(--coral)]/40`}
        />
        <div className="rounded-2xl border border-[var(--coral)]/40 bg-gradient-to-br from-[var(--coral)]/20 to-[var(--coral)]/5 p-4 shadow-md shadow-[var(--coral)]/10">
          <p className="font-display text-sm font-bold text-white">
            {title}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}

function StepBoxMobile({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: typeof BookOpen
  title: string
  body: string
  index: number
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center pt-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#1a1030] text-[var(--coral)]">
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
        {index < STEPS.length - 1 && (
          <div
            aria-hidden="true"
            className="mt-2 h-12 w-px border-l border-dashed border-[var(--coral)]/40"
          />
        )}
      </div>
      <div className="flex-1">
        <span className="font-display text-xs font-semibold text-white/55">
          Étape {index + 1}
        </span>
        <div className="mt-1.5 rounded-2xl border border-[var(--coral)]/40 bg-gradient-to-br from-[var(--coral)]/20 to-[var(--coral)]/5 p-4">
          <p className="font-display text-sm font-bold text-white">
            {title}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">{body}</p>
        </div>
      </div>
    </div>
  )
}
