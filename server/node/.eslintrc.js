module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,

    // ESLINT RULES
    // https://eslint.org/docs/rules/
    // 'require-jsdoc': 0,
    // 'no-invalid-this': 0,
    // 'babel/new-cap': 0,
    // 'babel/camelcase': 0,
    // 'babel/no-invalid-this': 1,
    // 'babel/object-curly-spacing': 1,
    // 'babel/quotes': 0,
    // 'babel/semi': 1,
    // 'babel/no-unused-expressions': 1,
    // 'babel/valid-typeof': 1,
    'no-useless-catch': 'warn', // TODO: FIX, WAS 8 ERRORS
    'no-prototype-builtins': 'off',
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-match': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-irregular-whitespace': 'off',
    'no-fallthrough': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
        },
        block: {
          balanced: true,
        },
      },
    ],
    'valid-typeof': 'off',

    // ESLINT-PLUGIN-IMPORT
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-unresolved': 'off',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
          'unknown',
        ],
      },
    ],
  },
};
