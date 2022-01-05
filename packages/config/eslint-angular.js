module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      // parserOptions: {
      //   project: ['tsconfig.json'],
      //   createDefaultProgram: true,
      // },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
      ],
      plugins: ['import', '@typescript-eslint'],
      settings: {
        next: {
          rootDir: ['apps/documentation/'],
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
      },
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
  ignorePatterns: ['projects/**/*', 'node_modules', '.turbo'],
};
