(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("./theme.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-15 14:58:46
 * @LastEditTime: 2024-02-16 15:24:05
 * @LastEditors: lingshi
 */
var ThemeController = /*#__PURE__*/function () {
  function ThemeController() {
    _classCallCheck(this, ThemeController);
    this.theme = _theme["default"];
    this.setTheme();
  }
  _createClass(ThemeController, [{
    key: "switchTheme",
    value: function switchTheme(newTheme) {
      // ....待续
    }
  }, {
    key: "setTheme",
    value: function setTheme() {
      var html = document.querySelector('html');
      if (this.theme) {
        for (var item in this.theme) {
          var value = this.theme[item];
          html.style.setProperty(item, value);
        }
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new ThemeController();
      }
      return this.instance;
    }
  }]);
  return ThemeController;
}();
window.ThemeController = ThemeController;

},{"./theme.json":2}],2:[function(require,module,exports){
module.exports={
  "--primary-color": "",
  "--workbench-menu-width": "56px"
}
},{}]},{},[1]);
