import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Reveal } from './reveal'

const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL as string | undefined

const MICRO_PROMISES = [
  'Accompagnement jusqu\'au 1er revenu',
  'Sur candidature',
  'Faceless ou face caméra',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      {/* Halo violet/magenta — signature branddeo.fr */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 z-0 mx-auto h-[800px] w-[140%] max-w-none sm:-top-40 sm:h-[900px]"
      >
        <div
          className="absolute left-1/2 top-0 h-[900px] w-[1300px] -translate-x-1/2 rounded-[100%]"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(93,41,153,0.7) 0%, rgba(174,8,183,0.3) 18%, rgba(93,41,153,0.12) 40%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        {/* Badge social proof : avatars + créateurs accompagnés */}
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
              +[X] créateurs accompagnés
            </span>
          </div>
        </Reveal>

        {/* Eyebrow */}
        <Reveal delay={0.12}>
          <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--coral)] sm:text-sm">
            L'incubateur YouTube Impact
          </p>
        </Reveal>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Le{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
              seul incubateur
            </span>
            {/* Soulignement gradient violet → bleu */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-2 h-[2px] rounded-full"
              style={{
                background:
                  'linear-gradient(to right, rgba(93,41,153,0) 0%, var(--violet-soft) 30%, var(--bleu) 70%, rgba(15,70,150,0) 100%)',
              }}
            />
          </span>{' '}
          qu'il te faut pour gagner de l'argent avec ta chaîne YouTube, en
          parallèle de ton salaire.
        </motion.h1>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base lg:text-lg">
            On ne te lâche pas une formation dans les mains. On t'accompagne,
            étape par étape, jusqu'à ton premier revenu YouTube — avec ou sans
            montrer ton visage. Tu gardes ton job, tu construis à côté.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-8 flex items-center justify-center">
            <a
              href="#candidater"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-8 sm:py-3.5 sm:text-base"
            >
              Candidater à l'incubateur
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-white/65 sm:text-sm">
            {MICRO_PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* VSL */}
        <Reveal delay={0.75} distance={40}>
          <div className="relative mx-auto mt-16 max-w-4xl lg:mt-20">
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
    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#1A1030] to-[#0A0517]">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--violet)] opacity-50 blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--coral)] opacity-25 blur-[100px]" />
        <div className="absolute right-1/3 bottom-1/4 h-48 w-48 rounded-full bg-[var(--magenta)] opacity-30 blur-[80px]" />
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
          VSL à fournir — découvre l'incubateur en vidéo
        </p>
      </div>
    </div>
  )
}
