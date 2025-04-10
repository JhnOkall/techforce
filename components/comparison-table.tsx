"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, ChevronUp, Check, X, Minus } from "lucide-react"

export function ComparisonTable() {
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

  // Test data for comparison
  const devices = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      specs: {
        display: {
          size: '6.7"',
          resolution: "2796 x 1290",
          type: "Super Retina XDR OLED",
          refreshRate: "120Hz",
          brightness: "2000 nits",
          protection: "Ceramic Shield",
        },
        performance: {
          chipset: "Apple A17 Pro",
          cpu: "6-core",
          gpu: "5-core",
          ram: "8GB",
          storage: "256GB/512GB/1TB",
          benchmark: "A+ (AnTuTu 1,500,000+)",
        },
        camera: {
          main: "48MP, f/1.8, OIS",
          ultrawide: "12MP, f/2.2, 120°",
          telephoto: "12MP, f/2.8, 5x optical zoom",
          front: "12MP, f/1.9",
          video: "4K@60fps, Dolby Vision HDR",
          features: "Photonic Engine, Smart HDR 4",
        },
        battery: {
          capacity: "4422mAh",
          wired: "27W",
          wireless: "15W MagSafe",
          standby: "Up to 29 hours video playback",
        },
        design: {
          dimensions: "159.9 x 76.7 x 8.3 mm",
          weight: "221g",
          build: "Titanium frame, glass back",
          colors: "Natural, Blue, White, Black",
          waterproof: "IP68",
        },
        connectivity: {
          wifi: "Wi-Fi 6E",
          bluetooth: "5.3",
          nfc: true,
          usb: "USB-C 3.0",
          cellular: "5G (sub-6GHz, mmWave)",
        },
        software: {
          os: "iOS 17",
          updates: "5+ years",
          ecosystem: "Apple",
          aiFeatures: "Siri, on-device ML",
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
          encryption: "Hardware-level",
          secureElement: "Secure Enclave",
        },
      },
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      specs: {
        display: {
          size: '6.8"',
          resolution: "3120 x 1440",
          type: "Dynamic AMOLED 2X",
          refreshRate: "120Hz",
          brightness: "2600 nits",
          protection: "Gorilla Glass Victus 2",
        },
        performance: {
          chipset: "Snapdragon 8 Gen 3",
          cpu: "8-core",
          gpu: "Adreno 750",
          ram: "12GB",
          storage: "256GB/512GB/1TB",
          benchmark: "A+ (AnTuTu 1,600,000+)",
        },
        camera: {
          main: "200MP, f/1.7, OIS",
          ultrawide: "12MP, f/2.2, 120°",
          telephoto: "10MP, f/2.4, 3x optical zoom",
          telephoto2: "50MP, f/3.4, 5x optical zoom",
          front: "12MP, f/2.2",
          video: "8K@30fps, 4K@60fps, HDR10+",
          features: "Nightography, Expert RAW",
        },
        battery: {
          capacity: "5000mAh",
          wired: "45W",
          wireless: "15W",
          standby: "Up to 27 hours video playback",
        },
        design: {
          dimensions: "162.3 x 79.0 x 8.6 mm",
          weight: "233g",
          build: "Aluminum frame, glass back",
          colors: "Titanium Black, Gray, Violet, Yellow",
          waterproof: "IP68",
        },
        connectivity: {
          wifi: "Wi-Fi 7",
          bluetooth: "5.3",
          nfc: true,
          usb: "USB-C 3.2",
          cellular: "5G (sub-6GHz, mmWave)",
        },
        software: {
          os: "Android 14 (One UI 6.1)",
          updates: "7 years",
          ecosystem: "Samsung",
          aiFeatures: "Galaxy AI, Circle to Search",
        },
        audio: {
          speakers: "Stereo speakers by AKG",
          jackPort: false,
          dolbyAtmos: true,
          spatialAudio: true,
        },
        security: {
          faceUnlock: true,
          fingerprintSensor: true,
          encryption: "Samsung Knox",
          secureElement: "Secure Processor",
        },
      },
    },
  ]

  const renderValue = (value: any) => {
    if (value === true) return <Check className="h-4 w-4 text-[#0A84FF]" />
    if (value === false) return <X className="h-4 w-4 text-[#FF6B00]" />
    if (value === null || value === undefined) return <Minus className="h-4 w-4 text-[#3B3F51]" />
    return value
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-['Orbitron'] font-bold text-white">Detailed Specifications</h2>

      <div className="overflow-x-auto">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow className="border-b border-[#3B3F51]">
              <TableHead className="w-[250px] bg-[#0D1117]"></TableHead>
              {devices.map((device) => (
                <TableHead
                  key={device.id}
                  className="text-center font-['Orbitron'] text-[#E6EDF3] bg-[#3B3F51]/30 backdrop-blur-sm p-4"
                >
                  {device.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Display Section */}
            <TableRow className="border-b border-[#3B3F51]">
              <TableCell
                className="font-['Orbitron'] text-[#0A84FF] cursor-pointer hover:bg-[#3B3F51]/10"
                onClick={() => toggleSection("display")}
              >
                <div className="flex items-center justify-between">
                  <span>Display</span>
                  {expandedSections.display ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </TableCell>
              {devices.map((device) => (
                <TableCell key={device.id} className="bg-[#3B3F51]/10"></TableCell>
              ))}
            </TableRow>
            {expandedSections.display && (
              <>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Size</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.display.size)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Resolution</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.display.resolution)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Type</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.display.type)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Refresh Rate</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.display.refreshRate)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Brightness</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.display.brightness)}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            )}

            {/* Performance Section */}
            <TableRow className="border-b border-[#3B3F51]">
              <TableCell
                className="font-['Orbitron'] text-[#0A84FF] cursor-pointer hover:bg-[#3B3F51]/10"
                onClick={() => toggleSection("performance")}
              >
                <div className="flex items-center justify-between">
                  <span>Performance</span>
                  {expandedSections.performance ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </TableCell>
              {devices.map((device) => (
                <TableCell key={device.id} className="bg-[#3B3F51]/10"></TableCell>
              ))}
            </TableRow>
            {expandedSections.performance && (
              <>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Chipset</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.performance.chipset)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">CPU</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.performance.cpu)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">RAM</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.performance.ram)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Storage</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.performance.storage)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Benchmark</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.performance.benchmark)}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            )}

            {/* Camera Section */}
            <TableRow className="border-b border-[#3B3F51]">
              <TableCell
                className="font-['Orbitron'] text-[#0A84FF] cursor-pointer hover:bg-[#3B3F51]/10"
                onClick={() => toggleSection("camera")}
              >
                <div className="flex items-center justify-between">
                  <span>Camera</span>
                  {expandedSections.camera ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </TableCell>
              {devices.map((device) => (
                <TableCell key={device.id} className="bg-[#3B3F51]/10"></TableCell>
              ))}
            </TableRow>
            {expandedSections.camera && (
              <>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Main</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.camera.main)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Ultrawide</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.camera.ultrawide)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Telephoto</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.camera.telephoto)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Front</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.camera.front)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Video</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.camera.video)}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            )}

            {/* Battery Section */}
            <TableRow className="border-b border-[#3B3F51]">
              <TableCell
                className="font-['Orbitron'] text-[#0A84FF] cursor-pointer hover:bg-[#3B3F51]/10"
                onClick={() => toggleSection("battery")}
              >
                <div className="flex items-center justify-between">
                  <span>Battery</span>
                  {expandedSections.battery ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </TableCell>
              {devices.map((device) => (
                <TableCell key={device.id} className="bg-[#3B3F51]/10"></TableCell>
              ))}
            </TableRow>
            {expandedSections.battery && (
              <>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Capacity</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.battery.capacity)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Wired Charging</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.battery.wired)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Wireless Charging</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.battery.wireless)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Battery Life</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.battery.standby)}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            )}

            {/* Design Section */}
            <TableRow className="border-b border-[#3B3F51]">
              <TableCell
                className="font-['Orbitron'] text-[#0A84FF] cursor-pointer hover:bg-[#3B3F51]/10"
                onClick={() => toggleSection("design")}
              >
                <div className="flex items-center justify-between">
                  <span>Design</span>
                  {expandedSections.design ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </TableCell>
              {devices.map((device) => (
                <TableCell key={device.id} className="bg-[#3B3F51]/10"></TableCell>
              ))}
            </TableRow>
            {expandedSections.design && (
              <>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Dimensions</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.design.dimensions)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Weight</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.design.weight)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Build</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.design.build)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Colors</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.design.colors)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Water Resistance</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.design.waterproof)}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            )}

            {/* Connectivity Section */}
            <TableRow className="border-b border-[#3B3F51]">
              <TableCell
                className="font-['Orbitron'] text-[#0A84FF] cursor-pointer hover:bg-[#3B3F51]/10"
                onClick={() => toggleSection("connectivity")}
              >
                <div className="flex items-center justify-between">
                  <span>Connectivity</span>
                  {expandedSections.connectivity ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </TableCell>
              {devices.map((device) => (
                <TableCell key={device.id} className="bg-[#3B3F51]/10"></TableCell>
              ))}
            </TableRow>
            {expandedSections.connectivity && (
              <>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Wi-Fi</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.connectivity.wifi)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Bluetooth</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.connectivity.bluetooth)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">NFC</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.connectivity.nfc)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">USB</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.connectivity.usb)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow className="border-b border-[#3B3F51]/50">
                  <TableCell className="pl-6 text-[#E6EDF3]/70">Cellular</TableCell>
                  {devices.map((device) => (
                    <TableCell key={device.id} className="text-center">
                      {renderValue(device.specs.connectivity.cellular)}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
