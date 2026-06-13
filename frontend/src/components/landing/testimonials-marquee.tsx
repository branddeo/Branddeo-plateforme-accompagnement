import { Star } from 'lucide-react'

/**
 * Marquee de témoignages alumni. En attendant les vraies citations, on
 * duplique un placeholder explicite — NE PAS INVENTER de témoignages.
 */
const TESTIMONIALS = Array.from({ length: 8 }, (_, i) => ({
  quote:
    "[PLACEHOLDER] Témoignage alumni à fournir. Citation courte (1-2 lignes), tutoiement, parlé.",
  name: '[Nom alumni]',
  role: '[Niche / profil]',
  id: i,
}))

export function TestimonialsMarquee() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Bordures pointillées bleues (signature branddeo.fr) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 border-t border-dashed border-[var(--bleu)]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 border-b border-dashed border-[var(--bleu)]/30"
      />

      <div
        className="space-y-4 py-6 sm:space-y-5 sm:py-8"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="overflow-hidden">
          <div className="tools-marquee-track flex items-stretch gap-4 sm:gap-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} {...t} />
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="tools-marquee-track tools-marquee-track-reverse flex items-stretch gap-4 sm:gap-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>

      {/* Pastilles "B" corail accrochées */}
      <div className="pointer-events-none absolute left-[12%] top-[35%] hidden sm:block">
        <BrandPin />
      </div>
      <div className="pointer-events-none absolute right-[15%] bottom-[35%] hidden sm:block">
        <BrandPin />
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string
  name: string
  role: string
}) {
  return (
    <div className="flex w-80 shrink-0 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#150b28] p-5 sm:w-96 sm:p-6">
      <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
        {quote}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[var(--coral)] text-[var(--coral)]"
            />
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] font-display text-[10px] font-bold text-white">
            B
          </span>
          <div className="text-right">
            <p className="font-display text-xs font-bold text-white">{name}</p>
            <p className="text-[10px] text-white/55">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function BrandPin() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--coral)] font-display text-base font-bold text-white shadow-2xl shadow-[var(--coral)]/30">
      B
    </span>
  )
}
