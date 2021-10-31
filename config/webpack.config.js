const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopmentMode = !argv || argv.mode === 'development';

    // ==============================================
    // Paths.

    const rootPath = path.resolve(__dirname, '..');
    const srcPath = path.join(rootPath, 'src');
    const outPath = path.join(rootPath, 'docs');

    // ==============================================
    // webpack-dev-server rules.

    const serverIP = '0.0.0.0';
    const localIP = '127.0.0.1';
    const serverPort = 8080;

    // ==============================================
    // Loader rules.

    const ts2js = 'ts-loader';

    const js2js = {
        loader: 'babel-loader', options: {
            presets: ['@babel/preset-env']
        }
    };

    const sass2css = 'sass-loader';

    const css2css = {
        loader: 'css-loader', options: {
            modules: {
                auto: filePath => !filePath.includes('node_modules') && !filePath.includes('dist'),
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
        }
    };

    const css2file = MiniCssExtractPlugin.loader;

    // ==============================================
    // Aliases & externals.

    const alias = {};

    // ==============================================
    // Final configuration.

    return {
        entry: path.join(srcPath, 'index.tsx'),
        devtool: isDevelopmentMode ? 'inline-source-map' : false,
        target: ['web', 'es3'],
        output: {
            path: outPath,
            filename: '[name].[contenthash].js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            alias: alias,
            modules: ['node_modules', srcPath],
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                { test: /\.tsx?/, use: [ts2js] },
                // Exclude core-js from babel's targets.
                // https://github.com/zloirock/core-js/issues/514
                { test: /\.m?js$/, use: [js2js], exclude: path.join(rootPath, 'node_modules', 'core-js') },
                { test: /\.(css|scss)$/, use: [css2file, css2css, sass2css] },
                { test: /\.(png|jpg|gif|svg)$/, type: 'asset/resource' }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(srcPath, 'Template.html'),
                filename: path.join(outPath, 'index.html')
            })
        ],
        devServer: {
            host: serverIP,
            port: serverPort,
            hot: true,
            open: {
                target: `http://${localIP}:${serverPort}`
            },
            historyApiFallback: {
                disableDotRule: true,
            },
            devMiddleware: {
                // webpack-dev-server doesn't write the files on the disk by default.
                // But we have to write the result HTML file to the disk, so we turn on this option.
                writeToDisk: true
            },
            static: {
                directory: outPath
            }
        }
    };
};
