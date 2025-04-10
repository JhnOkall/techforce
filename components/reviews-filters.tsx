"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ReviewsFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#E6EDF3]/50" />
          <Input
            placeholder="Search reviews..."
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
              <TabsTrigger
                value="top-rated"
                className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
              >
                Top Rated
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
            <Select onValueChange={(value) => addFilter(`Category: ${value}`)}>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="smartphones">Smartphones</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="tablets">Tablets</SelectItem>
                <SelectItem value="smartwatches">Smartwatches</SelectItem>
                <SelectItem value="headphones">Headphones</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Brand</label>
            <Select onValueChange={(value) => addFilter(`Brand: ${value}`)}>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="samsung">Samsung</SelectItem>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="sony">Sony</SelectItem>
                <SelectItem value="dell">Dell</SelectItem>
                <SelectItem value="asus">Asus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Rating</label>
            <Select onValueChange={(value) => addFilter(`Rating: ${value}`)}>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4+">4+ Stars</SelectItem>
                <SelectItem value="3+">3+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-[#E6EDF3]/70 mb-2 block">Reviewer</label>
            <Select onValueChange={(value) => addFilter(`Reviewer: ${value}`)}>
              <SelectTrigger className="bg-[#3B3F51]/30 border-[#3B3F51] focus:ring-[#0A84FF]">
                <SelectValue placeholder="Select reviewer" />
              </SelectTrigger>
              <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
                <SelectItem value="alex-chen">Alex Chen</SelectItem>
                <SelectItem value="maria-rodriguez">Maria Rodriguez</SelectItem>
                <SelectItem value="james-wilson">James Wilson</SelectItem>
                <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-[#E6EDF3]/70">Active filters:</span>
          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="outline"
              className="bg-[#3B3F51]/30 border-[#3B3F51] text-[#E6EDF3] flex items-center gap-1"
            >
              {filter}
              <button onClick={() => removeFilter(filter)} className="ml-1 rounded-full hover:bg-[#3B3F51]/50 p-0.5">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {filter} filter</span>
              </button>
            </Badge>
          ))}
          <Button
            variant="link"
            className="text-[#0A84FF] hover:text-[#FF6B00] h-auto p-0 text-xs"
            onClick={clearFilters}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}
