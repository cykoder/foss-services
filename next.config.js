/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/sqr',
        destination: '/api/smartqr',
      },
      {
        source: '/qr',
        destination: '/api/smartqr/qr',
      },
    ]
  },
}

module.exports = nextConfig
