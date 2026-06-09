import { Reveal } from './reveal'

const STATS = [
  { value: '+16', label: 'Experts accompagnés' },
  { value: '+1M', label: 'Vues YouTube générées' },
  { value: '6', label: 'Étapes éprouvées' },
  { value: '100%', label: 'Résultats garantis' },
]

export function StatsBar() {
  return (
    <section className="relative border-y border-white/10 bg-[var(--card)]/40">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
