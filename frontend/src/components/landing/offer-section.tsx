import { Link } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const INCLUDED = [
  {
    title: 'YouTube Starter',
    body: 'Les fondations : mindset, setup chaîne, ton profil YouTube, première vidéo imparfaite.',
  },
  {
    title: 'YouTube Accelerator',
    body: 'Le système complet : niche, packaging, stratégie, production assistée par IA, montage, publication, itération.',
  },
  {
    title: 'Communauté privée',
    body: 'Un espace dédié dans la plateforme pour échanger avec les autres apprenants.',
  },
  {
    title: 'Lives mensuels',
    body: 'Sessions live tous les mois avec Fanel et les coachs Branddeo.',
  },
  {
    title: 'Q&A en direct',
    body: 'Pose tes questions en live et obtiens des retours personnalisés.',
  },
  {
    title: 'Mises à jour à vie',
    body: 'Chaque nouvelle leçon, chaque mise à jour de la méthode est incluse pour toujours.',
  },
]

export function OfferSection() {
  return (
    <section
      id="offre"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[var(--violet)]/30 to-transparent blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>L'offre</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tout ce que tu reçois.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Un seul achat. Accès immédiat. Pour la vie.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl border border-white/10 bg-[var(--card)] p-8 shadow-2xl shadow-[var(--violet)]/10 sm:p-12">
            <div className="flex flex-col items-center gap-3 pb-8 text-center">
              <Eyebrow>Branddeo Academy</Eyebrow>
              <p className="font-display text-6xl font-bold tracking-tight text-white sm:text-7xl">
                <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
                  497€
                </span>
                <span className="text-3xl font-semibold text-white/60"> HT</span>
              </p>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                Achat unique · Accès à vie
              </p>
            </div>

            <div className="grid gap-5 border-t border-white/10 pt-10 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--coral)]/15 text-[var(--coral)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-white/70">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-10">
              <Link
                to="/auth"
                className="cta-black cta-black-xl group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Rejoindre Branddeo Academy
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Link>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                Accès immédiat · Paiement sécurisé · Garanti 12 mois
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
