/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["medium.com"],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: "https://v0-cybersecurity-portfolio-lovat.vercel.app",
  },
}

module.exports = nextConfig

