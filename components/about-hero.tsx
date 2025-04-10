import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="grid-background opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10"></div>

      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-primary font-medium">Established 2015</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Pushing the Boundaries of </span>
            <span className="text-primary relative">
              Tech Journalism
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            TechForce is more than just a tech review site. We're a team of passionate tech enthusiasts, engineers, and
            journalists dedicated to bringing you the most accurate, unbiased, and in-depth coverage of the technology
            landscape.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Meet Our Team <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Our Story <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  )
}
