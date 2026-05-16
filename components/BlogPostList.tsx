"use client"

import { useState } from "react"
import Link from "next/link"

export type BlogListPost = {
  title: string
  slug: string
  excerpt: string
  date: string
  formattedDate: string
  pillar?: "macro-impact" | "compliance-theater" | "business-language"
}

const pillarFilters = [
  { value: "all", label: "All" },
  { value: "macro-impact", label: "Macro Impact of Micro Neglect" },
  { value: "compliance-theater", label: "End of Compliance Theater" },
  { value: "business-language", label: "Business Language of Cyber" },
] as const

export function BlogPostList({ posts }: { posts: BlogListPost[] }) {
  const [query, setQuery] = useState("")
  const [activePillar, setActivePillar] = useState<(typeof pillarFilters)[number]["value"]>("all")
  const showSearch = posts.length >= 4
  const publishedPillars = new Set(posts.map((post) => post.pillar).filter(Boolean))
  const showPillarFilters = publishedPillars.size >= 2

  const filteredPosts = posts.filter((post) => {
    const normalizedQuery = query.toLowerCase()
    const matchesPillar = activePillar === "all" || post.pillar === activePillar
    const matchesQuery =
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.excerpt.toLowerCase().includes(normalizedQuery)

    return matchesPillar && matchesQuery
  })

  return (
    <>
      {(showPillarFilters || showSearch) && (
        <div className="writing-controls">
          {showPillarFilters && (
            <div className="pillar-filters" aria-label="Filter writing by pillar">
              {pillarFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={activePillar === filter.value ? "active" : undefined}
                  onClick={() => setActivePillar(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}

          {showSearch && (
            <input
              className="writing-search"
              type="search"
              placeholder="Search writing..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          )}
        </div>
      )}

      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-item">
              <div>
                <h2 className="post-item-title">{post.title}</h2>
                <p className="post-item-excerpt">{post.excerpt}</p>
              </div>
              <time className="post-item-date" dateTime={post.date}>{post.formattedDate}</time>
            </Link>
          ))
        ) : (
          <p className="post-empty-state">No matching posts</p>
        )}
      </div>
    </>
  )
}
