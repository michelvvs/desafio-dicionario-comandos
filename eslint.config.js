import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import _import from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ),
  {
    plugins: {
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      '@typescript-eslint': typescriptEslint,
      tailwindcss,
      import: fixupPluginRules(_import)
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 11,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-expressions': 'off',

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error']
        }
      ],

      'import/first': 'error',

      'import/order': [
        'error',
        {
          'newlines-between': 'always',

          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ],

          pathGroups: [
            {
              pattern: 'react',

              patternOptions: {
                partial: true,
                nocomment: true
              },

              group: 'external'
            },
            {
              pattern: '~/constants/**',

              patternOptions: {
                partial: true,
                nocomment: true
              },

              group: 'internal'
            },
            {
              pattern: '~/utils/**',

              patternOptions: {
                partial: true,
                nocomment: true
              },

              group: 'internal'
            },
            {
              pattern: '~/routes/**',

              patternOptions: {
                partial: true,
                nocomment: true
              },

              group: 'internal'
            },
            {
              pattern: '~/pages/**',

              patternOptions: {
                partial: true,
                nocomment: true
              },

              group: 'internal'
            },
            {
              pattern: '~/components/**',

              patternOptions: {
                partial: true,
                nocomment: true
              },

              group: 'internal'
            },
            {
              pattern: '~/styles/**',

              patternOptions: {
                partial: true,
                nocomment: true
              },

              group: 'internal'
            }
          ],

          pathGroupsExcludedImportTypes: ['builtin'],

          alphabetize: {
            order: 'asc'
          }
        }
      ],

      'sort-imports': [
        'warn',
        {
          ignoreDeclarationSort: true
        }
      ]
    }
  }
]
