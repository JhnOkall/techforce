"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

// Test data for reviews
const reviews = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Review: The Ultimate Apple Experience",
    excerpt:
      "Apple's flagship offers exceptional performance, a premium titanium build, and impressive camera capabilities, but comes at a steep price.",
    deviceName: "iPhone 15 Pro Max",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "Alex Chen",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    date: "2023-10-05",
    category: "smartphone",
    featured: true,
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra: Redefining Android Excellence",
    excerpt:
      "Samsung's latest Ultra device pushes boundaries with its 200MP camera, AI features, and S Pen integration, creating the most complete Android package available.",
    deviceName: "Samsung Galaxy S24 Ultra",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "Maria Rodriguez",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    date: "2024-02-10",
    category: "smartphone",
    featured: true,
  },
  {
    id: 3,
    title: "MacBook Pro M3 Max: A Creative Powerhouse",
    excerpt:
      "The M3 Max chip transforms the MacBook Pro into an absolute beast for creative professionals, with exceptional performance and battery life.",
    deviceName: "MacBook Pro M3 Max",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "James Wilson",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    date: "2023-11-15",
    category: "laptop",
    featured: true,
  },
  {
    id: 4,
    title: "Google Pixel 8 Pro: The AI Photography King",
    excerpt:
      "Google's computational photography reaches new heights with the Pixel 8 Pro, delivering stunning results in any lighting condition.",
    deviceName: "Google Pixel 8 Pro",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "Sarah Johnson",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    date: "2023-10-20",
    category: "smartphone",
  },
  {
    id: 5,
    title: "Sony WH-1000XM5: Noise Cancellation Perfected",
    excerpt:
      "Sony's flagship headphones deliver best-in-class noise cancellation, exceptional sound quality, and improved comfort over their predecessors.",
    deviceName: "Sony WH-1000XM5",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "Alex Chen",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    date: "2022-06-15",
    category: "headphones",
  },
  {
    id: 6,
    title: "iPad Pro M2: The Ultimate Tablet Experience",
    excerpt:
      "Apple's M2-powered iPad Pro continues to blur the line between tablet and laptop, offering unmatched performance in a sleek package.",
    deviceName: "iPad Pro M2",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "Maria Rodriguez",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    date: "2022-11-10",
    category: "tablet",
  },
  {
    id: 7,
    title: "Dell XPS 13 Plus: Futuristic Design Meets Performance",
    excerpt:
      "Dell's redesigned XPS 13 Plus brings a minimalist aesthetic and powerful performance, though with some controversial design choices.",
    deviceName: "Dell XPS 13 Plus",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "James Wilson",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    date: "2023-05-25",
    category: "laptop",
  },
  {
    id: 8,
    title: "Apple Watch Ultra 2: The Ultimate Outdoor Companion",
    excerpt:
      "Apple's rugged smartwatch gets even better with improved battery life, a brighter display, and enhanced fitness tracking capabilities.",
    deviceName: "Apple Watch Ultra 2",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "Sarah Johnson",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    date: "2023-09-30",
    category: "smartwatch",
  },
  {
    id: 9,
    title: "Samsung Galaxy Tab S9 Ultra: The Android Tablet to Beat",
    excerpt:
      "Samsung's flagship tablet offers a gorgeous display, powerful performance, and improved S Pen functionality, making it the best Android tablet available.",
    deviceName: "Samsung Galaxy Tab S9 Ultra",
    deviceImage: "/placeholder.svg?height=600&width=400",
    reviewer: "Alex Chen",
    reviewerAvatar: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    date: "2023-08-20",
    category: "tablet",
  },
]

export function ReviewsGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => setHoveredId(review.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <Card
            className={`bg-[#3B3F51]/30 backdrop-blur-sm border-[#3B3F51] overflow-hidden h-full transition-all duration-300 ${
              hoveredId === review.id ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
            }`}
          >
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={review.deviceImage || "/placeholder.svg"}
                alt={review.deviceName}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform: hoveredId === review.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent opacity-70"></div>
              <div className="absolute top-3 left-3">
                <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{review.category}</Badge>
              </div>
              <div className="absolute bottom-3 right-3">
                <Badge className="bg-[#FF6B00] text-white flex items-center gap-1.5 px-2.5 py-1">
                  <Star className="h-3.5 w-3.5 fill-white" />
                  {review.rating.toFixed(1)}
                </Badge>
              </div>
              {review.featured && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-[#0D1117]/80 backdrop-blur-sm border border-[#0A84FF] text-[#0A84FF] px-2.5 py-1">
                    Featured
                  </Badge>
                </div>
              )}
            </div>
            <CardContent className="p-5 flex flex-col h-[calc(100%-200px)]">
              <div className="flex items-center mb-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 border border-[#0A84FF]">
                  <Image
                    src={review.reviewerAvatar || "/placeholder.svg"}
                    alt={review.reviewer}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-[#E6EDF3] flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {review.reviewer}
                  </span>
                  <span className="text-xs text-[#E6EDF3]/60 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-['Orbitron'] font-bold text-white mb-2">{review.title}</h3>
              <p className="text-sm text-[#E6EDF3]/80 mb-4 flex-grow">{review.excerpt}</p>

              <Button
                className="w-full mt-auto bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300"
                size="sm"
              >
                Read Full Review <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
