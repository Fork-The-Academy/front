module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
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
