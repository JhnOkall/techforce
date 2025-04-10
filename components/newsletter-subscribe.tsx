"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <Card className="bg-[#3B3F51]/20 backdrop-blur-sm border-[#3B3F51] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="h-5 w-5 text-[#0A84FF]" />
          <h3 className="text-lg font-['Orbitron'] font-bold text-white">Newsletter</h3>
        </div>

        {!isSubmitted ? (
          <>
            <p className="text-[#E6EDF3]/80 text-sm mb-4">
              Stay updated with the latest tech news, reviews, and exclusive content delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#3B3F51]/30 border-[#3B3F51] focus-visible:ring-[#0A84FF]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="w-full bg-[#0A84FF] hover:bg-[#FF6B00] text-white transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-[#E6EDF3]/60 text-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-4"
          >
            <CheckCircle className="h-12 w-12 text-[#0A84FF] mx-auto mb-3" />
            <h4 className="text-lg font-medium text-white mb-2">Thank You!</h4>
            <p className="text-[#E6EDF3]/80 text-sm">
              You've successfully subscribed to our newsletter. We've sent a confirmation email to{" "}
              <span className="text-[#0A84FF]">{email}</span>.
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
