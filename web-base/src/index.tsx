/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:47:29
 * @LastEditTime: 2024-02-21 15:21:38
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

Object.defineProperty(window, '__SERVER_ENV__', {
  set() {
    console.log('禁止修改此值');
  },
  get() {
    return SERVER_ENV;
  },
})

root.render(<App />);