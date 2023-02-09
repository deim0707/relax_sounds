const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');



module.exports = (_, argv) => {
    const isProductionMode = argv.mode === 'production';
    return {
        mode: 'development',
        entry: '/src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProductionMode ? '[name].[contenthash:8].js' : '[name].js',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                src: path.resolve(__dirname, 'src'),
            },
        },
        devtool: isProductionMode && process.env.APP_ENV === 'prod' ? false : 'source-map',
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
                    test: /\.(mp3)/,
                    use: ['file-loader']
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
