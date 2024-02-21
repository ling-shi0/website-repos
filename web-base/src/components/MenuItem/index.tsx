/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-11 21:02:58
 * @LastEditTime: 2024-02-21 15:37:09
 * @LastEditors: lingshi
 */
import * as React from 'react';
import type { menuItemProps } from '@/types';


export const MenuItem = (props: React.PropsWithChildren<menuItemProps>) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
