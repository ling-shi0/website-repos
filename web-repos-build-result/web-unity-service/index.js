(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "apps": [],
  "extensions": [],
  "libs": [
    "ThemeController"
  ],
  "accountInfo": [],
  "workbenchMenu": [],
  "bundle": []
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
 * @LastEditTime: 2024-02-16 15:59:38
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
globalThis['web-base-services'] = BaseServices.getInstance();

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
