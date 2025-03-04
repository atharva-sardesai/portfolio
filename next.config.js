/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; img-src 'self' data: https:; script-src 'none'; sandbox;",
  },
  output: 'standalone',
  distDir: '.next',
  // Ensure public directory is copied to the build output
  assetPrefix: '',
  publicRuntimeConfig: {
    staticFolder: '/public',
  }
}

module.exports = nextConfig