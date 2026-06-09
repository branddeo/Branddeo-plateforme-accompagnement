import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

export type BrandLogoSize = 'sm' | 'md' | 'lg' | 'xl'
export type BrandLogoVariant = 'primary' | 'inverse' | 'icon-only'

interface BrandLogoProps {
  size?: BrandLogoSize
  /**
   * - `primary` : logo complet (chevrons corail + wordmark blanc) pour
   *   fonds sombres (le défaut Branddeo).
   * - `inverse` : logo complet (chevrons corail + wordmark sombre) pour
   *   fonds clairs.
   * - `icon-only` : juste le double-chevron de rembobinage, sans wordmark.
   *   Utile pour favicon, bottom nav mobile, avatar fallback.
   */
  variant?: BrandLogoVariant
  className?: string
  /** Si true (défaut), le logo est un <Link> vers "/". */
  asLink?: boolean
  /** Sous-titre optionnel ("Academy", "Agency"…) sous le wordmark. */
  subtitle?: string
  /** Conservé pour compatibilité avec l'ancien composant — sans effet. */
  showSignature?: boolean
}

const SIZE_HEIGHT: Record<BrandLogoSize, number> = {
  sm: 24,
  md: 32,
  lg: 44,
  xl: 60,
}

const CORAL = '#FF605C'

export function BrandLogo({
  size = 'md',
  variant = 'primary',
  className,
  asLink = true,
  subtitle,
}: BrandLogoProps) {
  const isInverse = variant === 'inverse'
  const isIconOnly = variant === 'icon-only'
  const height = SIZE_HEIGHT[size]
  const wordmarkColor = isInverse ? '#0F081E' : '#FFFFFF'

  /**
   * Double chevron "rewind" — signature visuelle Branddeo.
   * 2 triangles corail pointant vers la gauche, équivalent du symbole
   * de rembobinage vidéo, en clin d'œil au cœur du métier (YouTube).
   */
  const rewindIcon = (
    <svg
      role="img"
      aria-label={isIconOnly ? 'Branddeo' : undefined}
      aria-hidden={isIconOnly ? undefined : true}
      width={height * 1.35}
      height={height}
      viewBox="0 0 80 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M 30 2 L 2 30 L 30 58 L 30 42 L 18 30 L 30 18 Z"
        fill={CORAL}
      />
      <path
        d="M 62 2 L 34 30 L 62 58 L 62 42 L 50 30 L 62 18 Z"
        fill={CORAL}
      />
    </svg>
  )

  const wordmarkSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  }[size]

  const subtitleSize = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  }[size]

  const content = (
    <span
      className={cn(
        'inline-flex items-center gap-2 select-none leading-none',
        className,
      )}
      aria-label={isIconOnly ? undefined : `Branddeo${subtitle ? ` ${subtitle}` : ''}`}
    >
      {rewindIcon}
      {!isIconOnly && (
        <span className="inline-flex flex-col items-start leading-none">
          <span
            className={cn(
              'font-display font-bold tracking-tight',
              wordmarkSize,
            )}
            style={{ color: wordmarkColor, letterSpacing: '-0.02em' }}
          >
            Branddeo
          </span>
          {subtitle && (
            <span
              className={cn(
                'font-display font-semibold uppercase mt-0.5',
                subtitleSize,
              )}
              style={{
                color: wordmarkColor,
                opacity: 0.7,
                letterSpacing: '0.2em',
              }}
            >
              {subtitle}
            </span>
          )}
        </span>
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
