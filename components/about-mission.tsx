import { Zap, Target, Search, Shield } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At TechForce, we believe technology should be accessible and understandable to everyone. Our mission is to
              demystify the complex world of tech through honest reviews, in-depth analysis, and practical buying advice
              that empowers you to make informed decisions.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unbiased Reviews</h3>
                  <p className="text-muted-foreground">
                    We test every product thoroughly and report our findings without influence from manufacturers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision & Accuracy</h3>
                  <p className="text-muted-foreground">
                    Our testing methodologies are rigorous, consistent, and designed to reveal the truth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">In-depth Analysis</h3>
                  <p className="text-muted-foreground">
                    We go beyond specs to understand how technology impacts real users in everyday scenarios.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consumer Advocacy</h3>
                  <p className="text-muted-foreground">
                    We stand up for your interests, highlighting both the good and the concerning in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl transform -rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-[#FF6B00]/20 to-transparent rounded-2xl transform rotate-3"></div>
            <div className="relative bg-secondary/50 backdrop-blur-sm p-8 rounded-2xl border border-secondary">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-background/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Devices Reviewed Annually</div>
                </div>
                <div className="aspect-square bg-background/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3.5M</div>
                  <div className="text-sm text-muted-foreground">Monthly Readers</div>
                </div>
                <div className="aspect-square bg-background/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">42</div>
                  <div className="text-sm text-muted-foreground">Industry Awards</div>
                </div>
                <div className="aspect-square bg-background/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-background/30 rounded-lg">
                <blockquote className="italic text-muted-foreground">
                  "TechForce has become the gold standard for tech reviews. Their testing methodology and honest
                  approach sets them apart in an industry often clouded by bias."
                </blockquote>
                <div className="mt-3 font-semibold">— Tech Industry Journal, 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
