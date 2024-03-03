/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-29 17:20:23
 * @LastEditTime: 2024-02-29 17:29:04
 * @LastEditors: lingshi
 */
export declare enum labelEnums {
  Frontend = "前端",
  Constructor = "架构",
  ComputerScience = "计算机基础",
}

export declare type postItemType = {
  postTitle: string;
  fileUrl: string;
  description: string;
  label: labelEnums;
  key: string;
};
