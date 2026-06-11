import { useEffect, useState } from 'react'
import { BrandLogo } from '@/components/brand-logo'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '#programme', label: 'Le programme' },
  { href: '#comment', label: 'Comment ça marche' },
  { href: '#tarif', label: 'Tarif' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#resultats', label: 'Résultats' },
  { href: '#faq', label: 'FAQ' },
]

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 24)

      // Calcul du % de scroll de la page
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const ratio = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, ratio)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-[#0F081E]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-[#0F081E]/0',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <BrandLogo
          size="md"
          variant="primary"
          subtitle="Academy"
          className="transition-transform hover:scale-[1.02]"
        />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#tarif"
          className="inline-flex items-center justify-center rounded-full bg-[var(--coral)] px-5 py-2.5 font-display text-xs font-bold text-white shadow-lg shadow-[var(--coral)]/30 transition-all hover:bg-[var(--coral-soft)] sm:px-6 sm:text-sm"
        >
          <span className="hidden sm:inline">Rejoindre YouTube Impact</span>
          <span className="sm:hidden">Rejoindre</span>
        </a>
      </div>

      {/* Barre de progression scroll — dégradé violet → corail */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] origin-left"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </header>
  )
}
