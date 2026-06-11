import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from './reveal'

const REASSURANCES = [
  'Une méthode conforme aux règles YouTube',
  'Une communauté active qui avance avec toi',
  '100 % de tes revenus restent à toi',
]

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full bg-gradient-to-br from-[var(--violet)] via-[var(--violet)] to-[var(--coral)] py-24 sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Lance ta chaîne de la bonne façon, dès maintenant.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-6">
              {REASSURANCES.map((r) => (
                <li
                  key={r}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/95 backdrop-blur-sm sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[var(--violet)]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center gap-3">
              <a
                href="#tarif"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-display text-base font-bold text-[var(--violet)] shadow-2xl shadow-black/30 transition-all hover:scale-[1.02] sm:px-10 sm:py-5 sm:text-lg"
              >
                Rejoindre YouTube Impact — 497€ HT
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                Paiement sécurisé · Accès immédiat
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
