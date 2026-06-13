import { createFileRoute } from '@tanstack/react-router'
import { LandingHeader } from '@/components/landing/landing-header'
import { Hero } from '@/components/landing/hero'
import { ToolsMarquee } from '@/components/landing/tools-marquee'
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
        <LandingHeader />
        <main>
          {/* Hero V2 — badge BONUS Toolbox + H1 monétise + Trustpilot 4/5 */}
          <Hero />
          {/* Outils IA enseignés (marquee texte) */}
          <ToolsMarquee />
          {/* Programme — 6 piliers du programme */}
          <FourPillars />
          {/* Galerie chaînes construites avec la méthode */}
          <VideoPortfolio />
          {/* Témoignage alumni (carrousel détaillé) */}
          <CaseStudyCarousel />
          {/* Timeline 2 semaines — première vidéo prête */}
          <TimelineTwoWeeks />
          {/* 5 étapes du programme (accordion) */}
          <FiveStepsAccordion />
          {/* Tarif unique 497€ HT (carte centrée V2) */}
          <OfferSection />
          {/* Marquee témoignages alumni courts */}
          <TestimonialsMarquee />
          {/* FAQ — 7 questions V2 */}
          <FAQ />
          {/* CTA final */}
          <FinalCTA />
        </main>
        <LandingFooter />
      </div>
    </SmoothScroll>
  )
}
