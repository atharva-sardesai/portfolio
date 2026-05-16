import Link from "next/link"
import { notFound } from "next/navigation"
import { ContrastPair } from "@/components/ContrastPair"
import { KeyTakeaway } from "@/components/KeyTakeaway"
import { StatCallout } from "@/components/StatCallout"
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
      type: "article",
      publishedTime: post.date,
      authors: ["Atharva Sardesai"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://atharvasardesai.com/blog/${post.slug}`,
    },
  }
}

function renderPostVisual(post: NonNullable<ReturnType<typeof getPostBySlug>>) {
  if (post.visualType === "stat" && post.stat && post.statLabel && post.statSource) {
    return (
      <StatCallout
        stat={post.stat}
        label={post.statLabel}
        context={post.statContext}
        source={post.statSource}
        sourceUrl={post.statSourceUrl}
      />
    )
  }

  if (
    post.visualType === "contrast" &&
    post.contrastLeftLabel &&
    post.contrastLeftValue &&
    post.contrastRightLabel &&
    post.contrastRightValue
  ) {
    return (
      <ContrastPair
        leftLabel={post.contrastLeftLabel}
        leftValue={post.contrastLeftValue}
        leftSub={post.contrastLeftSub}
        rightLabel={post.contrastRightLabel}
        rightValue={post.contrastRightValue}
        rightSub={post.contrastRightSub}
        source={post.contrastSource}
        sourceUrl={post.contrastSourceUrl}
      />
    )
  }

  return null
}

function renderPostBody(post: NonNullable<ReturnType<typeof getPostBySlug>>) {
  const blocks = post.body.split(/\n{2,}/)

  return blocks.map((block, index) => (
    <div key={`${post.slug}-${index}`}>
      <div dangerouslySetInnerHTML={{ __html: markdownToHtml(block) }} />
      {post.visualAfter === block.trim() && renderPostVisual(post)}
    </div>
  ))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const allPosts = getAllPosts()

  if (!post) {
    notFound()
  }

  const otherPosts = allPosts.filter((p) => p.slug !== slug)
  const formattedDate = formatPostDate(post.date)
  const readTime = Math.max(1, Math.ceil(post.body.trim().split(/\s+/).length / 200))

  return (
    <article className="blog-post-shell">
      <div className="post-content-wrapper">
        <a href="/blog" className="post-back-link">
          ← Writing
        </a>
        <h1 className="post-title-hero">{post.title}</h1>
        <div className="post-meta-row">
          <time dateTime={post.date}>{formattedDate}</time>
          <span className="post-meta-dot" />
          <span>{readTime} min read</span>
        </div>
        <div className="post-body">
          {renderPostBody(post)}
        </div>
        {post.takeaway && (
          <KeyTakeaway text={post.takeaway} />
        )}
        {otherPosts.length > 0 && (
          <div className="more-writing">
            <span className="more-writing-label">
              More writing
            </span>

            <div className="more-writing-list">
              {otherPosts.map((p) => {
                const otherReadTime = Math.max(1, Math.ceil(p.body.trim().split(/\s+/).length / 200))

                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="more-writing-card">
                    <p className="more-writing-title">
                      {p.title}
                    </p>
                    <p className="more-writing-excerpt">
                      {p.excerpt}
                    </p>
                    <div className="more-writing-meta">
                      <span>
                        {formatPostDate(p.date)}
                      </span>
                      <span className="post-meta-dot" />
                      <span>
                        {otherReadTime} min read
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            <a href="/blog" className="all-writing-link">
              ← All writing
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
