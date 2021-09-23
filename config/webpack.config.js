const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const outPath = path.join(rootPath, 'docs');

const serverIP = '0.0.0.0';
const localIP = '127.0.0.1';
const serverPort = 8080;

const tsRule = { use: 'ts-loader' };

const scssRule = {
    use: [
        // Code -> File.
        MiniCssExtractPlugin.loader,
        // CSS -> CSS module.
        {
            loader: 'css-loader', options: {
                modules: {
                    mode: 'local',
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
            }
        },
        // SASS -> CSS.
        'sass-loader'
    ]
};

module.exports = (env, argv) => {
    const isDevelopmentMode = !argv || argv.mode === 'development';

    return {
        mode: 'development',
        entry: path.join(srcPath, 'Main.tsx'),
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
            modules: ['node_modules', srcPath],
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                { test: /\.tsx?$/, ...tsRule },
                { test: /\.(css|scss)$/, ...scssRule }
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
