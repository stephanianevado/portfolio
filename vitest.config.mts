import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const root = import.meta.dirname

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    css: false,
    include: ['**/*.test.ts', '**/*.test.tsx'],
    exclude: ['**/node_modules/**', '**/.next/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['components/**/*.{ts,tsx}', 'utils/**/*.{ts,tsx}'],
      exclude: [
        '**/*.d.ts',
        '**/*.test.{ts,tsx}',
        'components/animations/**',
        'components/icons/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(root, '.'),
      components: path.resolve(root, 'components'),
      i18n: path.resolve(root, 'i18n'),
      messages: path.resolve(root, 'messages'),
      public: path.resolve(root, 'public'),
      types: path.resolve(root, 'types'),
      utils: path.resolve(root, 'utils'),
      test: path.resolve(root, 'test'),
    },
  },
})

