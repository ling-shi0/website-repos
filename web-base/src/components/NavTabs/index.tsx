/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-20 14:09:22
 * @LastEditTime: 2024-02-27 12:10:30
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { menuItemProps } from '@/types';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

export const NavTabs = (props: any) => {
  const [tabs, setTabs] = useState<TabsProps[]>([]);
  const navigate = useNavigate();
  const { setActiveKey, activeKey, menuConfig } = props;

  useEffect(() => {
    addNewTab(activeKey);
  }, [activeKey]);

  const addNewTab = (key) => {
    if (tabs.filter(tab => tab.key === key)[0]) {
      selectTab(key);
      return;
    }
    const result = (menuConfig || []).filter((menuItem: menuItemProps) => menuItem.key === key);
    if (result.length) {
      const newTabs = tabs.concat([
        {
          key,
          label: result[0].title
        }
      ]);
      setTabs(newTabs);
      navigate(result[0].key)
    }
  }

  const selectTab = (key: string) => {
    setActiveKey(key);
    navigate(key)
  }

  const openNewTab = () => {

  }

  const deleteTab = (targetKey: TargetKey) => {
    const newTabs = tabs.filter(tab => tab.key !== targetKey);
    if (newTabs.length) {
      navigate(newTabs[newTabs.length - 1].key);
    } else {
      navigate('/');
    }
    setTabs(newTabs);
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
      activeKey={activeKey}
      type="editable-card"
      onEdit={onEdit}
      items={tabs}
    />
  );
}