const jsdocContexts = [
    'FunctionDeclaration',
    'MethodDefinition',
    'ClassDeclaration',
    'FunctionExpression',
    'TSInterfaceDeclaration',
    'TSTypeAliasDeclaration'
];

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jsdoc'
    ],
    extends: [
        'next/core-web-vitals',
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
                moduleDirectory: ['node_modules', 'src/']
            }
        }
    },
    rules: {
        'prettier/prettier': ['error', {
            singleQuote: true,
            semi: true,
            useTabs: false,
            tabWidth: 4,
            printWidth: 120,
            arrowParens: 'avoid',
            endOfLine: 'auto'
        }],
        // Fix "'React' was used before it was defined" error.
        // https://stackoverflow.com/a/64024916/2804329
        'no-use-before-define': 'off',
        // Allow modifying the properties of the parameter.
        // (We need this because of Redux toolkit.)
        'no-param-reassign': ['error', {
            props: false
        }],
        'jsdoc/require-jsdoc': ['error', {
            publicOnly: false,
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                FunctionExpression: true,
                ArrowFunctionExpression: false
            },
            contexts: jsdocContexts
        }],
        'jsdoc/require-description': 'error',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-param-description': 'error',
        'jsdoc/check-param-names': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true
        }],
        // Allow omitting the file extensions when importing the files.
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],
        //'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': [1, {
            extensions: ['.tsx']
        }],
        // Allow {} when setting the DOM attributes.
        'react/jsx-curly-brace-presence': 'off',
        'react/function-component-definition': [2, {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
        }],
        // Allow using the optional properties instead of defaultProps.
        // https://github.com/yannickcr/eslint-plugin-react/issues/1433
        'react/require-default-props': 'off',
        // Allow wrapping a expression using fragment.
        'react/jsx-no-useless-fragment': [2, {
            allowExpressions: true
        }],
        // Allow putting href to Next <Link/> instead of <a/>.
        'jsx-a11y/anchor-is-valid': ['error', {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton']
        }],
        // Allow using <img/> instead of Next <Image/>.
        '@next/next/no-img-element': 'off'
    }
};
