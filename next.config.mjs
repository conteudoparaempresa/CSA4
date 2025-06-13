/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Mantendo a configuração original
    unoptimized: true,
  },
  // Removendo configurações experimentais problemáticas
}

export default nextConfig
