import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { NewsHeader } from "@/components/news-header"
import { FeaturedNews } from "@/components/featured-news"
import { NewsCategories } from "@/components/news-categories"
import { NewsGrid } from "@/components/news-grid"
import { NewsletterSubscribe } from "@/components/newsletter-subscribe"
import { TrendingTopics } from "@/components/trending-topics"
import { Pagination } from "@/components/pagination"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <NewsHeader />
        <FeaturedNews />

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <NewsCategories />
              <NewsGrid />
              <div className="mt-12">
                <Pagination />
              </div>
            </div>

            <div className="lg:w-1/4 space-y-8">
              <NewsletterSubscribe />
              <TrendingTopics />
            </div>
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
