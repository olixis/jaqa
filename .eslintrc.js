module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
    '__THEME': true,
    'cordova': true,
    'Velocity': true,
    'DEFAULTS': true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0, // allow paren-less arrow functions
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
    'brace-style': [2, 'stroustrup', {'allowSingleLine': true}],
    'semi': [0, 'never'],
    'indent': 2
  }
};
