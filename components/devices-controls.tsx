"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Grid, List, Search } from "lucide-react"

export function DevicesControls() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#E6EDF3]/50" />
        <Input
          placeholder="Search devices..."
          className="pl-10 bg-[#3B3F51]/20 border-[#3B3F51] focus-visible:ring-[#0A84FF] w-full sm:w-[300px]"
        />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Select defaultValue="featured">
          <SelectTrigger className="w-full sm:w-[180px] bg-[#3B3F51]/20 border-[#3B3F51] focus:ring-[#0A84FF]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-[#0D1117] border-[#3B3F51]">
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center border border-[#3B3F51] rounded-md overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none h-9 w-9 ${
              viewMode === "grid"
                ? "bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90"
                : "bg-transparent text-[#E6EDF3]/70 hover:bg-[#3B3F51]/30 hover:text-[#E6EDF3]"
            }`}
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none h-9 w-9 ${
              viewMode === "list"
                ? "bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90"
                : "bg-transparent text-[#E6EDF3]/70 hover:bg-[#3B3F51]/30 hover:text-[#E6EDF3]"
            }`}
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
            <span className="sr-only">List view</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
