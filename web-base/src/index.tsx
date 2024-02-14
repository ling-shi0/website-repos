/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:47:29
 * @LastEditTime: 2024-01-14 16:36:19
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);