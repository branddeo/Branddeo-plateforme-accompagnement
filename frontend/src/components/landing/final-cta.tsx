import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Glow violet derrière (écho du hero) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[500px] w-[140%] max-w-none -translate-y-1/2"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[100%]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(93,41,153,0.4) 0%, rgba(255,96,92,0.2) 35%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lance ta chaîne{' '}
            <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
              de la bonne façon
            </span>
            , dès maintenant.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Méthode conforme aux règles YouTube · Communauté active · 100 % de
            tes revenus restent à toi.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <a
              href="#tarif"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-7 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:text-base"
            >
              Rejoindre YouTube Impact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
