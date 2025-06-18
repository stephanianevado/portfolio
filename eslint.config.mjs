import next from '@next/eslint-plugin-next'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import _import from 'eslint-plugin-import'
import react from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsParser,
    },

    plugins: {
      '@next/next': next,
      '@typescript-eslint': typescript,
      import: _import,
      react: react,
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },

    rules: {
      ...next.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'react/no-unescaped-entities': 'warn',
      'react/prop-types': 'warn',
      'react/display-name': 'off',
      'import/no-unresolved': 'error',
      'no-sparse-arrays': 'off',
      'no-useless-escape': 'off',
      'no-useless-catch': 'warn',
      'no-console': 'error',
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore',
        },
      ],
      'prefer-const': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          groups: [
            'external',
            'builtin',
            'internal',
            ['parent', 'sibling'],
            'index',
          ],
          'newlines-between': 'always-and-inside-groups',
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'builtin',
              position: 'after',
            },
            {
              pattern: 'styled-components',
              group: 'builtin',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
    },
  },
]
