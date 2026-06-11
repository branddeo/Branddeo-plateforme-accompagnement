import { motion } from 'framer-motion'
import { ArrowRight, Gift, Play } from 'lucide-react'
import { Reveal } from './reveal'

const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL as string | undefined

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Halos signature Branddeo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 right-[-10%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-30 blur-[120px]" />
        <div className="absolute left-[-10%] top-1/2 h-[500px] w-[500px] rounded-full bg-[var(--violet)] opacity-20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 text-center">
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] p-[1.5px] shadow-lg shadow-[var(--violet)]/20">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--background)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white sm:text-sm">
              <Gift className="h-4 w-4 text-[var(--coral)]" />
              <span>BONUS · Toolbox IA complète offerte</span>
            </span>
          </div>
        </Reveal>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Lance, développe et{' '}
          <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
            monétise
          </span>{' '}
          ta chaîne YouTube en 90 jours.
        </motion.h1>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Avec ou sans montrer ton visage. Arrête d'avancer seul, d'empiler
            les vidéos sans résultat et de copier des hacks qui ne marchent
            pas. Suis une méthode complète, accompagné par une communauté qui
            avance avec toi.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="#tarif"
              className="cta-black cta-black-xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Rejoindre YouTube Impact
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              Accès immédiat à la plateforme après inscription
            </p>
          </div>
        </Reveal>

        {/* VSL */}
        <Reveal delay={0.6} distance={40}>
          <div className="relative mx-auto mt-14 max-w-5xl lg:mt-20">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-50 blur-[40px]"
            />
            <div className="group relative overflow-hidden rounded-[1.5rem] border-2 border-transparent bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] p-[2px]">
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

        <Reveal delay={0.75}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="#tarif"
              className="cta-black cta-black-xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Rejoindre YouTube Impact
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
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
        <div className="absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--violet)] opacity-50 blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--coral)] opacity-30 blur-[100px]" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Lecture"
          disabled
          className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl shadow-[var(--coral)]/30 backdrop-blur transition-all sm:h-28 sm:w-28"
        >
          <Play className="ml-2 h-9 w-9 fill-[#0F081E] text-[#0F081E] sm:h-11 sm:w-11" />
        </button>
        <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
          Découvre YouTube Impact en vidéo
        </p>
      </div>
    </div>
  )
}
