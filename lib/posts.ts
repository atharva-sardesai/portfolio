import fs from "fs"
import path from "path"

export type Post = {
  title: string
  date: string
  slug: string
  excerpt: string
  pillar?: "macro-impact" | "compliance-theater" | "business-language"
  body: string
  visualType?: string
  visualAfter?: string
  stat?: string
  statLabel?: string
  statContext?: string
  statSource?: string
  statSourceUrl?: string
  contrastLeftLabel?: string
  contrastLeftValue?: string
  contrastLeftSub?: string
  contrastRightLabel?: string
  contrastRightValue?: string
  contrastRightSub?: string
  contrastSource?: string
  contrastSourceUrl?: string
  takeaway?: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

function parseFrontmatter(fileContent: string): Post {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    throw new Error("Post is missing frontmatter")
  }

  const frontmatter = match[1].split("\n").reduce<Record<string, string>>((fields, line) => {
    const separatorIndex = line.indexOf(":")

    if (separatorIndex === -1) {
      return fields
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "")

    fields[key] = value
    return fields
  }, {})

  return {
    title: frontmatter.title,
    date: frontmatter.date,
    slug: frontmatter.slug,
    excerpt: frontmatter.excerpt,
    pillar: frontmatter.pillar as Post["pillar"],
    body: match[2].trim(),
    visualType: frontmatter.visualType,
    visualAfter: frontmatter.visualAfter,
    stat: frontmatter.stat,
    statLabel: frontmatter.statLabel,
    statContext: frontmatter.statContext,
    statSource: frontmatter.statSource,
    statSourceUrl: frontmatter.statSourceUrl,
    contrastLeftLabel: frontmatter.contrastLeftLabel,
    contrastLeftValue: frontmatter.contrastLeftValue,
    contrastLeftSub: frontmatter.contrastLeftSub,
    contrastRightLabel: frontmatter.contrastRightLabel,
    contrastRightValue: frontmatter.contrastRightValue,
    contrastRightSub: frontmatter.contrastRightSub,
    contrastSource: frontmatter.contrastSource,
    contrastSourceUrl: frontmatter.contrastSourceUrl,
    takeaway: frontmatter.takeaway,
  }
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      return parseFrontmatter(fs.readFileSync(filePath, "utf8"))
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function markdownToHtml(markdown: string) {
  return markdown
    .split(/\n{2,}/)
    .map((block) => {
      if (block.trim() === "---") {
        return "<hr />"
      }

      const html = block
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/_([^_]+)_/g, "<em>$1</em>")

      return `<p>${html}</p>`
    })
    .join("\n")
}
