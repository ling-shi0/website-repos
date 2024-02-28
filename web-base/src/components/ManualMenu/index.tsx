/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-11 20:18:43
 * @LastEditTime: 2024-02-26 21:22:50
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import type { menuItemProps } from '@/types';
import { MenuItem } from '@/components/MenuItem';
import styles from './index.module.scss';

type menuProps = {
  menuConfig: menuItemProps[];
  activeKey: string;
  setActiveKey: (string) => {};
}

export const ManualMenu = (props: menuProps) => {
  const { menuConfig = [], setActiveKey, activeKey } = props;

  // generate menu Item
  const generateMenuItem = () => {
    return (menuConfig || []).filter(menu => !menu.hidden).map((item: any) => 
      <NavLink 
        key={item.key} 
        to={`/${item.key}`} 
        onClick={() => {
          setActiveKey(item.key)
        }}>
        <MenuItem 
          active={activeKey === item.key}
        >{item.title}</MenuItem>
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
