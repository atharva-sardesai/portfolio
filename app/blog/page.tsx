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
  imageUrl?: string
}

function extractImageUrl(content: string | undefined, imageUrl: string | undefined, link: string | undefined, guid: string | undefined): string {
  console.log('Extracting image with guid:', guid);
  console.log('Article link:', link);
  
  if (imageUrl) {
    console.log('Using provided imageUrl:', imageUrl);
    return imageUrl;
  }

  // Extract article ID from guid (e.g., "https://medium.com/p/e17a294ca1d2" -> "e17a294ca1d2")
  if (guid) {
    const guidMatch = /medium\.com\/p\/([a-f0-9]+)$/;
    const match = guid.match(guidMatch);
    if (match && match[1]) {
      const articleId = match[1];
      // Try multiple Medium CDN formats
      const possibleUrls = [
        `https://miro.medium.com/v2/resize:fit:1400/${articleId}`,
        `https://cdn-images-1.medium.com/max/1024/1*${articleId}.jpeg`,
        `https://miro.medium.com/max/1400/${articleId}`
      ];
      console.log('Generated Medium CDN URLs:', possibleUrls);
      return possibleUrls[0]; // Use the first format as default
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
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <Image
                      src={extractImageUrl(post.content, post.imageUrl, post.link, post.guid)}
                      alt={post.title || 'Blog post'}
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

