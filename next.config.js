/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: { // # how to use : process.env.keyXYZ
    domain: "https://pc-sa.ch",
    api: "https://cms.pc-sa.ch",
    bearer: "syMIEC9W_nDrIdxhgjxfQSxZUZFB6g-f",
  }
};

module.exports = nextConfig;
