var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool: "source-map",
    entry: './index.js',
    output: {
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime', 'transform-decorators-legacy'],
                    presets: ['env', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            },
            {
                test: /\.styl$/,
                loader:'style-loader!css-loader?modules!stylus-loader',
            },
            {
                test: /\.(png|jpeg|gif|svg)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html', // 源模板文件
            filename: './index.html', //
        }),
    ]
}