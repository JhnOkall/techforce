"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Home, ArrowLeft, RefreshCw } from "lucide-react"
import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D1117]">
      <TechForceNavbar />

      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background grid effect */}
        <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] gap-0.5 opacity-10">
          {Array.from({ length: 1600 }).map((_, i) => (
            <div key={i} className="bg-[#0A84FF] rounded-sm"></div>
          ))}
        </div>

        {/* Glitch effect for 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#FF6B00] leading-none select-none">
            404
          </h1>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-[150px] md:text-[200px] font-bold text-[#0A84FF] opacity-50 animate-pulse select-none">
              404
            </span>
          </div>
          <div className="absolute top-0 left-1 w-full h-full flex items-center justify-center">
            <span className="text-[150px] md:text-[200px] font-bold text-[#FF6B00] opacity-30 animate-pulse select-none">
              404
            </span>
          </div>
        </div>

        {/* Error message */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Signal Lost</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            The digital coordinates you're looking for don't exist in our network. The page may have been moved,
            deleted, or never existed.
          </p>

          {/* Search box */}
          <div className="max-w-md mx-auto mb-8 relative">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for content..."
                className="bg-[#1A1F26] border-[#2A3441] text-white pl-10 pr-4 py-6 w-full rounded-lg focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#0A84FF] hover:bg-[#0A84FF]/80 text-white px-6 py-6 rounded-lg flex items-center gap-2"
            >
              <Link href="/">
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-[#2A3441] text-white hover:bg-[#1A1F26] px-6 py-6 rounded-lg flex items-center gap-2"
            >
              <Link href="javascript:history.back()">
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-[#2A3441] text-white hover:bg-[#1A1F26] px-6 py-6 rounded-lg flex items-center gap-2"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="w-5 h-5" />
              <span>Refresh Page</span>
            </Button>
          </div>
        </div>

        {/* Suggested links */}
        <div className="bg-[#1A1F26]/50 backdrop-blur-sm border border-[#2A3441] rounded-xl p-6 max-w-2xl w-full relative z-10">
          <h3 className="text-white text-xl font-semibold mb-4">Popular Destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/devices"
              className="text-[#0A84FF] hover:text-[#0A84FF]/80 flex items-center gap-2 p-2 rounded-md hover:bg-white/5"
            >
              <span className="w-2 h-2 bg-[#0A84FF] rounded-full"></span>
              <span>Devices Catalog</span>
            </Link>
            <Link
              href="/reviews"
              className="text-[#0A84FF] hover:text-[#0A84FF]/80 flex items-center gap-2 p-2 rounded-md hover:bg-white/5"
            >
              <span className="w-2 h-2 bg-[#0A84FF] rounded-full"></span>
              <span>Latest Reviews</span>
            </Link>
            <Link
              href="/news"
              className="text-[#0A84FF] hover:text-[#0A84FF]/80 flex items-center gap-2 p-2 rounded-md hover:bg-white/5"
            >
              <span className="w-2 h-2 bg-[#0A84FF] rounded-full"></span>
              <span>Tech News</span>
            </Link>
            <Link
              href="/guides"
              className="text-[#0A84FF] hover:text-[#0A84FF]/80 flex items-center gap-2 p-2 rounded-md hover:bg-white/5"
            >
              <span className="w-2 h-2 bg-[#0A84FF] rounded-full"></span>
              <span>Buying Guides</span>
            </Link>
            <Link
              href="/compare"
              className="text-[#0A84FF] hover:text-[#0A84FF]/80 flex items-center gap-2 p-2 rounded-md hover:bg-white/5"
            >
              <span className="w-2 h-2 bg-[#0A84FF] rounded-full"></span>
              <span>Compare Devices</span>
            </Link>
            <Link
              href="/products"
              className="text-[#0A84FF] hover:text-[#0A84FF]/80 flex items-center gap-2 p-2 rounded-md hover:bg-white/5"
            >
              <span className="w-2 h-2 bg-[#0A84FF] rounded-full"></span>
              <span>Product Specs</span>
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-[#0A84FF]/30 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-20 right-10 w-48 h-48 border border-[#FF6B00]/20 rounded-full animate-pulse opacity-10"></div>
      </main>

      <TechForceFooter />
    </div>
  )
}
