/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-27 11:49:09
 * @LastEditTime: 2024-02-28 22:33:16
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { useState, useContext } from 'react';
import { Button, Popover, Avatar, List } from 'antd';
import { BgColorsOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { useGetColors } from '@/hooks/useGetColors';
import { useGetG_Config } from '@/hooks/useGetG_Config';
import { WorkbenchContext } from '@/store';
import defaultPng from '@/assets/default.png'; 
import styles from './index.module.scss';

const ListItem: any = List.Item;

export const ExtensionsSpan = () => {
  const colors = useGetColors();
  const g_config = useGetG_Config();
  const { accountInfo } = g_config;
  const baseContext = useContext(WorkbenchContext);
  const { switchTheme = () => {}, currentTheme = 'blue' } = baseContext;

  // 换肤颜色切换列表
  const colorsContent = () => {
    return (colors || []).map(color => {
      return (
        <div className={styles.colorItemWrap} key={color.key} onClick={() => switchTheme(color.key)}>
          <div style={{ background: color.example }} className={styles.colorItem}>{color.title}</div>
          {(currentTheme === color.key) && <><CaretLeftOutlined style={{ color: color.example }}/> 当前</>} 
        </div>
      )
    })
  }

  const selfInfo = () => {
    return (
      <List
        size="small"
        header={null}
        footer={null}
        bordered
        dataSource={[]}
        renderItem={(item) => (<ListItem>{item}</ListItem>)}
      />
    );
  }

  return (
    <div className={styles.wrap}>
      <Popover content={colorsContent} title={null} trigger="click">
        <Button type="primary" shape="circle" icon={<BgColorsOutlined />} />
      </Popover>
      <Popover content={selfInfo} title={null} trigger="click">
        <Avatar className={styles.avatar} src={accountInfo?.logo || defaultPng} size={32} />
      </Popover>
      <div className={styles.weather}>天气</div>
    </div>
  )
}