"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for related products
const getRelatedProducts = (productId: string) => {
  return {
    id: productId,
    name: "iPhone 15 Pro Max",
    related: [
      {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        image: "/placeholder.svg?height=200&width=200",
        price: 1299,
        rating: 4.8,
        category: "smartphone",
      },
      {
        id: 3,
        name: "Google Pixel 8 Pro",
        image: "/placeholder.svg?height=200&width=200",
        price: 999,
        rating: 4.6,
        category: "smartphone",
      },
      {
        id: 4,
        name: "iPhone 15 Pro",
        image: "/placeholder.svg?height=200&width=200",
        price: 999,
        rating: 4.7,
        category: "smartphone",
      },
    ],
    accessories: [
      {
        id: 101,
        name: "Apple MagSafe Charger",
        image: "/placeholder.svg?height=200&width=200",
        price: 39,
        rating: 4.5,
        category: "accessory",
      },
      {
        id: 102,
        name: "Apple AirPods Pro 2",
        image: "/placeholder.svg?height=200&width=200",
        price: 249,
        rating: 4.7,
        category: "accessory",
      },
    ],
  }
}

interface RelatedProductsProps {
  productId: string
}

export function RelatedProducts({ productId }: RelatedProductsProps) {
  const relatedData = getRelatedProducts(productId)
  const [activeTab, setActiveTab] = useState<"similar" | "accessories">("similar")

  const products = activeTab === "similar" ? relatedData.related : relatedData.accessories

  return (
    <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-['Orbitron'] text-white">You Might Also Like</h3>
          <div className="flex text-xs">
            <button
              className={`px-3 py-1 rounded-l-md border border-[#3B3F51] ${
                activeTab === "similar"
                  ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                  : "bg-transparent text-[#E6EDF3]/70 hover:bg-[#3B3F51]/30"
              }`}
              onClick={() => setActiveTab("similar")}
            >
              Similar
            </button>
            <button
              className={`px-3 py-1 rounded-r-md border border-[#3B3F51] ${
                activeTab === "accessories"
                  ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                  : "bg-transparent text-[#E6EDF3]/70 hover:bg-[#3B3F51]/30"
              }`}
              onClick={() => setActiveTab("accessories")}
            >
              Accessories
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="flex gap-3 p-2 rounded-md hover:bg-[#3B3F51]/30 transition-colors">
                <div className="relative w-16 h-16 rounded-md overflow-hidden bg-[#0D1117]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#E6EDF3] font-medium line-clamp-1">{product.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? "text-[#FF6B00] fill-[#FF6B00]"
                              : i < product.rating
                                ? "text-[#FF6B00] fill-[#FF6B00]/50"
                                : "text-[#3B3F51] fill-[#3B3F51]"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#E6EDF3]/70">{product.rating.toFixed(1)}</span>
                  </div>
                  <div className="text-[#0A84FF] font-medium text-sm mt-1">${product.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          className="w-full mt-4 text-[#0A84FF] hover:text-[#0A84FF] hover:bg-[#0A84FF]/10 border border-[#3B3F51]"
        >
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
