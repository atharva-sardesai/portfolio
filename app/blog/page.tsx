import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights & Research",
  description: "In-depth analysis on cloud security strategy, GRC frameworks, AI governance, and enterprise risk—informed by real-world consulting engagements.",
  openGraph: {
    title: "Insights & Research | Cyber with Atharva",
    description: "In-depth analysis on cloud security strategy, GRC frameworks, AI governance, and enterprise risk.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Research | Cyber with Atharva",
    description: "In-depth analysis on cloud security strategy, GRC frameworks, AI governance, and enterprise risk.",
  },
}

interface Post {
  title: string
  content: string
  pubDate: string
  link: string
  guid: string
  imageUrl?: string
}

function extractImageUrl(content: string | undefined, imageUrl: string | undefined, link: string | undefined, guid: string | undefined): string {
  console.log('Extracting image with guid:', guid);
  console.log('Article link:', link);
  
  if (imageUrl) {
    console.log('Using provided imageUrl:', imageUrl);
    return imageUrl;
  }

  // Extract article ID from link (e.g., "...medium.com/understanding-cloud-security..." -> "understanding-cloud-security")
  if (link) {
    const linkMatch = /medium\.com\/([^\/]+\/)?([^?]+)/;
    const match = link.match(linkMatch);
    if (match && match[2]) {
      const slug = match[2];
      // Use the article slug to construct the image URL
      const imageUrl = `https://miro.medium.com/v2/resize:fit:1400/0*${slug}`;
      console.log('Generated Medium CDN URL from slug:', imageUrl);
      return imageUrl;
    }
  }

  // Use a technology-themed placeholder as fallback
  console.log('Using fallback image');
  return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop';
}

function stripHtml(html: string | undefined): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '')
}

// This function runs at build time on the server
export async function generateStaticParams() {
  return []
}

async function getPosts(): Promise<Post[]> {
  try {
    // Try to fetch from the static JSON file first (production)
    try {
      const response = await fetch('/medium-posts.json');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched posts from static JSON file');
        return data.posts.map((post: any) => ({
          title: post.title || '',
          content: post.content || '',
          pubDate: post.pubDate || new Date().toISOString(),
          link: post.link || '#',
          guid: post.guid || Math.random().toString(),
          imageUrl: post.imageUrl || null
        }));
      }
    } catch (error) {
      console.log('Could not fetch from static JSON, falling back to API Gateway');
    }

    // Fall back to API Gateway (development)
    const apiUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL || '';
    console.log('API URL:', apiUrl);
    
    if (!apiUrl) {
      console.error('API URL is not set in environment variables');
      return [];
    }

    console.log('Fetching posts from:', apiUrl);
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.posts) {
      console.error('No posts found in response');
      return [];
    }

    return data.posts.map((post: any) => ({
      title: post.title || '',
      content: post.content || '',
      pubDate: post.pubDate || new Date().toISOString(),
      link: post.link || '#',
      guid: post.guid || Math.random().toString(),
      imageUrl: post.imageUrl || null
    }));
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts()
  const featuredPosts = posts.slice(0, 3)
  const otherPosts = posts.slice(3)

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Insights & Research</h1>
        <p className="text-lg text-muted-foreground">
          In-depth analysis on cloud security strategy, GRC frameworks, AI governance, and enterprise risk—informed by real-world consulting engagements.
        </p>
      </div>
      
      {posts.length === 0 ? (
        <p className="text-muted-foreground text-center">No blog posts available at the moment.</p>
      ) : (
        <div className="space-y-12">
          {featuredPosts.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Posts</h2>
              <div className="space-y-6">
                {featuredPosts.map((post: Post) => (
                  <Card key={post.guid} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 order-2 md:order-1">
                          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                          <p className="text-sm text-muted-foreground mb-4">
                            Published on {new Date(post.pubDate).toLocaleDateString()}
                          </p>
                          <div
                            className="text-muted-foreground mb-4 line-clamp-3"
                            dangerouslySetInnerHTML={{ 
                              __html: post.content ? stripHtml(post.content).slice(0, 200) + "..." : ''
                            }}
                          />
                          <Button asChild>
                            <Link href={post.link} target="_blank" rel="noopener noreferrer">
                              Read on Medium
                            </Link>
                          </Button>
                        </div>
                        <div className="w-full md:w-1/3 h-48 relative order-1 md:order-2">
                          <Image
                            src={extractImageUrl(post.content, post.imageUrl, post.link, post.guid)}
                            alt={post.title}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {otherPosts.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">All Posts</h2>
              <div className="space-y-6">
                {otherPosts.map((post: Post) => (
                  <Card key={post.guid} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 order-2 md:order-1">
                          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                          <p className="text-sm text-muted-foreground mb-4">
                            Published on {new Date(post.pubDate).toLocaleDateString()}
                          </p>
                          <div
                            className="text-muted-foreground mb-4 line-clamp-3"
                            dangerouslySetInnerHTML={{ 
                              __html: post.content ? stripHtml(post.content).slice(0, 200) + "..." : ''
                            }}
                          />
                          <Button asChild>
                            <Link href={post.link} target="_blank" rel="noopener noreferrer">
                              Read on Medium
                            </Link>
                          </Button>
                        </div>
                        <div className="w-full md:w-1/3 h-48 relative order-1 md:order-2">
                          <Image
                            src={extractImageUrl(post.content, post.imageUrl, post.link, post.guid)}
                            alt={post.title}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

