import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
    typedRoutes: true,
    ppr: true,
    dynamicIO: true,
    reactCompiler: true,
  },
}

export default nextConfig
