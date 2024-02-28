/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-02-26 22:28:18
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
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
