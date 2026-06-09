import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const FAQS = [
  {
    q: 'Je pars de zéro sur YouTube. C\'est jouable ?',
    a: "Oui, et c'est même mieux. La formation YouTube Starter pose toutes les fondations (mindset, setup chaîne, ton profil, première vidéo imparfaite). On évite les pièges que les gens font quand ils démarrent seuls. Tu vas plus vite que ceux qui ont déjà cassé leur chaîne avec de mauvais réflexes.",
  },
  {
    q: 'Je suis salarié·e, j\'ai peu de temps. C\'est faisable ?',
    a: "Oui. La méthode est pensée pour des gens qui ont déjà une activité principale. On ne te demande pas de filmer 5 vidéos par semaine. On te montre comment construire un système de publication efficace qui tourne avec quelques heures bien placées. Les replays sont accessibles 24/7, à ton rythme.",
  },
  {
    q: 'Combien de temps avant mes premiers résultats ?',
    a: "Les premiers signaux (vues, abonnés, commentaires) arrivent dès que tu appliques le packaging et la stratégie de publication. Pour des opportunités concrètes (revenus, leads, monétisation), compte plusieurs semaines à quelques mois de régularité. Et si tu n'y arrives pas dans 12 mois en appliquant la méthode, on te rembourse intégralement.",
  },
  {
    q: 'Faut-il du matériel coûteux ?',
    a: "Non. On a une leçon dédiée au matériel (Module 1) et un setup spécial faceless dans Accelerator si tu ne veux pas montrer ton visage. Tu peux démarrer avec ton téléphone et un éclairage de fenêtre. L'investissement matos vient après les premiers résultats — pas avant.",
  },
  {
    q: 'Et si je ne suis pas à l\'aise face caméra ?',
    a: "Deux solutions. Soit on travaille sur ta posture avec des scripts adaptés (trois niveaux : mot-à-mot, plan détaillé, impro guidée) — tu n'es pas obligé·e de tout débiter par cœur. Soit tu pars en faceless : on a un chapitre entier dans Accelerator sur les chaînes sans visage, avec voix-off ou format slides.",
  },
  {
    q: 'L\'accès est vraiment à vie ?',
    a: "Oui. Un seul paiement de 497€ HT te donne accès aux 2 formations, à la communauté privée, aux lives mensuels, aux Q&A et à toutes les mises à jour futures de la méthode — pour toujours. Pas d'abonnement, pas de renouvellement caché.",
  },
  {
    q: 'Comment fonctionnent les garanties exactement ?',
    a: "Deux niveaux. Garantie 1 : 90 jours pour tester — si tu n'as pas de résultats concrets, on t'accompagne gratuitement jusqu'à ce que tu en aies. Garantie 2 : sur 12 mois — si en appliquant la méthode sérieusement tu n'as pas généré 1M FCFA OU atteint 5 000 abonnés OU cumulé 100 000 vues, tu demandes le remboursement intégral.",
  },
  {
    q: 'Vous accompagnez aussi en done-for-you ?',
    a: "Branddeo Academy, c'est la formation pour apprendre la méthode et la mettre en œuvre toi-même. Si tu préfères qu'on gère TOUT (stratégie + scripts + tournage studio + montage + gestion de chaîne), regarde notre offre agence sur branddeo.fr — c'est une autre proposition de valeur, pour un autre budget.",
  },
]

export function FAQ() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              On a déjà répondu{' '}
              <span className="serif-accent">à tout ça.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[var(--card)]">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <details className="group p-6 transition-colors hover:bg-white/[0.02] sm:p-7">
                <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {f.q}
                  </h3>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--coral)] transition-transform group-open:rotate-45">
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-white/70">
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
