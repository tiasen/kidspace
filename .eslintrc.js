module.exports = {
  extends: ['taro/react', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    semi: 'error',
  },
};
