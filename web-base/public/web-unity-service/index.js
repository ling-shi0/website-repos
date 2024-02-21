(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
      "preload": true
    },
    {
      "libName": "antd",
      "type": "remote",
      "url": "",
      "preload": true
    }
  ],
  "accountInfo": {
    "managerName": "王小铭",
    "email": "qixiaojin2015@sina.com"
  },
  "workbenchMenu": [
    {
      "title": "技术",
      "key": "technology",
      "url": "app://com.bundle.package.tech.Technology"
    },
    {
      "title": "个人思考",
      "key": "thinking",
      "url": "app://com.bundle.package.thinking.Thinking"
    },
    {
      "title": "整活专区",
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
},{}],2:[function(require,module,exports){
"use strict";

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
 * @LastEditTime: 2024-02-21 15:18:32
 * @LastEditors: lingshi
 */
var BaseServices = /*#__PURE__*/function () {
  function BaseServices() {
    _classCallCheck(this, BaseServices);
    this.services = {};
    this.libServices = [];
    this.bootstrapConfigSymbol = _symbols.BootstrapConfigSymbol;
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
      (libServices || []).forEach(function (item) {
        if (window[item] && window[item].getInstance) {
          _this.services[item] = window[item].getInstance();
        } else {
          _this.services[item] = window[item];
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

},{"./g_config.json":1,"./symbols":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
