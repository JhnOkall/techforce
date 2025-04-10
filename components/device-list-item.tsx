"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Laptop, Smartphone, Tablet, Watch, Headphones, Star, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface DeviceListItemProps {
  name: string
  image: string
  specs: string[]
  rating: number
  category: "smartphone" | "laptop" | "tablet" | "smartwatch" | "headphones"
  price: number
  brand: string
  releaseDate: string
}

export function DeviceListItem({
  name,
  image,
  specs,
  rating,
  category,
  price,
  brand,
  releaseDate,
}: DeviceListItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getCategoryIcon = () => {
    switch (category) {
      case "smartphone":
        return <Smartphone className="h-4 w-4" />
      case "laptop":
        return <Laptop className="h-4 w-4" />
      case "tablet":
        return <Tablet className="h-4 w-4" />
      case "smartwatch":
        return <Watch className="h-4 w-4" />
      case "headphones":
        return <Headphones className="h-4 w-4" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`bg-[#3B3F51]/40 backdrop-blur-sm border-[#3B3F51] overflow-hidden transition-all duration-300 ${
          isHovered ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
        }`}
      >
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-[180px] h-[180px] overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-[#3B3F51]/80 backdrop-blur-sm text-white flex items-center gap-1.5 px-2.5 py-1">
                  {getCategoryIcon()}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Badge>
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-['Orbitron'] font-bold text-white">{name}</h3>
                    <Badge className="bg-[#FF6B00] text-white flex items-center gap-1.5 px-2 py-0.5">
                      <Star className="h-3 w-3 fill-white" />
                      {rating.toFixed(1)}
                    </Badge>
                  </div>

                  <div className="flex items-center text-sm text-[#E6EDF3]/70">
                    <span className="mr-3">{brand}</span>
                    <span>Released: {formatDate(releaseDate)}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {specs.map((spec, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-[#0D1117]/50 text-[#E6EDF3]/90 border-[#3B3F51]"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="text-2xl font-bold text-white">${price}</div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300"
                    >
                      Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
