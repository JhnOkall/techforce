"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, ArrowLeft, Share2, Bookmark, ThumbsUp, ThumbsDown } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ReviewDetailProps {
  review: {
    id: number
    title: string
    content: string
    deviceName: string
    deviceImage: string
    reviewer: string
    reviewerAvatar: string
    rating: number
    date: string
    category: string
    pros: string[]
    cons: string[]
    verdict: string
  }
}

export function ReviewDetail({ review }: ReviewDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" className="text-[#E6EDF3]/70 hover:text-[#0A84FF] -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Reviews
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{review.category}</Badge>
              <Badge className="bg-[#FF6B00] text-white flex items-center gap-1.5 px-2.5 py-1">
                <Star className="h-3.5 w-3.5 fill-white" />
                {review.rating.toFixed(1)}
              </Badge>
              <span className="text-sm text-[#E6EDF3]/60 flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-['Orbitron'] font-bold text-white mb-4">{review.title}</h1>

            <div className="flex items-center mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-[#0A84FF]">
                <Image
                  src={review.reviewerAvatar || "/placeholder.svg"}
                  alt={review.reviewer}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[#E6EDF3] font-medium">By {review.reviewer}</span>
                <p className="text-sm text-[#E6EDF3]/60">Senior Tech Editor</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={review.deviceImage || "/placeholder.svg"}
              alt={review.deviceName}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[#E6EDF3]/90 leading-relaxed">{review.content.split("\n\n")[0]}</p>

            <h2 className="text-2xl font-['Orbitron'] font-bold text-white mt-8 mb-4">Design and Build Quality</h2>
            <p className="text-[#E6EDF3]/90 leading-relaxed">{review.content.split("\n\n")[1]}</p>

            <div className="my-6 grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Device front view"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Device back view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-['Orbitron'] font-bold text-white mt-8 mb-4">Performance and Features</h2>
            <p className="text-[#E6EDF3]/90 leading-relaxed">{review.content.split("\n\n")[2]}</p>

            <h2 className="text-2xl font-['Orbitron'] font-bold text-white mt-8 mb-4">Camera System</h2>
            <p className="text-[#E6EDF3]/90 leading-relaxed">{review.content.split("\n\n")[3]}</p>

            <div className="my-6 relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=1200" alt="Camera samples" fill className="object-cover" />
            </div>

            <h2 className="text-2xl font-['Orbitron'] font-bold text-white mt-8 mb-4">Battery Life</h2>
            <p className="text-[#E6EDF3]/90 leading-relaxed">{review.content.split("\n\n")[4]}</p>

            <h2 className="text-2xl font-['Orbitron'] font-bold text-white mt-8 mb-4">Verdict</h2>
            <p className="text-[#E6EDF3]/90 leading-relaxed">{review.verdict}</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-[#3B3F51]">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Helpful
              </Button>
              <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                <ThumbsDown className="mr-2 h-4 w-4" />
                Not Helpful
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="outline" size="icon" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                <Bookmark className="h-4 w-4" />
                <span className="sr-only">Bookmark</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#3B3F51]/20 backdrop-blur-sm border border-[#3B3F51] rounded-lg p-6">
            <h3 className="text-xl font-['Orbitron'] font-bold text-white mb-4">Review Summary</h3>

            <div className="flex items-center justify-between mb-6">
              <div className="text-5xl font-bold text-[#0A84FF]">{review.rating.toFixed(1)}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.floor(review.rating)
                        ? "text-[#FF6B00] fill-[#FF6B00]"
                        : i < review.rating
                          ? "text-[#FF6B00] fill-[#FF6B00]/50"
                          : "text-[#3B3F51] fill-[#3B3F51]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Tabs defaultValue="pros" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#0D1117]/50 border border-[#3B3F51]">
                <TabsTrigger value="pros" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
                  Pros
                </TabsTrigger>
                <TabsTrigger value="cons" className="data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white">
                  Cons
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pros" className="mt-4">
                <ul className="space-y-2">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#0A84FF] mt-1">•</span>
                      <span className="text-[#E6EDF3]/90">{pro}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="cons" className="mt-4">
                <ul className="space-y-2">
                  {review.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#FF6B00] mt-1">•</span>
                      <span className="text-[#E6EDF3]/90">{con}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-[#3B3F51]/20 backdrop-blur-sm border border-[#3B3F51] rounded-lg p-6">
            <h3 className="text-xl font-['Orbitron'] font-bold text-white mb-4">Device Specifications</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#E6EDF3]/70">Display</span>
                <span className="text-[#E6EDF3] text-right">6.7" Super Retina XDR OLED</span>
              </div>
              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex justify-between">
                <span className="text-[#E6EDF3]/70">Processor</span>
                <span className="text-[#E6EDF3] text-right">A17 Pro</span>
              </div>
              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex justify-between">
                <span className="text-[#E6EDF3]/70">RAM</span>
                <span className="text-[#E6EDF3] text-right">8GB</span>
              </div>
              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex justify-between">
                <span className="text-[#E6EDF3]/70">Storage</span>
                <span className="text-[#E6EDF3] text-right">256GB / 512GB / 1TB</span>
              </div>
              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex justify-between">
                <span className="text-[#E6EDF3]/70">Main Camera</span>
                <span className="text-[#E6EDF3] text-right">48MP, f/1.8, OIS</span>
              </div>
              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex justify-between">
                <span className="text-[#E6EDF3]/70">Battery</span>
                <span className="text-[#E6EDF3] text-right">4422mAh</span>
              </div>
              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex justify-between">
                <span className="text-[#E6EDF3]/70">OS</span>
                <span className="text-[#E6EDF3] text-right">iOS 17</span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300">
              Compare with other devices
            </Button>
          </div>

          <div className="bg-[#3B3F51]/20 backdrop-blur-sm border border-[#3B3F51] rounded-lg p-6">
            <h3 className="text-xl font-['Orbitron'] font-bold text-white mb-4">Related Reviews</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Samsung Galaxy S24 Ultra"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#E6EDF3] line-clamp-2">
                    Samsung Galaxy S24 Ultra: Redefining Android Excellence
                  </h4>
                  <div className="flex items-center mt-1">
                    <Star className="h-3.5 w-3.5 text-[#FF6B00] fill-[#FF6B00]" />
                    <span className="text-xs text-[#E6EDF3]/70 ml-1">4.8</span>
                  </div>
                </div>
              </div>

              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex gap-3">
                <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Google Pixel 8 Pro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#E6EDF3] line-clamp-2">
                    Google Pixel 8 Pro: The AI Photography King
                  </h4>
                  <div className="flex items-center mt-1">
                    <Star className="h-3.5 w-3.5 text-[#FF6B00] fill-[#FF6B00]" />
                    <span className="text-xs text-[#E6EDF3]/70 ml-1">4.6</span>
                  </div>
                </div>
              </div>

              <Separator className="bg-[#3B3F51]/50" />

              <div className="flex gap-3">
                <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/placeholder.svg?height=200&width=200" alt="OnePlus 12" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-[#E6EDF3] line-clamp-2">OnePlus 12: The Flagship Killer Returns</h4>
                  <div className="flex items-center mt-1">
                    <Star className="h-3.5 w-3.5 text-[#FF6B00] fill-[#FF6B00]" />
                    <span className="text-xs text-[#E6EDF3]/70 ml-1">4.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
