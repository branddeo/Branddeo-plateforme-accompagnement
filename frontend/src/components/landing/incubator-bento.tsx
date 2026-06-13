import {
  ArrowRight,
  Headphones,
  Users,
  Bell,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from './reveal'

export function IncubatorBento() {
  return (
    <section id="programme" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header : H2 gauche + sous-titre/CTA droite */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Un{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                incubateur
              </span>
              , pas une formation de plus
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Une formation, tu la regardes seul. Un incubateur t'accompagne
              jusqu'au résultat : méthode, suivi, communauté, et un cadre qui
              te pousse jusqu'à ton premier revenu.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href="#candidater"
              className="group inline-flex items-center gap-2 self-end rounded-full bg-[var(--coral)] px-6 py-3 font-display text-sm font-semibold text-white shadow-md shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)]"
            >
              Candidater à l'incubateur
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Bento grid 2×2 */}
        <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
          <Reveal>
            <BentoCard
              icon={Headphones}
              title="Accompagnement & suivi"
              body="Tu n'avances pas seul : un suivi régulier, des retours sur ton travail, et tes blocages levés au fur et à mesure."
            >
              {/* Visuel : connection coach-élève */}
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0F081E]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      'radial-gradient(circle at 25% 30%, rgba(93,41,153,0.5) 0%, transparent 45%), radial-gradient(circle at 75% 70%, rgba(255,96,92,0.4) 0%, transparent 45%)',
                  }}
                />
                <div className="absolute left-6 top-6 flex flex-col items-center gap-1.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] text-white shadow-lg shadow-[var(--violet)]/30">
                    <Headphones className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-white/85">
                    Coach
                  </span>
                </div>
                {/* Trait connectant */}
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 300 180"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 50 35 Q 150 35 150 90 Q 150 145 250 145"
                    fill="none"
                    stroke="var(--coral)"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                    opacity="0.6"
                  />
                </svg>
                <div className="absolute right-6 bottom-6 flex flex-col items-center gap-1.5">
                  <div className="flex h-10 items-center justify-center rounded-xl bg-[var(--coral)] px-3 font-display text-xs font-bold text-white">
                    Toi
                  </div>
                  <span className="text-[10px] font-semibold text-white/85">
                    Élève
                  </span>
                </div>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--coral)]/30 bg-[var(--coral)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--coral)]">
                  Live
                </span>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal delay={0.08}>
            <BentoCard
              icon={Users}
              title="Communauté privée"
              body="Partage tes avancées, pose tes questions, obtiens des réponses. Lives réguliers."
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0F081E]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(174,8,183,0.4) 0%, rgba(93,41,153,0.2) 50%, transparent 75%)',
                  }}
                />
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] shadow-2xl shadow-[var(--violet)]/40">
                  <span className="font-display text-2xl font-bold text-white">B</span>
                </div>
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-[#1a1030] px-3 py-1.5 backdrop-blur">
                  <div className="flex -space-x-1.5">
                    {[
                      'bg-gradient-to-br from-[var(--violet)] to-[var(--coral)]',
                      'bg-gradient-to-br from-[var(--magenta)] to-[var(--violet)]',
                      'bg-gradient-to-br from-[var(--coral)] to-[#FFB37A]',
                    ].map((c, i) => (
                      <span
                        key={i}
                        aria-hidden="true"
                        className={`inline-block h-5 w-5 rounded-full border-2 border-[#1a1030] ${c}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-white/85">
                    +[X] membres
                  </span>
                </div>
                <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-md border border-[var(--coral)]/40 bg-[var(--coral)]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--coral)]">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--coral)]" />
                  Live
                </div>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal delay={0.16}>
            <BentoCard
              icon={Bell}
              title="Pratique > théorie"
              body="Chaque module te fait passer à l'action : tu appliques, tu publies."
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0F081E] p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      'radial-gradient(ellipse at bottom right, rgba(255,96,92,0.4) 0%, transparent 60%)',
                  }}
                />
                <div className="relative flex flex-col gap-2">
                  <NotifRow label="Nouvel abonné" detail="+1 abonné · il y a 2 min" />
                  <NotifRow label="100 vues atteintes" detail="Première vidéo · il y a 1h" />
                  <NotifRow label="Vidéo publiée" detail="Module 3 · validé" />
                </div>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal delay={0.24}>
            <BentoCard
              icon={ShieldCheck}
              title="Conforme aux règles YouTube"
              body="Une méthode qui respecte les règles de la plateforme, notamment sur le contenu produit avec l'IA."
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0F081E]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(65,175,110,0.25) 0%, rgba(93,41,153,0.2) 50%, transparent 75%)',
                  }}
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--green)] to-[var(--violet)] shadow-2xl shadow-[var(--green)]/30">
                    <ShieldCheck className="h-9 w-9 text-white" strokeWidth={1.75} />
                  </div>
                </div>
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function BentoCard({
  icon: Icon,
  title,
  body,
  children,
}: {
  icon: typeof Headphones
  title: string
  body: string
  children?: React.ReactNode
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 transition-all hover:border-[var(--coral)]/30 sm:p-7">
      {children}
      <div className="mt-5 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[var(--coral)]">
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-white/65">{body}</p>
        </div>
      </div>
    </div>
  )
}

function NotifRow({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#1a1030]/60 px-3 py-2.5 backdrop-blur">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--coral)]/15 text-[var(--coral)]">
        <Bell className="h-3.5 w-3.5" strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-white">{label}</p>
        <p className="truncate text-[10px] text-white/55">{detail}</p>
      </div>
    </div>
  )
}
