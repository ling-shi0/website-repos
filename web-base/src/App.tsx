/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:47:36
 * @LastEditTime: 2024-02-13 19:12:02
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { WorkbenchContext } from './store';
import IndexPage from './pages/index';

export default () => {
  return (
    <WorkbenchContext.Provider
      value={{}}
    >
      <IndexPage />
    </WorkbenchContext.Provider>
  )
}
