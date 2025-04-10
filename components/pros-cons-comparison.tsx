"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

export function ProsConsComparison() {
  // Test data for pros and cons
  const devices = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      pros: [
        "Exceptional video recording capabilities",
        "Industry-leading performance with A17 Pro",
        "Premium titanium build quality",
        "Excellent software support (5+ years)",
        "Seamless ecosystem integration",
      ],
      cons: [
        "Slower charging speeds than competitors",
        "No periscope zoom on base models",
        "Limited customization options",
        "Premium price point",
        "No USB-C 3.2 speeds despite port change",
      ],
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      pros: [
        "Versatile camera system with 200MP main sensor",
        "S Pen functionality built-in",
        "Brightest display on the market",
        "7 years of software updates",
        "Advanced AI features with Galaxy AI",
      ],
      cons: [
        "Bulky and heavy design",
        "Expensive price point",
        "Exynos variants in some regions perform worse",
        "UI can feel cluttered with features",
        "Slower fingerprint sensor than competitors",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Orbitron'] font-bold text-white">Pros & Cons</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {devices.map((device) => (
          <Card key={device.id} className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-['Orbitron'] text-white">{device.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-[#0A84FF] font-medium mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Pros
                </h3>
                <ul className="space-y-2">
                  {device.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#0A84FF] mt-1">•</span>
                      <span className="text-[#E6EDF3]/90">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#FF6B00] font-medium mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" /> Cons
                </h3>
                <ul className="space-y-2">
                  {device.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#FF6B00] mt-1">•</span>
                      <span className="text-[#E6EDF3]/90">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
