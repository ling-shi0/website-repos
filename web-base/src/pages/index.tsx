/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-13 19:08:16
 * @LastEditTime: 2024-02-14 14:32:09
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { ManualMenu } from '@/components/ManualMenu/index';
import styles from './index.module.scss';
import { useGetInfo } from '@/hooks/useGetInfo';
import defaultPng from '@/assets/default.png';

export default (props) => {
  const { menuConfig, accountInfo } = useGetInfo();

  return (
    <div
      class={styles.mainPage}
    >
      <div class={styles.leftPane}>
        <div class={styles.logo}>
          <img 
            src={accountInfo?.logo || defaultPng}
            width="60"
            height="40"
          />
        </div>
        <ManualMenu
          menuConfig={menuConfig}
        ></ManualMenu>
      </div>
      
    </div>
  )
}
