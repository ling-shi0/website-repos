/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-02-22 16:22:56
 * @LastEditors: lingshi
 */
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: null,
      children: [],
    },
  ],
});

export default router;
