/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-03-02 23:40:46
 * @LastEditors: lingshi
 */

import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router";

import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
