import globals from 'globals'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import ts from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...ts.configs.recommended,
  prettier,
  {
    ignores: ['.next', 'dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 2024,
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
      'react/no-unknown-property': 'off',
      'no-multi-str': 'warn',
      'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
      'arrow-body-style': ['warn', 'as-needed'],
      'implicit-arrow-linebreak': ['warn', 'beside'],
      'prefer-arrow-callback': ['warn'],
      'padded-blocks': ['warn', { blocks: 'never', classes: 'never', switches: 'never' }],
    },
  },
]
