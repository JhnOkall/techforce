import { Check, Zap, Users, Shield, BarChart, Lightbulb } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: <Check className="h-6 w-6 text-primary" />,
      title: "Integrity",
      description:
        "We maintain strict editorial independence and never compromise our reviews for commercial interests.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "We constantly evolve our testing methodologies to keep pace with rapidly changing technology.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Inclusivity",
      description: "We consider how technology serves diverse users with different needs and technical backgrounds.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Privacy",
      description: "We advocate for user privacy and security in all the products and services we review.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Data-Driven",
      description: "Our conclusions are based on measurable data points, not subjective impressions.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Education",
      description: "We believe in empowering users through knowledge about the technology they use daily.",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These principles guide everything we do at TechForce, from how we test products to how we interact with our
            community and industry partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-secondary/30 backdrop-blur-sm p-8 rounded-xl border border-secondary/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
