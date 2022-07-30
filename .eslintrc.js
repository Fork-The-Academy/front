module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      module: true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0
  },
  ignorePatterns: ['src/test/*', './.nuxt'], // <<< ignore all files in test folder
}
