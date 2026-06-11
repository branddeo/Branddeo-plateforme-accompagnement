import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from './reveal'

const INCLUSIONS = [
  'Accès complet aux deux parcours : faceless et créateur',
  'Tous les modules : niche, stratégie de contenu, production IA, tournage, montage, publication, analyse',
  'Communauté privée + lives réguliers',
  'BONUS : la Toolbox IA complète (outils, prompts, workflows)',
  'Accès à la plateforme Branddeo Academy',
]

export function OfferSection() {
  return (
    <section
      id="tarif"
      className="relative bg-[var(--light-bg)] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Colonne gauche — texte */}
          <Reveal>
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--light-muted)]">
                Tarif transparent · pas de frais cachés, pas de partage de revenus
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-[var(--light-foreground)] sm:text-5xl lg:text-6xl">
                Une offre unique,{' '}
                <em className="font-display italic">
                  <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] bg-clip-text text-transparent">
                    tout inclus
                  </span>
                </em>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--light-muted)]">
                Tu en as marre d'avancer à l'aveugle, d'empiler les essais sans
                jamais vraiment décoller. YouTube Impact te donne la méthode,
                les outils et la communauté — au même prix, pour tout le monde.
              </p>
            </div>
          </Reveal>

          {/* Colonne droite — Carte pricing SOMBRE (inversion de contraste) */}
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Bordure dégradé violet → corail */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] p-[2px] shadow-2xl shadow-[var(--violet)]/30">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] opacity-30 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[1.4rem] bg-[#0F081E] p-8 sm:p-10">
                  {/* En-tête carte */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] font-display text-2xl font-bold text-white">
                      YT
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-white">
                        YouTube Impact
                      </p>
                      <p className="text-xs font-medium text-white/60">
                        Conçu pour les débutants
                      </p>
                    </div>
                  </div>

                  {/* Prix */}
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="font-display text-6xl font-bold tracking-tight text-white sm:text-7xl">
                      497€
                    </span>
                    <span className="text-2xl font-semibold text-white/60">
                      HT
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                    Paiement unique
                  </p>

                  {/* Inclusions */}
                  <ul className="mt-8 space-y-3 border-t border-white/10 pt-8">
                    {INCLUSIONS.map((inc) => (
                      <li key={inc} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--green)] text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed text-white/90">
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA pleine largeur */}
                  <a
                    href="#tarif"
                    className="group mt-8 flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-6 py-4 font-display text-base font-bold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)]"
                  >
                    Rejoindre maintenant — 497€ HT
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                    Paiement sécurisé · Accès immédiat
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
