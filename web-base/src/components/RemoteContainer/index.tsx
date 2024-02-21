/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-21 11:59:39
 * @LastEditTime: 2024-02-21 16:02:17
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { useGetG_Config } from '@/hooks/useGetG_Config';
import { useGetReqHost } from '@/hooks/useGetReqHost';
import WujieReact from 'wujie-react';
import type { appTypes, bundleTypes, menuItemProps } from '@/types';

export const loadRemoteApp: any = (info: appTypes | null | undefined) => {
  const host = useGetReqHost();
  const { bundle = [] } = useGetG_Config() || {};
  if (!info) return <div>暂无此应用哦～～～</div>;
  if (info.bundleName) {
    const res = bundle.filter((bun: bundleTypes) => bun.bundleName === info.bundleName);
    if (!res[0]) return <div>暂无此应用哦～～～</div>;
    const remoteUrl = host + res[0].url.replace("packages://", "");
    return (
      <WujieReact 
        width="100%"
        height="100%"
        name="react16"
        url={remoteUrl}
        sync={!remoteUrl}
        props={()=>{}}
      />
    )
  }
  return <div>123</div>
}

export const RemoteContainer = (props: any) => {
  const { apps = [] } = useGetG_Config() || {};
  const { menuConfig = [] } = props;

  const parseMenuInfo = (menuItem: menuItemProps) => {
    let { url = '' } = menuItem;
    if (url) {
      url = url.replace('app://', '');
      const app = apps.filter((ap: any) => ap.uuid === url)
      if (app.length) return app[0]
    }
    return null;
  }

  const generateContainer = () => {
    return menuConfig.map((item: menuItemProps) => (
      <Route path={`/${item.key}`} element={loadRemoteApp(parseMenuInfo(item))}></Route>
    ))
  }

  return (
    <Routes>
      {generateContainer()}
      {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
    </Routes>
  )
}