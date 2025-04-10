"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shuffle } from "lucide-react"

// Mock data for popular comparisons
const comparisonsData = [
  {
    id: 1,
    title: "iPhone 15 Pro vs Samsung Galaxy S24 Ultra",
    category: "Smartphones",
    image1: "/placeholder.svg?height=100&width=100",
    image2: "/placeholder.svg?height=100&width=100",
    device1: "iPhone 15 Pro",
    device2: "Galaxy S24 Ultra",
  },
  {
    id: 2,
    title: "MacBook Air M3 vs Dell XPS 13",
    category: "Laptops",
    image1: "/placeholder.svg?height=100&width=100",
    image2: "/placeholder.svg?height=100&width=100",
    device1: "MacBook Air M3",
    device2: "Dell XPS 13",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 vs Bose QC Ultra",
    category: "Audio",
    image1: "/placeholder.svg?height=100&width=100",
    image2: "/placeholder.svg?height=100&width=100",
    device1: "Sony WH-1000XM5",
    device2: "Bose QC Ultra",
  },
  {
    id: 4,
    title: "iPad Pro vs Samsung Galaxy Tab S9",
    category: "Tablets",
    image1: "/placeholder.svg?height=100&width=100",
    image2: "/placeholder.svg?height=100&width=100",
    device1: "iPad Pro",
    device2: "Galaxy Tab S9",
  },
  {
    id: 5,
    title: "Apple Watch Ultra 2 vs Garmin Fenix 7",
    category: "Wearables",
    image1: "/placeholder.svg?height=100&width=100",
    image2: "/placeholder.svg?height=100&width=100",
    device1: "Apple Watch Ultra 2",
    device2: "Garmin Fenix 7",
  },
]

export function PopularComparisons() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shuffle className="h-5 w-5 text-[#0A84FF]" />
          <h3 className="text-lg font-['Orbitron'] font-bold text-white">Popular Comparisons</h3>
        </div>

        <div className="space-y-4">
          {comparisonsData.map((comparison) => (
            <Link href={`/compare/${comparison.id}`} key={comparison.id}>
              <div
                className="p-3 rounded-md hover:bg-[#3B3F51]/30 transition-colors"
                onMouseEnter={() => setHoveredId(comparison.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-[#0A84FF]/20 text-[#0A84FF] border border-[#0A84FF]/30 text-xs">
                    {comparison.category}
                  </Badge>
                  <ArrowRight
                    className={`h-4 w-4 text-[#0A84FF] transition-transform duration-300 ${
                      hoveredId === comparison.id ? "translate-x-1" : ""
                    }`}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 rounded-md overflow-hidden bg-[#0D1117] border border-[#3B3F51]/50">
                      <Image
                        src={comparison.image1 || "/placeholder.svg"}
                        alt={comparison.device1}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-10 h-10 rounded-md overflow-hidden bg-[#0D1117] border border-[#3B3F51]/50 -ml-4">
                      <Image
                        src={comparison.image2 || "/placeholder.svg"}
                        alt={comparison.device2}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#E6EDF3] text-sm font-medium line-clamp-1">{comparison.title}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
