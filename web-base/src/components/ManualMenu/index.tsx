/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-11 20:18:43
 * @LastEditTime: 2024-02-13 21:17:55
 * @LastEditors: lingshi
 */
import * as React from 'react';
import type { menuItemProps } from '@/components/MenuItem';
import styles from './index.module.scss';

type menuProps = {
  menuConfig: menuItemProps;
}

export const ManualMenu = (props: menuProps) => {
  return (
    <div 
      class={styles.menuWrap}
    >
      123
    </div>
  );
}
