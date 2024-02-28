/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-28 13:01:49
 * @LastEditTime: 2024-02-28 13:04:00
 * @LastEditors: lingshi
 */

export const useGetThemeServices = () => {
  return (
    globalThis["web-base-services"]?.getServices?.("ThemeController") || {}
  );
};
