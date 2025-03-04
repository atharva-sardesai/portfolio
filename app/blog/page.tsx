import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Parser from 'rss-parser'

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
    console.log('Fetching posts from Medium...')
    const parser = new Parser()
    const feed = await parser.parseURL('https://medium.com/feed/@cyberwithatharva')
    console.log('Feed fetched successfully:', feed.title)
    const filteredItems = feed.items
      .filter((item): item is Parser.Item & Required<Pick<Parser.Item, 'title' | 'content' | 'pubDate' | 'link' | 'guid'>> => {
        const isValid = !!item.title && !!item.content && !!item.pubDate && !!item.link && !!item.guid
        if (!isValid) {
          console.log('Invalid item:', item)
        }
        return isValid
      })
    console.log(`Found ${filteredItems.length} valid posts`)
    return filteredItems.map(item => ({
      title: item.title,
      content: item.content,
      pubDate: item.pubDate,
      link: item.link,
      guid: item.guid,
    }))
  } catch (error) {
    console.error('Error fetching posts:', error instanceof Error ? error.message : error)
    console.error('Error details:', error)
    return []
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

