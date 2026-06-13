import { useState } from 'react'
import {
  ArrowRight,
  Compass,
  FileCheck,
  Wrench,
  Megaphone,
  Rocket,
} from 'lucide-react'
import { Reveal } from './reveal'

const STEPS = [
  {
    id: 'strategy',
    icon: Compass,
    title: 'Stratégie de contenu',
    body:
      "[PLACEHOLDER — texte détaillé à fournir par Fanel.]\n\nLorem ipsum dolor sit amet consectetur. A varius eu augue ut morbi dictum. Elit sed id nibh quam integer ornare nisi pharetra. Dignissim at aliquet commodo non eget diam in tristique. Vel morbi euismod in eu turpis id eleifend tristique tellus.\n\nLorem ipsum dolor sit amet consectetur. A varius eu augue ut morbi dictum. Elit sed id nibh quam integer ornare nisi pharetra.",
  },
  {
    id: 'validation',
    icon: FileCheck,
    title: 'Validation des 4 premières vidéos',
    body:
      "[PLACEHOLDER — texte détaillé à fournir par Fanel.]\n\nLorem ipsum dolor sit amet consectetur. A varius eu augue ut morbi dictum. Elit sed id nibh quam integer ornare nisi pharetra.",
  },
  {
    id: 'production',
    icon: Wrench,
    title: 'Écosystème de production sur mesure',
    body:
      "[PLACEHOLDER — texte détaillé à fournir par Fanel.]\n\nLorem ipsum dolor sit amet consectetur. A varius eu augue ut morbi dictum.",
  },
  {
    id: 'acquisition',
    icon: Megaphone,
    title: "Système d'acquisition",
    body:
      "[PLACEHOLDER — texte détaillé à fournir par Fanel.]\n\nLorem ipsum dolor sit amet consectetur. A varius eu augue ut morbi dictum.",
  },
  {
    id: 'scaling',
    icon: Rocket,
    title: 'Scaling',
    body:
      "[PLACEHOLDER — texte détaillé à fournir par Fanel.]\n\nLorem ipsum dolor sit amet consectetur. A varius eu augue ut morbi dictum.",
  },
]

export function FiveStepsAccordion() {
  const [active, setActive] = useState(STEPS[0].id)
  const current = STEPS.find((s) => s.id === active) ?? STEPS[0]
  const activeIndex = STEPS.findIndex((s) => s.id === active) + 1

  return (
    <section id="accompagnement" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              5 étapes pour construire une machine{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                YouTube rentable
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Tu es accompagné étape par étape par une équipe spécialisée qui
              structure ton message, renforce ton image et transforme ton
              contenu en levier de croissance.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
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

        <Reveal delay={0.3}>
          <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-6">
            {/* Liste verticale d'onglets à gauche */}
            <div className="space-y-2 rounded-3xl border border-white/[0.06] bg-[#150b28] p-3 sm:p-4">
              {STEPS.map((s, i) => {
                const isActive = s.id === active
                const Icon = s.icon
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(s.id)}
                    aria-pressed={isActive}
                    className={
                      isActive
                        ? 'flex w-full items-center gap-3 rounded-2xl border border-[var(--coral)]/30 bg-gradient-to-r from-[var(--coral)]/10 to-transparent px-4 py-4 text-left transition-all sm:px-5'
                        : 'flex w-full items-center gap-3 rounded-2xl border border-transparent px-4 py-4 text-left transition-all hover:bg-white/[0.03] sm:px-5'
                    }
                  >
                    <span
                      className={
                        isActive
                          ? 'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] text-white shadow-md shadow-[var(--violet)]/30'
                          : 'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-white/55'
                      }
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span
                      className={
                        isActive
                          ? 'font-display text-sm font-semibold text-white sm:text-base'
                          : 'font-display text-sm font-medium text-white/65 sm:text-base'
                      }
                    >
                      Étape {i + 1} — {s.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Panel détails à droite */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Étape {activeIndex} - {current.title}
              </h3>

              <div className="mt-6 space-y-4">
                {current.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-white/65 sm:text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* 3 mini visuels placeholder en bas */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl border border-white/[0.05] bg-[#1a1030]"
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
