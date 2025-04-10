"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, Plus, X, Smartphone, Laptop, Tablet, Watch, Headphones } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Test data for devices
const testDevices = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    image: "/placeholder.svg?height=300&width=200",
    category: "smartphone",
    brand: "Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    image: "/placeholder.svg?height=300&width=200",
    category: "smartphone",
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    image: "/placeholder.svg?height=300&width=200",
    category: "smartphone",
    brand: "Google",
  },
  {
    id: 4,
    name: "MacBook Pro M3 Max",
    image: "/placeholder.svg?height=300&width=200",
    category: "laptop",
    brand: "Apple",
  },
  {
    id: 5,
    name: "Dell XPS 13 Plus",
    image: "/placeholder.svg?height=300&width=200",
    category: "laptop",
    brand: "Dell",
  },
  {
    id: 6,
    name: "iPad Pro M2",
    image: "/placeholder.svg?height=300&width=200",
    category: "tablet",
    brand: "Apple",
  },
  {
    id: 7,
    name: "Samsung Galaxy Tab S9 Ultra",
    image: "/placeholder.svg?height=300&width=200",
    category: "tablet",
    brand: "Samsung",
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    image: "/placeholder.svg?height=300&width=200",
    category: "headphones",
    brand: "Sony",
  },
  {
    id: 9,
    name: "Apple Watch Ultra 2",
    image: "/placeholder.svg?height=300&width=200",
    category: "smartwatch",
    brand: "Apple",
  },
  {
    id: 10,
    name: "ASUS ROG Zephyrus G14",
    image: "/placeholder.svg?height=300&width=200",
    category: "laptop",
    brand: "Asus",
  },
]

export function DeviceSelector() {
  const [selectedDevices, setSelectedDevices] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      image: "/placeholder.svg?height=300&width=200",
      category: "smartphone",
      brand: "Apple",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      image: "/placeholder.svg?height=300&width=200",
      category: "smartphone",
      brand: "Samsung",
    },
  ])
  const [open, setOpen] = useState(false)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "smartphone":
        return <Smartphone className="h-4 w-4" />
      case "laptop":
        return <Laptop className="h-4 w-4" />
      case "tablet":
        return <Tablet className="h-4 w-4" />
      case "smartwatch":
        return <Watch className="h-4 w-4" />
      case "headphones":
        return <Headphones className="h-4 w-4" />
      default:
        return <Smartphone className="h-4 w-4" />
    }
  }

  const handleAddDevice = (device: any) => {
    if (selectedDevices.length < 4 && !selectedDevices.some((d) => d.id === device.id)) {
      setSelectedDevices([...selectedDevices, device])
    }
    setOpen(false)
  }

  const handleRemoveDevice = (deviceId: number) => {
    setSelectedDevices(selectedDevices.filter((device) => device.id !== deviceId))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {selectedDevices.map((device) => (
          <div
            key={device.id}
            className="bg-[#3B3F51]/40 backdrop-blur-sm border border-[#3B3F51] rounded-lg overflow-hidden"
          >
            <div className="relative h-[200px]">
              <Image src={device.image || "/placeholder.svg"} alt={device.name} fill className="object-cover" />
              <button
                onClick={() => handleRemoveDevice(device.id)}
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#0D1117]/70 backdrop-blur-sm flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-200"
              >
                <X className="h-4 w-4 text-white" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D1117] to-transparent h-20"></div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#0A84FF]">{getCategoryIcon(device.category)}</span>
                <span className="text-sm text-[#E6EDF3]/70">{device.brand}</span>
              </div>
              <h3 className="text-lg font-['Orbitron'] font-bold text-white">{device.name}</h3>
            </div>
          </div>
        ))}

        {selectedDevices.length < 4 && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="h-full min-h-[280px] border-dashed border-2 border-[#3B3F51] bg-[#3B3F51]/10 hover:bg-[#3B3F51]/20 hover:border-[#0A84FF]/50 flex flex-col items-center justify-center gap-3"
              >
                <Plus className="h-8 w-8 text-[#0A84FF]" />
                <span className="font-['Orbitron'] text-[#E6EDF3]/90">Add Device</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 bg-[#0D1117] border-[#3B3F51]">
              <Command className="bg-transparent">
                <CommandInput placeholder="Search devices..." className="h-9 border-b border-[#3B3F51]" />
                <CommandList>
                  <CommandEmpty>No device found.</CommandEmpty>
                  <CommandGroup className="max-h-[300px] overflow-auto">
                    {testDevices
                      .filter((device) => !selectedDevices.some((d) => d.id === device.id))
                      .map((device) => (
                        <CommandItem
                          key={device.id}
                          value={device.name}
                          onSelect={() => handleAddDevice(device)}
                          className="flex items-center gap-2 py-2 hover:bg-[#3B3F51]/50"
                        >
                          <div className="relative h-8 w-8 overflow-hidden rounded">
                            <Image
                              src={device.image || "/placeholder.svg"}
                              alt={device.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{device.name}</p>
                            <p className="text-xs text-[#E6EDF3]/70">{device.brand}</p>
                          </div>
                          <Check
                            className={cn(
                              "h-4 w-4 text-[#0A84FF]",
                              selectedDevices.some((d) => d.id === device.id) ? "opacity-100" : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  )
}
