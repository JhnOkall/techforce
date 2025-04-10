import Link from "next/link"
import { Twitter, Github, Youtube } from "lucide-react"

export function TechForceFooter() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#3B3F51]/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-['Orbitron'] font-bold uppercase tracking-wider text-white mb-4">
              Tech<span className="text-[#0A84FF]">Force</span>
            </h3>
            <p className="text-[#E6EDF3]/70 text-sm mb-4">
              Your elite tech intelligence unit. Providing comprehensive device specifications, expert reviews, and
              detailed comparisons.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#E6EDF3]/70 hover:text-[#0A84FF] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#E6EDF3]/70 hover:text-[#0A84FF] transition-colors duration-300">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-[#E6EDF3]/70 hover:text-[#0A84FF] transition-colors duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Smartphones", "Laptops", "Tablets", "Wearables", "Accessories"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#E6EDF3]/70 hover:text-[#0A84FF] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Reviews", "Comparisons", "Buying Guides", "Tech News", "Videos"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#E6EDF3]/70 hover:text-[#0A84FF] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-['Orbitron'] uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Careers", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#E6EDF3]/70 hover:text-[#0A84FF] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#3B3F51]/30 text-center text-[#E6EDF3]/50 text-sm">
          &copy; {new Date().getFullYear()} TechForce. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
