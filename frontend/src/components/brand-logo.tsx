import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

export type BrandLogoSize = 'sm' | 'md' | 'lg' | 'xl'
export type BrandLogoVariant = 'primary' | 'inverse' | 'icon-only'

interface BrandLogoProps {
  size?: BrandLogoSize
  /**
   * - `primary` : wordmark "branddeo" (texte clair + "dd" corail). Pour fond sombre.
   * - `inverse` : wordmark "branddeo" (texte sombre + "dd" corail). Pour fond clair.
   * - `icon-only` : juste "dd" en corail (le picto rembobinage). Pour favicon,
   *   bottom nav mobile, avatar fallback.
   */
  variant?: BrandLogoVariant
  className?: string
  /** Si true (défaut), le logo est un <Link> vers "/". */
  asLink?: boolean
  /** Conservé pour compat — sans effet. */
  showSignature?: boolean
  /** Sous-titre conservé pour compat — sans effet. */
  subtitle?: string
}

const SIZE_CLASSES: Record<BrandLogoSize, string> = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-6xl',
}

export function BrandLogo({
  size = 'md',
  variant = 'primary',
  className,
  asLink = true,
}: BrandLogoProps) {
  const isInverse = variant === 'inverse'
  const isIconOnly = variant === 'icon-only'

  const textColor = isInverse ? 'text-[#0F081E]' : 'text-white'

  const content = (
    <span
      className={cn(
        'inline-flex select-none font-display font-bold leading-none',
        SIZE_CLASSES[size],
        textColor,
        className,
      )}
      style={{ letterSpacing: '-0.02em' }}
      aria-label="Branddeo"
    >
      {isIconOnly ? (
        <span className="text-[var(--coral)]">dd</span>
      ) : (
        <>
          <span>bran</span>
          <span className="text-[var(--coral)]">dd</span>
          <span>eo</span>
        </>
      )}
    </span>
  )

  if (asLink) {
    return (
      <Link to="/" className="inline-flex">
        {content}
      </Link>
    )
  }
  return content
}
