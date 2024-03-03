/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-03-03 15:52:52
 * @LastEditors: lingshi
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/index.vue";
import Detail from "@/views/detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      children: [],
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
      children: [],
    },
  ],
});

export default router;
