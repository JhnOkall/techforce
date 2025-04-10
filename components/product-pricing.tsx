"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ExternalLink, Bell, TrendingUp, TrendingDown, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for product pricing
const getProductPricing = (productId: string) => {
  return {
    id: productId,
    name: "iPhone 15 Pro Max",
    basePrice: 1199,
    variants: [
      { id: 1, name: "256GB", price: 1199 },
      { id: 2, name: "512GB", price: 1399 },
      { id: 3, name: "1TB", price: 1599 },
    ],
    retailers: [
      { id: 1, name: "Apple Store", price: 1199, inStock: true, delivery: "Free 2-day shipping", link: "#" },
      {
        id: 2,
        name: "Amazon",
        price: 1189,
        inStock: true,
        delivery: "Free next-day with Prime",
        link: "#",
        discount: true,
      },
      {
        id: 3,
        name: "Best Buy",
        price: 1199,
        inStock: true,
        delivery: "Free shipping",
        link: "#",
        promotion: "$100 gift card",
      },
      {
        id: 4,
        name: "Walmart",
        price: 1179,
        inStock: false,
        delivery: "Ships in 2-3 weeks",
        link: "#",
        discount: true,
      },
    ],
    priceHistory: [
      { date: "2023-09", price: 1199 },
      { date: "2023-10", price: 1199 },
      { date: "2023-11", price: 1189 },
      { date: "2023-12", price: 1179 },
      { date: "2024-01", price: 1189 },
      { date: "2024-02", price: 1199 },
    ],
    lowestPrice: {
      price: 1179,
      date: "2023-12-15",
    },
  }
}

interface ProductPricingProps {
  productId: string
}

export function ProductPricing({ productId }: ProductPricingProps) {
  const pricing = getProductPricing(productId)
  const [selectedVariant, setSelectedVariant] = useState(pricing.variants[0].id)
  const [priceAlertOpen, setPriceAlertOpen] = useState(false)

  const selectedVariantData = pricing.variants.find((v) => v.id === selectedVariant)

  return (
    <div className="space-y-4">
      <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-xl font-['Orbitron'] font-bold text-white mb-4">Price & Availability</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-[#E6EDF3]/70 text-sm mb-2">Storage Options</h3>
              <Tabs
                defaultValue={selectedVariant.toString()}
                onValueChange={(value) => setSelectedVariant(Number.parseInt(value))}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-[#3B3F51]/30 border border-[#3B3F51]">
                  {pricing.variants.map((variant) => (
                    <TabsTrigger
                      key={variant.id}
                      value={variant.id.toString()}
                      className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white"
                    >
                      {variant.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[#E6EDF3]/70 text-sm">Starting from</span>
                <div className="text-2xl font-bold text-white">${selectedVariantData?.price.toFixed(2)}</div>
              </div>
              <Badge className="bg-[#0A84FF]/20 text-[#0A84FF] border border-[#0A84FF]/50 flex items-center gap-1.5 px-2.5 py-1">
                <TrendingDown className="h-3.5 w-3.5" />
                Lowest: ${pricing.lowestPrice.price}
              </Badge>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#E6EDF3]/70 text-sm mb-2">Available at</h3>

              {pricing.retailers.map((retailer) => (
                <div
                  key={retailer.id}
                  className="flex items-center justify-between p-3 bg-[#3B3F51]/30 rounded-md border border-[#3B3F51]/50"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#E6EDF3]">{retailer.name}</span>
                      {retailer.discount && (
                        <Badge className="bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/50 text-xs">
                          Sale
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#E6EDF3]/70 mt-1">
                      <span className={retailer.inStock ? "text-green-500" : "text-red-500"}>
                        {retailer.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                      <span>•</span>
                      <span>{retailer.delivery}</span>
                    </div>
                    {retailer.promotion && <div className="text-xs text-[#0A84FF] mt-1">{retailer.promotion}</div>}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-white">${retailer.price.toFixed(2)}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#0A84FF] hover:text-[#0A84FF] hover:bg-[#0A84FF]/10 p-0 h-auto mt-1"
                      asChild
                    >
                      <a
                        href={retailer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <span className="text-xs">View</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Button className="w-full bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300 shadow-[0_0_10px_rgba(10,132,255,0.3)] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
              </Button>

              <Button
                variant="outline"
                className="w-full border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white"
                onClick={() => setPriceAlertOpen(!priceAlertOpen)}
              >
                <Bell className="mr-2 h-4 w-4" /> Set Price Alert
              </Button>
            </div>

            {priceAlertOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#3B3F51]/30 backdrop-blur-sm border border-[#3B3F51] rounded-md p-4"
              >
                <div className="flex items-start gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-[#0A84FF] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#E6EDF3]/90">
                    We'll notify you when the price drops below your target price. No spam, just a one-time
                    notification.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E6EDF3]/70">$</span>
                    <input
                      type="number"
                      className="w-full bg-[#0D1117] border border-[#3B3F51] rounded-md py-2 pl-8 pr-3 text-[#E6EDF3] focus:outline-none focus:ring-2 focus:ring-[#0A84FF] focus:border-transparent"
                      placeholder="Target price"
                      defaultValue={Math.floor(selectedVariantData?.price || 0) - 100}
                    />
                  </div>
                  <Button className="bg-[#0A84FF] hover:bg-[#0A84FF]/80 text-white">Set Alert</Button>
                </div>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-['Orbitron'] text-white">Price History</h3>
            <Badge className="bg-transparent border border-[#3B3F51] text-[#E6EDF3]/70">Last 6 months</Badge>
          </div>

          <div className="h-[150px] relative mb-4">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#3B3F51]"></div>

            <div className="relative h-full flex items-end">
              {pricing.priceHistory.map((point, index) => {
                const maxPrice = Math.max(...pricing.priceHistory.map((p) => p.price))
                const minPrice = Math.min(...pricing.priceHistory.map((p) => p.price))
                const range = maxPrice - minPrice
                const height = range === 0 ? 100 : ((point.price - minPrice) / range) * 80 + 20

                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full px-1" style={{ height: `${height}%` }}>
                      <div
                        className={`w-full h-full rounded-t-sm ${
                          point.price === pricing.lowestPrice.price ? "bg-[#FF6B00]" : "bg-[#0A84FF]"
                        }`}
                      ></div>
                    </div>
                    <div className="mt-2 text-xs text-[#E6EDF3]/70">{point.date.split("-")[1]}</div>
                  </div>
                )
              })}
            </div>

            {/* Price labels */}
            <div className="absolute top-0 right-0 text-xs text-[#E6EDF3]/70">
              ${Math.max(...pricing.priceHistory.map((p) => p.price))}
            </div>
            <div className="absolute bottom-4 right-0 text-xs text-[#E6EDF3]/70">
              ${Math.min(...pricing.priceHistory.map((p) => p.price))}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="text-[#E6EDF3]/70">
              Lowest price: <span className="text-[#FF6B00]">${pricing.lowestPrice.price}</span> on{" "}
              {new Date(pricing.lowestPrice.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1 text-[#E6EDF3]/70">
              <TrendingUp className="h-4 w-4 text-[#0A84FF]" />
              Price trend: Stable
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
