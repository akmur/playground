module.exports = {
  root: true,
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 9
  },
  rules: {
    'no-console': 0
  },
  sourceType: 'module'
}
