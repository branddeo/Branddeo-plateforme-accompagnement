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
    <section className="relative bg-[var(--light-bg-soft)] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {BENEFITS.map((b) => (
              <li
                key={b}
                className="flex items-center justify-center gap-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--green)] text-white shadow-sm">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-display text-sm font-semibold text-[var(--light-foreground)] sm:text-base">
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
