import { Reveal } from './reveal'

const FAQS = [
  {
    q: "C'est quoi la différence entre un incubateur et une formation YouTube ?",
    a: "Une formation, c'est des vidéos que tu regardes seul, et débrouille-toi. Un incubateur, c'est un cadre : on te sélectionne, on t'accompagne, on corrige ton travail et on te pousse jusqu'à ton premier revenu. Tu n'avances jamais seul.",
  },
  {
    q: 'Est-ce que ça marche si je ne veux pas montrer mon visage ?',
    a: "Oui. Un parcours faceless complet est prévu : niche, production assistée par IA, voix off, montage, publication.",
  },
  {
    q: "Je suis salarié et j'ai peu de temps. C'est jouable ?",
    a: "Oui. Tu avances à ton rythme et la méthode vise tes premiers revenus en parallèle de ton activité, sans tout quitter du jour au lendemain.",
  },
  {
    q: 'Je débute totalement. C\'est pour moi ?',
    a: "Oui. On part de zéro : création de chaîne, niche, premières vidéos. Aucun prérequis technique.",
  },
  {
    q: "Le contenu produit avec l'IA, c'est autorisé par YouTube ?",
    a: "Oui, en respectant les règles de la plateforme (notamment le contenu inauthentique). Un module entier y est consacré. L'IA propose, l'humain décide.",
  },
  {
    q: 'Combien de temps avant mes premiers revenus ?',
    a: "Aucun chiffre garanti, et méfie-toi de ceux qui en promettent. Ça dépend de ta niche, de ta régularité et de ton travail. Le programme maximise tes chances et t'évite les erreurs qui coûtent des mois.",
  },
  {
    q: "Comment se passe l'appel de candidature ?",
    a: "Tu réserves un créneau, on fait le point sur ta situation et ton objectif, et on voit ensemble si YouTube Impact est fait pour toi. [À ajuster selon le déroulé réel de l'appel.]",
  },
  {
    q: "À qui s'adresse YouTube Impact ?",
    a: "[À COMPLÉTER : cadrage de Fanel — et éventuellement à qui ça NE s'adresse pas.]",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                Questions
              </span>{' '}
              fréquemment posées
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-1">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <details
                className="group border-b border-white/[0.06] transition-colors"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 sm:py-6">
                  <h3 className="font-display text-base font-medium text-white sm:text-lg">
                    {f.q}
                  </h3>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-white/55 transition-transform group-open:rotate-45">
                    <span className="text-2xl font-light leading-none">+</span>
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-sm leading-relaxed text-white/65 sm:text-base">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
