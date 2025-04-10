"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Laptop, Smartphone, Tablet, Watch, Headphones, ChevronDown, ChevronUp } from "lucide-react"

export function DevicesSidebar() {
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    price: true,
    ratings: true,
    features: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const categories = [
    { name: "Smartphones", icon: <Smartphone className="h-4 w-4" />, count: 124 },
    { name: "Laptops", icon: <Laptop className="h-4 w-4" />, count: 87 },
    { name: "Tablets", icon: <Tablet className="h-4 w-4" />, count: 43 },
    { name: "Smartwatches", icon: <Watch className="h-4 w-4" />, count: 38 },
    { name: "Headphones", icon: <Headphones className="h-4 w-4" />, count: 56 },
  ]

  const brands = [
    { name: "Apple", count: 42 },
    { name: "Samsung", count: 38 },
    { name: "Google", count: 24 },
    { name: "Sony", count: 31 },
    { name: "Dell", count: 27 },
    { name: "Asus", count: 19 },
    { name: "Lenovo", count: 23 },
    { name: "OnePlus", count: 12 },
  ]

  const ratings = [5, 4, 3, 2, 1]

  const features = [
    "5G Connectivity",
    "Wireless Charging",
    "Water Resistant",
    "OLED Display",
    "Fast Charging",
    "Fingerprint Sensor",
  ]

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("categories")}>
          <h3 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white">Categories</h3>
          {expandedSections.categories ? (
            <ChevronUp className="h-4 w-4 text-[#0A84FF]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#0A84FF]" />
          )}
        </div>

        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`category-${category.name}`}
                    className="border-[#3B3F51] data-[state=checked]:bg-[#0A84FF]"
                  />
                  <Label
                    htmlFor={`category-${category.name}`}
                    className="flex items-center gap-2 text-[#E6EDF3]/80 cursor-pointer group-hover:text-[#E6EDF3]"
                  >
                    <span className="text-[#0A84FF]">{category.icon}</span>
                    {category.name}
                  </Label>
                </div>
                <span className="text-xs text-[#E6EDF3]/50 group-hover:text-[#E6EDF3]/80">{category.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("brands")}>
          <h3 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white">Brands</h3>
          {expandedSections.brands ? (
            <ChevronUp className="h-4 w-4 text-[#0A84FF]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#0A84FF]" />
          )}
        </div>

        {expandedSections.brands && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <Checkbox id={`brand-${brand.name}`} className="border-[#3B3F51] data-[state=checked]:bg-[#0A84FF]" />
                  <Label
                    htmlFor={`brand-${brand.name}`}
                    className="text-[#E6EDF3]/80 cursor-pointer group-hover:text-[#E6EDF3]"
                  >
                    {brand.name}
                  </Label>
                </div>
                <span className="text-xs text-[#E6EDF3]/50 group-hover:text-[#E6EDF3]/80">{brand.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("price")}>
          <h3 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white">Price Range</h3>
          {expandedSections.price ? (
            <ChevronUp className="h-4 w-4 text-[#0A84FF]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#0A84FF]" />
          )}
        </div>

        {expandedSections.price && (
          <div className="space-y-6">
            <Slider
              defaultValue={[0, 2000]}
              max={2000}
              step={50}
              value={priceRange}
              onValueChange={setPriceRange}
              className="[&_[role=slider]]:bg-[#0A84FF] [&_[role=slider]]:border-[#0A84FF] [&_[role=slider]]:shadow-[0_0_5px_rgba(10,132,255,0.5)]"
            />
            <div className="flex items-center justify-between">
              <div className="bg-[#3B3F51]/40 backdrop-blur-sm border border-[#3B3F51] rounded px-3 py-1.5 text-sm">
                ${priceRange[0]}
              </div>
              <div className="bg-[#3B3F51]/40 backdrop-blur-sm border border-[#3B3F51] rounded px-3 py-1.5 text-sm">
                ${priceRange[1]}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ratings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("ratings")}>
          <h3 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white">Ratings</h3>
          {expandedSections.ratings ? (
            <ChevronUp className="h-4 w-4 text-[#0A84FF]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#0A84FF]" />
          )}
        </div>

        {expandedSections.ratings && (
          <div className="space-y-2">
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center gap-2 group">
                <Checkbox id={`rating-${rating}`} className="border-[#3B3F51] data-[state=checked]:bg-[#0A84FF]" />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center gap-1 text-[#E6EDF3]/80 cursor-pointer group-hover:text-[#E6EDF3]"
                >
                  {Array(rating)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FF6B00"
                        stroke="#FF6B00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  {Array(5 - rating)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#3B3F51"
                        stroke="#3B3F51"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  <span className="ml-1">&amp; Up</span>
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features */}
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("features")}>
          <h3 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white">Features</h3>
          {expandedSections.features ? (
            <ChevronUp className="h-4 w-4 text-[#0A84FF]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#0A84FF]" />
          )}
        </div>

        {expandedSections.features && (
          <div className="space-y-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 group">
                <Checkbox id={`feature-${feature}`} className="border-[#3B3F51] data-[state=checked]:bg-[#0A84FF]" />
                <Label
                  htmlFor={`feature-${feature}`}
                  className="text-[#E6EDF3]/80 cursor-pointer group-hover:text-[#E6EDF3]"
                >
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button className="w-full bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300 shadow-[0_0_10px_rgba(10,132,255,0.3)] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]">
        Apply Filters
      </Button>
    </div>
  )
}
