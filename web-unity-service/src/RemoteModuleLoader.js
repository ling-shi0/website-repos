/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-25 17:44:28
 * @LastEditTime: 2024-02-25 23:55:58
 * @LastEditors: lingshi
 */
export default class RemoteModuleLoader {
  constructor() {}

  registerModule(moduleName, url) {
    const config = {
      baseUrl: "",
      paths: {
        [moduleName]: url,
      },
    };
    globalThis.requirejs.config(config);
  }

  loadRemoteLoader(moduleName, url) {
    return new Promise((res, rej) => {
      console.log(url, "url", moduleName);
      this.registerModule(moduleName, url);
      globalThis.requirejs([], (e) => res(e));
    });
  }
}
