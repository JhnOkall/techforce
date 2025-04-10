"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for featured guides
const featuredGuidesData = [
  {
    id: 1,
    title: "The Ultimate Smartphone Buying Guide for 2024",
    excerpt:
      "Everything you need to know before purchasing a new smartphone in 2024, from processors and cameras to battery life and software support.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Smartphones",
    author: "Alex Chen",
    date: "2024-03-10",
    readTime: "12 min read",
    featured: true,
    updated: true,
  },
  {
    id: 2,
    title: "Best Gaming Laptops at Every Price Point",
    excerpt:
      "From budget-friendly options to high-end powerhouses, we break down the best gaming laptops for every budget and use case.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Laptops",
    author: "Maria Rodriguez",
    date: "2024-03-05",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: 3,
    title: "How to Choose the Perfect Wireless Earbuds",
    excerpt:
      "Navigate the crowded wireless earbuds market with our comprehensive guide covering sound quality, battery life, noise cancellation, and more.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Audio",
    author: "James Wilson",
    date: "2024-02-28",
    readTime: "8 min read",
    featured: true,
  },
]

export function FeaturedGuides() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-12 bg-[#0D1117]/80 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid-background-alt"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-['Orbitron'] font-bold text-white">Featured Guides</h2>
          <Button variant="link" className="text-[#0A84FF] hover:text-[#FF6B00]">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main featured guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setHoveredId(featuredGuidesData[0].id)}
            onHoverEnd={() => setHoveredId(null)}
            className="lg:row-span-2"
          >
            <Link href={`/guides/${featuredGuidesData[0].id}`} className="block h-full">
              <div
                className={`bg-[#3B3F51]/30 backdrop-blur-sm border border-[#3B3F51] rounded-lg overflow-hidden h-full transition-all duration-300 ${
                  hoveredId === featuredGuidesData[0].id ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
                }`}
              >
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <Image
                    src={featuredGuidesData[0].image || "/placeholder.svg"}
                    alt={featuredGuidesData[0].title}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredId === featuredGuidesData[0].id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{featuredGuidesData[0].category}</Badge>
                    {featuredGuidesData[0].updated && (
                      <Badge className="bg-[#FF6B00] text-white px-2.5 py-1">Recently Updated</Badge>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-['Orbitron'] font-bold text-white mb-3">
                    {featuredGuidesData[0].title}
                  </h3>
                  <p className="text-[#E6EDF3]/80 mb-4">{featuredGuidesData[0].excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#E6EDF3]/60">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredGuidesData[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredGuidesData[0].date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredGuidesData[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary featured guides */}
          <div className="grid grid-cols-1 gap-6">
            {featuredGuidesData.slice(1, 3).map((guide) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: guide.id * 0.1 }}
                onHoverStart={() => setHoveredId(guide.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <Link href={`/guides/${guide.id}`} className="block h-full">
                  <div
                    className={`bg-[#3B3F51]/30 backdrop-blur-sm border border-[#3B3F51] rounded-lg overflow-hidden h-full transition-all duration-300 ${
                      hoveredId === guide.id ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="relative md:w-2/5 h-[200px] md:h-auto overflow-hidden">
                        <Image
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.title}
                          fill
                          className="object-cover transition-transform duration-500"
                          style={{
                            transform: hoveredId === guide.id ? "scale(1.05)" : "scale(1)",
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{guide.category}</Badge>
                        </div>
                      </div>
                      <div className="p-5 md:w-3/5">
                        <h3 className="text-xl font-['Orbitron'] font-bold text-white mb-2">{guide.title}</h3>
                        <p className="text-[#E6EDF3]/80 text-sm mb-4 line-clamp-2">{guide.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#E6EDF3]/60">
                          <div className="flex items-center">
                            <User className="h-3.5 w-3.5 mr-1" />
                            {guide.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            {new Date(guide.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            {guide.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
