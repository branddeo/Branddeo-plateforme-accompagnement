import { motion } from 'framer-motion'
import { ArrowRight, Gift, Star } from 'lucide-react'
import { Reveal } from './reveal'

const HERO_IMAGE_URL = import.meta.env.VITE_HERO_IMAGE_URL as string | undefined

const MICRO_PROMISES = [
  'Accessible aux débutants',
  'Avec ou sans visage',
  'Communauté privée',
  'Accompagnement 90 jours',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      {/* Halo violet derrière le hero — signature branddeo.fr */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 z-0 mx-auto h-[700px] w-[140%] max-w-none sm:-top-40 sm:h-[800px]"
      >
        <div
          className="absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 rounded-[100%]"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(93,41,153,0.65) 0%, rgba(174,8,183,0.25) 20%, rgba(93,41,153,0.12) 40%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        {/* Badge BONUS */}
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
          className="relative mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Lance, développe et{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
              monétise
            </span>
            {/* Soulignement gradient violet → bleu (signature branddeo.fr) */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-2 h-[2px] rounded-full"
              style={{
                background:
                  'linear-gradient(to right, rgba(93,41,153,0) 0%, var(--violet-soft) 30%, var(--bleu) 70%, rgba(15,70,150,0) 100%)',
              }}
            />
          </span>
          <br className="hidden sm:block" />
          {' '}ta chaîne YouTube en 90 jours.
        </motion.h1>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base lg:text-lg">
            Avec ou sans montrer ton visage. Une méthode complète, une
            communauté qui avance avec toi, et l'IA comme assistant de
            production.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#tarif"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-8 sm:py-3.5 sm:text-base"
            >
              Rejoindre YouTube Impact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#programme"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 font-display text-sm font-semibold text-white transition-all hover:bg-white/[0.07] sm:px-8 sm:py-3.5 sm:text-base"
            >
              Voir le programme
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/55 sm:text-sm">
            {MICRO_PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-[var(--green)]">✓</span>
                <span>{p}</span>
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

        {/* Image hero studio (à fournir) */}
        <Reveal delay={0.8} distance={40}>
          <div className="relative mx-auto mt-14 max-w-4xl lg:mt-16">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[2rem]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(93,41,153,0.5) 0%, rgba(174,8,183,0.2) 40%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F081E]">
              {HERO_IMAGE_URL ? (
                <img
                  src={HERO_IMAGE_URL}
                  alt="Branddeo Academy"
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <HeroPlaceholder />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HeroPlaceholder() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#1A1030] to-[#0A0517]">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--violet)] opacity-50 blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--coral)] opacity-25 blur-[100px]" />
        <div className="absolute right-1/3 bottom-1/4 h-48 w-48 rounded-full bg-[var(--magenta)] opacity-30 blur-[80px]" />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-6">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] font-display text-2xl font-bold text-white shadow-2xl shadow-[var(--violet)]/40 sm:h-20 sm:w-20 sm:text-3xl">
          B
        </span>
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-base">
          Visuel hero à fournir
        </p>
        <p className="max-w-md text-center text-xs text-white/40 sm:text-sm">
          Image ou VSL de présentation du programme YouTube Impact.
        </p>
      </div>
    </div>
  )
}
