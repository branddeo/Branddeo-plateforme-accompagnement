import { Quote } from 'lucide-react'
import { Reveal } from './reveal'

/**
 * Témoignages — placeholders en attendant des témoignages réels avec
 * autorisation (cf. spec section 8). NE PAS INVENTER de témoignages.
 */
const PLACEHOLDERS = Array.from({ length: 6 }, (_, i) => ({ id: i }))

const AVATAR_GRADIENTS = [
  'from-[var(--violet)] to-[var(--coral)]',
  'from-[var(--coral)] to-[#FF8985]',
  'from-[var(--violet)] to-[#AE08B7]',
  'from-[var(--violet-soft)] to-[var(--violet)]',
  'from-[var(--coral)] to-[var(--violet)]',
  'from-[#0F4696] to-[var(--violet)]',
]

export function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative bg-[var(--light-bg)] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--light-muted)]">
              Ils sont passés par là
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--light-foreground)] sm:text-5xl lg:text-6xl">
              Ce que disent{' '}
              <em className="font-display italic">
                <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] bg-clip-text text-transparent">
                  les membres
                </span>
              </em>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-dashed border-[var(--light-border)] bg-white/60 p-6 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              À compléter par Fanel
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-[var(--light-muted)]">
              6 à 10 témoignages réels de membres YouTube Impact, avec prénoms
              et autorisation. À intégrer dans un carrousel défilant
              (bords fondus sur les côtés, pause au hover).
            </p>
          </div>
        </Reveal>

        {/* Grille placeholders en attendant les vrais témoignages */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDERS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <figure className="h-full rounded-2xl border border-[var(--light-border)] bg-[var(--light-card)] p-6 shadow-sm">
                <Quote className="h-6 w-6 text-[var(--coral)]/50" />
                <blockquote className="mt-3 min-h-[120px] text-base leading-relaxed text-[var(--light-foreground)]/40">
                  [Témoignage à venir — extrait du retour d'un membre du programme.]
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-[var(--light-border)] pt-4">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} font-display text-sm font-bold text-white`}
                  >
                    ?
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--light-foreground)]">
                      [Prénom]
                    </p>
                    <p className="text-xs text-[var(--light-muted)]">
                      Membre vérifié
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
