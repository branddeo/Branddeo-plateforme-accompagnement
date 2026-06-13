import { ArrowRight, Zap } from 'lucide-react'
import { Reveal } from './reveal'

/**
 * Accordéon des 7 phases du parcours. Textes courts placeholder en attendant
 * le détail de Fanel (cf. spec V3 section 5).
 */
const PHASES = [
  {
    title: 'Le déclic',
    body:
      "Clarté sur ta niche, ton positionnement, pourquoi YouTube est ton meilleur levier. [PLACEHOLDER — détail à fournir par Fanel]",
  },
  {
    title: 'Les idées qui marchent',
    body:
      "Repérer les bons sujets (outliers, inspiration), valider ta niche. [PLACEHOLDER — détail à fournir par Fanel]",
  },
  {
    title: 'La naissance de ta chaîne',
    body:
      "Création, identité, packaging (titres + miniatures). [PLACEHOLDER — détail à fournir par Fanel]",
  },
  {
    title: 'La machine à contenu',
    body:
      "Scripts, production faceless ou caméra, l'IA comme assistant. [PLACEHOLDER — détail à fournir par Fanel]",
  },
  {
    title: 'Les premières vidéos qui performent',
    body:
      "Publication, algorithme, rétention. [PLACEHOLDER — détail à fournir par Fanel]",
  },
  {
    title: 'La monétisation',
    body:
      "Générer tes premiers revenus, sans dépendre uniquement de l'AdSense. [PLACEHOLDER — détail à fournir par Fanel]",
  },
  {
    title: 'Le décollage',
    body:
      "Régularité, montée en puissance, autonomie. [PLACEHOLDER — détail à fournir par Fanel]",
  },
]

export function PhasesAccordion() {
  return (
    <section id="parcours" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Un parcours conçu pour transformer
              <br />
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                des débutants en créateurs qui monétisent
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Tu arrives motivé. Tu repars avec une chaîne lancée, des vidéos
              qui tournent, et une méthode pour durer.
            </p>
          </Reveal>
        </div>

        {/* Carte "Imagine" en intro */}
        <Reveal delay={0.2}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,96,92,0.5) 0%, rgba(174,8,183,0.2) 50%, transparent 75%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--coral)] to-[var(--magenta)] shadow-lg shadow-[var(--coral)]/30">
                <Zap className="h-7 w-7 text-white" fill="currentColor" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-[var(--coral)]">
                  Imagine
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  Tu es au jour 1. Tu as peut-être une idée de chaîne. Peut-être
                  pas. Tu as surtout une envie : que ça change. En face de toi,{' '}
                  <span className="font-semibold text-white">
                    un programme qui te prend par la main, étape après étape,
                    sans jamais te laisser seul.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Accordéon des phases */}
        <div className="mt-8 space-y-1">
          {PHASES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.03}>
              <details
                className="group border-b border-white/[0.06] transition-colors"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 sm:py-6">
                  <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                    Phase {i + 1} — {p.title}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[var(--coral)] transition-transform group-open:rotate-45">
                    <span className="text-2xl font-light leading-none">+</span>
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-sm leading-relaxed text-white/65 sm:text-base">
                  {p.body}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        {/* Carte de clôture */}
        <Reveal delay={0.4}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28] p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at right, rgba(93,41,153,0.3) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                  Ce n'est pas un cours.{' '}
                  <span className="font-semibold text-[var(--coral)]">
                    C'est un incubateur.
                  </span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/65 sm:text-base">
                  Si tu es prêt à t'impliquer, on est prêt à t'emmener jusqu'à
                  ton premier revenu.
                </p>
              </div>
              <a
                href="#candidater"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--coral)] px-6 py-3 font-display text-sm font-semibold text-white shadow-md shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)]"
              >
                Candidater à l'incubateur
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
