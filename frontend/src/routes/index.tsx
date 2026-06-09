import { createFileRoute } from '@tanstack/react-router'
import { LandingHeader } from '@/components/landing/landing-header'
import { Hero } from '@/components/landing/hero'
import { StatsBar } from '@/components/landing/stats-bar'
import { Personas } from '@/components/landing/personas'
import { FourPillars } from '@/components/landing/four-pillars'
import { FeaturedMembers } from '@/components/landing/featured-members'
import { FormationSection } from '@/components/landing/formation-section'
import { Testimonials } from '@/components/landing/testimonials'
import { BeyondClub } from '@/components/landing/beyond-club'
import { OfferSection } from '@/components/landing/offer-section'
import { GuaranteesSection } from '@/components/landing/guarantees-section'
import { FAQ } from '@/components/landing/faq'
import { FinalCTA } from '@/components/landing/final-cta'
import { LandingFooter } from '@/components/landing/landing-footer'
import { SmoothScroll } from '@/components/landing/smooth-scroll'
import { WhatsAppFloat } from '@/components/landing/whatsapp-float'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen scroll-smooth bg-[var(--background)] text-[var(--foreground)]">
        <LandingHeader />
        <main>
          <Hero />
          <StatsBar />
          <Personas />
          <FourPillars />
          <FeaturedMembers />
          <FormationSection />
          <Testimonials />
          <BeyondClub />
          <OfferSection />
          <GuaranteesSection />
          <FAQ />
          <FinalCTA />
        </main>
        <LandingFooter />
        <WhatsAppFloat />
      </div>
    </SmoothScroll>
  )
}
