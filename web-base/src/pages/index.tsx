/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-13 19:08:16
 * @LastEditTime: 2024-02-28 21:52:20
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { ManualMenu } from '@/components/ManualMenu/index';
import { NavTabs } from '@/components/NavTabs';
import { RemoteContainer } from '@/components/RemoteContainer';
import { ExtensionsSpan } from '@/components/ExtensionsSpan';
import { useGetMenu } from '@/hooks/useGetMunu';
import styles from './index.module.scss';

export default (props) => {
  const menuConfig = useGetMenu();
  const [activeKey, setActiveKey] = useState<string>('technology');

  return (
    <div
      className={styles.mainPage}
    >
      <div className={styles.leftPane}>
        <div className={cn(styles.logo, styles.section)}>
          小铭
        </div>
        <div
          className={cn(styles.menu, styles.section)}
        >
          <ManualMenu
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            menuConfig={menuConfig}
          />
        </div>
      </div>
      <div className={styles.rightPane}>
        <div className={cn(styles.tabs, styles.section)}>
          <NavTabs 
            activeKey={activeKey} 
            setActiveKey={setActiveKey}
            menuConfig={menuConfig}
          />
          <ExtensionsSpan />
        </div>
        <div className={cn(styles.contentContainer, styles.section)}>
          <RemoteContainer menuConfig={menuConfig} />
        </div>
      </div>
    </div>
  )
}
