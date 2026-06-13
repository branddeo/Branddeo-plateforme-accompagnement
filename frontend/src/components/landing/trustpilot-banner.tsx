import { Star } from 'lucide-react'

const TRUSTPILOT_URL =
  (import.meta.env.VITE_TRUSTPILOT_URL as string | undefined) ?? '#'

export function TrustpilotBanner() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <a
          href={TRUSTPILOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-white/[0.08] bg-[#150b28] px-5 py-3 transition-colors hover:border-white/15"
        >
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
            ))}
            <Star className="h-4 w-4 fill-[#00B67A]/40 text-[#00B67A]/40" />
          </span>
          <span className="text-xs font-medium text-white/75 sm:text-sm">
            Noté <span className="font-semibold text-white">4/5</span> sur
            Trustpilot
          </span>
        </a>
      </div>
    </section>
  )
}
