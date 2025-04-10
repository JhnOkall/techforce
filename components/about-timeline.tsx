export function AboutTimeline() {
  const milestones = [
    {
      year: "2015",
      title: "TechForce Founded",
      description: "Alex Chen launches TechForce as a blog focused on honest hardware reviews.",
    },
    {
      year: "2016",
      title: "First Testing Lab",
      description: "Established our first dedicated testing facility with standardized benchmarking equipment.",
    },
    {
      year: "2017",
      title: "Team Expansion",
      description: "Grew to a team of 10 specialists covering different technology categories.",
    },
    {
      year: "2018",
      title: "Video Content Launch",
      description: "Expanded into video reviews and tutorials, reaching a broader audience.",
    },
    {
      year: "2019",
      title: "Industry Recognition",
      description: "Won 'Best Tech Publication' at the Digital Media Awards.",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Launched international versions of TechForce in three additional languages.",
    },
    {
      year: "2021",
      title: "Advanced Testing Protocols",
      description: "Developed proprietary testing methodologies for more accurate device evaluation.",
    },
    {
      year: "2022",
      title: "Community Platform",
      description: "Launched user forums and community features for tech enthusiasts.",
    },
    {
      year: "2023",
      title: "AI-Powered Comparisons",
      description: "Introduced machine learning tools to enhance product comparison features.",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small blog to an industry-leading tech publication, our growth has been driven by a commitment to
            honest reviews and technical excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>

                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 bg-secondary/30 backdrop-blur-sm p-6 rounded-xl border border-secondary/50 hover:border-primary/50 transition-all duration-300">
                    <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
