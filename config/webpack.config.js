const path = require('path');

const SveltePreprocess = require('svelte-preprocess');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopmentMode = !argv || argv.mode === 'development';

    const rootPath = path.resolve(__dirname, '..');
    const srcPath = path.join(rootPath, 'src');
    const outPath = path.join(rootPath, 'docs');

    const serverIP = '0.0.0.0';
    const localIP = '127.0.0.1';
    const serverPort = 8080;

    const tsRule = { use: 'ts-loader' };

    const svelteRule = {
        use: {
            loader: 'svelte-loader', options: {
                preprocess: SveltePreprocess({ scss: true }),
                emitCss: true,
                compilerOptions: {
                    dev: isDevelopmentMode
                }
            }
        }
    };

    const styleRule = {
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader', options: {
                    url: false
                }
            }
        ]
    };

    const imageRule = { type: 'asset/resource' };

    return {
        mode: 'development',
        entry: path.join(srcPath, 'Main.ts'),
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
            alias: {
                'react': 'preact/compat',
                'react-dom': 'preact/compat'
            },
            modules: ['node_modules', srcPath],
            extensions: ['.ts', '.js', '.svelte']
        },
        module: {
            rules: [
                { test: /\.ts$/, ...tsRule },
                { test: /\.svelte$/, ...svelteRule },
                { test: /\.css$/, ...styleRule },
                { test: /\.(png|jpg|gif|svg)$/, ...imageRule }
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
