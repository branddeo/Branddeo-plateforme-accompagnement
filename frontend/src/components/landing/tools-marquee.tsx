/**
 * Bandeau des outils IA enseignés dans YouTube Impact. Marquee texte stylisé
 * en attendant les vrais logos SVG/PNG fournis par Fanel.
 *
 * ⚠️ Ne JAMAIS titrer "ils nous font confiance" — ce sont les outils maîtrisés
 * dans le programme, pas des partenaires.
 */

const TOOLS = [
  'DeepSeek',
  'Meta AI',
  'ChatGPT',
  'ElevenLabs',
  'Higgsfield',
  'CapCut',
  'Canva',
  'YouTube Studio',
]

export function ToolsMarquee() {
  return (
    <section
      aria-label="Outils enseignés dans YouTube Impact"
      className="overflow-hidden py-10 sm:py-12"
    >
      <p className="px-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/45 sm:text-sm">
        Les outils que tu vas maîtriser dans le programme
      </p>

      <div
        className="relative mt-6 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="tools-marquee-track flex items-center gap-12 py-2 sm:gap-16">
          {[...TOOLS, ...TOOLS].map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              aria-hidden={idx >= TOOLS.length ? 'true' : undefined}
              className="shrink-0 font-display text-xl font-semibold uppercase tracking-wide text-white/55 transition-colors hover:text-white sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
