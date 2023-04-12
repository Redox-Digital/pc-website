/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized : true
  },
    trailingSlash: true,
   // assetPrefix: './',
  // output: 'export',
  // distDir: 'dist',

  async rewrites() {
    return [
      {
        source: "/my_external_api",
        destination: "https://email.redoxdigital.ch",
      },
    ];
  },

}

module.exports = nextConfig
