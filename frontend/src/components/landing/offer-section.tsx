import { ArrowRight, Check, Star } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const INCLUSIONS = [
  'Accès complet aux deux parcours : faceless et créateur',
  'Tous les modules : niche, stratégie, production IA, publication, analyse',
  'Communauté privée + lives réguliers',
  'BONUS : la Toolbox IA complète (outils, prompts, workflows)',
  'Accès à la plateforme Branddeo Academy',
]

export function OfferSection() {
  return (
    <section id="tarif" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Le tarif</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Une offre unique,{' '}
            <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
              tout inclus
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
            Pas de frais cachés, pas de partage de revenus.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {/* Carte pricing unique centrée, max ~480px */}
          <div className="relative mx-auto mt-14 max-w-[480px]">
            {/* Glow dégradé derrière */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(93,41,153,0.5) 0%, rgba(255,96,92,0.3) 50%, transparent 75%)',
                filter: 'blur(30px)',
              }}
            />

            {/* Bordure dégradée */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] p-[1.5px] shadow-2xl shadow-[var(--violet)]/30">
              <div className="rounded-[1.4rem] bg-[#1A1030] p-7 text-left sm:p-9">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] font-display text-sm font-bold text-white">
                    YT
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-white">
                      YouTube Impact
                    </p>
                    <p className="text-xs font-medium text-white/55">
                      Conçu pour les débutants
                    </p>
                  </div>
                </div>

                {/* Prix */}
                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    497€
                  </span>
                  <span className="text-xl font-semibold text-white/60">HT</span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  Paiement unique
                </p>

                {/* Trait */}
                <div className="my-7 h-px bg-white/10" />

                {/* Inclusions */}
                <ul className="space-y-3">
                  {INCLUSIONS.map((inc) => (
                    <li key={inc} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--green)]/20 text-[var(--green)]">
                        <Check className="h-3 w-3" strokeWidth={3.5} />
                      </span>
                      <span className="text-sm leading-relaxed text-white/85">
                        {inc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA pleine largeur de la carte */}
                <a
                  href="#tarif"
                  className="group mt-8 flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:text-base"
                >
                  Rejoindre maintenant
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <p className="mt-3 text-center text-xs font-medium text-white/55">
                  Paiement sécurisé · Accès immédiat
                </p>

                {/* Rappel Trustpilot */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/55">
                  <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-[#00B67A] text-[#00B67A]"
                      />
                    ))}
                    <Star className="h-3 w-3 fill-[#00B67A]/40 text-[#00B67A]/40" />
                  </span>
                  <span>4/5 sur Trustpilot</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
