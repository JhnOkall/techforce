import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { TechForceNavbar } from "@/components/tech-force-navbar"
import { DeviceCard } from "@/components/device-card"
import { ReviewCard } from "@/components/review-card"
import { ComparisonCta } from "@/components/comparison-cta"
import { TechForceFooter } from "@/components/tech-force-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/90 to-[#0D1117]/70"></div>
          <div className="grid-background"></div>
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-['Orbitron'] uppercase tracking-wider text-white">
              TechForce – Your Elite Tech Intelligence Unit
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#E6EDF3]/90">Specs, Reviews, Comparisons. All in One Place.</p>
            <Button 
              className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white px-8 py-6 rounded-md text-lg transition-all duration-300 shadow-[0_0_15px_rgba(10,132,255,0.5)] hover:shadow-[0_0_20px_rgba(255,107,0,0.6)]"
            >
              Explore Devices <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Devices */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Orbitron'] uppercase tracking-wider mb-10 text-center">
            Featured <span className="text-[#0A84FF]">Devices</span>
          </h2>

          <div className="overflow-x-auto pb-6 hide-scrollbar">
            <div className="flex space-x-6 min-w-max px-4">
              <DeviceCard
                name="Galaxy S24 Ultra"
                image="/placeholder.svg?height=300&width=200"
                specs={["12GB RAM", "5000mAh", '6.8" AMOLED']}
                rating={4.8}
                category="smartphone"
              />
              <DeviceCard
                name="iPhone 15 Pro Max"
                image="/placeholder.svg?height=300&width=200"
                specs={["8GB RAM", "4422mAh", '6.7" Super Retina XDR']}
                rating={4.7}
                category="smartphone"
              />
              <DeviceCard
                name="Pixel 8 Pro"
                image="/placeholder.svg?height=300&width=200"
                specs={["12GB RAM", "5050mAh", '6.7" LTPO OLED']}
                rating={4.6}
                category="smartphone"
              />
              <DeviceCard
                name="MacBook Pro M3"
                image="/placeholder.svg?height=300&width=200"
                specs={["24GB RAM", "22hr Battery", '14.2" Liquid Retina XDR']}
                rating={4.9}
                category="laptop"
              />
              <DeviceCard
                name="iPad Pro M2"
                image="/placeholder.svg?height=300&width=200"
                specs={["16GB RAM", "10hr Battery", '12.9" Liquid Retina XDR']}
                rating={4.5}
                category="tablet"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-20 relative bg-[#0D1117]/80">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="grid-background-alt"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-['Orbitron'] uppercase tracking-wider mb-10 text-center">
            Expert <span className="text-[#0A84FF]">Reviews</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              reviewer="MKBHD"
              avatar="/placeholder.svg?height=100&width=100"
              deviceName="iPhone 15 Pro"
              thumbnail="/placeholder.svg?height=200&width=300"
              verdict="The camera system is a significant upgrade, but the switch to USB-C is the real game-changer."
              rating={4.5}
            />
            <ReviewCard
              reviewer="Linus Tech Tips"
              avatar="/placeholder.svg?height=100&width=100"
              deviceName="ROG Ally"
              thumbnail="/placeholder.svg?height=200&width=300"
              verdict="Impressive hardware in a compact form factor, but software needs refinement."
              rating={4.2}
            />
            <ReviewCard
              reviewer="Dave2D"
              avatar="/placeholder.svg?height=100&width=100"
              deviceName="MacBook Air M3"
              thumbnail="/placeholder.svg?height=200&width=300"
              verdict="The perfect balance of performance and portability. Battery life is exceptional."
              rating={4.8}
            />
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <ComparisonCta />

      {/* Footer */}
      <TechForceFooter />
    </div>
  )
}
