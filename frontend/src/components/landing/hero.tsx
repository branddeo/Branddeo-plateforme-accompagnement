import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const HERO_IMAGE_URL = import.meta.env.VITE_HERO_IMAGE_URL as string | undefined

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
        {/* Badge social proof : avatars + texte */}
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[
                'bg-gradient-to-br from-[var(--violet)] to-[var(--coral)]',
                'bg-gradient-to-br from-[var(--magenta)] to-[var(--violet)]',
                'bg-gradient-to-br from-[var(--coral)] to-[#FFB37A]',
                'bg-gradient-to-br from-[var(--violet-soft)] to-[var(--bleu)]',
              ].map((c, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={`inline-block h-6 w-6 rounded-full border-2 border-[#0F081E] ${c}`}
                />
              ))}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0F081E] bg-[var(--coral)] font-display text-[10px] font-bold text-white">
                B
              </span>
            </div>
            <span className="pr-2 text-xs font-medium text-white/85 sm:text-sm">
              +20 experts accompagnés
            </span>
          </div>
        </Reveal>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Deviens une référence sur YouTube
          <br />
          et{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
              trouve des clients en 2h par mois
            </span>
            {/* Soulignement gradient violet → bleu sous le H1 (signature branddeo.fr) */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-2 h-[2px] rounded-full"
              style={{
                background:
                  'linear-gradient(to right, rgba(93,41,153,0) 0%, var(--violet-soft) 30%, var(--bleu) 70%, rgba(15,70,150,0) 100%)',
              }}
            />
          </span>
        </motion.h1>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base lg:text-lg">
            Tu as l'expertise. Branddeo structure YouTube pour qu'il t'apporte
            prospects et rendez-vous, sans surcharge mentale.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-8 flex items-center justify-center">
            <a
              href="#candidater"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-8 sm:py-3.5 sm:text-base"
            >
              Candidater
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        {/* Image hero (studio / micro / expert) */}
        <Reveal delay={0.7} distance={40}>
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
                  alt="Expert YouTube en studio Branddeo"
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
          Photo studio à fournir
        </p>
        <p className="max-w-md text-center text-xs text-white/40 sm:text-sm">
          Visuel client / setup studio Branddeo — fournir une photo wide en
          ambiance dark.
        </p>
      </div>
    </div>
  )
}
