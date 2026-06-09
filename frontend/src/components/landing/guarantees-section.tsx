import { ShieldCheck, RotateCcw } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const GUARANTEES = [
  {
    icon: ShieldCheck,
    label: 'Garantie #1',
    title: '100% de résultats',
    body:
      "Tu as 90 jours complets pour tester le programme. Si tu n'atteins pas de résultats concrets à la fin, on continue de t'accompagner gratuitement jusqu'à ce que tu en aies.",
  },
  {
    icon: RotateCcw,
    label: 'Garantie #2',
    title: 'Résultats ou remboursé · 12 mois',
    body:
      "Si tu appliques la méthode sérieusement et que, dans les 12 mois qui suivent, tu n'as pas généré au moins 1 million FCFA via YouTube, OU atteint 5 000 abonnés, OU cumulé 100 000 vues — tu demandes un remboursement intégral.",
  },
]

export function GuaranteesSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Les garanties</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              On porte le risque. <span className="serif-accent">Pas toi.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Deux garanties chiffrées. Si la méthode ne livre pas, tu repars
              avec ton argent.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.label} delay={0.1 + i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] p-8 sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-[var(--violet)]/30 to-[var(--coral)]/20 blur-[60px]"
                />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-[var(--coral)]/30">
                      <g.icon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
                        {g.label}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {g.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-white/75">
                    {g.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
