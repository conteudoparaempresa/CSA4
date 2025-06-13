/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Otimização de imagens
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 ano
    unoptimized: false, // Habilitar otimização de imagens
  },
  // Otimizações de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Otimização de pacotes
    optimizePackageImports: ['lucide-react'],
  },
  // Configurações de cache
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
