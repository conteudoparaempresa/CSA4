/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Não usar unoptimized em produção
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Otimização para navegadores modernos
  experimental: {
    // Habilita o streaming SSR
    serverActions: true,
    // Otimização para navegadores modernos
    browsersListForSwc: true,
    // Reduza o tamanho do JS
    optimizeCss: true,
    // Mais otimizações
    optimizePackageImports: [
      'lucide-react',
      '@hookform/resolvers',
      'react-hook-form',
    ],
  },
  // Otimização para navegadores modernos via configuração do webpack
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['next/babel', { 'preset-env': { targets: { esmodules: true } } }]
          ]
        }
      }
    });
    
    return config;
  },
}

export default nextConfig
