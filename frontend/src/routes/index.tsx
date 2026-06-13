import { createFileRoute } from '@tanstack/react-router'
import { LandingHeader } from '@/components/landing/landing-header'
import { Hero } from '@/components/landing/hero'
import { TestimonialsCarousel } from '@/components/landing/testimonials-carousel'
import { IncubatorBento } from '@/components/landing/incubator-bento'
import { PhasesAccordion } from '@/components/landing/phases-accordion'
import { StepTimeline } from '@/components/landing/step-timeline'
import { TeamGrid } from '@/components/landing/team-grid'
import { ComparisonSection } from '@/components/landing/comparison-section'
import { ResultsMasonry } from '@/components/landing/results-masonry'
import { TrustpilotBanner } from '@/components/landing/trustpilot-banner'
import { FAQ } from '@/components/landing/faq'
import { CandidatureBooking } from '@/components/landing/candidature-booking'
import { LandingFooter } from '@/components/landing/landing-footer'
import { SmoothScroll } from '@/components/landing/smooth-scroll'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen scroll-smooth bg-[var(--background)] text-[var(--foreground)]">
        <LandingHeader />
        <main>
          {/* S2 Hero — H1 incubateur + VSL */}
          <Hero />
          {/* S3 Témoignages "Ils l'ont fait. À ton tour." */}
          <TestimonialsCarousel />
          {/* S4 Bento "Un incubateur, pas une formation" */}
          <IncubatorBento />
          {/* S5 Parcours — 7 phases en accordéon */}
          <PhasesAccordion />
          {/* S6 Step timeline "Tu n'es jamais livré à toi-même" */}
          <StepTimeline />
          {/* S7 Équipe "Qui t'accompagne" */}
          <TeamGrid />
          {/* S8 Comparaison formation vs incubateur (SANS PRIX) */}
          <ComparisonSection />
          {/* S9 Résultats masonry */}
          <ResultsMasonry />
          {/* S10 Trustpilot banner */}
          <TrustpilotBanner />
          {/* S11 FAQ (8 questions) */}
          <FAQ />
          {/* S12 Candidature booking (embed iClosed/Calendly placeholder) */}
          <CandidatureBooking />
        </main>
        <LandingFooter />
      </div>
    </SmoothScroll>
  )
}
