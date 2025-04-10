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
} from "lucide-react"

// Mock data for a news article
const getArticleData = (articleId: string) => {
  return {
    id: articleId,
    title: "Apple's M3 MacBook Air: The Ultimate Portable Powerhouse",
    excerpt:
      "Apple's latest MacBook Air with the M3 chip delivers exceptional performance and battery life in the same sleek design. Is this the perfect laptop for most people?",
    content: `
      <p>Apple's latest iteration of the MacBook Air, now powered by the M3 chip, represents a significant leap forward in the realm of ultraportable laptops. Building upon the success of its M1 and M2 predecessors, the M3 MacBook Air delivers enhanced performance, improved efficiency, and the same beloved design that has made the Air line a favorite among professionals, students, and casual users alike.</p>
      
      <h2>Design and Build Quality</h2>
      
      <p>The M3 MacBook Air maintains the sleek, wedge-shaped design introduced with the M2 model. Crafted from recycled aluminum, the laptop feels premium and robust while remaining incredibly lightweight at just 2.7 pounds for the 13-inch model and 3.3 pounds for the 15-inch variant. Available in four finishes—Midnight, Starlight, Space Gray, and Silver—the MacBook Air continues to be one of the most portable yet durable laptops on the market.</p>
      
      <p>The keyboard and trackpad remain excellent, with the keyboard offering comfortable key travel and the trackpad providing precise control with its generous size and haptic feedback. The addition of function keys with dedicated shortcuts for Spotlight, Dictation, and Do Not Disturb enhances productivity.</p>
      
      <h2>Display and Audio</h2>
      
      <p>The Liquid Retina display on both the 13.6-inch and 15.3-inch models is bright, vibrant, and sharp, with a resolution that makes text crisp and images detailed. With 500 nits of brightness, P3 wide color gamut support, and True Tone technology, content looks natural under various lighting conditions. The notch at the top of the display houses a 1080p FaceTime HD camera, which delivers improved image quality for video calls.</p>
      
      <p>The four-speaker sound system produces impressive audio for a laptop of this size, with support for Spatial Audio and Dolby Atmos. The three-microphone array with directional beamforming ensures clear voice capture during calls and recordings.</p>
      
      <h2>Performance</h2>
      
      <p>The M3 chip is where this MacBook Air truly shines. Built on a 3nm process, the M3 features an 8-core CPU (with 4 performance cores and 4 efficiency cores) and up to a 10-core GPU. This configuration delivers approximately 20% better CPU performance and 30% better GPU performance compared to the M2 MacBook Air.</p>
      
      <p>In our benchmarks, the M3 MacBook Air scored 12,150 in Geekbench 6 multi-core tests, placing it ahead of many Intel Core i7 laptops. For creative professionals, the M3 Air completed our standard 4K video export test in just 5 minutes and 32 seconds—impressive for a fanless design.</p>
      
      <p>The Neural Engine has also been enhanced, now capable of processing up to 18 trillion operations per second, which significantly improves AI and machine learning tasks. This is particularly noticeable in applications like Final Cut Pro, Photoshop, and various AI-enhanced features in macOS.</p>
      
      <h2>Battery Life and Charging</h2>
      
      <p>Battery life remains a standout feature of the MacBook Air. The M3 model delivers up to 18 hours of web browsing and up to 22 hours of Apple TV app movie playback. In our real-world testing, the laptop easily lasted through a full workday of mixed use, including web browsing, document editing, video calls, and light photo editing, with battery to spare.</p>
      
      <p>The laptop charges via USB-C, with two Thunderbolt 4 ports supporting charging, displays, and data transfer. The included 35W dual USB-C power adapter can charge two devices simultaneously, a convenient feature for those with multiple Apple devices.</p>
      
      <h2>Software and Ecosystem</h2>
      
      <p>The M3 MacBook Air ships with macOS Sonoma, which introduces several new features including desktop widgets, improved video conferencing capabilities, and enhanced gaming performance. The tight integration between Apple's hardware and software continues to be a significant advantage, with features like Handoff, Universal Control, and Continuity Camera providing a seamless experience across Apple devices.</p>
      
      <p>The transition to Apple Silicon is now complete, and virtually all major applications are now optimized for the M-series chips, ensuring excellent performance and compatibility.</p>
      
      <h2>Verdict</h2>
      
      <p>The M3 MacBook Air represents the pinnacle of ultraportable computing in 2024. With its exceptional performance, outstanding battery life, premium build quality, and seamless software experience, it's difficult to find significant faults with this laptop.</p>
      
      <p>For most users—including students, professionals, content creators, and casual users—the M3 MacBook Air offers more than enough power for daily tasks while providing the portability and battery life that make it a joy to use anywhere. The base model, starting at $1,099 for the 13-inch version with 8GB of unified memory and 256GB of storage, offers excellent value, though we recommend upgrading to 16GB of memory for future-proofing.</p>
      
      <p>While power users who regularly work with complex 3D rendering or multiple streams of 4K video might be better served by the MacBook Pro line, the M3 MacBook Air strikes an almost perfect balance of performance, portability, and price for everyone else. It's not just the best MacBook Air yet—it might be the best laptop for most people, period.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Reviews",
    author: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior Tech Editor",
      bio: "Alex has been covering consumer technology for over a decade, with a focus on Apple products and mobile computing.",
    },
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Apple", "MacBook Air", "M3 Chip", "Laptops", "macOS"],
    likes: 156,
    dislikes: 12,
    comments: 42,
    related: [
      {
        id: 2,
        title: "Samsung Galaxy Book4 Pro: A Worthy MacBook Competitor?",
        image: "/placeholder.svg?height=200&width=300",
        category: "Reviews",
      },
      {
        id: 3,
        title: "The Best Laptops for Students in 2024",
        image: "/placeholder.svg?height=200&width=300",
        category: "Guides",
      },
      {
        id: 4,
        title: "Apple's M4 Chip: What We Know So Far",
        image: "/placeholder.svg?height=200&width=300",
        category: "Industry News",
      },
    ],
  }
}

interface NewsArticleProps {
  articleId: string
}

export function NewsArticle({ articleId }: NewsArticleProps) {
  const article = getArticleData(articleId)
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
        <Link href="/news" className="inline-flex items-center text-[#E6EDF3]/70 hover:text-[#0A84FF]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-[#0A84FF] text-white px-2.5 py-1">{article.category}</Badge>
            {article.tags.map((tag) => (
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
            {article.title}
          </h1>

          <p className="text-xl text-[#E6EDF3]/80 mb-6">{article.excerpt}</p>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0A84FF]">
                <Image
                  src={article.author.avatar || "/placeholder.svg"}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-[#E6EDF3]">{article.author.name}</div>
                <div className="text-sm text-[#E6EDF3]/60">{article.author.title}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#E6EDF3]/60">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>

        <div
          className="prose prose-invert max-w-none prose-headings:font-['Orbitron'] prose-headings:text-white prose-p:text-[#E6EDF3]/90 prose-a:text-[#0A84FF] prose-a:no-underline hover:prose-a:text-[#0A84FF]/80"
          dangerouslySetInnerHTML={{ __html: article.content }}
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
              Helpful ({isLiked ? article.likes + 1 : article.likes})
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
              Not Helpful ({isDisliked ? article.dislikes + 1 : article.dislikes})
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
              src={article.author.avatar || "/placeholder.svg"}
              alt={article.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-white">About {article.author.name}</h3>
            <p className="text-sm text-[#E6EDF3]/80 mt-1">{article.author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
