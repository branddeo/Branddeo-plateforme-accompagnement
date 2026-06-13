import { Reveal } from './reveal'

const STATS = [
  { value: '+32', label: 'opportunités possible chaque mois' },
  { value: '+12', label: 'mois de contenu qui travaille pour toi' },
  { value: '+15k', label: 'personnes pouvant découvrir ton expertise' },
  { value: '+10', label: 'leads qualifiés qui ont besoin de vous par vidéo' },
]

export function StatsBar() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="relative grid gap-10 rounded-3xl border border-white/[0.06] bg-[#150b28] p-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
          {/* Glow violet/magenta interne en angle (signature branddeo.fr) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 -z-0 h-72 w-72 rounded-full"
            style={{
              background:
                'radial-gradient(circle at center, rgba(174,8,183,0.18) 0%, rgba(93,41,153,0.08) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Bordure pointillée bleue verticale décorative (signature) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-6 left-6 hidden border-l border-dashed border-[var(--bleu)]/40 lg:block"
          />

          <Reveal>
            <div className="relative lg:pl-8">
              <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ce que tu loupes sans
                <br />
                <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                  avoir de chaîne YouTube
                </span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/65 sm:text-base">
                Tu sais que YouTube c'est LA plateforme où tu dois être,
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/65 sm:text-base">
                mais sans cadre, ça devient du chaos : idées floues, essaies
                ratés, qualité moyenne et toujours aucune opportunité concrète
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {STATS.map((s) => (
                <div
                  key={s.value}
                  className="rounded-2xl border border-white/[0.06] bg-[#1a1030] p-5 sm:p-6"
                >
                  <p className="font-display text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-white/60 sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
