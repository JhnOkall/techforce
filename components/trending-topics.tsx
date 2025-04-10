"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Hash } from "lucide-react"

// Mock data for trending topics
const trendingData = {
  topics: [
    {
      id: 1,
      title: "Apple Vision Pro",
      count: 28,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "AI in Smartphones",
      count: 24,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "Foldable Devices",
      count: 19,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      title: "Cloud Gaming",
      count: 15,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      title: "USB-C Standard",
      count: 12,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  tags: [
    { id: 1, name: "AI", count: 156 },
    { id: 2, name: "Apple", count: 142 },
    { id: 3, name: "Samsung", count: 118 },
    { id: 4, name: "Google", count: 103 },
    { id: 5, name: "Gaming", count: 97 },
    { id: 6, name: "Smartphones", count: 89 },
    { id: 7, name: "Wearables", count: 76 },
    { id: 8, name: "Privacy", count: 68 },
    { id: 9, name: "5G", count: 62 },
    { id: 10, name: "Laptops", count: 57 },
  ],
}

export function TrendingTopics() {
  const [activeTab, setActiveTab] = useState<"topics" | "tags">("topics")

  return (
    <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#0A84FF]" />
            <h3 className="text-lg font-['Orbitron'] font-bold text-white">Trending</h3>
          </div>

          <Tabs
            defaultValue="topics"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "topics" | "tags")}
            className="w-auto"
          >
            <TabsList className="bg-[#3B3F51]/30 border border-[#3B3F51] h-8 p-0.5">
              <TabsTrigger
                value="topics"
                className="text-xs h-7 px-2.5 data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
              >
                Topics
              </TabsTrigger>
              <TabsTrigger
                value="tags"
                className="text-xs h-7 px-2.5 data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
              >
                Tags
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {activeTab === "topics" ? (
          <div className="space-y-3">
            {trendingData.topics.map((topic) => (
              <Link href={`/news/topic/${topic.id}`} key={topic.id}>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#3B3F51]/30 transition-colors">
                  <div className="relative w-10 h-10 rounded-md overflow-hidden bg-[#0D1117]">
                    <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[#E6EDF3] font-medium">{topic.title}</h4>
                      <Badge className="bg-[#0A84FF]/20 text-[#0A84FF] border border-[#0A84FF]/30 text-xs">
                        {topic.count} articles
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {trendingData.tags.map((tag) => (
              <Link href={`/news/tag/${tag.name.toLowerCase()}`} key={tag.id}>
                <Badge
                  variant="outline"
                  className="bg-[#3B3F51]/30 border-[#3B3F51] hover:bg-[#3B3F51]/50 transition-colors cursor-pointer"
                >
                  <Hash className="h-3 w-3 mr-1" />
                  {tag.name}
                  <span className="ml-1 text-[#E6EDF3]/50 text-xs">({tag.count})</span>
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
