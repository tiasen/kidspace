module.exports = {
  extends: [
    'taro/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    semi: 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/first': [ 'off', 'absolute-first' ]
  },
};
