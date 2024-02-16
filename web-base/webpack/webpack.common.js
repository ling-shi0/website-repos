/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:55:46
 * @LastEditTime: 2024-02-15 17:48:40
 * @LastEditors: lingshi
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // 模式，当前为开发模式，还有个生产模式，生产模式会自动压缩编译后代码到一行
  entry: {
    // theme: '',
    bundle: './src/index.tsx'
  },
  module: {
    rules: [
      // 处理 ts的 loader
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // 处理 css的 loader
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      // 处理图片的 loader
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]', 
            outputPath: 'assets/' 
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
    })
  ],
  resolve:{
    // 打包的时候报错：Module not found :Error : can't resolve 'App'
    // 我们引入组件的时候，并没有加后缀(.tsx)，
    // 此配置会按顺序为我们找App.js App.jsx...找到就返回，找不到会报错
    alias: {
      '@': path.resolve(__dirname, "../src")
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.scss']
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../web-repos-build-result')
  }
}
