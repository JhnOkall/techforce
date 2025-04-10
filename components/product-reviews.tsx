"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, ThumbsDown, MessageSquare, Filter } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

// Mock data for product reviews
const getProductReviews = (productId: string) => {
  return {
    id: productId,
    name: "iPhone 15 Pro Max",
    rating: 4.7,
    totalReviews: 128,
    ratingDistribution: [
      { rating: 5, count: 89 },
      { rating: 4, count: 27 },
      { rating: 3, count: 8 },
      { rating: 2, count: 3 },
      { rating: 1, count: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Alex Chen",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        date: "2024-02-15",
        title: "Best iPhone Ever Made",
        content:
          "The titanium build feels premium and the camera system is a significant upgrade. Battery life is exceptional, easily lasting a full day of heavy use. The A17 Pro chip handles everything I throw at it without breaking a sweat.",
        helpful: 24,
        notHelpful: 2,
        verified: true,
      },
      {
        id: 2,
        user: "Sarah Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 4,
        date: "2024-01-28",
        title: "Great Phone, But Expensive",
        content:
          "The iPhone 15 Pro Max is an excellent device with top-notch performance and camera capabilities. The only downside is the price, which is hard to justify for the incremental improvements over the previous generation.",
        helpful: 18,
        notHelpful: 3,
        verified: true,
      },
      {
        id: 3,
        user: "Michael Wong",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        date: "2024-01-10",
        title: "Camera System is Incredible",
        content:
          "As a photography enthusiast, I'm blown away by the camera system on the iPhone 15 Pro Max. The 48MP main sensor captures stunning detail, and the 5x telephoto lens is a game-changer for zoom shots. Night mode performance is also significantly improved.",
        helpful: 32,
        notHelpful: 1,
        verified: true,
      },
      {
        id: 4,
        user: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 3,
        date: "2023-12-05",
        title: "Good, But Not Worth Upgrading From 14 Pro",
        content:
          "If you're coming from an iPhone 14 Pro or Pro Max, the upgrades are minimal. The titanium build is nice but doesn't fundamentally change the experience. The camera improvements are noticeable but not revolutionary. I'd recommend waiting for the next generation.",
        helpful: 15,
        notHelpful: 8,
        verified: true,
      },
    ],
  }
}

interface ProductReviewsProps {
  productId: string
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  const reviewsData = getProductReviews(productId)
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="space-y-8 mb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-['Orbitron'] font-bold text-white">User Reviews</h2>
        <Button className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300">
          <MessageSquare className="mr-2 h-4 w-4" /> Write a Review
        </Button>
      </div>

      <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0A84FF] mb-2">{reviewsData.rating.toFixed(1)}</div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(reviewsData.rating)
                          ? "text-[#FF6B00] fill-[#FF6B00]"
                          : i < reviewsData.rating
                            ? "text-[#FF6B00] fill-[#FF6B00]/50"
                            : "text-[#3B3F51] fill-[#3B3F51]"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-[#E6EDF3]/70 text-sm">Based on {reviewsData.totalReviews} reviews</div>
              </div>

              <div className="space-y-2">
                {reviewsData.ratingDistribution.map((item) => (
                  <div key={item.rating} className="flex items-center gap-2">
                    <div className="w-10 text-right text-[#E6EDF3]/70">{item.rating} ★</div>
                    <Progress
                      value={(item.count / reviewsData.totalReviews) * 100}
                      className="h-2 flex-1 bg-[#3B3F51]/50 [&>div]:bg-[#0A84FF]"
                    />
                    <div className="w-10 text-[#E6EDF3]/70">{item.count}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#3B3F51]/30 backdrop-blur-sm border border-[#3B3F51] rounded-md p-4">
                <h3 className="text-[#0A84FF] font-medium mb-2">Review Highlights</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#0A84FF]"></div>
                    <span className="text-[#E6EDF3]/90 text-sm">Premium titanium build quality</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#0A84FF]"></div>
                    <span className="text-[#E6EDF3]/90 text-sm">Exceptional camera system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#0A84FF]"></div>
                    <span className="text-[#E6EDF3]/90 text-sm">All-day battery life</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#FF6B00]"></div>
                    <span className="text-[#E6EDF3]/90 text-sm">High price point</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveFilter}>
                  <TabsList className="bg-[#3B3F51]/30 border border-[#3B3F51]">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
                    >
                      All Reviews
                    </TabsTrigger>
                    <TabsTrigger
                      value="positive"
                      className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
                    >
                      Positive
                    </TabsTrigger>
                    <TabsTrigger
                      value="critical"
                      className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
                    >
                      Critical
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white"
                >
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>

              <div className="space-y-4">
                {reviewsData.reviews
                  .filter((review) => {
                    if (activeFilter === "all") return true
                    if (activeFilter === "positive") return review.rating >= 4
                    if (activeFilter === "critical") return review.rating <= 3
                    return true
                  })
                  .map((review) => (
                    <div
                      key={review.id}
                      className="bg-[#3B3F51]/30 backdrop-blur-sm border border-[#3B3F51] rounded-md p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.user}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-[#E6EDF3]">{review.user}</span>
                              {review.verified && (
                                <Badge className="bg-green-500/20 text-green-500 border border-green-500/50 text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="text-xs text-[#E6EDF3]/70">
                              {new Date(review.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-[#FF6B00] fill-[#FF6B00]" : "text-[#3B3F51] fill-[#3B3F51]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="font-medium text-[#E6EDF3] mb-2">{review.title}</h3>
                      <p className="text-[#E6EDF3]/90 text-sm mb-4">{review.content}</p>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-[#E6EDF3]/70">Was this review helpful?</div>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-[#E6EDF3]/70 hover:text-[#0A84FF] hover:bg-[#0A84FF]/10"
                          >
                            <ThumbsUp className="mr-1 h-3.5 w-3.5" /> {review.helpful}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-[#E6EDF3]/70 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10"
                          >
                            <ThumbsDown className="mr-1 h-3.5 w-3.5" /> {review.notHelpful}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                  Load More Reviews
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
