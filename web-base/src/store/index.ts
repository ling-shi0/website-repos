/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-11 21:33:37
 * @LastEditTime: 2024-02-28 15:55:16
 * @LastEditors: lingshi
 */
import * as React from "react";
import { CONSTANT } from "./action";

export const globalContext = {
  userInfo: {},
  workbenchInfo: {},
  switchTheme: () => {},
  currentTheme: "",
};

export const WorkbenchContext = React.createContext<{
  state: typeof globalContext;
  dispatch: React.Dispatch<{
    type: CONSTANT;
    data: any;
  }>;
}>({
  state: globalContext,
  dispatch: () => {
    throw new Error("Dispatch Must be called within the component");
  },
});
