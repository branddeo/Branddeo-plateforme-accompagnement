import { motion } from 'framer-motion'
import { ArrowRight, Gift, Play } from 'lucide-react'
import { Reveal } from './reveal'

const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL as string | undefined

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Halos signature Branddeo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 right-[-10%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-25 blur-[120px]" />
        <div className="absolute left-[-10%] top-1/2 h-[500px] w-[500px] rounded-full bg-[var(--violet)] opacity-15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:gap-16">
          {/* Colonne gauche — texte + CTA */}
          <div className="text-center lg:text-left">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] p-[1.5px] shadow-lg shadow-[var(--violet)]/20">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--background)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white sm:text-xs">
                  <Gift className="h-4 w-4 text-[var(--coral)]" />
                  <span>BONUS · Toolbox IA complète offerte</span>
                </span>
              </div>
            </Reveal>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[64px] xl:text-7xl"
            >
              Lance, développe et{' '}
              <em
                className="not-italic font-display"
                style={{ fontStyle: 'italic' }}
              >
                <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
                  monétise
                </span>
              </em>{' '}
              ta chaîne YouTube en 90 jours.
            </motion.h1>

            <Reveal delay={0.3}>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
                Avec ou sans montrer ton visage. Arrête d'avancer seul,
                d'empiler les vidéos sans résultat et de copier des hacks qui
                ne marchent pas. Suis une méthode complète, accompagné par une
                communauté qui avance avec toi.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-9 flex flex-col items-center gap-3 lg:items-start">
                <a
                  href="#tarif"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-8 py-4 font-display text-base font-bold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] hover:shadow-[var(--coral)]/50 sm:px-10 sm:py-5 sm:text-lg"
                >
                  Rejoindre YouTube Impact
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                  Accès immédiat à la plateforme après inscription
                </p>
              </div>
            </Reveal>
          </div>

          {/* Colonne droite — VSL */}
          <Reveal delay={0.4} distance={40}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-40 blur-[40px]"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] p-[2px]">
                <div className="relative overflow-hidden rounded-[1.4rem] bg-black">
                  {HERO_VIDEO_URL ? (
                    <video
                      src={HERO_VIDEO_URL}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-video w-full"
                    />
                  ) : (
                    <VideoPlaceholder />
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA secondaire sous la VSL (mobile uniquement — desktop le CTA est dans la colonne gauche) */}
        <Reveal delay={0.6}>
          <div className="mt-10 flex flex-col items-center gap-3 lg:hidden">
            <a
              href="#tarif"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-8 py-4 font-display text-base font-bold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)]"
            >
              Rejoindre YouTube Impact
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              Accès immédiat à la plateforme après inscription
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function VideoPlaceholder() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0A0517]">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--violet)] opacity-50 blur-[80px]" />
        <div className="absolute right-1/4 top-2/3 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--coral)] opacity-30 blur-[80px]" />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Lecture"
          disabled
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl shadow-[var(--coral)]/30 sm:h-24 sm:w-24"
        >
          <Play className="ml-1 h-7 w-7 fill-[#0F081E] text-[#0F081E] sm:h-8 sm:w-8" />
        </button>
        <p className="text-sm font-semibold tracking-tight text-white sm:text-base">
          Découvre YouTube Impact en vidéo
        </p>
      </div>
    </div>
  )
}
