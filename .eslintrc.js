module.exports = {
  extends: ['codingitwrong', 'airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['jest', 'react', 'cypress', 'prettier'],
  env: {
    'jest/globals': true,
    'cypress/globals': true,
    browser: true
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'import/no-default-export': 2
  }
};
