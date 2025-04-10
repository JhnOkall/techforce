"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Newspaper, TrendingUp, Clock } from "lucide-react"

// Mock data for related news
const getRelatedNews = (articleId: string) => {
  return {
    id: articleId,
    related: [
      {
        id: 2,
        title: "Samsung Galaxy Book4 Pro: A Worthy MacBook Competitor?",
        excerpt:
          "Samsung's latest premium laptop brings impressive specs and a stunning AMOLED display, but can it challenge Apple's dominance?",
        image: "/placeholder.svg?height=200&width=300",
        category: "Reviews",
        date: "2024-03-10",
        readTime: "7 min read",
      },
      {
        id: 3,
        title: "The Best Laptops for Students in 2024",
        excerpt:
          "Our comprehensive guide to the top laptops for students, from budget-friendly options to premium powerhouses.",
        image: "/placeholder.svg?height=200&width=300",
        category: "Guides",
        date: "2024-03-05",
        readTime: "10 min read",
      },
      {
        id: 4,
        title: "Apple's M4 Chip: What We Know So Far",
        excerpt:
          "Rumors and leaks suggest Apple's next-generation silicon will bring significant performance improvements and new AI capabilities.",
        image: "/placeholder.svg?height=200&width=300",
        category: "Industry News",
        date: "2024-03-01",
        readTime: "5 min read",
      },
    ],
    popular: [
      {
        id: 5,
        title: "The Environmental Impact of Tech: What You Need to Know",
        image: "/placeholder.svg?height=100&width=100",
        category: "Features",
        date: "2024-02-25",
      },
      {
        id: 6,
        title: "Google's Gemini AI: A New Era of Artificial Intelligence",
        image: "/placeholder.svg?height=100&width=100",
        category: "Industry News",
        date: "2024-03-08",
      },
      {
        id: 7,
        title: "How to Secure Your Smart Home Devices",
        image: "/placeholder.svg?height=100&width=100",
        category: "Guides",
        date: "2024-03-03",
      },
      {
        id: 8,
        title: "The Rise of Cloud Gaming: Is This the Future?",
        image: "/placeholder.svg?height=100&width=100",
        category: "Features",
        date: "2024-03-01",
      },
      {
        id: 9,
        title: "Apple Vision Pro: Hands-On with the Future of Computing",
        image: "/placeholder.svg?height=100&width=100",
        category: "Reviews",
        date: "2024-02-28",
      },
    ],
  }
}

interface RelatedNewsProps {
  articleId: string
}

export function RelatedNews({ articleId }: RelatedNewsProps) {
  const newsData = getRelatedNews(articleId)
  const [activeTab, setActiveTab] = useState<"related" | "popular">("related")

  return (
    <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden sticky top-24">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {activeTab === "related" ? (
              <Newspaper className="h-5 w-5 text-[#0A84FF]" />
            ) : (
              <TrendingUp className="h-5 w-5 text-[#0A84FF]" />
            )}
            <h3 className="text-lg font-['Orbitron'] font-bold text-white">
              {activeTab === "related" ? "Related Articles" : "Popular Articles"}
            </h3>
          </div>

          <Tabs
            defaultValue="related"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "related" | "popular")}
            className="w-auto"
          >
            <TabsList className="bg-[#3B3F51]/30 border border-[#3B3F51] h-8 p-0.5">
              <TabsTrigger
                value="related"
                className="text-xs h-7 px-2.5 data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
              >
                Related
              </TabsTrigger>
              <TabsTrigger
                value="popular"
                className="text-xs h-7 px-2.5 data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
              >
                Popular
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {activeTab === "related" ? (
          <div className="space-y-4">
            {newsData.related.map((article) => (
              <Link href={`/news/${article.id}`} key={article.id}>
                <div className="group">
                  <div className="relative h-[150px] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-[#0A84FF] text-white px-2 py-0.5 text-xs">{article.category}</Badge>
                    </div>
                  </div>
                  <h4 className="font-medium text-[#E6EDF3] group-hover:text-[#0A84FF] transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#E6EDF3]/70 mt-1 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-[#E6EDF3]/60">
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {newsData.popular.map((article) => (
              <Link href={`/news/${article.id}`} key={article.id}>
                <div className="flex gap-3 group">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#E6EDF3] text-sm group-hover:text-[#0A84FF] transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-[#0A84FF]/20 text-[#0A84FF] border border-[#0A84FF]/30 text-xs px-1.5 py-0">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-[#E6EDF3]/60">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
