import { Github, Twitter, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutTeam() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Editor-in-Chief",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former hardware engineer with 15+ years in the tech industry. Founded TechForce to bring transparency to tech reviews.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        website: "#",
      },
    },
    {
      name: "Samantha Rodriguez",
      role: "Senior Hardware Editor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in CPU and GPU architecture. Previously worked at major semiconductor companies for 8 years.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Mobile Technology Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Smartphone expert with background in electrical engineering. Leads our mobile device testing lab.",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "Head of Software Reviews",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Computer scientist specializing in AI and machine learning. Evaluates software performance and user experience.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "Audio & Peripherals Editor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Audiophile and former sound engineer. Brings technical expertise to headphone and speaker reviews.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Olivia Washington",
      role: "Consumer Tech Writer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in making complex tech accessible to everyday users. Focuses on practical applications and value.",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "Raj Mehta",
      role: "Technical Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Oversees our testing methodologies and equipment. Ensures consistency and accuracy across all reviews.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emma Chen",
      role: "Video Production Lead",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Creates our visual content and manages the TechForce YouTube channel. Background in film and technology.",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#",
      },
    },
  ]

  return (
    <section className="py-20 relative" id="team">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience across all areas of technology. Each
            member contributes unique expertise to deliver the most comprehensive coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-secondary/30 rounded-xl overflow-hidden border border-secondary/50 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                <div className="flex gap-2">
                  {member.social.twitter && (
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <Twitter size={16} />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  )}
                  {member.social.linkedin && (
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <Linkedin size={16} />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  )}
                  {member.social.github && (
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <Github size={16} />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  )}
                  {member.social.website && (
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <Globe size={16} />
                      <span className="sr-only">Website</span>
                    </Button>
                  )}
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <span className="sr-only">View Profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
