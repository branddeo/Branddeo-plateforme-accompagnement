import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

interface Tool {
  name: string
  slug: string
}

/**
 * Outils que l'apprenant maîtrise dans le programme (cf. spec section 3).
 * IMPORTANT : ce bandeau présente les outils ENSEIGNÉS — il ne doit JAMAIS
 * être titré "ils nous font confiance" ou équivalent.
 */
const TOOLS: Tool[] = [
  { name: 'DeepSeek', slug: 'deepseek' },
  { name: 'Meta AI', slug: 'meta' },
  { name: 'ChatGPT', slug: 'openai' },
  { name: 'ElevenLabs', slug: 'elevenlabs' },
  { name: 'Higgsfield', slug: 'higgsfield' },
  { name: 'CapCut', slug: 'capcut' },
  { name: 'Canva', slug: 'canva' },
  { name: 'YouTube Studio', slug: 'youtube' },
]

export function ToolsMarquee() {
  return (
    <section
      aria-label="Outils enseignés dans YouTube Impact"
      className="overflow-hidden border-y border-white/10 bg-[var(--card)]/30 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Les outils que tu vas maîtriser dans le programme</Eyebrow>
          </Reveal>
        </div>

        <div
          className="relative mt-10 overflow-hidden sm:mt-12"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="tools-marquee-track flex items-center py-2">
            {[...TOOLS, ...TOOLS].map((tool, idx) => (
              <ToolTile
                key={`${tool.slug}-${idx}`}
                tool={tool}
                aria-hidden={idx >= TOOLS.length ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ToolTile({
  tool,
  ...rest
}: {
  tool: Tool
  'aria-hidden'?: 'true' | undefined
}) {
  return (
    <div
      {...rest}
      className="group flex shrink-0 items-center gap-3 px-8 sm:px-12"
      title={tool.name}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[var(--card)] transition-all duration-300 group-hover:border-[var(--coral)]/30 sm:h-16 sm:w-16">
        <img
          src={`https://cdn.simpleicons.org/${tool.slug}/ffffff`}
          alt={tool.name}
          className="h-7 w-7 opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:h-8 sm:w-8"
          loading="lazy"
          onError={(e) => {
            // Fallback : afficher le nom de l'outil en texte si pas de logo
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
      <span className="font-display text-base font-semibold uppercase tracking-wide text-white/80 sm:text-lg">
        {tool.name}
      </span>
    </div>
  )
}
