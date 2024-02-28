/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-02-22 15:59:48
 * @LastEditors: lingshi
 */

import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
