/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
  compression: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  optimizeFonts: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

export default nextConfig
