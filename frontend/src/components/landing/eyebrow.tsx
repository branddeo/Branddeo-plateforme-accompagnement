import { cn } from '@/lib/utils'

/**
 * Eyebrow stylisé "— Le programme —" : petit texte centré encadré de deux
 * traits horizontaux en dégradé violet → corail. Signature visuelle du
 * modèle Quantix.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/65 sm:text-sm',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="block h-px w-8 bg-gradient-to-r from-transparent via-[var(--coral)] to-[var(--coral)]"
      />
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="block h-px w-8 bg-gradient-to-r from-[var(--coral)] via-[var(--coral)] to-transparent"
      />
    </div>
  )
}
