var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var devServer = require('webpack-dev-server');

module.exports={
    devtool: "source-map",
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
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
    plugins:[
        new HtmlWebpackPlugin({
            template: './template.html', // 源模板文件
            filename: './index.html', //
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot:true,
        inline:true,
        port:8090,
        historyApiFallback: true
    }
}