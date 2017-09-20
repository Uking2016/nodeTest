//创建webpack.config.js
var webpack = require('webpack');
var devServer = require('webpack-dev-server');
module.exports = {
     entry:'./entry.js', //入口文件
      output:{
        path:__dirname,//我这里的路径是在lib文件夹下
        publicPath:"/lib/",//感谢@向前看*_*的指出，这个属性可以省略
        filename:'bundle.js'
      },
     resolve: {
        extensions: ['.js', '.jsx']
     },
     devServer:{
          historyApiFallback:true,
          hot:true,
          inline:true,
          progress:true,//报错无法识别，删除后也能正常刷新
      },
      plugins:[
          new webpack.DefinePlugin({
          'process.env.NODE.ENV':"development"
          }),
          new webpack.HotModuleReplacementPlugin()
      ],
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