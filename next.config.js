/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
    unoptimized : true
  },
    trailingSlash: true,
   // assetPrefix: './',
  // output: 'export',
  // distDir: 'dist',

}

module.exports = nextConfig
