"use client"

import { DeviceCard } from "@/components/device-card"
import { DeviceListItem } from "@/components/device-list-item"
import { useEffect, useState } from "react"

// Test data for devices
const testDevices = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["8GB RAM", "4422mAh", '6.7" Super Retina XDR'],
    rating: 4.7,
    category: "smartphone" as const,
    price: 1199,
    brand: "Apple",
    releaseDate: "2023-09-22",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["12GB RAM", "5000mAh", '6.8" Dynamic AMOLED 2X'],
    rating: 4.8,
    category: "smartphone" as const,
    price: 1299,
    brand: "Samsung",
    releaseDate: "2024-01-31",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["12GB RAM", "5050mAh", '6.7" LTPO OLED'],
    rating: 4.6,
    category: "smartphone" as const,
    price: 999,
    brand: "Google",
    releaseDate: "2023-10-12",
  },
  {
    id: 4,
    name: "MacBook Pro M3 Max",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["36GB RAM", "22hr Battery", '16.2" Liquid Retina XDR'],
    rating: 4.9,
    category: "laptop" as const,
    price: 2499,
    brand: "Apple",
    releaseDate: "2023-11-07",
  },
  {
    id: 5,
    name: "Dell XPS 13 Plus",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["16GB RAM", "12hr Battery", '13.4" OLED InfinityEdge'],
    rating: 4.5,
    category: "laptop" as const,
    price: 1299,
    brand: "Dell",
    releaseDate: "2023-05-15",
  },
  {
    id: 6,
    name: "iPad Pro M2",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["16GB RAM", "10hr Battery", '12.9" Liquid Retina XDR'],
    rating: 4.7,
    category: "tablet" as const,
    price: 1099,
    brand: "Apple",
    releaseDate: "2022-10-26",
  },
  {
    id: 7,
    name: "Samsung Galaxy Tab S9 Ultra",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["16GB RAM", "11200mAh", '14.6" Dynamic AMOLED 2X'],
    rating: 4.6,
    category: "tablet" as const,
    price: 1199,
    brand: "Samsung",
    releaseDate: "2023-08-11",
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["30hr Battery", "Hi-Res Audio", "8 Microphones"],
    rating: 4.8,
    category: "headphones" as const,
    price: 399,
    brand: "Sony",
    releaseDate: "2022-05-20",
  },
  {
    id: 9,
    name: "Apple Watch Ultra 2",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["36hr Battery", "49mm Titanium", "Action Button"],
    rating: 4.7,
    category: "smartwatch" as const,
    price: 799,
    brand: "Apple",
    releaseDate: "2023-09-22",
  },
  {
    id: 10,
    name: "ASUS ROG Zephyrus G14",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["32GB RAM", "RTX 4090", '14" 165Hz OLED'],
    rating: 4.6,
    category: "laptop" as const,
    price: 1999,
    brand: "Asus",
    releaseDate: "2023-06-15",
  },
  {
    id: 11,
    name: "OnePlus 12",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["16GB RAM", "5400mAh", '6.82" LTPO AMOLED'],
    rating: 4.5,
    category: "smartphone" as const,
    price: 799,
    brand: "OnePlus",
    releaseDate: "2024-01-23",
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 6 Classic",
    image: "/placeholder.svg?height=300&width=200",
    specs: ["2GB RAM", "590mAh", "47mm Stainless Steel"],
    rating: 4.4,
    category: "smartwatch" as const,
    price: 399,
    brand: "Samsung",
    releaseDate: "2023-08-11",
  },
]

export function DevicesGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Check if the list button is active
  useEffect(() => {
    const listButton = document.querySelector('button[aria-label="List view"]')
    if (listButton && listButton.classList.contains("bg-[#0A84FF]")) {
      setViewMode("list")
    } else {
      setViewMode("grid")
    }
  }, [])

  return (
    <div className="mb-10">
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testDevices.map((device) => (
            <DeviceCard
              key={device.id}
              name={device.name}
              image={device.image}
              specs={device.specs}
              rating={device.rating}
              category={device.category}
              price={device.price}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {testDevices.map((device) => (
            <DeviceListItem
              key={device.id}
              name={device.name}
              image={device.image}
              specs={device.specs}
              rating={device.rating}
              category={device.category}
              price={device.price}
              brand={device.brand}
              releaseDate={device.releaseDate}
            />
          ))}
        </div>
      )}
    </div>
  )
}
