import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const BENEFITS = [
  'Accessible aux débutants',
  'Avec ou sans visage',
  'Communauté privée incluse',
  'Accompagnement sur 90 jours',
]

export function BenefitsBar() {
  return (
    <section className="relative border-y border-white/10 bg-[var(--card)]/40 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {BENEFITS.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--card)] px-4 py-3 sm:px-5 sm:py-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--green)]/15 text-[var(--green)]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-display text-sm font-semibold text-white sm:text-base">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
