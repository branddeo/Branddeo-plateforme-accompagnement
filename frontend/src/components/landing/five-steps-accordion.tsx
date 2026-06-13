import { useState } from 'react'
import {
  ArrowRight,
  Compass,
  Crosshair,
  Sparkles,
  Camera,
  TrendingUp,
} from 'lucide-react'
import { Reveal } from './reveal'

const STEPS = [
  {
    id: 'fondations',
    icon: Compass,
    title: 'Fondations YouTube',
    body:
      "On commence par poser les bases : créer/configurer ta chaîne, comprendre comment YouTube fonctionne vraiment (algorithme, packaging, durée, suggestion), choisir ton parcours (faceless ou face caméra).\n\nObjectif : à la fin de la semaine, ta chaîne est prête à recevoir tes premières vidéos.",
  },
  {
    id: 'niche',
    icon: Crosshair,
    title: 'Niche & positionnement',
    body:
      "On trouve la niche qui croise ce que tu sais faire, ce qui se regarde, et ce qui te ressemble. On définit ton positionnement éditorial et tes piliers de contenu — pour que chaque vidéo construise un actif cohérent.\n\nPas de format générique : ta chaîne te ressemble.",
  },
  {
    id: 'production',
    icon: Sparkles,
    title: 'Production assistée par IA',
    body:
      "Scripts, voix off, visuels, miniatures, packaging — tu apprends à produire deux fois plus vite avec les bons outils IA, en restant 100% conforme aux règles YouTube. La Toolbox IA (prompts, workflows) est livrée avec.\n\nL'IA propose. Tu décides.",
  },
  {
    id: 'tournage',
    icon: Camera,
    title: 'Tournage & montage',
    body:
      "Faceless ou face caméra, on couvre les deux : choix du setup, lumière, cadre, prise de parole, structure du discours, montage rythmé. Tu sors de cette étape avec un process de production reproductible.\n\nPas besoin d'être à l'aise dès le premier jour.",
  },
  {
    id: 'scaling',
    icon: TrendingUp,
    title: 'Publication, analyse, scaling',
    body:
      "On installe la cadence : publication régulière, analyse des données (CTR, rétention, suggestion), itérations qui marchent. Tu construis tes premiers revenus en parallèle de ton activité actuelle.\n\nObjectif : un système qui tourne, pas une mode passagère.",
  },
]

export function FiveStepsAccordion() {
  const [active, setActive] = useState(STEPS[0].id)
  const current = STEPS.find((s) => s.id === active) ?? STEPS[0]
  const activeIndex = STEPS.findIndex((s) => s.id === active) + 1

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              5 étapes pour construire{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                ta chaîne monétisée
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Tu avances étape par étape, avec une méthode validée et une
              communauté qui répond à tes blocages au fil de l'eau.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
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

        <Reveal delay={0.3}>
          <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-6">
            {/* Onglets gauche */}
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

            {/* Panel détails */}
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

              {/* 3 mini visuels placeholder */}
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
