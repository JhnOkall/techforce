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

// Mock data for news articles
const newsArticles = [
  {
    id: 4,
    title: "Google's Gemini AI: A New Era of Artificial Intelligence",
    excerpt:
      "Google's latest AI model, Gemini, is pushing the boundaries of what's possible with artificial intelligence. We take a deep dive into its capabilities and potential impact.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Industry News",
    author: "Sarah Johnson",
    date: "2024-03-08",
    readTime: "7 min read",
    comments: 42,
    likes: 156,
  },
  {
    id: 5,
    title: "The Best Budget Smartphones of 2024",
    excerpt:
      "You don't need to spend a fortune to get a great smartphone experience. We've rounded up the best budget-friendly options that deliver impressive performance and features.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Guides",
    author: "Alex Chen",
    date: "2024-03-05",
    readTime: "9 min read",
    comments: 28,
    likes: 103,
  },
  {
    id: 6,
    title: "How to Secure Your Smart Home Devices",
    excerpt:
      "As smart home devices become increasingly common, security concerns are on the rise. Follow these essential steps to protect your connected home from potential threats.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Guides",
    author: "Maria Rodriguez",
    date: "2024-03-03",
    readTime: "6 min read",
    comments: 19,
    likes: 87,
  },
  {
    id: 7,
    title: "The Rise of Cloud Gaming: Is This the Future?",
    excerpt:
      "Cloud gaming services are gaining momentum, promising to make high-end gaming accessible without expensive hardware. We examine the technology, current offerings, and future potential.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Features",
    author: "James Wilson",
    date: "2024-03-01",
    readTime: "8 min read",
    comments: 35,
    likes: 124,
  },
  {
    id: 8,
    title: "Apple's Vision Pro: Hands-On with the Future of Computing",
    excerpt:
      "We spent two weeks with Apple's Vision Pro to understand if this spatial computing device lives up to the hype and whether it represents the next evolution in personal technology.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Reviews",
    author: "Alex Chen",
    date: "2024-02-28",
    readTime: "12 min read",
    comments: 67,
    likes: 215,
  },
  {
    id: 9,
    title: "The Environmental Impact of Tech: What You Need to Know",
    excerpt:
      "From manufacturing to e-waste, the technology industry has a significant environmental footprint. We explore the issues and how companies and consumers can make more sustainable choices.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Features",
    author: "Sarah Johnson",
    date: "2024-02-25",
    readTime: "10 min read",
    comments: 31,
    likes: 142,
  },
]

export function NewsGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [savedArticles, setSavedArticles] = useState<number[]>([])
  const [likedArticles, setLikedArticles] = useState<number[]>([])

  const toggleSaved = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSavedArticles((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleLiked = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLikedArticles((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsArticles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onHoverStart={() => setHoveredId(article.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <Link href={`/news/${article.id}`}>
            <Card
              className={`bg-[#3B3F51]/30 backdrop-blur-sm border-[#3B3F51] overflow-hidden h-full transition-all duration-300 ${
                hoveredId === article.id ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
              }`}
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredId === article.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{article.category}</Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-['Orbitron'] font-bold text-white mb-2">{article.title}</h3>
                <p className="text-[#E6EDF3]/80 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#E6EDF3]/60">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center">
                      <User className="h-3.5 w-3.5 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-[#3B3F51]/50"
                      onClick={(e) => toggleLiked(article.id, e)}
                    >
                      <ThumbsUp
                        className={`h-3.5 w-3.5 ${
                          likedArticles.includes(article.id) ? "text-[#0A84FF] fill-[#0A84FF]" : "text-[#E6EDF3]/60"
                        }`}
                      />
                      <span className="sr-only">Like</span>
                    </Button>
                    <div className="flex items-center">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      {article.comments}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-[#3B3F51]/50"
                      onClick={(e) => toggleSaved(article.id, e)}
                    >
                      <Bookmark
                        className={`h-3.5 w-3.5 ${
                          savedArticles.includes(article.id) ? "text-[#FF6B00] fill-[#FF6B00]" : "text-[#E6EDF3]/60"
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
