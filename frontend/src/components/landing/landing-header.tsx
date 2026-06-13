import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#resultats', label: 'Résultats' },
  { href: '#systeme', label: 'Notre système' },
  { href: '#accompagnement', label: "L'accompagnement" },
  { href: '#faq', label: 'FAQ' },
]

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/5 bg-[#0F081E]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <BrandLogo
          size="md"
          variant="primary"
          className="transition-transform hover:scale-[1.02]"
        />

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex items-center rounded-full px-4 py-2 font-display text-sm font-medium text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#candidater"
          className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--coral)] px-4 py-2 font-display text-xs font-semibold text-white shadow-md shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Candidater
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  )
}
