import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { GuidesHeader } from "@/components/guides-header"
import { FeaturedGuides } from "@/components/featured-guides"
import { GuidesCategories } from "@/components/guides-categories"
import { GuidesGrid } from "@/components/guides-grid"
import { BudgetSelector } from "@/components/budget-selector"
import { NewsletterSubscribe } from "@/components/newsletter-subscribe"
import { PopularComparisons } from "@/components/popular-comparisons"
import { Pagination } from "@/components/pagination"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <GuidesHeader />
        <FeaturedGuides />

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <GuidesCategories />
              <GuidesGrid />
              <div className="mt-12">
                <Pagination />
              </div>
            </div>

            <div className="lg:w-1/4 space-y-8">
              <BudgetSelector />
              <NewsletterSubscribe />
              <PopularComparisons />
            </div>
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
