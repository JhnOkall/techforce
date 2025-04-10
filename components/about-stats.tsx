import { Users, Globe, Award, FileText } from "lucide-react"

export function AboutStats() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="grid-background-alt opacity-30"></div>

      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/50 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold mb-2">3.5M+</div>
            <div className="text-muted-foreground">Monthly Readers</div>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/50 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold mb-2">180+</div>
            <div className="text-muted-foreground">Countries Reached</div>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/50 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold mb-2">42</div>
            <div className="text-muted-foreground">Industry Awards</div>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/50 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <div className="text-muted-foreground">Published Reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}
