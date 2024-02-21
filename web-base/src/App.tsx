/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:47:36
 * @LastEditTime: 2024-02-21 11:44:37
 * @LastEditors: lingshi
 */
import * as React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { WorkbenchContext } from './store';
import IndexPage from './pages/index';

export default () => {
  return (
    <WorkbenchContext.Provider
      value={{}}
    >
      <Router>
        <IndexPage />
      </Router>
    </WorkbenchContext.Provider>
  )
}
