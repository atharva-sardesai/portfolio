export const postOgMetadata = [
  {
    slug: "cybersecurity-marketing-problem",
    title: "Cybersecurity has a marketing problem.",
  },
  {
    slug: "security-architecture-review",
    title: "Most developers think a security architecture review is about finding vulnerabilities. It isn't.",
  },
]

export function getPostOgMetadataBySlug(slug: string) {
  return postOgMetadata.find((post) => post.slug === slug)
}
