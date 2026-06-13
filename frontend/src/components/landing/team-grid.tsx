import { Reveal } from './reveal'

/**
 * Grille de profils de l'équipe Branddeo qui accompagne dans l'incubateur.
 * Placeholders explicites : NE PAS INVENTER de coachs, profils ou chiffres.
 * Fanel fournira photos + prénoms + rôles + preuves réelles.
 */
const TEAM_SIZE = 5

export function TeamGrid() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Une{' '}
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                équipe
              </span>{' '}
              qui produit déjà des chaînes qui performent
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
              <p className="text-xs font-medium text-white/80 sm:text-sm">
                [À compléter : bandeau de réassurance, chiffres réels]
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {Array.from({ length: TEAM_SIZE }).map((_, i) => (
              <ProfileCard key={i} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/40 sm:text-sm">
            Profils à fournir par Fanel (photos, prénoms, rôles, preuves
            réelles). NE PAS inventer de coachs.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ProfileCard() {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(93,41,153,0.6) 0%, rgba(174,8,183,0.2) 40%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 flex items-end p-5">
        <div>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] font-display text-base font-bold text-white shadow-lg shadow-[var(--violet)]/30">
            B
          </div>
          <p className="mt-3 font-display text-sm font-bold text-white">
            [Prénom]
          </p>
          <p className="mt-0.5 text-[10px] text-white/55">
            [Rôle dans l'équipe]
          </p>
        </div>
      </div>
    </div>
  )
}
