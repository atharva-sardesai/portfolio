import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"

interface Post {
  title: string
  content: string
  pubDate: string
  guid: string
}

async function getPost(id: string) {
  try {
    // Use the local API route during development
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : process.env.NEXT_PUBLIC_BASE_URL

    const res = await fetch(`${baseUrl}/api/medium-posts`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }

    const posts = await res.json()
    const post = posts.find((p: Post) => p.guid === id)

    if (!post) {
      return null
    }

    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-10">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Published on {new Date(post.pubDate).toLocaleDateString()}
          </p>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
    </div>
  )
}

