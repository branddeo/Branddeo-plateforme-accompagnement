import { createFileRoute } from '@tanstack/react-router'
import { LandingHeader } from '@/components/landing/landing-header'
import { Hero } from '@/components/landing/hero'
import { StatsBar } from '@/components/landing/stats-bar'
import { FourPillars } from '@/components/landing/four-pillars'
import { VideoPortfolio } from '@/components/landing/video-portfolio'
import { CaseStudyCarousel } from '@/components/landing/case-study-carousel'
import { TimelineTwoWeeks } from '@/components/landing/timeline-two-weeks'
import { FiveStepsAccordion } from '@/components/landing/five-steps-accordion'
import { OfferSection } from '@/components/landing/offer-section'
import { TestimonialsMarquee } from '@/components/landing/testimonials-marquee'
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
        {/* S1 — Header */}
        <LandingHeader />
        <main>
          {/* S2 — Hero (badge + H1 + image studio) */}
          <Hero />
          {/* S3 — Stats bar (4 chiffres + narratif) */}
          <StatsBar />
          {/* S4 — Notre système (6 services) */}
          <FourPillars />
          {/* S5 — Galerie miniatures vidéos */}
          <VideoPortfolio />
          {/* S6 — Carrousel case study clients */}
          <CaseStudyCarousel />
          {/* S7 — Timeline 14 jours */}
          <TimelineTwoWeeks />
          {/* S8 — 5 étapes accordion */}
          <FiveStepsAccordion />
          {/* S9 — Pricing 2 packs Découverte / Croissance */}
          <OfferSection />
          {/* S10 — Témoignages marquee 5 étoiles */}
          <TestimonialsMarquee />
          {/* S11 — FAQ 10 questions */}
          <FAQ />
          {/* S12 — CTA final */}
          <FinalCTA />
        </main>
        {/* Footer */}
        <LandingFooter />
      </div>
    </SmoothScroll>
  )
}
