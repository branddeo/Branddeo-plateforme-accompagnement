import { Quote } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

/**
 * Témoignages — placeholders en attendant des témoignages réels avec
 * autorisation explicite, fournis par Fanel (cf. spec section 8).
 *
 * NE PAS INVENTER de prénoms, de citations ou de résultats. Les
 * placeholders ci-dessous sont visiblement non-réels pour éviter toute
 * confusion lors d'une mise en ligne prématurée.
 */
const PLACEHOLDERS = [
  { first: '[Prénom]', label: 'Membre vérifié' },
  { first: '[Prénom]', label: 'Membre vérifié' },
  { first: '[Prénom]', label: 'Membre vérifié' },
  { first: '[Prénom]', label: 'Membre vérifié' },
  { first: '[Prénom]', label: 'Membre vérifié' },
  { first: '[Prénom]', label: 'Membre vérifié' },
]

export function Testimonials() {
  return (
    <section id="temoignages" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Ils sont passés par là</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ce que disent les membres
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl border border-dashed border-white/15 bg-[var(--card)]/40 p-6 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              À compléter par Fanel
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
              6 à 10 témoignages réels de membres YouTube Impact, avec
              prénoms et autorisation. À intégrer dans un carrousel ici.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDERS.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <figure className="h-full rounded-2xl border border-white/10 bg-[var(--card)] p-6">
                <Quote className="h-6 w-6 text-[var(--coral)]/60" />
                <blockquote className="mt-3 min-h-[100px] text-sm leading-relaxed text-white/40">
                  [Témoignage à venir — extrait du retour d'un membre du
                  programme]
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-display text-xs font-bold text-white">
                    ?
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {p.first}
                    </p>
                    <p className="text-xs text-white/50">{p.label}</p>
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
