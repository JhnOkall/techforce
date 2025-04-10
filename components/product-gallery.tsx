"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Mock data for product gallery
const getProductGallery = (productId: string) => {
  return {
    id: productId,
    name: "iPhone 15 Pro Max",
    images: [
      {
        id: 1,
        src: "/placeholder.svg?height=600&width=400",
        alt: "iPhone 15 Pro Max - Front View",
        type: "image",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=600&width=400",
        alt: "iPhone 15 Pro Max - Back View",
        type: "image",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=600&width=400",
        alt: "iPhone 15 Pro Max - Side View",
        type: "image",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=600&width=400",
        alt: "iPhone 15 Pro Max - Camera Close-up",
        type: "image",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=600&width=400",
        alt: "iPhone 15 Pro Max - Video",
        type: "video",
        thumbnail: "/placeholder.svg?height=600&width=400",
      },
    ],
  }
}

interface ProductGalleryProps {
  productId: string
}

export function ProductGallery({ productId }: ProductGalleryProps) {
  const gallery = getProductGallery(productId)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gallery.images.length) % gallery.images.length)
  }

  const currentImage = gallery.images[currentIndex]

  return (
    <div className="space-y-8 mb-12">
      <h2 className="text-2xl font-['Orbitron'] font-bold text-white">Product Gallery</h2>

      <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-[#0D1117]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full relative"
                >
                  <Image
                    src={currentImage.src || "/placeholder.svg"}
                    alt={currentImage.alt}
                    fill
                    className="object-contain"
                  />

                  {currentImage.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#0A84FF]/30 backdrop-blur-sm flex items-center justify-center border border-[#0A84FF]/50 cursor-pointer hover:bg-[#0A84FF]/50 transition-all duration-300">
                        <Play className="h-8 w-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  )}

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-[#0D1117]/50 backdrop-blur-sm hover:bg-[#0D1117]/70 text-white"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <Maximize2 className="h-5 w-5" />
                    <span className="sr-only">View full size</span>
                  </Button>
                </motion.div>
              </AnimatePresence>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0D1117]/50 backdrop-blur-sm hover:bg-[#0D1117]/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0D1117]/50 backdrop-blur-sm hover:bg-[#0D1117]/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 hide-scrollbar">
              {gallery.images.map((image, index) => (
                <button
                  key={image.id}
                  className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                    index === currentIndex
                      ? "border-[#0A84FF] shadow-[0_0_10px_rgba(10,132,255,0.5)]"
                      : "border-transparent hover:border-[#3B3F51]"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={image.type === "video" ? image.thumbnail || image.src : image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  {image.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0D1117]/30">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-[#0D1117]/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              fill
              className="object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-[#0D1117]/50 backdrop-blur-sm hover:bg-[#0D1117]/70 text-white"
              onClick={() => setLightboxOpen(false)}
            >
              <Maximize2 className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0D1117]/50 backdrop-blur-sm hover:bg-[#0D1117]/70 text-white"
              onClick={() => {
                prevImage()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0D1117]/50 backdrop-blur-sm hover:bg-[#0D1117]/70 text-white"
              onClick={() => {
                nextImage()
              }}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
