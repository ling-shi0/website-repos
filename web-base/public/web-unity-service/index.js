(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-25 17:44:28
 * @LastEditTime: 2024-02-25 23:55:58
 * @LastEditors: lingshi
 */
var RemoteModuleLoader = exports["default"] = /*#__PURE__*/function () {
  function RemoteModuleLoader() {
    _classCallCheck(this, RemoteModuleLoader);
  }
  _createClass(RemoteModuleLoader, [{
    key: "registerModule",
    value: function registerModule(moduleName, url) {
      var config = {
        baseUrl: "",
        paths: _defineProperty({}, moduleName, url)
      };
      globalThis.requirejs.config(config);
    }
  }, {
    key: "loadRemoteLoader",
    value: function loadRemoteLoader(moduleName, url) {
      var _this = this;
      return new Promise(function (res, rej) {
        console.log(url, "url", moduleName);
        _this.registerModule(moduleName, url);
        globalThis.requirejs([], function (e) {
          return res(e);
        });
      });
    }
  }]);
  return RemoteModuleLoader;
}();

},{}],2:[function(require,module,exports){
module.exports={
  "apps": [
    {
      "bundleName": "com.bundle.package.tech",
      "displayName": "技术专区微应用",
      "entryPoint": "Technology",
      "name": "Technology",
      "resources": [{
        "type": "css",
        "url": "index.css"
      }],
      "routePath": "/technology",
      "uuid": "com.bundle.package.tech.Technology"
    },
    {
      "bundleName": "com.bundle.package.thinking",
      "displayName": "个人思考微应用",
      "entryPoint": "Thinking",
      "name": "Thinking",
      "resources": [{
          "type": "css",
          "url": "index.css"
      }],
      "routePath": "/thinking",
      "uuid": "com.bundle.package.tech.Thinking"
    },
    {
      "bundleName": "com.bundle.package.activity",
      "displayName": "整活专区微应用",
      "entryPoint": "Activity",
      "name": "Activity",
      "resources": [{
          "type": "css",
          "url": "index.css"
      }],
      "routePath": "/activity",
      "uuid": "com.bundle.package.tech.Activity"
    }
  ],
  "extensions": [
    {
      "bundleName": "com.bundle.package.tech",
      "displayName": "技术专区插件尝试",
      "entryPoint": "Try",
      "name": "Try",
      "resources": [{
          "type": "css",
          "url": "index.css"
      }],
      "uuid": "com.bundle.package.tech.Try"
    }
  ],
  "libs": [
    {
      "libName": "ThemeController",
      "type": "self",
      "preload": true,
      "url": "web-theme/index"
    },
    {
      "libName": "react",
      "type": "remote",
      "preload": true,
      "resources": [
        {
          "type": "js",
          "url": "https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js"
        }
      ]
    },
    {
      "libName": "react-dom",
      "type": "remote",
      "preload": true,
      "resources": [
        {
          "type": "js",
          "url": "https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
        }
      ]
    },
    {
      "libName": "dayjs",
      "type": "remote",
      "preload": true,
      "resources": [
        {
          "type": "js",
          "url": "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js"
        }
      ]
    },
    {
      "libName": "antd",
      "type": "remote",
      "preload": true,
      "resources": [
        {
          "type": "js",
          "url": "https://cdn.bootcdn.net/ajax/libs/antd/5.9.0/antd.min.js"
        }
      ]
    }
  ],
  "accountInfo": {
    "managerName": "王小铭",
    "email": "qixiaojin2015@sina.com"
  },
  "workbenchMenu": [
    {
      "title": "文殊院",
      "key": "technology",
      "url": "app://com.bundle.package.tech.Technology"
    },
    {
      "title": "养心殿",
      "key": "thinking",
      "url": "app://com.bundle.package.thinking.Thinking"
    },
    {
      "title": "御膳房",
      "key": "activity",
      "url": "app://com.bundle.package.activity.Activity"
    },
    {
      "title": "备用专区",
      "key": "spare",
      "hidden": true
    }
  ],
  "bundle": [
    {
      "bundleName": "com.bundle.package.tech",
      "modulePath": "index.js",
      "url": "packages://web-sub-tech",
      "version": "0.0.1"
    },
    {
      "bundleName": "com.bundle.package.thinking",
      "modulePath": "index.js",
      "url": "packages://web-sub-thinking",
      "version": "0.0.1"
    },
    {
      "bundleName": "com.bundle.package.activity",
      "modulePath": "index.js",
      "url": "packages://web-sub-activity",
      "version": "0.0.1"
    }
  ],
  "baseFileHost": "https://ling-shi0.github.io/"
}
},{}],3:[function(require,module,exports){
"use strict";

var _RemoteModuleLoader = _interopRequireDefault(require("./RemoteModuleLoader"));
var _g_config = _interopRequireDefault(require("./g_config.json"));
var _symbols = require("./symbols");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-15 16:41:27
 * @LastEditTime: 2024-02-28 12:58:37
 * @LastEditors: lingshi
 */
var BaseServices = /*#__PURE__*/function () {
  function BaseServices() {
    _classCallCheck(this, BaseServices);
    this.services = {};
    this.libServices = [];
    this.libBindingQueue = [];
    this.bootstrapConfigSymbol = _symbols.BootstrapConfigSymbol;
    this.bindingId = null;
    this.remoteLoader = new _RemoteModuleLoader["default"]();
    this.init();
  }
  _createClass(BaseServices, [{
    key: "init",
    value: function init() {
      this.initConfig();
      this.initServices();
    }
  }, {
    key: "initServices",
    value: function initServices() {
      var _this = this;
      var libServices = globalThis[this.bootstrapConfigSymbol].libs;
      (libServices || []).forEach(function (libItem) {
        if (libItem.type === "self") {
          // this.remoteLoader
          //   .loadRemoteLoader(libItem.libName, "/" + libItem.url)
          //   .then((e) => {
          //     console.log(e);
          //   });

          var libName = libItem.libName;
          if (window[libName] && window[libName].getInstance) {
            console.log("走到了这 1");
            _this.services[libName] = window[libName].getInstance();
            console.log(_this.services[libName]);
          } else {
            console.log("走到了这2");
            _this.services[libName] = window[libName];
          }
        } else {
          (libItem.resources || []).forEach(function (resItem) {
            switch (resItem.type) {
              case "js":
                {
                  _this.bindScript2Dom(resItem.url);
                  break;
                }
              case "css":
                {
                  _this.bindLink2Dom(resItem.url);
                  break;
                }
              default:
                {
                  console.warn("没有该类型文件的加载方式");
                }
            }
            // 会存在异步加载顺序对于主应用无法控制问题 需要后续研究如何配置或者写插件
            // const e = this.remoteLoader.loadRemoteLoader(
            //   libItem.libName,
            //   resItem.url
            // );
            // console.log(e);
          });
        }
      });
    }
  }, {
    key: "initConfig",
    value: function initConfig() {
      globalThis[this.bootstrapConfigSymbol] = _g_config["default"];
    }
  }, {
    key: "getServices",
    value: function getServices(name) {
      return this.services[name];
    }
  }, {
    key: "getBootstrapConfig",
    value: function getBootstrapConfig() {
      return globalThis[this.bootstrapConfigSymbol];
    }
  }, {
    key: "bindScript2Dom",
    value: function bindScript2Dom(url) {
      var script = document.createElement("script");
      script.src = url;
      this.addBindQueue(script);
    }
  }, {
    key: "bindLink2Dom",
    value: function bindLink2Dom() {
      var link = document.createElement("link");
      link.href = url;
      this.addBindQueue(link);
    }
  }, {
    key: "addBindQueue",
    value: function addBindQueue(dom) {
      var _this2 = this;
      this.libBindingQueue.push(dom);
      if (this.bindingId !== null) {
        clearTimeout(this.bindingId);
      }
      this.bindingId = setTimeout(function () {
        _this2.validateAndAddDom();
      }, 0);
    }
  }, {
    key: "validateAndAddDom",
    value: function validateAndAddDom() {
      var _this3 = this;
      var head = document.querySelector("head");
      if (head) {
        this.libBindingQueue.forEach(function (libDom) {
          head.appendChild(libDom);
        });
        this.libBindingQueue = [];
      } else {
        setTimeout(function () {
          _this3.validateAndAddDom();
        }, 500);
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new BaseServices();
      }
      return this.instance;
    }
  }]);
  return BaseServices;
}();
globalThis["web-base-services"] = BaseServices.getInstance();

},{"./RemoteModuleLoader":1,"./g_config.json":2,"./symbols":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapConfigSymbol = void 0;
/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-16 15:44:38
 * @LastEditTime: 2024-02-16 15:54:10
 * @LastEditors: lingshi
 */
var BootstrapConfigSymbol = exports.BootstrapConfigSymbol = Symbol('BootstrapConfigSymbol');

},{}]},{},[3]);
