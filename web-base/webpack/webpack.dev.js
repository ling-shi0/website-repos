/*
 * @Description:
 * @Author: lingshi
 * @Date: 2023-12-24 15:55:46
 * @LastEditTime: 2024-02-21 15:09:25
 * @LastEditors: lingshi
 */
const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development", // 模式，当前为开发模式，还有个生产模式，生产模式会自动压缩编译后代码到一行
  plugins: [
    new webpack.DefinePlugin({
      SERVER_ENV: JSON.stringify("development"),
    }),
  ],
  devServer: {
    host: "127.0.0.1",
    static: {
      directory: path.resolve(__dirname, "../public"), //借助devServer生成服务器放到目录下，但是目录下看不到任何东西，在内存中，这样可以提升速度
    },
    compress: true,
    port: 8088,
    open: true,
  },
});
