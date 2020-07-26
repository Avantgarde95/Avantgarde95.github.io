const path = require('path');
const {DefinePlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {homepage} = require('./package');

function getAbsolutePath(...paths) {
    return path.resolve(__dirname, ...paths);
}

module.exports = (env, argv) => {
    const isDebugMode = !argv || argv.mode === 'development';
    const srcDir = 'src';
    const outDir = 'docs';

    return {
        mode: 'development',
        entry: getAbsolutePath(srcDir, 'Main.tsx'),
        devtool: isDebugMode ? 'inline-source-map' : false,
        output: {
            path: getAbsolutePath(outDir),
            filename: '[name].[contenthash].js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            alias: {
                'react': 'preact/compat',
                'react-dom': 'preact/compat'
            },
            extensions: [
                '.ts', '.tsx', '.js',
                '.png', '.jpg', 'svg'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {loader: 'ts-loader'}
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    use: {loader: 'url-loader', options: {esModule: false, limit: 8192}}
                },
            ]
        },
        plugins: [
            new DefinePlugin({
                'process.env.PUBLIC_URL': isDebugMode ? JSON.stringify('') : JSON.stringify(homepage)
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: getAbsolutePath(srcDir, 'index.html'),
                filename: getAbsolutePath(outDir, 'index.html')
            })
        ]
    };
};
