/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-02-29 16:05:11
 * @LastEditors: lingshi
 */
import { fileURLToPath, URL } from "node:url";
import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(
      __dirname,
      "../../web-repos-build-result/package/web-sub-tech"
    ),
    rollupOptions: {
      output: {
        entryFileNames: "static/js/index.js",
        assetFileNames: (assetInfo: any) => {
          if (
            assetInfo.type === "asset" &&
            /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name)
          ) {
            return "static/img/[name].[hash][ext]";
          }
          if (
            assetInfo.type === "asset" &&
            /\.(ttf|woff|woff2|eot)$/i.test(assetInfo.name)
          ) {
            return "static/fonts/[name].[hash][ext]";
          }
          return "static/[ext]/index.[ext]";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
