import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

interface Testimonial {
  quote: string
  emoji: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Wouah 😱 je n'en reviens pas… ma dernière vidéo a explosé les vues. Je n'avais jamais vu ça avant.",
    emoji: '🎯',
  },
  {
    quote:
      "Sérieux, tu gères 👌 Le script est super clair. Je me suis enregistré, j'ai pas eu besoin de relire 15 fois.",
    emoji: '🎬',
  },
  {
    quote:
      "Si je t'avais rencontré avant, j'aurais déjà 10k. Je rage un peu de pas avoir commencé plus tôt.",
    emoji: '⏰',
  },
  {
    quote:
      "Trop contente 😍 J'avais perdu espoir avec ma chaîne. Là, je revois des vues monter et des abonnés arriver.",
    emoji: '✨',
  },
  {
    quote:
      "Franchement, tu m'as sauvé 😎. J'ai compris ce que je faisais de travers depuis 2 ans en une seule semaine.",
    emoji: '🚀',
  },
  {
    quote:
      'Je tournais en rond. Maintenant j\'ai un plan. Et le plan marche.',
    emoji: '🧭',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Ce qu'ils en disent</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pas des chiffres.{' '}
              <span className="serif-accent">Des messages.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Extraits bruts des retours qu'on reçoit après quelques semaines.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <figure className="mb-6 break-inside-avoid rounded-2xl border border-white/10 bg-[var(--card)] p-6 transition-colors hover:border-[var(--coral)]/30">
                <span className="text-2xl">{t.emoji}</span>
                <blockquote className="mt-3 text-base leading-relaxed text-white/85">
                  « {t.quote} »
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
