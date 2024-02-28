/*
 * @Description:
 * @Author: lingshi
 * @Date: 2023-12-24 15:55:46
 * @LastEditTime: 2024-02-25 21:11:58
 * @LastEditors: lingshi
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    // theme: '',
    bundle: "./src/index.tsx",
  },
  module: {
    rules: [
      // 处理 ts的 loader
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // 处理 css的 loader
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      // 处理图片的 loader
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".less", ".scss"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../web-repos-build-result"),
  },
};
