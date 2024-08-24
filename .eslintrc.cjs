module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'react-refresh',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    'import/order': ['error', {
      groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
      'newlines-between': 'always',
      pathGroups: [{
        pattern: '@/**', group: 'internal', position: 'after',
      }],
      alphabetize: {
        order: 'asc', caseInsensitive: true,
      },
    }],
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true,
    }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alias: {
          map: [['@', './src']],
        },
      },
    },
    react: {
      version: 'detect',
    },
  },
};
