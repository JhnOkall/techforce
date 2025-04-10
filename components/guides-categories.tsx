"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal } from "lucide-react"

export function GuidesCategories() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#E6EDF3]/50" />
          <Input
            placeholder="Search guides..."
            className="pl-10 bg-[#3B3F51]/20 border-[#3B3F51] focus-visible:ring-[#0A84FF] w-full md:w-[300px]"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-[#3B3F51]/20 border border-[#3B3F51]">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="latest" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
                Latest
              </TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
                Popular
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button
            variant="outline"
            size="icon"
            className={`border-[#3B3F51] ${
              showFilters ? "bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90" : "hover:bg-[#3B3F51]/30"
            }`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Toggle filters</span>
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-[#3B3F51]/20 backdrop-blur-sm border border-[#3B3F51] rounded-md">
          <div>
            <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Category</label>
            <Select>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="smartphones">Smartphones</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="tablets">Tablets</SelectItem>
                <SelectItem value="wearables">Wearables</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="smart-home">Smart Home</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Budget Range</label>
            <Select>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="Any Budget" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="any">Any Budget</SelectItem>
                <SelectItem value="budget">Budget (Under $300)</SelectItem>
                <SelectItem value="mid-range">Mid-Range ($300-$700)</SelectItem>
                <SelectItem value="premium">Premium ($700-$1200)</SelectItem>
                <SelectItem value="high-end">High-End ($1200+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Guide Type</label>
            <Select>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="buying-guide">Buying Guides</SelectItem>
                <SelectItem value="comparison">Comparisons</SelectItem>
                <SelectItem value="best-of">Best Of Lists</SelectItem>
                <SelectItem value="how-to">How To Guides</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Sort By</label>
            <Select>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="Newest First" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="updated">Recently Updated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 pt-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#0A84FF]/10 text-[#0A84FF] border-[#0A84FF]/30 hover:bg-[#0A84FF]/20 hover:text-[#0A84FF]"
        >
          All
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
        >
          Smartphones
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
        >
          Laptops
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
        >
          Tablets
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
        >
          Wearables
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
        >
          Audio
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
        >
          Gaming
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3B3F51] hover:bg-[#3B3F51]/30 hover:text-white"
        >
          Smart Home
        </Button>
      </div>
    </div>
  )
}
