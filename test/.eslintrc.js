module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        'max-len': [
          'error',
          {
            code: 80,
            ignoreTrailingComments: true,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
          },
        ],
        trailingComma: 'es5',
        semi: true,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: true,
      },
    ],
  },
};
