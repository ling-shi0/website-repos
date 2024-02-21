/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-12 18:09:40
 * @LastEditTime: 2024-02-21 15:42:00
 * @LastEditors: lingshi
 */
import { g_configTypes } from "@/types";

export const useGetG_Config = (): g_configTypes => {
  return globalThis["web-base-services"].getBootstrapConfig?.() || {};
};
