import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 md:px-6 py-4 md:py-10">
        <section id="hero" className="py-6 md:py-12 lg:py-20">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
              {/* Trust Badge */}
              <div className="flex justify-center md:justify-start">
                <Badge variant="outline" className="text-xs md:text-sm px-3 py-1">
                  Enterprise Security
                </Badge>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Enterprise Security,</span>
                <span className="block text-primary">written from inside the work.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-muted-foreground">
                Notes on cyber risk, governance, and the gap between strategy and reality.
              </p>

              {/* Primary Link */}
              <div className="flex justify-center md:justify-start pt-2">
                <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
                  Read the latest →
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 md:gap-4 pt-2 justify-center md:justify-start">
                <Link href="https://www.linkedin.com/in/atharvasardesai" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
                <Link href="https://x.com/NullSecures" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10" aria-label="Twitter">
                    <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
                <Link href="https://medium.com/@cyberwithatharva" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10" aria-label="Medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-[220px] md:max-w-[400px] mx-auto order-1 md:order-2">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/atharva.png"
                  alt="Atharva's profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-16 space-y-6 md:space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <p>
                I'm an enterprise security practitioner working in-house at a global organization. My day-to-day sits at the intersection of risk, governance, and the operational reality of running security at scale.
              </p>
              <p>
                I write here about what most enterprise security writing misses: the gap between what's reported in board decks and what actually happens at the access list, the architecture review, the audit response. My focus is enterprise risk and cyber strategy — specifically, the structural patterns that make security programs succeed or quietly fail.
              </p>
              <p>
                The goal of this writing isn't to teach fundamentals or chase trends. It's to surface the operational truths that the senior people in this industry already half-know but rarely see articulated. If that's useful to you, you're in the right place.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">What I write about</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Enterprise risk</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  How risk actually moves through a large organization — from the dashboard, to the audit committee, to the team that has to act on it. Where the wires get crossed and what that costs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Cyber strategy</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  The structural choices that determine whether a security program produces real outcomes or just well-formatted reports. What separates a strategy from a slide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="py-12 md:py-16 space-y-8 md:space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Writing</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              New pieces on enterprise risk and cyber strategy published regularly.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Follow on LinkedIn for the latest — longer pieces appear here.
            </p>
            <Button variant="link" asChild className="p-0">
              <Link href="https://www.linkedin.com/in/atharvasardesai" target="_blank" rel="noopener noreferrer">
                Follow on LinkedIn →
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full border-t bg-muted/40">
        <div className="container px-4 md:px-6 py-6 md:py-12">
          <div className="grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-4">
            <div className="space-y-3 md:space-y-4 col-span-2 md:col-span-1">
              <h3 className="text-base md:text-lg font-bold">Atharva Sardesai</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Enterprise security practitioner. Writing on cyber risk, governance, and the gap between strategy and reality.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Quick Links</h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Writing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Connect</h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/atharvasardesai"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-3 w-3" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/NullSecures"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-3 w-3" />
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://medium.com/@cyberwithatharva"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                    Medium
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 md:mt-8 border-t pt-6 md:pt-8 text-center">
            <p className="text-xs md:text-sm text-muted-foreground">© 2026 Atharva Sardesai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
