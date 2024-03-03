/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-03-03 15:06:45
 * @LastEditTime: 2024-03-03 15:17:34
 * @LastEditors: lingshi
 */
import { EventEmitter } from "@/utils/Bus";

export const useGetBusInstance = () => {
  return EventEmitter.getInstance();
};
