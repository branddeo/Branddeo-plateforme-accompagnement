import { createFileRoute } from '@tanstack/react-router'
import { AnnouncementBar } from '@/components/landing/announcement-bar'
import { LandingHeader } from '@/components/landing/landing-header'
import { Hero } from '@/components/landing/hero'
import { ToolsMarquee } from '@/components/landing/tools-marquee'
import { BenefitsBar } from '@/components/landing/benefits-bar'
import { FourPillars } from '@/components/landing/four-pillars'
import { HowItWorks } from '@/components/landing/how-it-works'
import { OfferSection } from '@/components/landing/offer-section'
import { Testimonials } from '@/components/landing/testimonials'
import { FeaturedMembers } from '@/components/landing/featured-members'
import { SocialProofCarousel } from '@/components/landing/social-proof-carousel'
import { ComparisonTable } from '@/components/landing/comparison-table'
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
        <AnnouncementBar />
        <LandingHeader />
        <main>
          {/* Section 2 — Hero */}
          <Hero />
          {/* Section 3 — Bandeau outils marquee */}
          <ToolsMarquee />
          {/* Section 4 — Barre de micro-promesses */}
          <BenefitsBar />
          {/* Section 5 — Le programme (4 cartes bénéfices) */}
          <FourPillars />
          {/* Section 6 — Comment ça marche (3 étapes) */}
          <HowItWorks />
          {/* Section 7 — Tarif (#tarif) */}
          <OfferSection />
          {/* Section 8 — Témoignages */}
          <Testimonials />
          {/* Section 9 — Résultats (chaînes sous gestion + preuve long format) */}
          <FeaturedMembers />
          {/* Section 10 — Preuves sociales (captures) */}
          <SocialProofCarousel />
          {/* Section 11 — Tableau comparatif */}
          <ComparisonTable />
          {/* Section 12 — FAQ */}
          <FAQ />
          {/* Section 13 — CTA final */}
          <FinalCTA />
        </main>
        {/* Section 14 — Footer */}
        <LandingFooter />
      </div>
    </SmoothScroll>
  )
}
