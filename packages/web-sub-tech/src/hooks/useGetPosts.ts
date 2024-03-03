/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-29 17:10:51
 * @LastEditTime: 2024-02-29 17:31:52
 * @LastEditors: lingshi
 */
// import {  } from 'vue';

export const useGetPosts = () => {
  return fetch("posts/web-sub-tech/index.json").then((res) => res.json());
};
