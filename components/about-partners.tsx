import { Button } from "@/components/ui/button"

export function AboutPartners() {
  const partners = [
    { name: "TechGlobal", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Innovate Labs", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Future Devices", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Digital Summit", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Tech Conference", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Research Institute", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Consumer Electronics Show", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Mobile World Congress", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Affiliations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders and organizations that share our commitment to advancing technology and
            maintaining high standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-secondary/30 backdrop-blur-sm p-6 rounded-xl border border-secondary/50 hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-16 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always open to strategic partnerships that align with our values and mission. Whether you're a
            technology company, research institution, or industry event, we'd love to explore collaboration
            opportunities.
          </p>
          <Button size="lg">Become a Partner</Button>
        </div>
      </div>
    </section>
  )
}
