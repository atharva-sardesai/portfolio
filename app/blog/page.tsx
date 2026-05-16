import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { formatPostDate, getAllPosts } from "@/lib/posts"
import { BlogPostList } from "@/components/BlogPostList"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Writing",
  description: "New pieces on enterprise risk and cyber strategy published regularly.",
  openGraph: {
    title: "Writing | Atharva Sardesai",
    description: "New pieces on enterprise risk and cyber strategy published regularly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Atharva Sardesai",
    description: "New pieces on enterprise risk and cyber strategy published regularly.",
  },
}

export default function BlogPage() {
  const posts = getAllPosts().map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    date: post.date,
    formattedDate: formatPostDate(post.date),
    pillar: post.pillar,
  }))

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Writing</h1>
        <p className="text-lg text-muted-foreground">
          New pieces on enterprise risk and cyber strategy published regularly.
        </p>
        <p className="text-lg text-muted-foreground">
          Follow on LinkedIn for the latest — longer pieces appear here.
        </p>
        <Button variant="link" asChild className="p-0">
          <Link href="https://www.linkedin.com/in/atharvasardesai" target="_blank" rel="noopener noreferrer">
            Follow on LinkedIn →
          </Link>
        </Button>
      </div>
      <BlogPostList posts={posts} />
    </div>
  )
}
