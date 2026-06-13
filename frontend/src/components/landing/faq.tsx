import { Reveal } from './reveal'

const FAQS = [
  {
    q: 'Est-ce que ça fonctionne si je pars de zéro sur YouTube ?',
    a: "Oui. On démarre avec ton expertise, pas avec un historique YouTube. Le rôle de Branddeo, c'est précisément de construire un système d'acquisition à partir d'une chaîne vide — niche, positionnement, packaging, production — pour qu'à la fin du programme, tes premières vidéos travaillent déjà pour toi. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: 'Combien de temps je dois réellement y consacrer chaque mois ?',
    a: "Compte ~2h/mois pour les tournages en studio + ~30 min pour valider les scripts et packages que l'équipe te propose. Le reste (stratégie, écriture, montage, gestion de chaîne, optimisation) est porté par Branddeo. C'est tout l'intérêt du modèle done-for-you. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: 'Est-ce que je dois apprendre YouTube, le montage ou la technique ?',
    a: "Non. Tu n'as rien à apprendre. Branddeo opère pour toi de bout en bout — c'est une agence, pas une formation. Tu restes concentré sur ton expertise et ton activité ; on s'occupe de transformer ça en machine à acquisition. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: 'Est-ce que 4 vidéos suffisent vraiment pour générer des leads ?',
    a: "4 vidéos bien ciblées valent mieux que 40 vidéos approximatives. Le pack Découverte (4 vidéos) sert à valider ton positionnement, à installer les bons signaux sur la chaîne et à générer tes premiers contacts qualifiés. Pour scaler le volume de leads dans la durée, c'est le pack Croissance (12 vidéos sur 90 jours) qui prend le relais. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: 'À partir de quand puis-je espérer mes premiers leads ?',
    a: "Impossible de te donner une date garantie, et méfie-toi de qui le ferait : ça dépend de ta niche, de ton offre et du volume de vues. En général, les premiers signaux qualifiés arrivent dans les 30 à 60 jours après la mise en ligne des premières vidéos packagées. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: 'Et si je ne suis pas à l\'aise face à la caméra ?',
    a: "On travaille la prise de parole en amont du tournage : structure du discours, posture, repères visuels. Le studio est conçu pour mettre à l'aise (lumière douce, équipe restreinte, scripts validés à l'avance). La majorité des clients qui pensaient « ne pas être faits pour ça » se débrouillent très bien dès le 2e tournage. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: 'Que se passe-t-il après les 30 jours ?',
    a: "Tu peux soit continuer en autonomie avec les actifs construits (chaîne configurée, identité visuelle, méthodologie validée), soit basculer sur le pack Croissance (60 jours, 12 vidéos) pour amplifier le volume et installer la régularité. On en parle ensemble en fin d'accompagnement. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: 'Est-ce que je deviens dépendant de Branddeo ?',
    a: "Non, c'est même l'inverse du modèle. Le système qu'on installe (stratégie, packaging, process de production) est fait pour fonctionner avec ou sans nous. À la fin du programme, tu as la chaîne, les contenus, les templates et la méthodologie. Tu choisis librement de continuer avec nous ou pas. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: "Et si je n'ai aucun lieu pour tourner mes vidéos ?",
    a: "Pas un problème : les tournages se font dans notre studio, inclus dans tous les packs. Tu viens 2-3h, on s'occupe du reste (lumière, son, cadres, prompteur). C'est aussi l'accélérateur 3 : accès illimité au studio pendant la durée de l'accompagnement. [PLACEHOLDER — réponse à valider par Fanel]",
  },
  {
    q: "À qui cette offre ne s'adresse pas ?",
    a: "À toi si tu n'as pas encore d'expertise claire à transmettre, si tu cherches une formation pas-à-pas plutôt qu'une agence qui fait pour toi, ou si ton budget acquisition est inférieur à 3000€ HT. Dans ces cas, on préfère te le dire clairement plutôt que de te faire candidater pour rien. [PLACEHOLDER — réponse à valider par Fanel]",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Header : H2 gauche + sous-texte droite */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Tu te poses sûrement
              <br />
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                ces questions
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-right sm:text-base">
              Manque de temps, peur de refaire une erreur, aucune envie
              d'apprendre la technique : tout est pensé pour sécuriser ton
              investissement.
            </p>
          </Reveal>
        </div>

        {/* Séparateur */}
        <div className="my-10 h-px w-full bg-white/[0.06] sm:my-14" />

        {/* Accordéon */}
        <div className="space-y-1">
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
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-white/55 transition-transform group-open:rotate-180">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
