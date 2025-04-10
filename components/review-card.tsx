"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ReviewCardProps {
  reviewer: string
  avatar: string
  deviceName: string
  thumbnail: string
  verdict: string
  rating: number
}

export function ReviewCard({ reviewer, avatar, deviceName, thumbnail, verdict, rating }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="bg-[#3B3F51]/30 backdrop-blur-sm border-[#3B3F51] overflow-hidden hover:shadow-[0_0_20px_rgba(10,132,255,0.2)] transition-all duration-300">
        <div className="relative h-[180px] overflow-hidden">
          <Image src={thumbnail || "/placeholder.svg"} alt={deviceName} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent opacity-70"></div>
          <div className="absolute top-3 left-3">
            <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{deviceName}</Badge>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#0A84FF]/30 backdrop-blur-sm flex items-center justify-center border border-[#0A84FF]/50 cursor-pointer hover:bg-[#0A84FF]/50 transition-all duration-300">
              <Play className="h-6 w-6 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center mb-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-[#0A84FF]">
              <Image src={avatar || "/placeholder.svg"} alt={reviewer} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-['Orbitron'] font-bold text-white">{reviewer}</h3>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < Math.floor(rating)
                        ? "text-[#FF6B00] fill-[#FF6B00]"
                        : i < rating
                          ? "text-[#FF6B00] fill-[#FF6B00]/50"
                          : "text-[#3B3F51] fill-[#3B3F51]"
                    }`}
                  />
                ))}
                <span className="text-xs text-[#E6EDF3]/70 ml-2">{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          <p className="text-[#E6EDF3]/90 text-sm leading-relaxed">"{verdict}"</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
