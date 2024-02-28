/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:47:36
 * @LastEditTime: 2024-02-28 21:23:07
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter as Router } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { useGetThemeServices } from '@/hooks/useGetThemeServices';
import { WorkbenchContext } from './store';
import IndexPage from './pages/index';

export default () => {
  const themeService = useGetThemeServices();
  const [currentTheme, setCurrentTheme] = useState('blue');
  const [antdTheme, setAntdTheme] = useState({
    colorPrimary: '#409eFF',
    colorBgContainer: 'rgba(140,196,255, 0.4)',
  });

  const themeMap = {
    colorPrimary: '--primary-color',
    colorBgContainer: '--primary-color-2',
    colorBorderSecondary: '--primary-color'
  }

  // 针对 antd的换肤
  useEffect(() => {
    setAntdTheme((getCurrentTheme() || {}));
  }, [currentTheme]);

  const getCurrentTheme = () => {
    const theme = themeService.getCurrentTheme();
    const res = {};
    for(let i in themeMap) {
      res[i] = theme[themeMap[i]];
    }
    return res;
  }

  const switchTheme = (newTheme: string) => {
    themeService.switchTheme(newTheme);
    setCurrentTheme(newTheme);
  }

  return (
    <WorkbenchContext.Provider
      value={{
        switchTheme,
        currentTheme
      }}
    >
      <ConfigProvider 
        theme={{
          token: {
            ...(antdTheme || {}),
            controlHeightLG: '60',
            primaryShadow: 'none'
          },
        }}
      >
        <Router>
          <IndexPage />
        </Router>
      </ConfigProvider>
    </WorkbenchContext.Provider>
  )
}
