import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const FAQS = [
  {
    q: 'Est-ce que ça marche si je ne veux pas montrer mon visage ?',
    a: "Oui. Le programme inclut un parcours faceless complet : choix de niche, production assistée par IA, voix off, montage, publication. Des chaînes entières fonctionnent sans visage — la qualité éditoriale fait le travail.",
  },
  {
    q: "Je suis salarié et j'ai peu de temps. C'est jouable ?",
    a: "Le programme est conçu pour ça. Tu avances à ton rythme, module par module, et la méthode vise tes premiers revenus en parallèle de ton emploi. Personne ne te demande de tout quitter pour commencer.",
  },
  {
    q: 'Je suis débutant total. Le programme est pour moi ?',
    a: "Oui. On part de zéro : création de la chaîne, choix de la niche, premières vidéos. Chaque étape est expliquée et illustrée, sans prérequis technique.",
  },
  {
    q: "Le contenu fait avec l'IA, c'est autorisé par YouTube ?",
    a: "Oui, à condition de respecter les règles de la plateforme — notamment la politique sur le contenu inauthentique. Le programme consacre un module entier à ce sujet : ce que YouTube accepte, ce qu'il sanctionne, et comment produire avec l'IA en restant monétisable. L'IA propose, l'humain dispose.",
  },
  {
    q: 'Combien de temps avant mes premiers revenus ?',
    a: "Impossible de te donner un chiffre garanti, et méfie-toi de ceux qui le font. Les résultats dépendent de ta niche, de ta régularité et de la qualité de tes vidéos. Le programme te donne la méthode, les outils et l'accompagnement pour maximiser tes chances et éviter les erreurs qui coûtent des mois.",
  },
  {
    q: "Comment se passe l'accès après le paiement ?",
    a: "Immédiat. Tu reçois tes accès à Branddeo Academy juste après ton inscription : modules, communauté, lives, toolbox. [À confirmer : compléter avec la durée d'accès une fois tranchée]",
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: "[À confirmer : carte bancaire + moyens de paiement disponibles selon les pays]",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tout ce que tu te demandes{' '}
            <span className="bg-gradient-to-r from-[var(--violet-soft)] to-[var(--coral)] bg-clip-text text-transparent">
              avant de rejoindre
            </span>
          </h2>
          <p className="mt-6 text-base text-white/65 sm:text-lg">
            Une autre question ? Écris-nous à{' '}
            <span className="font-semibold text-[var(--coral)]">
              [à compléter : email]
            </span>
            .
          </p>
        </Reveal>

        <div className="mt-14 space-y-3 text-left">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <details
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1A1030] transition-colors hover:border-white/15"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 sm:p-7">
                  <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                    {f.q}
                  </h3>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--coral)] transition-transform group-open:rotate-45">
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-white/65 sm:px-7 sm:pb-7 sm:text-base">
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
