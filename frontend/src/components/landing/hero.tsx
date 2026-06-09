import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Rewind, Sparkles, TrendingUp } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL as string | undefined

const PILLARS = [
  { icon: TrendingUp, label: 'Revenus' },
  { icon: Sparkles, label: 'Autorité' },
  { icon: Rewind, label: 'Impact' },
]

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const headline = 'Tes revenus, ton autorité, ton impact.'
  const words = headline.split(' ')

  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
      {/* Halos signature Branddeo : gradient violet → corail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 right-[-10%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-30 blur-[120px]" />
        <div className="absolute left-[-10%] top-1/2 h-[500px] w-[500px] rounded-full bg-[var(--violet)] opacity-20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <Reveal delay={0.05}>
            <Eyebrow className="mb-8">Branddeo Academy · YouTube Impact</Eyebrow>
          </Reveal>

          <h1 className="relative font-display text-[2.75rem] font-bold leading-[0.95] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl xl:text-8xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.05,
                  ease: EASE_EXPO,
                }}
                className={
                  word.endsWith('.')
                    ? 'serif-accent inline-block'
                    : 'inline-block mr-[0.25em]'
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)] sm:text-2xl">
              Construis ton indépendance grâce à YouTube. Méthode complète, communauté
              engagée, et tout l'écosystème pour passer de l'idée au revenu.
            </p>
          </Reveal>

          <Reveal delay={0.4} distance={20}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm backdrop-blur-sm transition-all hover:border-[var(--coral)]/40 hover:bg-white/[0.07]"
                >
                  <p.icon className="h-4 w-4 text-[var(--coral)] transition-transform group-hover:scale-110" />
                  <span className="font-semibold text-white">{p.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.5} distance={20}>
            <div className="mt-12 flex flex-col items-center gap-4">
              <Link
                to="/auth"
                className="cta-black cta-black-xl group relative overflow-hidden px-10 py-5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Rejoindre Branddeo Academy
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Link>
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
                YouTube Starter + Accelerator · Communauté active
              </p>
            </div>
          </Reveal>
        </div>

        {/* VSL / Demo Video Area */}
        <Reveal delay={0.6} distance={40}>
          <div className="relative mx-auto mt-14 max-w-5xl lg:mt-24">
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-[var(--violet)]/30 via-transparent to-[var(--coral)]/20 blur-[80px]"
            />

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 z-10 pointer-events-none border border-white/10 rounded-[2rem]" />

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
      {/* Background visual texture */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--violet)] opacity-50 blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--coral)] opacity-30 blur-[100px]" />
      </div>

      {/* Grid pattern */}
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Lecture"
          disabled
          className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl shadow-[var(--coral)]/30 backdrop-blur transition-all sm:h-32 sm:w-32"
        >
          <Play className="ml-2 h-10 w-10 fill-[#0F081E] text-[#0F081E] sm:h-12 sm:w-12" />
        </motion.button>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Voir la méthode en 90 secondes
          </p>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--coral)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--coral)]"></span>
            </span>
            Bande-annonce
          </div>
        </div>
      </div>
    </div>
  )
}
