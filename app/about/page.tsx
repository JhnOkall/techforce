import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutTeam } from "@/components/about-team"
import { AboutTimeline } from "@/components/about-timeline"
import { AboutStats } from "@/components/about-stats"
import { AboutValues } from "@/components/about-values"
import { AboutPartners } from "@/components/about-partners"
import { AboutContact } from "@/components/about-contact"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TechForceNavbar />
      <main className="flex-1">
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutStats />
        <AboutTeam />
        <AboutTimeline />
        <AboutPartners />
        <AboutContact />
      </main>
      <TechForceFooter />
    </div>
  )
}
