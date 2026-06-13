import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const MILESTONES = [
  { day: '1', label: 'Kick-off & Onboarding', highlight: false, position: 0 },
  { day: '3', label: 'Stratégie de contenu V1', highlight: false, position: 18 },
  { day: '7', label: 'Rédaction script', highlight: true, position: 45 },
  {
    day: '10',
    label: 'Tournage / Packaging (mini + titre)',
    highlight: false,
    position: 67,
  },
  { day: '14', label: 'V1 de la 1ère vidéo prête', highlight: true, position: 95 },
]

export function TimelineTwoWeeks() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header : H2 gauche + sous-texte/CTA droite */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              En 2 semaines, tes premières
              <br />
              vidéos{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                travaillent déjà pour toi
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-start gap-4 sm:items-end lg:items-end">
              <p className="text-sm leading-relaxed text-white/65 sm:text-right sm:text-base">
                On installe un système d'acquisition
                <br className="hidden sm:block" />
                prêt à tourner, rapidement.
              </p>
              <a
                href="#candidater"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-6 py-2.5 font-display text-sm font-semibold text-white shadow-md shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)]"
              >
                Candidater
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Séparateur fin */}
        <div className="my-8 h-px w-full bg-white/[0.06] sm:my-10" />

        {/* Carte timeline */}
        <Reveal delay={0.3}>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 sm:p-10 lg:p-14">
            {/* Glow violet derrière */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-0"
              style={{
                background:
                  'radial-gradient(ellipse at 30% 70%, rgba(93,41,153,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(174,8,183,0.18) 0%, transparent 60%)',
              }}
            />

            {/* Quadrillage subtil */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '40px 100%',
              }}
            />

            {/* Mobile : version verticale */}
            <div className="relative space-y-6 lg:hidden">
              {MILESTONES.map((m) => (
                <div key={m.day} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <p
                      className={
                        m.highlight
                          ? 'font-display text-3xl font-bold text-[var(--coral)]'
                          : 'font-display text-3xl font-bold text-white'
                      }
                    >
                      {m.day}
                    </p>
                    <div
                      className={
                        m.highlight
                          ? 'mt-1 h-12 w-px bg-gradient-to-b from-[var(--coral)] to-transparent'
                          : 'mt-1 h-12 w-px bg-gradient-to-b from-white/60 to-transparent'
                      }
                    />
                  </div>
                  <span className="mt-2 inline-block rounded-md bg-[#1a1030] px-3 py-1.5 text-xs font-medium text-white/85 sm:text-sm">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop : timeline horizontale */}
            <div className="relative hidden h-72 lg:block">
              {MILESTONES.map((m) => (
                <div
                  key={m.day}
                  className="absolute top-0 -translate-x-1/2"
                  style={{ left: `${m.position}%` }}
                >
                  <p
                    className={
                      m.highlight
                        ? 'font-display text-4xl font-bold text-[var(--coral)] sm:text-5xl'
                        : 'font-display text-4xl font-bold text-white sm:text-5xl'
                    }
                  >
                    {m.day}
                  </p>
                  <div
                    className={
                      m.highlight
                        ? 'mt-2 h-32 w-px bg-gradient-to-b from-[var(--coral)] via-[var(--coral)]/40 to-transparent'
                        : 'mt-2 h-32 w-px bg-gradient-to-b from-white/60 via-white/20 to-transparent'
                    }
                  />
                  <span className="mt-3 inline-block whitespace-nowrap rounded-md bg-[#1a1030] px-3 py-1.5 text-xs font-medium text-white/85">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
