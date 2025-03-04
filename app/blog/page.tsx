import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Post {
  title: string
  content: string
  pubDate: string
  link: string
  guid: string
}

function extractImageUrl(content: string): string {
  const imgRegex = /<img[^>]+src="([^">]+)"/
  const match = content.match(imgRegex)
  return match ? match[1] : '/placeholder.svg'
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

// This function runs at build time on the server
export async function generateStaticParams() {
  return []
}

async function getPosts(): Promise<Post[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL || '';
    console.log('Attempting to fetch from API URL:', apiUrl);
    
    if (!apiUrl) {
      console.error('API URL is not set in environment variables');
      return [];
    }

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'Accept': 'application/json'
      }
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('Raw response:', responseText);

    if (!response.ok) {
      console.error('Error response:', responseText);
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    try {
      const data = JSON.parse(responseText);
      console.log('Parsed data:', data);
      return data.posts || [];
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return [];
    }
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No blog posts available at the moment.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post: Post) => (
            <Card key={post.guid} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Published on {new Date(post.pubDate).toLocaleDateString()}
                    </p>
                    <div
                      className="text-muted-foreground mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: stripHtml(post.content).slice(0, 200) + "..." }}
                    />
                    <Button asChild>
                      <Link href={post.link} target="_blank" rel="noopener noreferrer">
                        Read on Medium
                      </Link>
                    </Button>
                  </div>
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <Image
                      src={extractImageUrl(post.content)}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

