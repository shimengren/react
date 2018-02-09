// 练习采用webpack-dev-middleware + express 来进行资源打包和项目的热更新
 var express = require('express');
 var app = express();
 var path = require('path');
 var webpack = require('webpack');
 var webpackDevConfig = require('./webpack.dev.config.js');
 var compiler = webpack(webpackDevConfig);
 var webpackDevMiddle = require('webpack-dev-middleware');
 var fs = require('fs');


 app.use(webpackDevMiddle(compiler, {
     publicPath: webpackDevConfig.output.publicPath,
     quiet: true,
 }));

 app.get('／',function(req, res){
     var fileName = path.join(__dirname, '/template.html')
     compiler.outputFileSystem.readFile(fileName, (err, result) =>{
         res.set('content-type', 'text/html')
         res.send(result)
         res.end()
     })
 });

 app.listen(3000);








