import { ArrowRight, LogIn, Compass, Rocket } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const STEPS = [
  {
    number: '1',
    icon: LogIn,
    title: 'Tu rejoins le programme',
    body:
      "Inscription en quelques minutes. Tu reçois immédiatement ton accès à Branddeo Academy, à tous les modules et à la communauté privée.",
  },
  {
    number: '2',
    icon: Compass,
    title: 'Tu suis le parcours adapté à ton profil',
    body:
      "Faceless ou créateur face caméra : tu choisis ton chemin et tu avances module par module, avec les lives et la communauté en soutien.",
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Tu lances et tu monétises ta chaîne',
    body:
      "Tu publies tes premières vidéos, tu analyses, tu itères. La méthode t'accompagne jusqu'à la monétisation et au-delà.",
  },
]

export function HowItWorks() {
  return (
    <section id="comment" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--coral)]/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>3 étapes</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Comment ça marche
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {/* Ligne décorative qui relie les 3 étapes en desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-12 hidden h-[2px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--coral)]/40 to-transparent lg:block"
          />

          {STEPS.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-[var(--violet)]/30">
                    <s.icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <span className="font-display text-5xl font-bold tracking-tight text-[var(--coral)]/80">
                    {s.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
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
      </div>
    </section>
  )
}
