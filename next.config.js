/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/cyber-portfolio', // Replace with your repository name
  assetPrefix: '/cyber-portfolio/', // Replace with your repository name
}

module.exports = nextConfig 