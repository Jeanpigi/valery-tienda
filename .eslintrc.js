module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-len': 'off',
    'no-return-await': 'off',
    'react/jsx-props-no-spreading': 'off',
    'new-cap': 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'react/button-has-type': 'off',
    'default-case': 'off',
    'import/no-extraneous-dependencies': 'off',
    'arrow-body-style': 'off',
    'no-shadow': 'off',
    'prefer-const': 'off',
    'jsx-a11y/alt-text': 'off',
    'consistent-return': 'off'
  },
};
