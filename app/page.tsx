import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
        <section className="py-6 md:py-12 lg:py-20">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-center">
            <div className="space-y-3 md:space-y-6 text-center md:text-left order-2 md:order-1">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Cyber Security</span>
                <span className="block text-primary">Enthusiast & Expert</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground">
                Final-year B.Tech student, cybersecurity enthusiast, and aspiring cloud security professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center md:justify-start">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/blog">View Blogs</Link>
                </Button>
              </div>
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
            <div className="relative w-full max-w-[220px] md:max-w-[550px] mx-auto order-1 md:order-2">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/atharva.png"
                  alt="Atharva's profile"
                  width={550}
                  height={550}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-12 space-y-4 md:space-y-8">
          <div className="text-center space-y-2 md:space-y-4">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight">My Focus Areas</h2>
            <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
              Exploring key areas in cybersecurity to build a strong foundation
            </p>
          </div>
          <div className="grid gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-3 md:p-6 space-y-2">
                <h3 className="text-base md:text-xl font-bold">Cloud Security</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Learning to secure cloud infrastructure and applications against emerging threats
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 md:p-6 space-y-2">
                <h3 className="text-base md:text-xl font-bold">DevSecOps</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Exploring how to integrate security practices within DevOps processes for secure development
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 md:p-6 space-y-2">
                <h3 className="text-base md:text-xl font-bold">Cloud Architecture</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Learning to design and implement scalable, efficient, and secure cloud infrastructures
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Learning Milestones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Key steps in my cybersecurity journey</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Badge className="mb-2">Certification</Badge>
                <h3 className="text-xl font-bold">AWS Cloud Foundations</h3>
                <p className="text-muted-foreground">
                  Foundational understanding of AWS cloud services and core concepts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Badge className="mb-2">Project</Badge>
                <h3 className="text-xl font-bold">CI/CD Security Integration</h3>
                <p className="text-muted-foreground">
                  Implemented basic security scanning in a GitHub Actions workflow
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Badge className="mb-2">Learning</Badge>
                <h3 className="text-xl font-bold">Blue Team Fundamentals</h3>
                <p className="text-muted-foreground">
                  Completed an online course on security operations and incident response basics
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recent articles and thoughts on cybersecurity and cloud technologies
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.length === 0 ? (
              <p className="text-muted-foreground col-span-full text-center">No blog posts available at the moment.</p>
            ) : (
              recentPosts.map((post: Post) => (
                <Card key={post.guid}>
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={extractImageUrl(post.content)}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Published on {new Date(post.pubDate).toLocaleDateString()}
                      </p>
                      <div
                        className="text-muted-foreground line-clamp-2"
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
            <Button asChild>
              <Link href="/blog">View All Blog Posts</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-muted/40">
        <div className="container px-4 md:px-6 py-6 md:py-12">
          <div className="grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-3">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Cyber with Atharva</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Building a secure digital future through expertise, innovation, and education.
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
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/NullSecures"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://medium.com/@cyberwithatharva"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </Link>
                </li>
              </ul>
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

