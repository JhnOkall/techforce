"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function TechForceNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0D1117]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-['Orbitron'] font-bold uppercase tracking-wider text-white relative">
              Tech<span className="text-[#0A84FF]">Force</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#0A84FF] to-transparent"></span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Devices", "Reviews", "Compare", "About"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[#E6EDF3] hover:text-[#0A84FF] transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0A84FF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white rounded-md transition-all duration-300 shadow-[0_0_10px_rgba(10,132,255,0.3)] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]">
              Sign In
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D1117]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["Home", "Devices", "Reviews", "Compare", "About"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[#E6EDF3] hover:text-[#0A84FF] transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white rounded-md transition-all duration-300 shadow-[0_0_10px_rgba(10,132,255,0.3)] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] w-full mt-2">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
