import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ]
  },
  ...(() => {
    const nextConfig = {
      compiler: {
        styledComponents: true,
      },
    }
    return nextConfig
  })(),
}

export default nextConfig
