//创建webpack.config.js
var webpack = require('webpack');
module.exports = {
     entry:'./entry.js', //入口文件
     output:{
          //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
          path:__dirname, //输出位置
          filename:'build.js' //输入文件
     },
     resolve: {
        extensions: ['.js', '.jsx']
     },
     module: {
        loaders: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query:{
            presets:['react']
          }
        }, {
          test: /\.css$/,
          loader: 'style!css'
        }, {
          test: /\.less$/,
          loader: 'style!css!less'
        },{ 
          test: /\.(png|jpg)$/, 
          loader: 'url?limit=25000' 
        }]
      }
}