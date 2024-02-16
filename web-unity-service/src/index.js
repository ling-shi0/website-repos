/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-15 16:41:27
 * @LastEditTime: 2024-02-16 15:59:38
 * @LastEditors: lingshi
 */
import g_config from './g_config.json';
import { BootstrapConfigSymbol } from './symbols';

class BaseServices {

  constructor() {
    this.services = {};
    this.libServices = [];
    this.bootstrapConfigSymbol = BootstrapConfigSymbol;
    this.init();
  }

  init() {
    this.initConfig();
    this.initServices();
  }

  initServices() {
    const libServices = globalThis[this.bootstrapConfigSymbol].libs;
    (libServices || []).forEach((item) => {
      if(window[item] && window[item].getInstance) {
        this.services[item] = window[item].getInstance();
      } else {
        this.services[item] = window[item];
      }
    });
  }

  initConfig() {
    globalThis[this.bootstrapConfigSymbol] = g_config;
  }

  getServices(name) {
    return this.services[name];
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new BaseServices();
    }
    return this.instance;
  }
  
}

globalThis['web-base-services'] = BaseServices.getInstance();
