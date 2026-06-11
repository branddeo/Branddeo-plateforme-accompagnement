import { createFileRoute } from '@tanstack/react-router'
import { LandingHeader } from '@/components/landing/landing-header'
import { Hero } from '@/components/landing/hero'
import { ToolsMarquee } from '@/components/landing/tools-marquee'
import { FourPillars } from '@/components/landing/four-pillars'
import { FeaturedMembers } from '@/components/landing/featured-members'
import { OfferSection } from '@/components/landing/offer-section'
import { FAQ } from '@/components/landing/faq'
import { FinalCTA } from '@/components/landing/final-cta'
import { LandingFooter } from '@/components/landing/landing-footer'
import { SmoothScroll } from '@/components/landing/smooth-scroll'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen scroll-smooth bg-[var(--background)] text-[var(--foreground)]">
        {/* Section 1 — Navbar */}
        <LandingHeader />
        <main>
          {/* Section 2 — Hero (centré + halo aurore) */}
          <Hero />
          {/* Section 3 — Bandeau outils marquee */}
          <ToolsMarquee />
          {/* Section 4 — Le programme (bento grid) */}
          <FourPillars />
          {/* Section 5 — Résultats (captures revenus) */}
          <FeaturedMembers />
          {/* Section 6 — Tarif (carte pricing unique centrée) */}
          <OfferSection />
          {/* Section 7 — FAQ */}
          <FAQ />
          {/* Section 8 — CTA final */}
          <FinalCTA />
        </main>
        {/* Footer */}
        <LandingFooter />
      </div>
    </SmoothScroll>
  )
}
