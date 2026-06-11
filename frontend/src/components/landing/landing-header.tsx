import { useEffect, useState } from 'react'
import { BrandLogo } from '@/components/brand-logo'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 24)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-white/10 bg-[var(--background)]/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <BrandLogo
            size="md"
            variant="primary"
            subtitle="Academy"
            className="transition-transform hover:scale-[1.02]"
          />

          <nav className="hidden items-center gap-6 lg:flex">
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
            className="cta-coral group relative overflow-hidden px-5 py-2.5 text-xs sm:px-6 sm:text-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="hidden sm:inline">Rejoindre YouTube Impact</span>
              <span className="sm:hidden">Rejoindre</span>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
