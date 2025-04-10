"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Share2, BarChart2, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for a product
const getProductData = (productId: string) => {
  return {
    id: productId,
    name: "iPhone 15 Pro Max",
    category: "smartphone",
    brand: "Apple",
    releaseDate: "2023-09-22",
    rating: 4.7,
    reviewCount: 128,
    image: "/placeholder.svg?height=600&width=400",
    price: 1199,
    discount: 100,
    inStock: true,
    keySpecs: [
      '6.7" Super Retina XDR OLED',
      "A17 Pro Chip",
      "8GB RAM",
      "48MP Main Camera",
      "4422mAh Battery",
      "iOS 17",
    ],
  }
}

interface ProductHeaderProps {
  productId: string
}

export function ProductHeader({ productId }: ProductHeaderProps) {
  const product = getProductData(productId)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/90 to-[#0D1117]/70"></div>
        <div className="grid-background"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-[#3B3F51]/20 backdrop-blur-sm border border-[#3B3F51]">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
            </div>
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              {product.discount > 0 && (
                <Badge className="bg-[#FF6B00] text-white px-2.5 py-1">${product.discount} OFF</Badge>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#0A84FF] font-medium">{product.brand}</span>
                  <span className="text-[#E6EDF3]/50">•</span>
                  <span className="text-[#E6EDF3]/70">
                    Released:{" "}
                    {new Date(product.releaseDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-['Orbitron'] font-bold text-white mb-4">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "text-[#FF6B00] fill-[#FF6B00]"
                              : i < product.rating
                                ? "text-[#FF6B00] fill-[#FF6B00]/50"
                                : "text-[#3B3F51] fill-[#3B3F51]"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-[#E6EDF3]">{product.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-[#E6EDF3]/70">{product.reviewCount} Reviews</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {product.keySpecs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0A84FF]"></div>
                    <span className="text-[#E6EDF3]/90">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[#E6EDF3]/70 text-sm line-through">
                    ${(product.price + product.discount).toFixed(2)}
                  </span>
                  <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
                </div>
                <Badge
                  className={`px-2 py-1 ${product.inStock ? "bg-green-500/20 text-green-500 border-green-500/50" : "bg-red-500/20 text-red-500 border-red-500/50"}`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300 shadow-[0_0_10px_rgba(10,132,255,0.3)] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                </Button>
                <Button variant="outline" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                  <BarChart2 className="mr-2 h-4 w-4" /> Compare
                </Button>
                <Button
                  variant="outline"
                  className={`border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white ${isFavorite ? "bg-[#3B3F51]/50 text-[#FF6B00]" : ""}`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-[#FF6B00]" : ""}`} /> Save
                </Button>
                <Button variant="outline" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
