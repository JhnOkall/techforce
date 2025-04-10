"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VisualComparison() {
  const [activeTab, setActiveTab] = useState("performance")

  // Test data for comparison charts
  const devices = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      color: "#0A84FF",
      performance: {
        cpuScore: 85,
        gpuScore: 90,
        ramScore: 75,
        storageScore: 80,
      },
      battery: {
        capacity: 88,
        charging: 65,
        wireless: 75,
        lifespan: 85,
      },
      camera: {
        mainSensor: 80,
        ultrawide: 85,
        telephoto: 75,
        video: 95,
        nightMode: 85,
      },
      display: {
        brightness: 80,
        colorAccuracy: 95,
        refreshRate: 90,
        resolution: 85,
        touchResponse: 90,
      },
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      color: "#FF6B00",
      performance: {
        cpuScore: 90,
        gpuScore: 85,
        ramScore: 90,
        storageScore: 85,
      },
      battery: {
        capacity: 95,
        charging: 90,
        wireless: 80,
        lifespan: 80,
      },
      camera: {
        mainSensor: 95,
        ultrawide: 80,
        telephoto: 90,
        video: 85,
        nightMode: 90,
      },
      display: {
        brightness: 95,
        colorAccuracy: 90,
        refreshRate: 90,
        resolution: 95,
        touchResponse: 85,
      },
    },
  ]

  const renderBarChart = (data: any, category: string) => {
    const metrics = Object.keys(data[0][category])

    return (
      <div className="space-y-8 py-4">
        {metrics.map((metric) => (
          <div key={metric} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm capitalize text-[#E6EDF3]/80">
                {metric.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </span>
            </div>
            <div className="flex items-center gap-4">
              {data.map((device: any) => (
                <div key={device.id} className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: device.color }}></div>
                    <span className="text-xs text-[#E6EDF3]/70">{device.name}</span>
                  </div>
                  <div className="mt-1 h-8 w-full bg-[#3B3F51]/30 rounded-md overflow-hidden">
                    <div
                      className="h-full rounded-md transition-all duration-1000 ease-out"
                      style={{
                        width: `${device[category][metric]}%`,
                        backgroundColor: device.color,
                        boxShadow: `0 0 10px ${device.color}80`,
                      }}
                    ></div>
                  </div>
                  <div className="mt-1 text-right text-xs font-medium">{device[category][metric]}%</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Orbitron'] font-bold text-white">Visual Comparison</h2>

      <div className="bg-[#3B3F51]/20 backdrop-blur-sm border border-[#3B3F51] rounded-lg p-6">
        <Tabs defaultValue="performance" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 bg-[#0D1117]/50 border border-[#3B3F51]">
            <TabsTrigger
              value="performance"
              className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger value="battery" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
              Battery
            </TabsTrigger>
            <TabsTrigger value="camera" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
              Camera
            </TabsTrigger>
            <TabsTrigger value="display" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
              Display
            </TabsTrigger>
          </TabsList>
          <TabsContent value="performance" className="mt-6">
            {renderBarChart(devices, "performance")}
          </TabsContent>
          <TabsContent value="battery" className="mt-6">
            {renderBarChart(devices, "battery")}
          </TabsContent>
          <TabsContent value="camera" className="mt-6">
            {renderBarChart(devices, "camera")}
          </TabsContent>
          <TabsContent value="display" className="mt-6">
            {renderBarChart(devices, "display")}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
