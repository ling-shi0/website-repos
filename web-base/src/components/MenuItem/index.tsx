/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-11 21:02:58
 * @LastEditTime: 2024-02-26 00:12:27
 * @LastEditors: lingshi
 */
import * as React from 'react';
import type { menuItemProps } from '@/types';
import cn from 'classnames';
import styles from './index.module.scss';


export const MenuItem = (props: React.PropsWithChildren<menuItemProps>) => {
  return (
    <div className={cn(styles.menuItem, props.active ? styles.active : '')}>
      {props.children}
    </div>
  )
}
