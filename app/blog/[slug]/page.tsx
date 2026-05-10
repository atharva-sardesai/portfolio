import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/posts"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="blog-post-shell">
      <h1 className="post-title-hero">{post.title}</h1>
      <time className="post-date" dateTime={post.date}>{post.date}</time>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }} />
    </article>
  )
}
