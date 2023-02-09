const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin'); // remove LICENSE files from ./build


module.exports = (_, argv) => {
    const isProductionMode = argv.mode === 'production';
    return {
        mode: argv.mode,
        entry: path.resolve(__dirname, 'src/index.js'),
        devtool: isProductionMode ? false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: isProductionMode ? '[name].[contenthash:8].js' : '[name].js',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                src: path.resolve(__dirname, 'src'),
            },
        },
        optimization: {
            minimizer: [
                new TerserJSPlugin({
                    extractComments: false, // to remove files ending in `.LICENSE`.
                }),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[local]_[hash:base64:4]',
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif)/,
                    type: 'asset/resource',
                    generator: {
                        filename: `assets/[name].${isProductionMode ? '[contenthash:5]' : ''}[ext]`,
                    },
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(mp3)$/i,
                    loader: 'file-loader',
                    options: {
                        name: 'audio/[name].[ext]',
                    },
                },

            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html')
            }),
            new MiniCSSExtractPlugin({
                filename: isProductionMode ? '[name].[contenthash:8].css' : '[name].css',
            }),
        ],
    };
};
