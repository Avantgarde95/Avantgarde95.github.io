module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jsdoc'
    ],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:jsdoc/recommended'
    ],
    ignorePatterns: ['node_modules/', 'src/**/*.css.d.ts', 'src/**/*.scss.d.ts'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
                moduleDirectory: ['node_modules', 'src/', 'src/module/']
            }
        }
    },
    rules: {
        'jsdoc/require-jsdoc': [
            'error',
            {
                'publicOnly': false,
                'require': {
                    'FunctionDeclaration': true,
                    'MethodDefinition': true,
                    'ClassDeclaration': true,
                    'FunctionExpression': true,
                    'ArrowFunctionExpression': false
                },
                'contexts': [
                    'TSInterfaceDeclaration',
                    'TSTypeAliasDeclaration'
                ]
            }
        ],
        'jsdoc/require-description': 'error',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-param-description': 'error',
        'jsdoc/check-param-names': 'off',
        'react/jsx-filename-extension': [1, {
            extensions: ['.tsx']
        }],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
        }],
        // Allow {} when setting the DOM attributes.
        'react/jsx-curly-brace-presence': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 4,
                printWidth: 120,
                arrowParens: 'avoid',
                endOfLine: 'auto'
            }
        ],
        // Allow omitting the file extensions when importing the files.
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never'
            }
        ],
        // Fix "'React' was used before it was defined" error. (https://stackoverflow.com/a/64024916/2804329)
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        // Allow inferring return and argument types from the functions.
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // Allow using the optional properties instead of defaultProps. (https://github.com/yannickcr/eslint-plugin-react/issues/1433)
        'react/require-default-props': 'off',
        'consistent-return': 'off',
        'default-case': 'off',
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': 'off'
    }
};
