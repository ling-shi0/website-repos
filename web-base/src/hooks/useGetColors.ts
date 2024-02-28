/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-27 13:23:39
 * @LastEditTime: 2024-02-28 14:13:43
 * @LastEditors: lingshi
 */
import { useGetThemeServices } from "./useGetThemeServices";

export const useGetColors = (): any => {
  const themeController = useGetThemeServices();
  return themeController.getThemeLists();
};
