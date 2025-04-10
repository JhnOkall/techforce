import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { ReviewsHeader } from "@/components/reviews-header"
import { FeaturedReviews } from "@/components/featured-reviews"
import { ReviewsFilters } from "@/components/reviews-filters"
import { ReviewsGrid } from "@/components/reviews-grid"
import { Pagination } from "@/components/pagination"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <ReviewsHeader />
        <FeaturedReviews />

        <div className="container mx-auto px-4 py-12">
          <ReviewsFilters />
          <ReviewsGrid />
          <div className="mt-12">
            <Pagination />
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
