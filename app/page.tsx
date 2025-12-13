import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { featuredProjects } from "@/lib/projects"

interface Post {
  title: string
  content: string
  pubDate: string
  link: string
  guid: string
}

function extractImageUrl(content: string | undefined): string {
  if (!content) return '/placeholder.svg';
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : '/placeholder.svg';
}

function stripHtml(html: string | undefined): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

async function getPosts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
    if (!apiUrl) {
      throw new Error('API Gateway URL not configured');
    }

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const data = await response.json();
    const posts = data.posts || [];
    return posts.slice(0, 3); // Get only the three most recent posts
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return empty array as fallback
  }
}

export default async function HomePage() {
  const recentPosts = await getPosts()

  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 md:px-6 py-4 md:py-10">
        <section id="hero" className="py-6 md:py-12 lg:py-20">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
              {/* Trust Badge */}
              <div className="flex justify-center md:justify-start">
                <Badge variant="outline" className="text-xs md:text-sm px-3 py-1">
                  Cyber Security Consultant @ Cummins India
                </Badge>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Cybersecurity & Cloud Security</span>
                <span className="block text-primary">professional building secure, automated, cloud-native systems</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-base md:text-lg text-muted-foreground">
                Sharing real-world labs, insights, and learnings.
              </p>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                Cloud Security | DevSecOps | AI & LLM Security | Cyber with Atharva
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center md:justify-start pt-2">
                <Button asChild className="w-full sm:w-auto" size="lg">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto" size="lg">
                  <a href="#blogs">Read Blogs</a>
                </Button>
              </div>
              
              {/* Secondary CTA */}
              <div className="flex justify-center md:justify-start">
                <Button variant="ghost" asChild className="text-sm">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 md:gap-4 pt-2 justify-center md:justify-start">
                <Link href="https://www.linkedin.com/in/cyberwithatharva/" target="_blank" rel="noopener noreferrer">
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
            <p className="text-base md:text-lg text-muted-foreground">
              I'm a Cyber Security Consultant at Cummins India and a final-year B.Tech student at VIIT, 
              focused on building secure, automated, cloud-native systems. My work spans Cloud Security, 
              DevSecOps, and emerging AI/LLM security challenges.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">What I'm focused on now</h3>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Cloud Security & Identity:</strong> Securing cloud infrastructure, IAM policies, and identity management across AWS environments.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">DevSecOps & Secure CI/CD:</strong> Integrating security into development workflows, automated scanning, and secure deployment pipelines.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Vulnerability Assessment (VAPT):</strong> Identifying and remediating security vulnerabilities in applications and infrastructure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Threat Intelligence & Detection:</strong> Building detection capabilities and leveraging threat intelligence for proactive security.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">AI/LLM Security:</strong> Understanding and mitigating practical security risks in AI/LLM deployments and applications.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-16 space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world security implementations and learnings from hands-on work
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardContent className="p-6 space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <Badge variant={project.type === "certification" ? "default" : project.type === "project" ? "secondary" : "outline"} className="mb-0">
                      {project.type === "certification" ? "Certification" : project.type === "project" ? "Project" : "Experience"}
                    </Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  
                  <div className="space-y-3 text-sm md:text-base">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Problem</p>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Approach</p>
                      <p className="text-muted-foreground">{project.approach}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Tools</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Outcome</p>
                      <p className="text-muted-foreground">{project.outcome}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Key Learning</p>
                      <p className="text-muted-foreground italic">{project.learning}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="blogs" className="py-12 md:py-16 space-y-8 md:space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Latest Blog Posts</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Long-form writeups on Cloud Security, DevSecOps, automation, and AI security—built from hands-on labs and real work.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.length === 0 ? (
              <p className="text-muted-foreground col-span-full text-center">No blog posts available at the moment.</p>
            ) : (
              recentPosts.map((post: Post) => (
                <Card key={post.guid}>
                  <CardContent className="p-0">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={extractImageUrl(post.content)}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Published on {new Date(post.pubDate).toLocaleDateString()}
                      </p>
                      <div
                        className="text-muted-foreground line-clamp-2 text-sm"
                        dangerouslySetInnerHTML={{ __html: stripHtml(post.content).slice(0, 150) + "..." }}
                      />
                      <Button variant="link" asChild className="p-0">
                        <Link href={post.link} target="_blank" rel="noopener noreferrer">
                          Read on Medium
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          <div className="text-center pt-4">
            <Button asChild size="lg">
              <Link href="/blog">View All Blog Posts</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full border-t bg-muted/40">
        <div className="container px-4 md:px-6 py-6 md:py-12">
          <div className="grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-4">
            <div className="space-y-3 md:space-y-4 col-span-2 md:col-span-1">
              <h3 className="text-base md:text-lg font-bold">Cyber with Atharva</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Building secure, automated, cloud-native systems through expertise, innovation, and education.
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
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Connect</h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/cyberwithatharva/"
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
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Get in Touch</h3>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 md:mt-8 border-t pt-6 md:pt-8 text-center">
            <p className="text-xs md:text-sm text-muted-foreground">© 2024 Cyber with Atharva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

