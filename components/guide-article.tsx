"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
  Info,
} from "lucide-react"

// Mock data for a guide article
const getGuideData = (guideId: string) => {
  return {
    id: guideId,
    title: "The Ultimate Smartphone Buying Guide for 2024",
    excerpt:
      "Everything you need to know before purchasing a new smartphone in 2024, from processors and cameras to battery life and software support.",
    content: `
      <p>Smartphones have become an essential part of our daily lives, serving as our communication devices, cameras, entertainment centers, and productivity tools. With hundreds of models available across various price points, choosing the right smartphone can be overwhelming. This comprehensive guide will walk you through everything you need to consider when purchasing a new smartphone in 2024.</p>
      
      <h2>Understanding Your Needs and Budget</h2>
      
      <p>Before diving into technical specifications, it's important to assess your needs and establish a budget. Consider how you primarily use your phone:</p>
      
      <ul>
        <li><strong>Basic users</strong> who mainly call, text, browse the web, and use social media can find excellent options in the $200-$400 range.</li>
        <li><strong>Moderate users</strong> who enjoy gaming, photography, and multitasking should look in the $400-$800 range.</li>
        <li><strong>Power users</strong> who want cutting-edge features, premium build quality, and top-tier performance might need to spend $800-$1,200+.</li>
      </ul>
      
      <p>Remember that the most expensive phone isn't necessarily the best one for your needs. Focus on features that matter to you rather than marketing hype.</p>
      
      <h2>Key Specifications to Consider</h2>
      
      <h3>Processor and Performance</h3>
      
      <p>The processor (or chipset) is the brain of your smartphone. In 2024, here are the top performers:</p>
      
      <ul>
        <li><strong>High-end:</strong> Apple A17 Pro, Qualcomm Snapdragon 8 Gen 3, MediaTek Dimensity 9300</li>
        <li><strong>Mid-range:</strong> Qualcomm Snapdragon 7+ Gen 2, MediaTek Dimensity 8200, Google Tensor G3</li>
        <li><strong>Budget:</strong> Qualcomm Snapdragon 6 Gen 1, MediaTek Dimensity 7200</li>
      </ul>
      
      <p>For smooth performance, look for at least 6GB of RAM in mid-range phones and 8GB or more in flagship models. Storage should be at least 128GB, with 256GB recommended if you take lots of photos and videos.</p>
      
      <h3>Display</h3>
      
      <p>The display is your window to everything on your phone, so it's worth prioritizing quality here. Consider:</p>
      
      <ul>
        <li><strong>Display type:</strong> OLED displays (including AMOLED and Dynamic AMOLED) offer better contrast, deeper blacks, and often better battery efficiency than LCD displays.</li>
        <li><strong>Resolution:</strong> For screens 6 inches or larger, look for at least Full HD+ (2400 x 1080) resolution.</li>
        <li><strong>Refresh rate:</strong> Higher refresh rates (90Hz, 120Hz, or even 144Hz) provide smoother scrolling and animations. Most mid-range and flagship phones now offer at least 90Hz.</li>
        <li><strong>Brightness:</strong> Higher peak brightness (1000 nits or more) ensures better outdoor visibility.</li>
      </ul>
      
      <h3>Camera System</h3>
      
      <p>Camera quality has become a major differentiator between smartphones. Don't be swayed by megapixel counts alone—sensor size, aperture, and image processing are equally important. In 2024, a versatile camera system typically includes:</p>
      
      <ul>
        <li><strong>Main camera:</strong> Look for large sensors (1/1.7" or larger) with optical image stabilization (OIS).</li>
        <li><strong>Ultra-wide camera:</strong> Useful for landscapes and group photos.</li>
        <li><strong>Telephoto camera:</strong> Provides optical zoom for distant subjects (common in premium phones).</li>
        <li><strong>Front camera:</strong> At least 12MP for clear selfies and video calls.</li>
      </ul>
      
      <p>Pay attention to computational photography features like night mode, portrait mode, and HDR processing, which can make a bigger difference than raw specifications.</p>
      
      <h3>Battery Life and Charging</h3>
      
      <p>Battery capacity is measured in milliampere-hours (mAh). For all-day battery life:</p>
      
      <ul>
        <li>Phones with 6-6.5" displays should have at least 4,000mAh.</li>
        <li>Phones with 6.5"+ displays should have 4,500mAh or more.</li>
      </ul>
      
      <p>Fast charging has become standard, with many phones supporting 25W, 45W, or even 100W+ charging. Wireless charging (typically 15W) and reverse wireless charging are convenient features in mid-range and flagship phones.</p>
      
      <h3>Software and Updates</h3>
      
      <p>The software experience and update policy are increasingly important considerations:</p>
      
      <ul>
        <li><strong>Android:</strong> Look for phones that promise at least 3 years of OS updates and 4 years of security patches. Samsung, Google, and OnePlus currently offer the best update policies.</li>
        <li><strong>iOS:</strong> Apple typically supports iPhones with software updates for 5-7 years.</li>
      </ul>
      
      <p>Consider whether you prefer a stock Android experience (as found on Pixel phones) or a manufacturer's custom interface like Samsung's One UI or Xiaomi's MIUI.</p>
      
      <h2>Additional Features to Consider</h2>
      
      <h3>5G Connectivity</h3>
      
      <p>5G is now standard in most new smartphones. While coverage continues to expand, make sure the phone supports the 5G bands used by your carrier.</p>
      
      <h3>Build Quality and Durability</h3>
      
      <p>Look for Gorilla Glass Victus 2 or similar protection for the screen, and an IP68 water and dust resistance rating for peace of mind. Premium phones often feature aluminum or titanium frames with glass or ceramic backs.</p>
      
      <h3>Biometric Security</h3>
      
      <p>Most phones offer fingerprint sensors (either under-display or side-mounted) and face recognition. Under-display ultrasonic fingerprint sensors (as opposed to optical ones) and structured light face recognition systems offer better security.</p>
      
      <h3>Audio</h3>
      
      <p>Consider whether you need a headphone jack (increasingly rare in 2024), stereo speakers, or advanced audio features like Dolby Atmos support.</p>
      
      <h2>Top Recommendations for 2024</h2>
      
      <h3>Best Overall Smartphones</h3>
      
      <ul>
        <li><strong>iPhone 15 Pro/Pro Max:</strong> Best for ecosystem integration, camera quality, and long-term software support.</li>
        <li><strong>Samsung Galaxy S24 Ultra:</strong> Best for versatility, S Pen functionality, and display quality.</li>
        <li><strong>Google Pixel 8 Pro:</strong> Best for clean software, AI features, and computational photography.</li>
      </ul>
      
      <h3>Best Mid-Range Smartphones ($400-$800)</h3>
      
      <ul>
        <li><strong>Google Pixel 8a:</strong> Best for clean software and excellent camera at a mid-range price.</li>
        <li><strong>Samsung Galaxy A54:</strong> Best for all-around performance and feature set.</li>
        <li><strong>Nothing Phone (2):</strong> Best for unique design and clean software experience.</li>
      </ul>
      
      <h3>Best Budget Smartphones (Under $400)</h3>
      
      <ul>
        <li><strong>Google Pixel 7a:</strong> Best camera performance in the budget segment.</li>
        <li><strong>Samsung Galaxy A34:</strong> Best for display quality and battery life.</li>
        <li><strong>Motorola Moto G Power:</strong> Best for battery life and clean software.</li>
      </ul>
      
      <h2>When to Buy</h2>
      
      <p>Smartphone release cycles are fairly predictable:</p>
      
      <ul>
        <li>Apple typically releases new iPhones in September.</li>
        <li>Samsung usually launches Galaxy S series in January/February and foldables in August.</li>
        <li>Google releases Pixel flagships in October and A-series in May.</li>
      </ul>
      
      <p>Consider buying the previous generation right after a new release for significant discounts, or wait for major shopping events like Black Friday or Amazon Prime Day.</p>
      
      <h2>Where to Buy</h2>
      
      <p>You have several options for purchasing a new smartphone:</p>
      
      <ul>
        <li><strong>Carrier stores:</strong> Often offer deals with new lines or trade-ins, but phones may be locked to their network.</li>
        <li><strong>Manufacturer websites:</strong> Provide the latest models and sometimes exclusive colors or storage options.</li>
        <li><strong>Electronics retailers:</strong> Like Best Buy or Amazon offer competitive pricing and frequent sales.</li>
        <li><strong>Refurbished options:</strong> From Apple Certified Refurbished or Samsung Certified Re-Newed programs offer like-new devices at 15-30% discounts.</li>
      </ul>
      
      <h2>Final Thoughts</h2>
      
      <p>The perfect smartphone is the one that meets your specific needs and preferences. Focus on the features that matter most to you, rather than getting caught up in specifications or brand loyalty. With the information in this guide, you're well-equipped to make an informed decision on your next smartphone purchase in 2024.</p>
      
      <p>Remember that smartphones are tools that should enhance your life, not complicate it. Sometimes the best choice isn't the most expensive or feature-packed option, but the one that reliably does what you need it to do.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Smartphones",
    type: "Buying Guide",
    author: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior Tech Editor",
      bio: "Alex has been covering consumer technology for over a decade, with a focus on mobile devices and consumer electronics.",
    },
    date: "2024-03-10",
    updated: "2024-03-15",
    readTime: "12 min read",
    tags: ["Smartphones", "Buying Guide", "Mobile", "Android", "iOS"],
    likes: 186,
    dislikes: 14,
    comments: 42,
    related: [
      {
        id: 2,
        title: "Best Budget Smartphones Under $300 in 2024",
        image: "/placeholder.svg?height=200&width=300",
        category: "Smartphones",
      },
      {
        id: 3,
        title: "iPhone vs Android: Which Platform is Right for You?",
        image: "/placeholder.svg?height=200&width=300",
        category: "Smartphones",
      },
      {
        id: 4,
        title: "How to Extend Your Smartphone's Battery Life",
        image: "/placeholder.svg?height=200&width=300",
        category: "How To",
      },
    ],
  }
}

interface GuideArticleProps {
  guideId: string
}

export function GuideArticle({ guideId }: GuideArticleProps) {
  const guide = getGuideData(guideId)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  const handleLike = () => {
    if (isDisliked) setIsDisliked(false)
    setIsLiked(!isLiked)
  }

  const handleDislike = () => {
    if (isLiked) setIsLiked(false)
    setIsDisliked(!isDisliked)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <div className="mb-12">
      <div className="mb-6">
        <Link href="/guides" className="inline-flex items-center text-[#E6EDF3]/70 hover:text-[#0A84FF]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Guides
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{guide.category}</Badge>
            <Badge className="bg-[#3B3F51]/70 backdrop-blur-sm text-white px-2.5 py-1">{guide.type}</Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-[#3B3F51]/30 border-[#3B3F51] hover:bg-[#3B3F51]/50 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Orbitron'] font-bold text-white mb-4">
            {guide.title}
          </h1>

          <p className="text-xl text-[#E6EDF3]/80 mb-6">{guide.excerpt}</p>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0A84FF]">
                <Image
                  src={guide.author.avatar || "/placeholder.svg"}
                  alt={guide.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-[#E6EDF3]">{guide.author.name}</div>
                <div className="text-sm text-[#E6EDF3]/60">{guide.author.title}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#E6EDF3]/60">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(guide.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {guide.updated && (
                <div className="flex items-center text-[#FF6B00]">
                  <Info className="h-4 w-4 mr-1" />
                  Updated:{" "}
                  {new Date(guide.updated).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              )}
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {guide.readTime}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
          <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
        </div>

        <div
          className="prose prose-invert max-w-none prose-headings:font-['Orbitron'] prose-headings:text-white prose-p:text-[#E6EDF3]/90 prose-a:text-[#0A84FF] prose-a:no-underline hover:prose-a:text-[#0A84FF]/80 prose-li:text-[#E6EDF3]/90"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#3B3F51]">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={`border-[#3B3F51] ${
                isLiked
                  ? "bg-[#0A84FF]/20 text-[#0A84FF] border-[#0A84FF]/50"
                  : "hover:bg-[#3B3F51]/50 hover:text-white"
              }`}
              onClick={handleLike}
            >
              <ThumbsUp className={`mr-2 h-4 w-4 ${isLiked ? "fill-[#0A84FF]" : ""}`} />
              Helpful ({isLiked ? guide.likes + 1 : guide.likes})
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`border-[#3B3F51] ${
                isDisliked
                  ? "bg-[#FF6B00]/20 text-[#FF6B00] border-[#FF6B00]/50"
                  : "hover:bg-[#3B3F51]/50 hover:text-white"
              }`}
              onClick={handleDislike}
            >
              <ThumbsDown className={`mr-2 h-4 w-4 ${isDisliked ? "fill-[#FF6B00]" : ""}`} />
              Not Helpful ({isDisliked ? guide.dislikes + 1 : guide.dislikes})
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={`border-[#3B3F51] ${
                isSaved
                  ? "bg-[#FF6B00]/20 text-[#FF6B00] border-[#FF6B00]/50"
                  : "hover:bg-[#3B3F51]/50 hover:text-white"
              }`}
              onClick={handleSave}
            >
              <Bookmark className={`mr-2 h-4 w-4 ${isSaved ? "fill-[#FF6B00]" : ""}`} />
              {isSaved ? "Saved" : "Save"}
            </Button>
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white"
                onClick={() => setShowShareOptions(!showShareOptions)}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>

              {showShareOptions && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0D1117] border border-[#3B3F51] z-10">
                  <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-[#E6EDF3] hover:bg-[#3B3F51]/30"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Facebook className="h-4 w-4 mr-2 text-[#1877F2]" />
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-[#E6EDF3] hover:bg-[#3B3F51]/30"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Twitter className="h-4 w-4 mr-2 text-[#1DA1F2]" />
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-[#E6EDF3] hover:bg-[#3B3F51]/30"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Linkedin className="h-4 w-4 mr-2 text-[#0A66C2]" />
                      LinkedIn
                    </a>
                    <Separator className="my-1 bg-[#3B3F51]/50" />
                    <button
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-[#E6EDF3] hover:bg-[#3B3F51]/30"
                      onClick={handleCopyLink}
                    >
                      <Copy className="h-4 w-4 mr-2 text-[#0A84FF]" />
                      {copySuccess ? "Copied!" : "Copy Link"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#3B3F51]/20 backdrop-blur-sm border border-[#3B3F51] rounded-lg">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#0A84FF] flex-shrink-0">
            <Image
              src={guide.author.avatar || "/placeholder.svg"}
              alt={guide.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-white">About {guide.author.name}</h3>
            <p className="text-sm text-[#E6EDF3]/80 mt-1">{guide.author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
