/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // ✅ boolean nahi, object hona chahiye
  },
  transpilePackages: ['@clerk/nextjs'],
}

export default nextConfig
