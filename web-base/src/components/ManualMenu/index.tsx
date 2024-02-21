/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-11 20:18:43
 * @LastEditTime: 2024-02-21 15:37:51
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { NavLink } from "react-router-dom";
import type { menuItemProps } from '@/types';
import { MenuItem } from '@/components/MenuItem';
import styles from './index.module.scss';

type menuProps = {
  menuConfig: menuItemProps[];
}

export const ManualMenu = (props: menuProps) => {

  const { menuConfig = [] } = props;

  // generate menu Item
  const generateMenuItem = () => {
    return (menuConfig || []).map((item: any) => 
      <NavLink key={item.key} to={`/${item.key}`}>
        <MenuItem >{item.title}</MenuItem>
      </NavLink>
    )
  }

  return (
    <div 
      className={styles.menuWrap}
    >
      {generateMenuItem()}
    </div>
  );
}
