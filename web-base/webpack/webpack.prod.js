/*
 * @Description:
 * @Author: lingshi
 * @Date: 2023-12-24 15:55:46
 * @LastEditTime: 2024-02-21 14:34:13
 * @LastEditors: lingshi
 */
const webpack = require("webpack");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // 模式，当前为开发模式，还有个生产模式，生产模式会自动压缩编译后代码到一行
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!web-theme/", "!web-unity-service"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin({
      SERVER_ENV: "production",
    }),
  ],
  externals: {
    antd: "antd",
  },
});
