module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:rxjs/recommended',
      ],
      plugins: ['import', '@typescript-eslint'],
      settings: {
        angular: {
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
        'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
        'no-return-assign': 'off',
        'lines-between-class-members': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
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
