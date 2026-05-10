import { notFound } from "next/navigation"
import { formatPostDate, getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/posts"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: {
      absolute: `${post.title} | Atharva Sardesai`,
    },
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://atharvasardesai.com/blog/${post.slug}`,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="blog-post-shell">
      <div className="post-content-wrapper">
        <a href="/blog" className="post-back-link">
          ← Writing
        </a>
        <h1 className="post-title-hero">{post.title}</h1>
        <time className="post-date" dateTime={post.date}>{formatPostDate(post.date)}</time>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }} />
      </div>
    </article>
  )
}
