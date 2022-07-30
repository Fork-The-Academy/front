module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'standard'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true
    }
  },
  plugins: ['vue'],
  globals: {
    $nuxt: true
  },
  rules: {
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-unused-components': 1,
    'vue/require-prop-type-constructor': 1,
    'vue/no-reserved-component-names': 1
  },
  ignorePatterns: ['src/test/*', './.nuxt'] // <<< ignore all files in test folder
}
