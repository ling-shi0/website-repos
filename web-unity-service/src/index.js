/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-15 16:41:27
 * @LastEditTime: 2024-02-28 14:08:05
 * @LastEditors: lingshi
 */
import RemoteModuleLoader from "./RemoteModuleLoader";
import g_config from "./g_config.json";
import { BootstrapConfigSymbol } from "./symbols";

class BaseServices {
  constructor() {
    this.services = {};
    this.libServices = [];
    this.libBindingQueue = [];
    this.bootstrapConfigSymbol = BootstrapConfigSymbol;
    this.bindingId = null;
    this.remoteLoader = new RemoteModuleLoader();
    this.init();
  }

  init() {
    this.initConfig();
    this.initServices();
  }

  initServices() {
    const libServices = globalThis[this.bootstrapConfigSymbol].libs;
    (libServices || []).forEach((libItem) => {
      if (libItem.type === "self") {
        // this.remoteLoader
        //   .loadRemoteLoader(libItem.libName, "/" + libItem.url)
        //   .then((e) => {
        //     console.log(e);
        //   });

        const libName = libItem.libName;
        if (window[libName] && window[libName].getInstance) {
          this.services[libName] = window[libName].getInstance();
        } else {
          this.services[libName] = window[libName];
        }
      } else {
        (libItem.resources || []).forEach((resItem) => {
          switch (resItem.type) {
            case "js": {
              this.bindScript2Dom(resItem.url);
              break;
            }
            case "css": {
              this.bindLink2Dom(resItem.url);
              break;
            }
            default: {
              console.warn("没有该类型文件的加载方式");
            }
          }
          // 会存在异步加载顺序对于主应用无法控制问题 需要后续研究如何配置或者写插件
          // const e = this.remoteLoader.loadRemoteLoader(
          //   libItem.libName,
          //   resItem.url
          // );
        });
      }
    });
  }

  initConfig() {
    globalThis[this.bootstrapConfigSymbol] = g_config;
  }

  getServices(name) {
    return this.services[name];
  }

  getBootstrapConfig() {
    return globalThis[this.bootstrapConfigSymbol];
  }

  bindScript2Dom(url) {
    const script = document.createElement("script");
    script.src = url;
    this.addBindQueue(script);
  }

  bindLink2Dom() {
    const link = document.createElement("link");
    link.href = url;
    this.addBindQueue(link);
  }

  addBindQueue(dom) {
    this.libBindingQueue.push(dom);
    if (this.bindingId !== null) {
      clearTimeout(this.bindingId);
    }
    this.bindingId = setTimeout(() => {
      this.validateAndAddDom();
    }, 0);
  }

  validateAndAddDom() {
    const head = document.querySelector("head");
    if (head) {
      this.libBindingQueue.forEach((libDom) => {
        head.appendChild(libDom);
      });
      this.libBindingQueue = [];
    } else {
      setTimeout(() => {
        this.validateAndAddDom();
      }, 500);
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new BaseServices();
    }
    return this.instance;
  }
}

globalThis["web-base-services"] = BaseServices.getInstance();
