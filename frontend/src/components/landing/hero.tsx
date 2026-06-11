import { motion } from 'framer-motion'
import { ArrowRight, Gift, Play, Star } from 'lucide-react'
import { Reveal } from './reveal'

const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL as string | undefined

const MICRO_PROMISES = [
  'Accessible aux débutants',
  'Avec ou sans visage',
  'Communauté privée',
  'Accompagnement 90 jours',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      {/* HALO AURORE — signature visuelle du modèle Quantix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 z-0 mx-auto h-[600px] w-[140%] max-w-none sm:-top-40 sm:h-[700px]"
      >
        {/* Arc lumineux violet — effet aurore */}
        <div
          className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-[100%]"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(93,41,153,0.55) 0%, rgba(93,41,153,0.25) 25%, rgba(93,41,153,0.08) 45%, transparent 65%)',
          }}
        />
        {/* Trait lumineux fin sous l'arc */}
        <div
          className="absolute left-1/2 top-[180px] h-[1px] w-[800px] -translate-x-1/2"
          style={{
            background:
              'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] p-[1px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0F081E] px-4 py-1.5 text-xs font-medium text-white/90">
              <Gift className="h-3.5 w-3.5 text-[var(--coral)]" />
              <span>BONUS · Toolbox IA complète offerte</span>
            </span>
          </div>
        </Reveal>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Lance, développe et{' '}
          <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
            monétise
          </span>
          <br className="hidden sm:block" />
          {' '}ta chaîne YouTube en 90 jours.
        </motion.h1>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Avec ou sans montrer ton visage. Une méthode complète, une
            communauté qui avance avec toi, et l'IA comme assistant de
            production.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#tarif"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-7 sm:py-3.5 sm:text-base"
            >
              Rejoindre YouTube Impact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#programme"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-display text-sm font-semibold text-white transition-all hover:bg-white/[0.07] sm:px-7 sm:py-3.5 sm:text-base"
            >
              Voir le programme
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/55 sm:text-sm">
            {MICRO_PROMISES.map((p, i) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-[var(--green)]">✓</span>
                <span>{p}</span>
                {i < MICRO_PROMISES.length - 1 && (
                  <span aria-hidden="true" className="ml-4 hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.65}>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-white/80"
          >
            <span className="flex items-center gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#00B67A] text-[#00B67A]" />
              ))}
              <Star className="h-3.5 w-3.5 fill-[#00B67A]/40 text-[#00B67A]/40" />
            </span>
            <span>Noté 4/5 sur Trustpilot</span>
          </a>
        </Reveal>

        {/* VSL */}
        <Reveal delay={0.8} distance={40}>
          <div className="relative mx-auto mt-16 max-w-4xl lg:mt-20">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[2rem]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(93,41,153,0.4) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F081E]">
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
        </Reveal>
      </div>
    </section>
  )
}

function VideoPlaceholder() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0A0517]">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--violet)] opacity-50 blur-[80px]" />
        <div className="absolute right-1/4 top-2/3 h-56 w-56 -translate-y-1/2 rounded-full bg-[var(--coral)] opacity-30 blur-[80px]" />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Lecture"
          disabled
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl shadow-[var(--coral)]/30 transition-all sm:h-20 sm:w-20"
        >
          <Play className="ml-1 h-6 w-6 fill-[#0F081E] text-[#0F081E] sm:h-7 sm:w-7" />
        </button>
        <p className="text-sm font-medium text-white/80">
          Découvre YouTube Impact en vidéo
        </p>
      </div>
    </div>
  )
}
