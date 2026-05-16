import { getAllPosts } from "@/lib/posts"

const siteUrl = "https://atharvasardesai.com"

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const posts = getAllPosts()
  const lastBuildDate = new Date().toUTCString()

  const items = posts
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${postUrl}</link>
          <description>${escapeXml(post.excerpt)}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid isPermaLink="true">${postUrl}</guid>
        </item>
      `
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Atharva Sardesai — Writing on Enterprise Security</title>
        <description>Notes on cyber risk, governance, and the gap between strategy and reality.</description>
        <link>${siteUrl}</link>
        <language>en-us</language>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        ${items}
      </channel>
    </rss>
  `

  return new Response(rss.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
