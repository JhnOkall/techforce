"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, TrendingUp, Clock } from "lucide-react"

// Mock data for related guides
const getRelatedGuides = (guideId: string) => {
  return {
    id: guideId,
    related: [
      {
        id: 2,
        title: "Best Budget Smartphones Under $300 in 2024",
        excerpt:
          "Find the perfect affordable smartphone with our comprehensive guide to the best budget options available this year.",
        image: "/placeholder.svg?height=200&width=300",
        category: "Smartphones",
        type: "Best Of",
        date: "2024-03-01",
        readTime: "9 min read",
      },
      {
        id: 3,
        title: "iPhone vs Android: Which Platform is Right for You?",
        excerpt:
          "A detailed comparison of the two major mobile platforms to help you decide which ecosystem best fits your needs and preferences.",
        image: "/placeholder.svg?height=200&width=300",
        category: "Smartphones",
        type: "Comparison",
        date: "2024-02-20",
        readTime: "11 min read",
      },
      {
        id: 4,
        title: "How to Extend Your Smartphone's Battery Life",
        excerpt:
          "Practical tips and tricks to maximize your phone's battery life and keep it running longer between charges.",
        image: "/placeholder.svg?height=200&width=300",
        category: "How To",
        type: "Guide",
        date: "2024-02-15",
        readTime: "7 min read",
      },
    ],
    popular: [
      {
        id: 5,
        title: "The Complete Guide to Wireless Headphones and Earbuds",
        image: "/placeholder.svg?height=100&width=100",
        category: "Audio",
        type: "Buying Guide",
        date: "2024-02-20",
      },
      {
        id: 6,
        title: "Gaming Laptop vs. Gaming Desktop: Which Should You Buy?",
        image: "/placeholder.svg?height=100&width=100",
        category: "Gaming",
        type: "Comparison",
        date: "2024-02-25",
      },
      {
        id: 7,
        title: "How to Build Your First Smart Home System",
        image: "/placeholder.svg?height=100&width=100",
        category: "Smart Home",
        type: "How To",
        date: "2024-02-15",
      },
      {
        id: 8,
        title: "The Best Tablets for Students in 2024",
        image: "/placeholder.svg?height=100&width=100",
        category: "Tablets",
        type: "Best Of",
        date: "2024-02-10",
      },
      {
        id: 9,
        title: "Smartwatch Buying Guide: Features That Matter Most",
        image: "/placeholder.svg?height=100&width=100",
        category: "Wearables",
        type: "Buying Guide",
        date: "2024-02-05",
      },
    ],
  }
}

interface RelatedGuidesProps {
  guideId: string
}

export function RelatedGuides({ guideId }: RelatedGuidesProps) {
  const guidesData = getRelatedGuides(guideId)
  const [activeTab, setActiveTab] = useState<"related" | "popular">("related")

  return (
    <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden sticky top-24">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {activeTab === "related" ? (
              <BookOpen className="h-5 w-5 text-[#0A84FF]" />
            ) : (
              <TrendingUp className="h-5 w-5 text-[#0A84FF]" />
            )}
            <h3 className="text-lg font-['Orbitron'] font-bold text-white">
              {activeTab === "related" ? "Related Guides" : "Popular Guides"}
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
            {guidesData.related.map((guide) => (
              <Link href={`/guides/${guide.id}`} key={guide.id}>
                <div className="group">
                  <div className="relative h-[150px] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      <Badge className="bg-[#0A84FF] text-white px-2 py-0.5 text-xs">{guide.category}</Badge>
                      <Badge className="bg-[#3B3F51]/70 backdrop-blur-sm text-white px-2 py-0.5 text-xs">
                        {guide.type}
                      </Badge>
                    </div>
                  </div>
                  <h4 className="font-medium text-[#E6EDF3] group-hover:text-[#0A84FF] transition-colors line-clamp-2">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-[#E6EDF3]/70 mt-1 line-clamp-2">{guide.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-[#E6EDF3]/60">
                    <span>
                      {new Date(guide.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {guide.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {guidesData.popular.map((guide) => (
              <Link href={`/guides/${guide.id}`} key={guide.id}>
                <div className="flex gap-3 group">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#E6EDF3] text-sm group-hover:text-[#0A84FF] transition-colors line-clamp-2">
                      {guide.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-[#0A84FF]/20 text-[#0A84FF] border border-[#0A84FF]/30 text-xs px-1.5 py-0">
                        {guide.category}
                      </Badge>
                      <span className="text-xs text-[#E6EDF3]/60">
                        {new Date(guide.date).toLocaleDateString("en-US", {
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
