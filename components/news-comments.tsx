"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ThumbsUp, ThumbsDown, Flag, ChevronDown } from "lucide-react"

// Mock data for comments
const getCommentsData = (articleId: string) => {
  return {
    id: articleId,
    totalComments: 42,
    comments: [
      {
        id: 1,
        user: {
          name: "Michael Wong",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "Great review! I've been using the M3 MacBook Air for about a month now, and I completely agree with your assessment. The battery life is truly impressive, and the performance is more than enough for my needs as a software developer. The only thing I wish it had was better external display support - still limited to just one external monitor without workarounds.",
        date: "2024-03-15T14:32:00",
        likes: 24,
        dislikes: 2,
        replies: [
          {
            id: 101,
            user: {
              name: "Alex Chen",
              avatar: "/placeholder.svg?height=100&width=100",
              isAuthor: true,
            },
            content:
              "Thanks for sharing your experience, Michael! You make a good point about the external display limitation. It's definitely something to consider for users who need multi-monitor setups. Apple seems to be reserving that capability for the Pro models.",
            date: "2024-03-15T15:10:00",
            likes: 12,
            dislikes: 0,
          },
          {
            id: 102,
            user: {
              name: "Sarah Johnson",
              avatar: "/placeholder.svg?height=100&width=100",
            },
            content:
              "I've been using DisplayLink adapters to connect multiple monitors to my M2 Air. It's not perfect, but it works well enough for my needs. Might be worth looking into if you need multiple displays.",
            date: "2024-03-15T16:45:00",
            likes: 8,
            dislikes: 1,
          },
        ],
      },
      {
        id: 2,
        user: {
          name: "Emily Rodriguez",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "I'm torn between the M3 MacBook Air and the M3 Pro MacBook Pro. I do some video editing and photo work, but not professionally. Do you think the Air would be sufficient, or should I spend the extra money on the Pro? The price difference is significant.",
        date: "2024-03-14T09:15:00",
        likes: 18,
        dislikes: 0,
        replies: [
          {
            id: 201,
            user: {
              name: "James Wilson",
              avatar: "/placeholder.svg?height=100&width=100",
            },
            content:
              "I was in the same position and went with the Air. For casual video and photo editing, it's more than capable. I edit 4K videos in Final Cut Pro without issues. Save your money unless you're doing really intensive work or need the extra ports.",
            date: "2024-03-14T10:22:00",
            likes: 15,
            dislikes: 1,
          },
        ],
      },
      {
        id: 3,
        user: {
          name: "David Kim",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "I wish Apple would offer more than 8GB of RAM in the base model. It feels like they're being stingy, especially at this price point. While macOS handles memory well, 8GB is starting to feel limiting for future-proofing.",
        date: "2024-03-13T16:40:00",
        likes: 32,
        dislikes: 3,
        replies: [],
      },
    ],
  }
}

interface NewsCommentsProps {
  articleId: string
}

export function NewsComments({ articleId }: NewsCommentsProps) {
  const commentsData = getCommentsData(articleId)
  const [commentText, setCommentText] = useState("")
  const [activeTab, setActiveTab] = useState<"newest" | "popular">("newest")
  const [expandedReplies, setExpandedReplies] = useState<number[]>([1]) // Default expand first comment's replies
  const [likedComments, setLikedComments] = useState<number[]>([])
  const [dislikedComments, setDislikedComments] = useState<number[]>([])

  const toggleReplies = (commentId: number) => {
    setExpandedReplies((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId],
    )
  }

  const handleLike = (commentId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (dislikedComments.includes(commentId)) {
      setDislikedComments((prev) => prev.filter((id) => id !== commentId))
    }
    setLikedComments((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId],
    )
  }

  const handleDislike = (commentId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (likedComments.includes(commentId)) {
      setLikedComments((prev) => prev.filter((id) => id !== commentId))
    }
    setDislikedComments((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId],
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) {
      return "just now"
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600)
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400)
      return `${days} ${days === 1 ? "day" : "days"} ago`
    } else {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-['Orbitron'] font-bold text-white flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-[#0A84FF]" />
          Comments ({commentsData.totalComments})
        </h2>

        <Tabs
          defaultValue="newest"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "newest" | "popular")}
          className="w-auto"
        >
          <TabsList className="bg-[#3B3F51]/30 border border-[#3B3F51]">
            <TabsTrigger value="newest" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
              Newest
            </TabsTrigger>
            <TabsTrigger value="popular" className="data-[state=active]:bg-[#0A84FF] data-[state=active]:text-white">
              Popular
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/placeholder.svg?height=100&width=100" alt="Your avatar" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <Textarea
                placeholder="Join the discussion..."
                className="bg-[#3B3F51]/30 border-[#3B3F51] focus-visible:ring-[#0A84FF] min-h-[100px]"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <div className="flex justify-end mt-3">
                <Button
                  className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300"
                  disabled={!commentText.trim()}
                >
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {commentsData.comments
          .sort((a, b) => {
            if (activeTab === "newest") {
              return new Date(b.date).getTime() - new Date(a.date).getTime()
            } else {
              return b.likes - a.likes
            }
          })
          .map((comment) => (
            <div key={comment.id} className="space-y-4">
              <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51]">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={comment.user.avatar || "/placeholder.svg"}
                        alt={comment.user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-[#E6EDF3]">{comment.user.name}</div>
                        <div className="text-xs text-[#E6EDF3]/60">{formatDate(comment.date)}</div>
                      </div>
                      <p className="text-[#E6EDF3]/90 mt-2">{comment.content}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-[#E6EDF3]/70 hover:text-[#0A84FF] hover:bg-[#0A84FF]/10"
                            onClick={(e) => handleLike(comment.id, e)}
                          >
                            <ThumbsUp
                              className={`mr-1 h-3.5 w-3.5 ${
                                likedComments.includes(comment.id) ? "text-[#0A84FF] fill-[#0A84FF]" : ""
                              }`}
                            />
                            {likedComments.includes(comment.id) ? comment.likes + 1 : comment.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-[#E6EDF3]/70 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10"
                            onClick={(e) => handleDislike(comment.id, e)}
                          >
                            <ThumbsDown
                              className={`mr-1 h-3.5 w-3.5 ${
                                dislikedComments.includes(comment.id) ? "text-[#FF6B00] fill-[#FF6B00]" : ""
                              }`}
                            />
                            {dislikedComments.includes(comment.id) ? comment.dislikes + 1 : comment.dislikes}
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-[#E6EDF3]/70 hover:text-[#0A84FF] hover:bg-[#0A84FF]/10"
                        >
                          Reply
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-[#E6EDF3]/70 hover:text-[#E6EDF3] hover:bg-[#3B3F51]/30"
                        >
                          <Flag className="h-3.5 w-3.5" />
                          <span className="sr-only">Report</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {comment.replies.length > 0 && (
                <div className="pl-12">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mb-4 text-[#0A84FF] hover:text-[#0A84FF] hover:bg-[#0A84FF]/10"
                    onClick={() => toggleReplies(comment.id)}
                  >
                    <ChevronDown
                      className={`mr-1 h-4 w-4 transition-transform ${
                        expandedReplies.includes(comment.id) ? "rotate-180" : ""
                      }`}
                    />
                    {expandedReplies.includes(comment.id) ? "Hide" : "Show"} {comment.replies.length}{" "}
                    {comment.replies.length === 1 ? "reply" : "replies"}
                  </Button>

                  {expandedReplies.includes(comment.id) && (
                    <div className="space-y-4">
                      {comment.replies.map((reply) => (
                        <Card
                          key={reply.id}
                          className="bg-[#3B3F51]/10 backdrop-blur-sm border-[#3B3F51]/50 overflow-hidden"
                        >
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src={reply.user.avatar || "/placeholder.svg"}
                                  alt={reply.user.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-[#E6EDF3]">{reply.user.name}</span>
                                    {reply.user.isAuthor && (
                                      <span className="text-xs bg-[#0A84FF]/20 text-[#0A84FF] px-1.5 py-0.5 rounded">
                                        Author
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-[#E6EDF3]/60">{formatDate(reply.date)}</div>
                                </div>
                                <p className="text-[#E6EDF3]/90 text-sm mt-2">{reply.content}</p>
                                <div className="flex items-center gap-4 mt-3">
                                  <div className="flex items-center gap-2">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 px-2 text-xs text-[#E6EDF3]/70 hover:text-[#0A84FF] hover:bg-[#0A84FF]/10"
                                      onClick={(e) => handleLike(reply.id, e)}
                                    >
                                      <ThumbsUp
                                        className={`mr-1 h-3 w-3 ${
                                          likedComments.includes(reply.id) ? "text-[#0A84FF] fill-[#0A84FF]" : ""
                                        }`}
                                      />
                                      {likedComments.includes(reply.id) ? reply.likes + 1 : reply.likes}
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 px-2 text-xs text-[#E6EDF3]/70 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10"
                                      onClick={(e) => handleDislike(reply.id, e)}
                                    >
                                      <ThumbsDown
                                        className={`mr-1 h-3 w-3 ${
                                          dislikedComments.includes(reply.id) ? "text-[#FF6B00] fill-[#FF6B00]" : ""
                                        }`}
                                      />
                                      {dislikedComments.includes(reply.id) ? reply.dislikes + 1 : reply.dislikes}
                                    </Button>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 px-2 text-xs text-[#E6EDF3]/70 hover:text-[#0A84FF] hover:bg-[#0A84FF]/10"
                                  >
                                    Reply
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
          Load More Comments
        </Button>
      </div>
    </div>
  )
}
