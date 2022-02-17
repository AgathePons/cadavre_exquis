module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    indent: ['error', 2],
    'no-console': 'off',
    'no-restricted-globals': 'off',
    'max-len': [2, 120, 4],
  },
  overrides: [
    {
      files: '**/*.test.js',
      env: {
        'jest/globals': true,
      },
      plugins: ['jest'],
      rules: {
        'node/no-unpublished-require': 0,
        'node/no-missing-require': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
