import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { NewsArticle } from "@/components/news-article"
import { RelatedNews } from "@/components/related-news"
import { NewsComments } from "@/components/news-comments"

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const articleId = params.id

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <NewsArticle articleId={articleId} />
              <NewsComments articleId={articleId} />
            </div>

            <div className="space-y-8">
              <RelatedNews articleId={articleId} />
            </div>
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
