import { ImageResponse } from "next/og"
import { getPostOgMetadataBySlug } from "@/lib/post-og-metadata"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostOgMetadataBySlug(slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1C1917",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#A09B95",
            textTransform: "uppercase",
          }}
        >
          ATHARVA SARDESAI
        </div>
        <div
          style={{
            fontFamily: "serif",
            fontSize: "64px",
            color: "#F5F1EB",
            lineHeight: 1.15,
            fontWeight: 700,
            maxWidth: "1000px",
          }}
        >
          {post?.title || "Enterprise Security"}
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#A09B95",
            letterSpacing: "0.05em",
          }}
        >
          atharvasardesai.com
        </div>
      </div>
    ),
    { ...size }
  )
}
