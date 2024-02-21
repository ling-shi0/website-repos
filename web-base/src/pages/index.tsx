/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-13 19:08:16
 * @LastEditTime: 2024-02-21 13:15:55
 * @LastEditors: lingshi
 */
import * as React from 'react';
import cn from 'classnames';
import { ManualMenu } from '@/components/ManualMenu/index';
import { NavTabs } from '@/components/NavTabs';
import { RemoteContainer } from '@/components/RemoteContainer'; 
import styles from './index.module.scss';
import { useGetMenu } from '@/hooks/useGetMunu';
import { useGetG_Config } from '@/hooks/useGetG_Config';
import defaultPng from '@/assets/default.png';

export default (props) => {
  const menuConfig = useGetMenu();
  const g_config = useGetG_Config();
  const { accountInfo } = g_config;

  return (
    <div
      className={styles.mainPage}
    >
      <div className={styles.leftPane}>
        <div className={cn(styles.logo, styles.section)}>
          小铭
          <img 
            src={accountInfo?.logo || defaultPng}
            width="40"
            height="40"
          />
        </div>
        <div
          className={cn(styles.menu, styles.section)}
        >
          <ManualMenu
            menuConfig={menuConfig}
          />
        </div>
      </div>
      <div className={styles.rightPane}>
        <div className={cn(styles.tabs, styles.section)}>
          <NavTabs />
        </div>
        <div className={cn(styles.contentContainer, styles.section)}>
          <RemoteContainer menuConfig={menuConfig} />
        </div>
      </div>
    </div>
  )
}
