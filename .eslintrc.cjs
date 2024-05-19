/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jquery: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'simple-import-sort'],
  ignorePatterns: ['node_modules', 'assets/', '**/*.d.ts', '.eslintrc.cjs', 'vite.config.ts', 'postcss.config.cjs'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  globals: {
    // Global variables here
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['scripts'],
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Internal packages.
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    // no let exports
    'import/no-mutable-exports': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    // false negatives
    'import/namespace': ['off'],
    'no-irregular-whitespace': ['error'],
    // unsafe but handy
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    // allow empty interfaces
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react/no-unescaped-entities': 'off',
    // allow empty functions
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/require-await': 'off',
    // make sure to await inside try_catch
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // numbers and booleans are fine in the template strings
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

    'no-var': 'error',
    'no-console': 'warn',

    'prettier/prettier': 'error',
  },
};
