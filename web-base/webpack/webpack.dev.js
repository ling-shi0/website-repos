/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:55:46
 * @LastEditTime: 2024-02-15 18:12:39
 * @LastEditors: lingshi
 */
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  devServer:{
    host: '127.0.0.1',
    static: {
      directory: path.resolve(__dirname, '../public'), //借助devServer生成服务器放到目录下，但是目录下看不到任何东西，在内存中，这样可以提升速度
    },
    compress: true,
    port: 8088,
    open: true,  //可以自动打开网址不必手动打开
  },
})
