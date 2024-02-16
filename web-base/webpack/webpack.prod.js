/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:55:46
 * @LastEditTime: 2024-02-15 17:53:09
 * @LastEditors: lingshi
 */
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '!web-theme/',
        '!web-unity-service'
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
    })
  ]
})