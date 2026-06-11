import { ArrowRight, LogIn, Compass, Rocket } from 'lucide-react'
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
    <section
      id="comment"
      className="relative bg-[var(--light-bg)] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--light-muted)]">
              Comment ça marche
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--light-foreground)] sm:text-5xl lg:text-6xl">
              Le chemin{' '}
              <em className="font-display italic">
                <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] bg-clip-text text-transparent">
                  le plus simple
                </span>
              </em>{' '}
              vers ta chaîne
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-[var(--light-border)] bg-[var(--light-card)] p-8 shadow-sm transition-all hover:shadow-lg">
                {/* "Mockup" en haut de carte — gradient violet/corail avec icône */}
                <div className="relative mb-6 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--violet)] via-[#7E3FCB] to-[var(--coral)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    }}
                  />
                  <s.icon className="relative h-16 w-16 text-white drop-shadow-lg" strokeWidth={1.5} />
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-bold text-[var(--coral)] tracking-tight">
                    {s.number}.
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-[var(--light-foreground)] sm:text-2xl">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-[var(--light-muted)]">
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
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-10 py-4 font-display text-base font-bold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-12 sm:py-5 sm:text-lg"
            >
              Rejoindre YouTube Impact
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
