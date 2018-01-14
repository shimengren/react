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
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['env', 'react', 'stage-2']
            }
        }]
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
        contentBase:'build/index.html',
        port:8080,
    }
}