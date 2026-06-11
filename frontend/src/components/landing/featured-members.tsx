import { ArrowRight, Eye, Clock, Activity } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

/**
 * Résultats des chaînes sous gestion Branddeo (section 9 de la spec).
 *
 * NE PAS INVENTER de chiffres. Les noms, abonnés et stats doivent venir de
 * la liste validée par Fanel, avec autorisation explicite des chaînes
 * concernées. Tant qu'on n'a pas la liste, on affiche un placeholder
 * structuré pour que la mise en ligne ne puisse pas se faire avec des
 * chiffres bidons.
 */
const CHAIN_PLACEHOLDERS = [
  '[Chaîne 1 — nom, niche, abonnés]',
  '[Chaîne 2 — nom, niche, abonnés]',
  '[Chaîne 3 — nom, niche, abonnés]',
  '[Chaîne 4 — nom, niche, abonnés]',
]

export function FeaturedMembers() {
  return (
    <section
      id="resultats"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--coral)]/15 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[var(--violet)]/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Sous-section A — Chaînes sous gestion */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Branddeo, c'est d'abord du terrain</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Les résultats des chaînes sous gestion Branddeo.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Avant d'enseigner la méthode, on l'applique. Branddeo accompagne
              et produit des chaînes YouTube au quotidien : stratégie,
              packaging, production, optimisation. Voici ce que ça donne.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-dashed border-white/15 bg-[var(--card)]/40 p-6 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              À compléter par Fanel
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
              Liste des chaînes sous gestion Branddeo avec chiffres vérifiés et
              autorisation d'affichage (noms, abonnés, captures éventuelles).
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHAIN_PLACEHOLDERS.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[var(--card)] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-display text-base font-bold text-white">
                  ?
                </div>
                <p className="mt-4 font-display text-base font-semibold text-white/50">
                  {p}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/5 pt-4 text-xs">
                  <div>
                    <p className="text-white/40">Abonnés</p>
                    <p className="font-display text-base font-semibold text-white/60">
                      —
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40">Vues</p>
                    <p className="font-display text-base font-semibold text-white/60">
                      —
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Sous-section B — Preuve long format */}
        <Reveal delay={0.3}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] p-8 sm:p-12">
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto] sm:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
                  Preuve long format
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Une vidéo de <span className="text-[var(--coral)]">+3 heures</span> qui retient l'attention de bout en bout.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  Quand la stratégie de contenu est juste, le format long
                  performe — même contre toutes les croyances sur YouTube.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl border border-white/10 bg-[var(--background)]/60 p-5 text-center">
                  <Eye className="mx-auto h-6 w-6 text-[var(--coral)]" />
                  <p className="mt-3 font-display text-3xl font-bold text-white">
                    ~134k
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Vues
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[var(--background)]/60 p-5 text-center">
                  <Activity className="mx-auto h-6 w-6 text-[var(--coral)]" />
                  <p className="mt-3 font-display text-3xl font-bold text-white">
                    ~9 %
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Jusqu'à la fin
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs italic text-white/40">
              [Chiffres à vérifier et actualiser avant mise en ligne]
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-14 text-center">
            <a
              href="#tarif"
              className="cta-black cta-black-xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Rejoindre YouTube Impact
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
          </div>
        </Reveal>

        {/* Clock import kept usable — referenced for potential watch-time metric */}
        <span className="sr-only">
          <Clock />
        </span>
      </div>
    </section>
  )
}
