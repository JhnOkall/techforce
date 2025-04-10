import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function AboutContact() {
  return (
    <section className="py-20 relative" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions, feedback, or business inquiries? We'd love to hear from you. Fill out the form or use our
              contact information below.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Our Headquarters</h3>
                  <p className="text-muted-foreground">
                    1234 Tech Avenue
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    General Inquiries: info@techforce.com
                    <br />
                    Press: press@techforce.com
                    <br />
                    Partnerships: partners@techforce.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    Main Office: +1 (555) 123-4567
                    <br />
                    Support: +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-secondary/30 backdrop-blur-sm rounded-xl border border-secondary/50">
              <h3 className="text-xl font-bold mb-3">Office Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="font-medium">Monday - Friday</div>
                  <div className="text-muted-foreground">9:00 AM - 6:00 PM PST</div>
                </div>
                <div>
                  <div className="font-medium">Saturday</div>
                  <div className="text-muted-foreground">10:00 AM - 4:00 PM PST</div>
                </div>
                <div className="col-span-2">
                  <div className="font-medium">Sunday</div>
                  <div className="text-muted-foreground">Closed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-xl border border-secondary/50">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="bg-background/50 border-secondary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-secondary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" className="bg-background/50 border-secondary" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="bg-background/50 border-secondary min-h-[150px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="rounded border-secondary text-primary focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted.
                </label>
              </div>

              <Button type="submit" className="w-full gap-2">
                Send Message <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
