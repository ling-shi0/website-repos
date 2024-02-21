/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-21 14:11:17
 * @LastEditTime: 2024-02-21 16:04:34
 * @LastEditors: lingshi
 */
import { useGetG_Config } from "@/hooks/useGetG_Config";

export const useGetReqHost = () => {
  const { baseFileHost = "" } = useGetG_Config() || {};
  if ((window as any).__SERVER_ENV__ === "development") {
    return "/packages/";
  }
  return baseFileHost;
};
