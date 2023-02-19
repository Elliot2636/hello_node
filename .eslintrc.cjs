module.exports = {
  env: {
    browser: false,
    node: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb-base',
      'airbnb-typescript/base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-console': 'off'
  }
};
