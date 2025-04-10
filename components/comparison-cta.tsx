"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ComparisonCta() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0D1117]/90"></div>
        <div className="comparison-grid"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Orbitron'] uppercase tracking-wider mb-6 text-white">
              Can't Decide? <span className="text-[#0A84FF]">Compare</span>
            </h2>
            <p className="text-xl text-[#E6EDF3]/80 mb-10 max-w-2xl mx-auto">
              Put devices head-to-head and find the perfect match for your needs and budget.
            </p>

            <Button className="bg-[#0A84FF] hover:bg-[#FF6B00] text-white px-8 py-6 rounded-md text-lg transition-all duration-300 shadow-[0_0_15px_rgba(10,132,255,0.5)] hover:shadow-[0_0_20px_rgba(255,107,0,0.6)]">
              Compare Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
