module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'node'],
  env: {
    node: true,
    mocha: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
}
