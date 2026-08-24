import type { NextConfig } from 'next'

import path from 'node:path'


const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
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
}

export default nextConfig
