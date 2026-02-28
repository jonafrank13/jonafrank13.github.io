module.exports = {
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    'plugin:vue/vue3-essential'
  ],

  plugins: [
    'vue'
  ],

  globals: {
    'ga': true,
    'cordova': true,
    '__statics': true,
    '__QUASAR_SSR__': true,
    '__QUASAR_SSR_SERVER__': true,
    '__QUASAR_SSR_CLIENT__': true,
    '__QUASAR_SSR_PWA__': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  rules: {
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
