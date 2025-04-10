"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp, Check, X } from "lucide-react"

// Mock data for product specifications
const getProductSpecs = (productId: string) => {
  return {
    id: productId,
    name: "iPhone 15 Pro Max",
    overview:
      "The iPhone 15 Pro Max represents Apple's most refined flagship to date, featuring a titanium build, the powerful A17 Pro chip, and an advanced camera system. With iOS 17, it offers a seamless user experience and long-term software support.",
    display: {
      size: '6.7"',
      resolution: "2796 x 1290 pixels",
      type: "Super Retina XDR OLED",
      refreshRate: "120Hz ProMotion",
      brightness: "2000 nits (peak)",
      protection: "Ceramic Shield",
      features: ["Always-On display", "HDR10", "Dolby Vision", "True Tone", "Wide color gamut (P3)"],
    },
    performance: {
      chipset: "Apple A17 Pro",
      cpu: "6-core (2 performance & 4 efficiency cores)",
      gpu: "5-core Apple GPU",
      ram: "8GB",
      storage: ["256GB", "512GB", "1TB"],
      benchmark: {
        antutu: "1,500,000+",
        geekbench: {
          single: "2,890",
          multi: "7,200",
        },
      },
    },
    camera: {
      main: '48MP, f/1.8, 24mm, 1/1.28", 1.22µm, dual pixel PDAF, sensor-shift OIS',
      ultrawide: '12MP, f/2.2, 13mm, 120˚, 1/2.55", 1.4µm, dual pixel PDAF',
      telephoto: '12MP, f/2.8, 120mm, 1/3.5", 1.0µm, PDAF, OIS, 5x optical zoom',
      front: '12MP, f/1.9, 23mm, 1/3.6", PDAF, SL 3D',
      features: ["Photonic Engine", "Smart HDR 4", "Portrait mode with advanced bokeh", "Night mode", "Deep Fusion"],
      video: ["4K@24/30/60fps", "1080p@30/60/120/240fps", "10-bit HDR", "Dolby Vision HDR", "ProRes"],
    },
    battery: {
      capacity: "4422mAh",
      wired: "27W, 50% in 30 min",
      wireless: "15W MagSafe, 7.5W Qi",
      standby: "Up to 29 hours video playback",
    },
    design: {
      dimensions: "159.9 x 76.7 x 8.3 mm",
      weight: "221g",
      build: "Titanium frame, glass back, glass front",
      colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
      waterproof: "IP68 (up to 6m for 30 mins)",
    },
    connectivity: {
      wifi: "Wi-Fi 6E",
      bluetooth: "5.3, A2DP, LE",
      nfc: true,
      usb: "USB Type-C 3.0, DisplayPort",
      cellular: "5G (sub-6GHz, mmWave)",
      positioning: ["GPS", "GLONASS", "GALILEO", "BDS", "QZSS"],
    },
    software: {
      os: "iOS 17",
      updates: "5+ years of software updates",
      features: ["Face ID", "Siri", "Apple Pay", "Emergency SOS", "Crash Detection"],
    },
    audio: {
      speakers: "Stereo speakers",
      jackPort: false,
      dolbyAtmos: true,
      spatialAudio: true,
    },
    security: {
      faceUnlock: true,
      fingerprintSensor: false,
      encryption: "Hardware-level encryption",
      secureElement: "Secure Enclave",
    },
  }
}

interface ProductSpecificationsProps {
  productId: string
}

export function ProductSpecifications({ productId }: ProductSpecificationsProps) {
  const specs = getProductSpecs(productId)
  const [expandedSections, setExpandedSections] = useState({
    display: true,
    performance: true,
    camera: true,
    battery: true,
    design: true,
    connectivity: false,
    software: false,
    audio: false,
    security: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const renderValue = (value: any) => {
    if (value === true) return <Check className="h-4 w-4 text-[#0A84FF]" />
    if (value === false) return <X className="h-4 w-4 text-[#FF6B00]" />
    if (Array.isArray(value)) return value.join(", ")
    return value
  }

  return (
    <div className="space-y-8 mb-12">
      <Tabs defaultValue="specs" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-[#3B3F51]/20 border border-[#3B3F51]">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="specs" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
            Specifications
          </TabsTrigger>
          <TabsTrigger value="features" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
            Features
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
            Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-['Orbitron'] font-bold text-white mb-4">{specs.name} Overview</h2>
              <p className="text-[#E6EDF3]/90 leading-relaxed mb-6">{specs.overview}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-['Orbitron'] text-white">Key Highlights</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#0A84FF]"></div>
                      <div>
                        <span className="text-[#E6EDF3] font-medium">Premium Titanium Design</span>
                        <p className="text-sm text-[#E6EDF3]/70">
                          Durable and lightweight titanium frame with a premium glass back
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#0A84FF]"></div>
                      <div>
                        <span className="text-[#E6EDF3] font-medium">A17 Pro Performance</span>
                        <p className="text-sm text-[#E6EDF3]/70">
                          Apple's most powerful chip with enhanced CPU and GPU performance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#0A84FF]"></div>
                      <div>
                        <span className="text-[#E6EDF3] font-medium">Pro Camera System</span>
                        <p className="text-sm text-[#E6EDF3]/70">
                          48MP main camera with improved low-light performance and 5x optical zoom
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#0A84FF]"></div>
                      <div>
                        <span className="text-[#E6EDF3] font-medium">All-Day Battery Life</span>
                        <p className="text-sm text-[#E6EDF3]/70">
                          Up to 29 hours of video playback with fast charging capabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-['Orbitron'] text-white">What's in the Box</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#0A84FF]" />
                      <span className="text-[#E6EDF3]/90">iPhone 15 Pro Max</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#0A84FF]" />
                      <span className="text-[#E6EDF3]/90">USB-C to USB-C Cable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#0A84FF]" />
                      <span className="text-[#E6EDF3]/90">Documentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-[#FF6B00]" />
                      <span className="text-[#E6EDF3]/90">Power Adapter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-[#FF6B00]" />
                      <span className="text-[#E6EDF3]/90">EarPods</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specs" className="mt-6">
          <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-['Orbitron'] font-bold text-white mb-6">Technical Specifications</h2>

              {/* Display Section */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer py-2 border-b border-[#3B3F51]"
                  onClick={() => toggleSection("display")}
                >
                  <h3 className="text-lg font-['Orbitron'] text-[#0A84FF]">Display</h3>
                  {expandedSections.display ? (
                    <ChevronUp className="h-5 w-5 text-[#0A84FF]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0A84FF]" />
                  )}
                </div>

                {expandedSections.display && (
                  <div className="py-3 space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Size</span>
                      <span className="text-[#E6EDF3]">{specs.display.size}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Resolution</span>
                      <span className="text-[#E6EDF3]">{specs.display.resolution}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Type</span>
                      <span className="text-[#E6EDF3]">{specs.display.type}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Refresh Rate</span>
                      <span className="text-[#E6EDF3]">{specs.display.refreshRate}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Brightness</span>
                      <span className="text-[#E6EDF3]">{specs.display.brightness}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Protection</span>
                      <span className="text-[#E6EDF3]">{specs.display.protection}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Features</span>
                      <span className="text-[#E6EDF3] text-right">{specs.display.features.join(", ")}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Performance Section */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer py-2 border-b border-[#3B3F51]"
                  onClick={() => toggleSection("performance")}
                >
                  <h3 className="text-lg font-['Orbitron'] text-[#0A84FF]">Performance</h3>
                  {expandedSections.performance ? (
                    <ChevronUp className="h-5 w-5 text-[#0A84FF]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0A84FF]" />
                  )}
                </div>

                {expandedSections.performance && (
                  <div className="py-3 space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Chipset</span>
                      <span className="text-[#E6EDF3]">{specs.performance.chipset}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">CPU</span>
                      <span className="text-[#E6EDF3]">{specs.performance.cpu}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">GPU</span>
                      <span className="text-[#E6EDF3]">{specs.performance.gpu}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">RAM</span>
                      <span className="text-[#E6EDF3]">{specs.performance.ram}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Storage Options</span>
                      <span className="text-[#E6EDF3]">{specs.performance.storage.join(", ")}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Camera Section */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer py-2 border-b border-[#3B3F51]"
                  onClick={() => toggleSection("camera")}
                >
                  <h3 className="text-lg font-['Orbitron'] text-[#0A84FF]">Camera</h3>
                  {expandedSections.camera ? (
                    <ChevronUp className="h-5 w-5 text-[#0A84FF]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0A84FF]" />
                  )}
                </div>

                {expandedSections.camera && (
                  <div className="py-3 space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Main Camera</span>
                      <span className="text-[#E6EDF3] text-right">{specs.camera.main}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Ultra Wide</span>
                      <span className="text-[#E6EDF3] text-right">{specs.camera.ultrawide}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Telephoto</span>
                      <span className="text-[#E6EDF3] text-right">{specs.camera.telephoto}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Front Camera</span>
                      <span className="text-[#E6EDF3] text-right">{specs.camera.front}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Features</span>
                      <span className="text-[#E6EDF3] text-right">{specs.camera.features.join(", ")}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Video Recording</span>
                      <span className="text-[#E6EDF3] text-right">{specs.camera.video.join(", ")}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Battery Section */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer py-2 border-b border-[#3B3F51]"
                  onClick={() => toggleSection("battery")}
                >
                  <h3 className="text-lg font-['Orbitron'] text-[#0A84FF]">Battery</h3>
                  {expandedSections.battery ? (
                    <ChevronUp className="h-5 w-5 text-[#0A84FF]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0A84FF]" />
                  )}
                </div>

                {expandedSections.battery && (
                  <div className="py-3 space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Capacity</span>
                      <span className="text-[#E6EDF3]">{specs.battery.capacity}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Wired Charging</span>
                      <span className="text-[#E6EDF3]">{specs.battery.wired}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Wireless Charging</span>
                      <span className="text-[#E6EDF3]">{specs.battery.wireless}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Battery Life</span>
                      <span className="text-[#E6EDF3]">{specs.battery.standby}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Design Section */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer py-2 border-b border-[#3B3F51]"
                  onClick={() => toggleSection("design")}
                >
                  <h3 className="text-lg font-['Orbitron'] text-[#0A84FF]">Design</h3>
                  {expandedSections.design ? (
                    <ChevronUp className="h-5 w-5 text-[#0A84FF]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0A84FF]" />
                  )}
                </div>

                {expandedSections.design && (
                  <div className="py-3 space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Dimensions</span>
                      <span className="text-[#E6EDF3]">{specs.design.dimensions}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Weight</span>
                      <span className="text-[#E6EDF3]">{specs.design.weight}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Build</span>
                      <span className="text-[#E6EDF3]">{specs.design.build}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Colors</span>
                      <span className="text-[#E6EDF3]">{specs.design.colors.join(", ")}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Water Resistance</span>
                      <span className="text-[#E6EDF3]">{specs.design.waterproof}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Connectivity Section */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between cursor-pointer py-2 border-b border-[#3B3F51]"
                  onClick={() => toggleSection("connectivity")}
                >
                  <h3 className="text-lg font-['Orbitron'] text-[#0A84FF]">Connectivity</h3>
                  {expandedSections.connectivity ? (
                    <ChevronUp className="h-5 w-5 text-[#0A84FF]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#0A84FF]" />
                  )}
                </div>

                {expandedSections.connectivity && (
                  <div className="py-3 space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Wi-Fi</span>
                      <span className="text-[#E6EDF3]">{specs.connectivity.wifi}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Bluetooth</span>
                      <span className="text-[#E6EDF3]">{specs.connectivity.bluetooth}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">NFC</span>
                      <span className="text-[#E6EDF3]">{renderValue(specs.connectivity.nfc)}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">USB</span>
                      <span className="text-[#E6EDF3]">{specs.connectivity.usb}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Cellular</span>
                      <span className="text-[#E6EDF3]">{specs.connectivity.cellular}</span>
                    </div>
                    <Separator className="bg-[#3B3F51]/50" />

                    <div className="flex justify-between py-1">
                      <span className="text-[#E6EDF3]/70">Positioning</span>
                      <span className="text-[#E6EDF3]">{specs.connectivity.positioning.join(", ")}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-['Orbitron'] font-bold text-white mb-6">Key Features</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] flex items-center">
                      <div className="w-2 h-8 bg-[#0A84FF] mr-3"></div>
                      Titanium Design
                    </h3>
                    <p className="text-[#E6EDF3]/90 leading-relaxed">
                      The iPhone 15 Pro Max features a premium titanium frame that's both lighter and stronger than
                      previous stainless steel models. This aerospace-grade material provides exceptional durability
                      while reducing the overall weight of the device.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] flex items-center">
                      <div className="w-2 h-8 bg-[#0A84FF] mr-3"></div>
                      A17 Pro Chip
                    </h3>
                    <p className="text-[#E6EDF3]/90 leading-relaxed">
                      Powered by the A17 Pro chip, the iPhone 15 Pro Max delivers exceptional performance for demanding
                      tasks and gaming. The 6-core CPU and 5-core GPU provide significant improvements in efficiency and
                      graphics capabilities, enabling console-quality gaming experiences.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] flex items-center">
                      <div className="w-2 h-8 bg-[#0A84FF] mr-3"></div>
                      USB-C Connectivity
                    </h3>
                    <p className="text-[#E6EDF3]/90 leading-relaxed">
                      The iPhone 15 Pro Max introduces USB-C connectivity, replacing the Lightning port. This enables
                      faster data transfers, compatibility with a wider range of accessories, and the ability to charge
                      other devices from your iPhone.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] flex items-center">
                      <div className="w-2 h-8 bg-[#0A84FF] mr-3"></div>
                      Pro Camera System
                    </h3>
                    <p className="text-[#E6EDF3]/90 leading-relaxed">
                      The advanced camera system includes a 48MP main camera with a quad-pixel sensor, a 12MP ultra-wide
                      camera, and a 12MP telephoto camera with 5x optical zoom. The Photonic Engine and improved
                      computational photography deliver exceptional image quality in all lighting conditions.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] flex items-center">
                      <div className="w-2 h-8 bg-[#0A84FF] mr-3"></div>
                      Action Button
                    </h3>
                    <p className="text-[#E6EDF3]/90 leading-relaxed">
                      The new customizable Action button replaces the traditional mute switch, allowing you to quickly
                      access various functions like Camera, Flashlight, Voice Memo, Translate, or any Shortcut of your
                      choice with a single press.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] flex items-center">
                      <div className="w-2 h-8 bg-[#0A84FF] mr-3"></div>
                      All-Day Battery Life
                    </h3>
                    <p className="text-[#E6EDF3]/90 leading-relaxed">
                      With up to 29 hours of video playback, the iPhone 15 Pro Max offers exceptional battery life. The
                      device supports fast charging, reaching 50% in just 30 minutes with a compatible 20W adapter, as
                      well as MagSafe wireless charging.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-['Orbitron'] font-bold text-white mb-6">Performance Benchmarks</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] mb-4">AnTuTu Benchmark</h3>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#E6EDF3]/70">Score: {specs.performance.benchmark.antutu}</span>
                        <span className="text-sm text-[#E6EDF3]/70">vs. Industry Average</span>
                      </div>
                      <div className="overflow-hidden h-6 text-xs flex rounded-md bg-[#3B3F51]/50">
                        <div
                          style={{ width: "95%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#0A84FF] to-[#0A84FF]/70"
                        >
                          <span className="font-bold">95%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] mb-4">Geekbench 6</h3>
                    <div className="space-y-4">
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#E6EDF3]/70">
                            Single-Core: {specs.performance.benchmark.geekbench.single}
                          </span>
                          <span className="text-sm text-[#E6EDF3]/70">vs. Industry Average</span>
                        </div>
                        <div className="overflow-hidden h-6 text-xs flex rounded-md bg-[#3B3F51]/50">
                          <div
                            style={{ width: "98%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#0A84FF] to-[#0A84FF]/70"
                          >
                            <span className="font-bold">98%</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#E6EDF3]/70">
                            Multi-Core: {specs.performance.benchmark.geekbench.multi}
                          </span>
                          <span className="text-sm text-[#E6EDF3]/70">vs. Industry Average</span>
                        </div>
                        <div className="overflow-hidden h-6 text-xs flex rounded-md bg-[#3B3F51]/50">
                          <div
                            style={{ width: "92%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#0A84FF] to-[#0A84FF]/70"
                          >
                            <span className="font-bold">92%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] mb-4">3DMark Wild Life Extreme</h3>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#E6EDF3]/70">Score: 3,500</span>
                        <span className="text-sm text-[#E6EDF3]/70">vs. Industry Average</span>
                      </div>
                      <div className="overflow-hidden h-6 text-xs flex rounded-md bg-[#3B3F51]/50">
                        <div
                          style={{ width: "90%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#0A84FF] to-[#0A84FF]/70"
                        >
                          <span className="font-bold">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-['Orbitron'] text-[#0A84FF] mb-4">Real-World Performance</h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#E6EDF3]">App Launch Speed</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full mx-0.5 ${i < 5 ? "bg-[#0A84FF]" : "bg-[#3B3F51]"}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <Separator className="bg-[#3B3F51]/50" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#E6EDF3]">Gaming Performance</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full mx-0.5 ${i < 5 ? "bg-[#0A84FF]" : "bg-[#3B3F51]"}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <Separator className="bg-[#3B3F51]/50" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#E6EDF3]">Multitasking</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full mx-0.5 ${i < 4 ? "bg-[#0A84FF]" : "bg-[#3B3F51]"}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <Separator className="bg-[#3B3F51]/50" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#E6EDF3]">Video Editing</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full mx-0.5 ${i < 5 ? "bg-[#0A84FF]" : "bg-[#3B3F51]"}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <Separator className="bg-[#3B3F51]/50" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#E6EDF3]">Battery Efficiency</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full mx-0.5 ${i < 4 ? "bg-[#0A84FF]" : "bg-[#3B3F51]"}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <Separator className="bg-[#3B3F51]/50" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#3B3F51]/30 backdrop-blur-sm border border-[#3B3F51] rounded-lg p-4">
                    <h4 className="text-[#0A84FF] font-medium mb-2">TechForce Performance Verdict</h4>
                    <p className="text-[#E6EDF3]/90 text-sm">
                      The iPhone 15 Pro Max with its A17 Pro chip delivers exceptional performance across all metrics.
                      It excels particularly in single-core performance and GPU-intensive tasks, making it ideal for
                      gaming and content creation. The device maintains cool temperatures even under sustained load,
                      with minimal throttling compared to competitors.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
