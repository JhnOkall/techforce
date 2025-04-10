"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { DollarSign } from "lucide-react"

export function BudgetSelector() {
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: "smartphones", name: "Smartphones", icon: "📱", maxPrice: 2000 },
    { id: "laptops", name: "Laptops", icon: "💻", maxPrice: 3000 },
    { id: "tablets", name: "Tablets", icon: "📟", maxPrice: 1500 },
    { id: "wearables", name: "Wearables", icon: "⌚", maxPrice: 1000 },
    { id: "audio", name: "Audio", icon: "🎧", maxPrice: 800 },
  ]

  const handleCategorySelect = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    setSelectedCategory(categoryId)
    if (category) {
      setPriceRange([0, category.maxPrice])
    }
  }

  return (
    <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-[#0A84FF]" />
          <h3 className="text-lg font-['Orbitron'] font-bold text-white">Budget Finder</h3>
        </div>

        <p className="text-[#E6EDF3]/80 text-sm mb-4">
          Select a category and price range to find buying guides tailored to your budget.
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                className={`${
                  selectedCategory === category.id
                    ? "bg-[#0A84FF]/20 text-[#0A84FF] border-[#0A84FF]/50"
                    : "bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
                }`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <span className="mr-1">{category.icon}</span> {category.name}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Price Range</label>
              <Slider
                defaultValue={[0, 2000]}
                max={selectedCategory ? categories.find((c) => c.id === selectedCategory)?.maxPrice || 2000 : 2000}
                step={50}
                value={priceRange}
                onValueChange={setPriceRange}
                className="[&_[role=slider]]:bg-[#0A84FF] [&_[role=slider]]:border-[#0A84FF] [&_[role=slider]]:shadow-[0_0_5px_rgba(10,132,255,0.5)]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="bg-[#3B3F51]/40 backdrop-blur-sm border border-[#3B3F51] rounded px-3 py-1.5 text-sm">
                ${priceRange[0]}
              </div>
              <div className="bg-[#3B3F51]/40 backdrop-blur-sm border border-[#3B3F51] rounded px-3 py-1.5 text-sm">
                ${priceRange[1]}
              </div>
            </div>
          </div>

          <Button className="w-full bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300">
            Find Guides
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
