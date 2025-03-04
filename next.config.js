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
        hostname: 'cdn-images-1.medium.com',
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
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; frame-src 'self'; script-src 'none'; sandbox;",
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