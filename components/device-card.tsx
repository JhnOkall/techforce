"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Smartphone, Tablet, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface DeviceCardProps {
  name: string
  image: string
  specs: string[]
  rating: number
  category: "smartphone" | "laptop" | "tablet"
}

export function DeviceCard({ name, image, specs, rating, category }: DeviceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getCategoryIcon = () => {
    switch (category) {
      case "smartphone":
        return <Smartphone className="h-4 w-4" />
      case "laptop":
        return <Laptop className="h-4 w-4" />
      case "tablet":
        return <Tablet className="h-4 w-4" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-[280px]"
    >
      <Card
        className={`bg-[#3B3F51]/40 backdrop-blur-sm border-[#3B3F51] overflow-hidden transition-all duration-300 ${
          isHovered ? "shadow-[0_0_20px_rgba(10,132,255,0.3)]" : ""
        }`}
      >
        <div className="relative h-[300px] overflow-hidden">
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
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-[#FF6B00] text-white flex items-center gap-1.5 px-2.5 py-1">
              <Star className="h-3.5 w-3.5 fill-white" />
              {rating.toFixed(1)}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-['Orbitron'] font-bold mb-3 text-white">{name}</h3>
          <div className="space-y-1.5">
            {specs.map((spec, index) => (
              <p key={index} className="text-[#E6EDF3]/80 text-sm flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] inline-block mr-2"></span>
                {spec}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
