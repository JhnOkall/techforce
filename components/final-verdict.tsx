"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, DollarSign, Zap, Camera, Smartphone } from "lucide-react"

export function FinalVerdict() {
  // Test data for final verdict
  const devices = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      verdict:
        "The iPhone 15 Pro Max represents Apple's most refined flagship to date, excelling in video capabilities, performance, and ecosystem integration. While it commands a premium price, the titanium build, excellent cameras, and long-term software support make it a worthwhile investment for iOS users and content creators. The switch to USB-C is welcome, though faster charging would have been appreciated.",
      score: 92,
      bestFor: ["Content Creation", "Ecosystem Value", "Long-term Use", "Gaming"],
      valueRating: "Good",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      verdict:
        "Samsung's Galaxy S24 Ultra pushes the boundaries of what's possible in a smartphone, particularly with its versatile camera system and AI capabilities. The S Pen integration remains unique in the flagship space, and the 7-year update promise is industry-leading. While the size may be unwieldy for some and the price is steep, it offers the most complete feature set of any Android device currently available.",
      score: 94,
      bestFor: ["Photography", "Productivity", "Note-taking", "Display Quality"],
      valueRating: "Fair",
    },
  ]

  type Device = typeof devices[0]
  
  const getBestDeviceFor = (category: string): Device | null => {
    let bestDevice: Device | null = null
    let highestScore = 0

    devices.forEach((device) => {
      if (device.bestFor.includes(category) && device.score > highestScore) {
        bestDevice = device
        highestScore = device.score
      }
    })

    return bestDevice
  }

  const overallWinner = devices.reduce((prev, current) => (prev.score > current.score ? prev : current))

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Photography":
        return <Camera className="h-4 w-4" />
      case "Content Creation":
        return <Camera className="h-4 w-4" />
      case "Productivity":
        return <Zap className="h-4 w-4" />
      case "Note-taking":
        return <Target className="h-4 w-4" />
      case "Display Quality":
        return <Smartphone className="h-4 w-4" />
      case "Ecosystem Value":
        return <Smartphone className="h-4 w-4" />
      case "Long-term Use":
        return <Target className="h-4 w-4" />
      case "Gaming":
        return <Zap className="h-4 w-4" />
      default:
        return <Target className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Orbitron'] font-bold text-white">Final Verdict</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devices.map((device) => (
              <Card
                key={device.id}
                className={`bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] ${
                  device.id === overallWinner.id ? "ring-2 ring-[#0A84FF] ring-offset-2 ring-offset-[#0D1117]" : ""
                }`}
              >
                <CardHeader className="pb-2 relative">
                  {device.id === overallWinner.id && (
                    <div className="absolute -top-4 -right-4 bg-[#0A84FF] text-white rounded-full p-2">
                      <Trophy className="h-5 w-5" />
                    </div>
                  )}
                  <CardTitle className="text-xl font-['Orbitron'] text-white">{device.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold text-[#0A84FF]">{device.score}</div>
                    <Badge
                      variant="outline"
                      className={`px-3 py-1 ${
                        device.valueRating === "Excellent"
                          ? "border-green-500 text-green-500"
                          : device.valueRating === "Good"
                            ? "border-[#0A84FF] text-[#0A84FF]"
                            : "border-yellow-500 text-yellow-500"
                      }`}
                    >
                      <DollarSign className="h-3 w-3 mr-1" />
                      {device.valueRating} Value
                    </Badge>
                  </div>

                  <p className="text-[#E6EDF3]/90 text-sm">{device.verdict}</p>

                  <div>
                    <h4 className="text-sm font-medium text-[#E6EDF3] mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {device.bestFor.map((category) => (
                        <Badge
                          key={category}
                          className="bg-[#0D1117] border border-[#3B3F51] text-[#E6EDF3]/90 flex items-center gap-1"
                        >
                          {getCategoryIcon(category)}
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-['Orbitron'] text-white">Category Winners</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#E6EDF3]/80 flex items-center gap-1">
                  <Camera className="h-4 w-4 text-[#0A84FF]" /> Photography
                </span>
                <span className="font-medium text-[#E6EDF3]">
                  {getBestDeviceFor("Photography")?.name || "Samsung Galaxy S24 Ultra"}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#E6EDF3]/80 flex items-center gap-1">
                  <Zap className="h-4 w-4 text-[#0A84FF]" /> Performance
                </span>
                <span className="font-medium text-[#E6EDF3]">iPhone 15 Pro Max</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#E6EDF3]/80 flex items-center gap-1">
                  <Smartphone className="h-4 w-4 text-[#0A84FF]" /> Display
                </span>
                <span className="font-medium text-[#E6EDF3]">Samsung Galaxy S24 Ultra</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#E6EDF3]/80 flex items-center gap-1">
                  <Target className="h-4 w-4 text-[#0A84FF]" /> Battery Life
                </span>
                <span className="font-medium text-[#E6EDF3]">Samsung Galaxy S24 Ultra</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#E6EDF3]/80 flex items-center gap-1">
                  <DollarSign className="h-4 w-4 text-[#0A84FF]" /> Value
                </span>
                <span className="font-medium text-[#E6EDF3]">iPhone 15 Pro Max</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3B3F51]">
              <h4 className="text-sm font-medium text-[#E6EDF3] mb-3">Overall Recommendation</h4>
              <p className="text-[#E6EDF3]/90 text-sm">
                For most users, the <span className="text-[#0A84FF] font-medium">{overallWinner.name}</span> offers the
                best overall experience with its superior{" "}
                {overallWinner.id === 1 ? "ecosystem and performance" : "versatility and feature set"}. However, your
                specific needs should guide your decision.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
