"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Clock, MessageSquare, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for guides
const guidesData = [
  {
    id: 4,
    title: "Best Budget Smartphones Under $300 in 2024",
    excerpt:
      "You don't need to spend a fortune to get a great smartphone. We've tested dozens of budget options to find the best phones under $300 that offer impressive performance, cameras, and battery life.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Smartphones",
    type: "Best Of",
    author: "Sarah Johnson",
    date: "2024-03-01",
    readTime: "9 min read",
    comments: 32,
    likes: 124,
    budget: "Budget",
  },
  {
    id: 5,
    title: "Gaming Laptop vs. Gaming Desktop: Which Should You Buy?",
    excerpt:
      "Deciding between a gaming laptop and desktop? We break down the pros and cons of each option, comparing performance, upgradability, portability, and value to help you make the right choice.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Gaming",
    type: "Comparison",
    author: "Alex Chen",
    date: "2024-02-25",
    readTime: "11 min read",
    comments: 47,
    likes: 186,
    budget: "Various",
  },
  {
    id: 6,
    title: "The Complete Guide to Wireless Headphones and Earbuds",
    excerpt:
      "Navigate the crowded wireless audio market with our comprehensive guide covering everything from sound quality and noise cancellation to battery life and connectivity options.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Audio",
    type: "Buying Guide",
    author: "Maria Rodriguez",
    date: "2024-02-20",
    readTime: "14 min read",
    comments: 29,
    likes: 112,
    budget: "Various",
  },
  {
    id: 7,
    title: "How to Build Your First Smart Home System",
    excerpt:
      "Transform your home with smart technology using our step-by-step guide. Learn about hubs, compatible devices, voice assistants, automation, and security considerations for beginners.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Smart Home",
    type: "How To",
    author: "James Wilson",
    date: "2024-02-15",
    readTime: "12 min read",
    comments: 38,
    likes: 145,
    budget: "Various",
  },
  {
    id: 8,
    title: "The Best Tablets for Students in 2024",
    excerpt:
      "Find the perfect tablet for note-taking, research, and studying with our student-focused guide. We consider factors like stylus support, battery life, portability, and budget constraints.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tablets",
    type: "Best Of",
    author: "Sarah Johnson",
    date: "2024-02-10",
    readTime: "8 min read",
    comments: 26,
    likes: 98,
    budget: "Mid-Range",
  },
  {
    id: 9,
    title: "Smartwatch Buying Guide: Features That Matter Most",
    excerpt:
      "Looking for the perfect smartwatch? Our guide helps you understand the essential features to consider, from health tracking and battery life to compatibility and display quality.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Wearables",
    type: "Buying Guide",
    author: "Alex Chen",
    date: "2024-02-05",
    readTime: "10 min read",
    comments: 31,
    likes: 117,
    budget: "Various",
  },
]

export function GuidesGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [savedGuides, setSavedGuides] = useState<number[]>([])
  const [likedGuides, setLikedGuides] = useState<number[]>([])

  const toggleSaved = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSavedGuides((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleLiked = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLikedGuides((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {guidesData.map((guide, index) => (
        <motion.div
          key={guide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onHoverStart={() => setHoveredId(guide.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <Link href={`/guides/${guide.id}`}>
            <Card
              className={`bg-[#3B3F51]/30 backdrop-blur-sm border-[#3B3F51] overflow-hidden h-full transition-all duration-300 ${
                hoveredId === guide.id ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
              }`}
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredId === guide.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{guide.category}</Badge>
                  <Badge className="bg-[#3B3F51]/70 backdrop-blur-sm text-white px-2.5 py-1">{guide.type}</Badge>
                </div>
                {guide.budget !== "Various" && (
                  <div className="absolute bottom-3 right-3">
                    <Badge
                      className={`px-2.5 py-1 ${
                        guide.budget === "Budget"
                          ? "bg-green-500/20 text-green-500 border border-green-500/50"
                          : guide.budget === "Mid-Range"
                            ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/50"
                            : "bg-purple-500/20 text-purple-500 border border-purple-500/50"
                      }`}
                    >
                      {guide.budget}
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-['Orbitron'] font-bold text-white mb-2">{guide.title}</h3>
                <p className="text-[#E6EDF3]/80 text-sm mb-4 line-clamp-2">{guide.excerpt}</p>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#E6EDF3]/60">
                  <div className="flex flex-wrap items-center gap-3">
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

                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-[#3B3F51]/50"
                      onClick={(e) => toggleLiked(guide.id, e)}
                    >
                      <ThumbsUp
                        className={`h-3.5 w-3.5 ${
                          likedGuides.includes(guide.id) ? "text-[#0A84FF] fill-[#0A84FF]" : "text-[#E6EDF3]/60"
                        }`}
                      />
                      <span className="sr-only">Like</span>
                    </Button>
                    <div className="flex items-center">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      {guide.comments}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-[#3B3F51]/50"
                      onClick={(e) => toggleSaved(guide.id, e)}
                    >
                      <Bookmark
                        className={`h-3.5 w-3.5 ${
                          savedGuides.includes(guide.id) ? "text-[#FF6B00] fill-[#FF6B00]" : "text-[#E6EDF3]/60"
                        }`}
                      />
                      <span className="sr-only">Save</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-[#3B3F51]/50"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                    >
                      <Share2 className="h-3.5 w-3.5 text-[#E6EDF3]/60" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
