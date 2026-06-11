import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

/**
 * Preuves sociales — captures de messages communauté, résultats partagés
 * (cf. spec section 10). `[PLACEHOLDER]` tant que Fanel n'a pas fourni les
 * images. Quand les images seront prêtes, remplacer la grille de
 * placeholders par un vrai carrousel défilant (composant marquee).
 */
export function SocialProofCarousel() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Preuves sociales</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Les coulisses de la communauté
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Captures de messages, résultats partagés, échanges qui font
              avancer.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl border border-dashed border-white/15 bg-[var(--card)]/40 p-6 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              À compléter par Fanel
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
              Captures d'écran de messages communauté et résultats partagés,
              à intégrer dans un carrousel défilant (anonymisées si besoin).
            </p>
          </div>
        </Reveal>

        {/* Placeholder grid — visiblement vide, à remplacer par les vraies captures */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--card)] to-[var(--background)]/50"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
