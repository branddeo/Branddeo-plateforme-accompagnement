import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Glow violet/magenta derrière */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[500px] w-[140%] max-w-none -translate-y-1/2"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[100%]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(93,41,153,0.5) 0%, rgba(174,8,183,0.25) 30%, rgba(255,96,92,0.15) 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Prêt à transformer YouTube en
            <br />
            <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
              machine à clients ?
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            On installe ton système d'acquisition YouTube. Tu te concentres sur
            ton expertise, on s'occupe du reste.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <a
              href="#candidater"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-8 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)]"
            >
              Candidater
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
