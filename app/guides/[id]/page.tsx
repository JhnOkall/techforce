import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { GuideArticle } from "@/components/guide-article"
import { RelatedGuides } from "@/components/related-guides"
import { ProductRecommendations } from "@/components/product-recommendations"
import { NewsComments } from "@/components/news-comments"

export default function GuidePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the guide data based on the ID
  const guideId = params.id

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <GuideArticle guideId={guideId} />
              <ProductRecommendations guideId={guideId} />
              <NewsComments articleId={guideId} />
            </div>

            <div className="space-y-8">
              <RelatedGuides guideId={guideId} />
            </div>
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
