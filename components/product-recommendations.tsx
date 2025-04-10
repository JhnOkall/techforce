"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for product recommendations
const getRecommendations = (guideId: string) => {
  return {
    id: guideId,
    categories: [
      {
        id: "budget",
        name: "Budget Picks",
        products: [
          {
            id: 1,
            name: "Google Pixel 7a",
            image: "/placeholder.svg?height=200&width=200",
            price: 349,
            rating: 4.6,
            description: "Best camera performance in the budget segment with clean Android experience.",
            link: "#",
          },
          {
            id: 2,
            name: "Samsung Galaxy A34",
            image: "/placeholder.svg?height=200&width=200",
            price: 299,
            rating: 4.4,
            description: "Excellent display and battery life with Samsung's feature-rich One UI.",
            link: "#",
          },
          {
            id: 3,
            name: "Motorola Moto G Power",
            image: "/placeholder.svg?height=200&width=200",
            price: 249,
            rating: 4.3,
            description: "Exceptional battery life and clean software at an affordable price point.",
            link: "#",
          },
        ],
      },
      {
        id: "midrange",
        name: "Mid-Range",
        products: [
          {
            id: 4,
            name: "Google Pixel 8a",
            image: "/placeholder.svg?height=200&width=200",
            price: 499,
            rating: 4.7,
            description: "Flagship-level camera and AI features at a mid-range price.",
            link: "#",
          },
          {
            id: 5,
            name: "Samsung Galaxy A54",
            image: "/placeholder.svg?height=200&width=200",
            price: 449,
            rating: 4.5,
            description: "Well-rounded performance with excellent display and build quality.",
            link: "#",
          },
          {
            id: 6,
            name: "Nothing Phone (2)",
            image: "/placeholder.svg?height=200&width=200",
            price: 599,
            rating: 4.4,
            description: "Unique design with Glyph interface and clean software experience.",
            link: "#",
          },
        ],
      },
      {
        id: "flagship",
        name: "Flagship",
        products: [
          {
            id: 7,
            name: "iPhone 15 Pro",
            image: "/placeholder.svg?height=200&width=200",
            price: 999,
            rating: 4.8,
            description: "Premium build with excellent cameras and industry-leading performance.",
            link: "#",
          },
          {
            id: 8,
            name: "Samsung Galaxy S24 Ultra",
            image: "/placeholder.svg?height=200&width=200",
            price: 1199,
            rating: 4.7,
            description: "Feature-packed with S Pen support and versatile camera system.",
            link: "#",
          },
          {
            id: 9,
            name: "Google Pixel 8 Pro",
            image: "/placeholder.svg?height=200&width=200",
            price: 899,
            rating: 4.6,
            description: "Computational photography king with clean software and AI features.",
            link: "#",
          },
        ],
      },
    ],
  }
}

interface ProductRecommendationsProps {
  guideId: string
}

export function ProductRecommendations({ guideId }: ProductRecommendationsProps) {
  const recommendations = getRecommendations(guideId)
  const [activeCategory, setActiveCategory] = useState("budget")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const selectedCategory = recommendations.categories.find((cat) => cat.id === activeCategory)

  return (
    <div className="my-12">
      <h2 className="text-2xl font-['Orbitron'] font-bold text-white mb-6">Our Recommendations</h2>

      <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
        <CardContent className="p-6">
          <Tabs defaultValue="budget" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-6">
            <TabsList className="bg-[#3B3F51]/30 border border-[#3B3F51] w-full">
              {recommendations.categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex-1 data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedCategory?.products.map((product) => (
              <div
                key={product.id}
                className={`bg-[#3B3F51]/30 backdrop-blur-sm border border-[#3B3F51] rounded-lg overflow-hidden transition-all duration-300 ${
                  hoveredId === product.id ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
                }`}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="relative w-[120px] h-[120px] mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-['Orbitron'] font-bold text-white text-center mb-1">{product.name}</h3>

                  <div className="flex items-center justify-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-[#FF6B00] fill-[#FF6B00]"
                              : i < product.rating
                                ? "text-[#FF6B00] fill-[#FF6B00]/50"
                                : "text-[#3B3F51] fill-[#3B3F51]"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-[#E6EDF3]/70">{product.rating.toFixed(1)}</span>
                  </div>

                  <div className="text-xl font-bold text-[#0A84FF] mb-3">${product.price}</div>

                  <p className="text-sm text-[#E6EDF3]/80 text-center mb-4">{product.description}</p>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white"
                      asChild
                    >
                      <Link href={product.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Details
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" /> Buy
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#0A84FF]/10 border border-[#0A84FF]/30 rounded-md">
            <p className="text-sm text-[#E6EDF3]/90 flex items-start">
              <Badge className="bg-[#0A84FF] text-white mr-2 mt-0.5">Note</Badge>
              Prices and availability may vary. We may earn a commission for purchases made through our links, which
              helps support our testing and editorial process.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
