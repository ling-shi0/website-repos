/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-02-29 16:32:01
 * @LastEditors: lingshi
 */
/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: ComponentOptions | ComponentOptions["setup"];
  export default component;
}
