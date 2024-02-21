/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-16 16:29:06
 * @LastEditTime: 2024-02-21 15:57:34
 * @LastEditors: lingshi
 */
import { useGetG_Config } from "@/hooks/useGetG_Config";
import { menuItemProps } from "@/types";

export const useGetMenu = (): menuItemProps[] => {
  const { workbenchMenu } = useGetG_Config();
  return workbenchMenu;
};
