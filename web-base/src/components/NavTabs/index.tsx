/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-20 14:09:22
 * @LastEditTime: 2024-02-21 12:42:31
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
// import { bus, setupApp, preloadApp, startApp, destroyApp } from "wujie-react";


type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

export const NavTabs = () => {
  const [activeTab, setActiveTab] = useState<String>('');
  const [tabs, setTabs] = useState<TabsProps[]>([]);

  
  const selectTab = (key: String) => {
    setActiveTab(key);
  }

  const openNewTab = () => {

  }

  const deleteTab = (targetKey: TargetKey) => {

  }

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      openNewTab();
    } else {
      deleteTab(targetKey);
    }
  };

  return (
    <Tabs
      hideAdd
      onChange={selectTab}
      activeKey={activeTab}
      type="editable-card"
      onEdit={onEdit}
      items={tabs}
    />
  );
}