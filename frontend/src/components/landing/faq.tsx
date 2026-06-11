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
    q: "J'ai besoin de matériel cher ?",
    a: "Non. Le parcours faceless tourne avec un ordinateur et des outils accessibles, dont plusieurs gratuits. Le parcours créateur démarre avec un setup simple — un smartphone suffit pour les premières vidéos.",
  },
  {
    q: 'Combien de temps avant mes premiers revenus ?',
    a: "Impossible de te donner un chiffre garanti, et méfie-toi de ceux qui le font. Les résultats dépendent de ta niche, de ta régularité et de la qualité de tes vidéos. Le programme te donne la méthode, les outils et l'accompagnement pour maximiser tes chances et éviter les erreurs qui coûtent des mois.",
  },
  {
    q: "Le contenu fait avec l'IA, c'est autorisé par YouTube ?",
    a: "Oui, à condition de respecter les règles de la plateforme — notamment la politique sur le contenu inauthentique. Le programme consacre un module entier à ce sujet : ce que YouTube accepte, ce qu'il sanctionne, et comment produire avec l'IA en restant monétisable. L'IA propose, l'humain dispose.",
  },
  {
    q: "Comment se passe l'accès après le paiement ?",
    a: "Immédiat. Tu reçois tes accès à Branddeo Academy juste après ton inscription : modules, communauté, lives, toolbox.",
  },
  {
    q: "L'accès est limité dans le temps ?",
    a: "[À confirmer : réponse selon la décision accès à vie / 12 mois]",
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: "[À confirmer : carte bancaire + moyens de paiement disponibles selon les pays]",
  },
  {
    q: 'Est-ce que vous garantissez des résultats ?',
    a: "On garantit la méthode, l'accompagnement et la communauté. Personne ne peut garantir des revenus sur YouTube — ça dépend de ton travail. Ce qu'on peut te dire : tu auras un plan clair, des outils éprouvés et des gens pour t'aider à chaque étape.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Questions fréquentes
            </h2>
            <p className="mt-5 text-base text-white/60">
              Une autre question ? Écris-nous à{' '}
              <span className="text-[var(--coral)]">
                [à compléter : email de contact]
              </span>
              .
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[var(--card)]">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <details
                className="group p-6 transition-colors hover:bg-white/[0.02] sm:p-7"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {f.q}
                  </h3>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--coral)] transition-transform group-open:rotate-45">
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-white/75">
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
