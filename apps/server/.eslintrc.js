module.exports = {
  extends: ['@vue-storefront/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['/*.*', 'lib/**/*.js', '**/*.js'],
  rules: {
    'unicorn/prefer-top-level-await': 'off',
  },
};
