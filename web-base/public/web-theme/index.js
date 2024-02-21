(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _blue = _interopRequireDefault(require("../themes/blue.json"));
var _green = _interopRequireDefault(require("../themes/green.json"));
var _white = _interopRequireDefault(require("../themes/white.json"));
var _pink = _interopRequireDefault(require("../themes/pink.json"));
var _default = _interopRequireDefault(require("../themes/default.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-17 15:25:39
 * @LastEditTime: 2024-02-20 13:49:29
 * @LastEditors: lingshi
 */
var AbstractTheme = exports["default"] = /*#__PURE__*/function () {
  function AbstractTheme(props) {
    _classCallCheck(this, AbstractTheme);
    this.currentTheme = props && props.theme || "blue";
    this.themeMap = {
      blue: _blue["default"],
      pink: _pink["default"],
      white: _white["default"],
      green: _green["default"]
    };
    this.computedThemeKeys = ["--primary-color"];
    this.computedLevels = 5;
  }

  /**
   * @Description: 计算获取不同阈值的颜色
   * @name:
   * @return {*}
   */
  _createClass(AbstractTheme, [{
    key: "computedColors",
    value: function computedColors() {
      var _this = this;
      var json = this.getThemeJson(this.currentTheme);
      this.computedThemeKeys.forEach(function (item) {
        if (json[item]) {
          var res = _this.getComputedColors(item, json[item]);
          json = _objectSpread(_objectSpread({}, json), res || {});
        }
      });
      return json;
    }

    /**
     * @Description: 获取单一颜色主题
     * @name:
     * @param {*} theme
     * @return {*}
     */
  }, {
    key: "getThemeJson",
    value: function getThemeJson(theme) {
      return this.themeMap[theme];
    }

    /**
     * @Description: 修改颜色主题
     * @name:
     * @param {*} newTheme
     * @return {*}
     */
  }, {
    key: "changeThemeJson",
    value: function changeThemeJson(newTheme) {
      this.currentTheme = newTheme || this.currentTheme;
      return _objectSpread(_objectSpread({}, _default["default"]), this.computedColors() || {});
    }

    /**
     * @Description: 获取原生颜色
     * @name:
     * @return {*}
     */
  }, {
    key: "getCurrentTheme",
    value: function getCurrentTheme() {
      return _objectSpread(_objectSpread({}, _default["default"]), this.computedColors() || {});
    }

    /**
     * @Description: 根据设置步进计算颜色深浅
     * @name:
     * @return {*}
     */
  }, {
    key: "getComputedColors",
    value: function getComputedColors(key, color) {
      var res = {
        key: color
      };
      var count = 1,
        step = 1 / this.computedLevels;
      while (count < this.computedLevels) {
        res["".concat(key, "-").concat(++count)] = this.getLightColor(color, step * count);
      }
      return res;
    }

    /**
     * 颜色减淡
     * @param {string} color  色值，如：##409EFF
     * @param {number} level 调整幅度，0~1之间
     * @returns {array} 最终颜色减淡的rgb数组
     */
  }, {
    key: "getLightColor",
    value: function getLightColor(color, level) {
      var reg = /^\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(color)) return;
      var rgb = this.hexToRgb(color);
      for (var i = 0; i < 3; i++) {
        rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]); // 始终保持在0-255之间
      }
      rgb = "rgba(".concat(rgb.join(","), ", ").concat(level, ")");
      return rgb;
    }

    /**
     * hex转rgb
     * @param {string} str  色值，如：#409EFF
     * @returns rgb数组[64, 158, 255]
     */
  }, {
    key: "hexToRgb",
    value: function hexToRgb(str) {
      var hexs = null;
      var reg = /^\#?[0-9A-Fa-f]{6}$/;
      if (!reg.test(str)) return;
      str = str.replace("#", "");
      hexs = str.match(/../g);
      for (var i = 0; i < hexs.length; i++) hexs[i] = parseInt(hexs[i], 16);
      return hexs;
    }
  }]);
  return AbstractTheme;
}();

},{"../themes/blue.json":5,"../themes/default.json":6,"../themes/green.json":7,"../themes/pink.json":8,"../themes/white.json":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _AbstractTheme = _interopRequireDefault(require("./AbstractTheme.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-17 15:18:59
 * @LastEditTime: 2024-02-20 13:34:43
 * @LastEditors: lingshi
 */
var CssTheme = exports["default"] = /*#__PURE__*/function () {
  function CssTheme(props) {
    _classCallCheck(this, CssTheme);
    this.prefix = "THEME_ENTRY";
    this.currentTheme = new _AbstractTheme["default"]();
    this.linkIndex = 0;
    this.mainTheme = props && props.mainTheme || "blue";
  }
  _createClass(CssTheme, [{
    key: "changeTheme",
    value: function changeTheme(newTheme) {
      this.mainTheme = newTheme;
      var newJson = this.currentTheme.changeThemeJson(this.mainTheme);
      this.unMountFromDom();
      this.linkToDom(newJson);
    }
  }, {
    key: "initTheme",
    value: function initTheme() {
      var json = this.currentTheme.getCurrentTheme();
      this.linkToDom(json);
    }
  }, {
    key: "linkToDom",
    value: function linkToDom(themeObj) {
      var body = document.querySelector("body");
      var newDom = document.createElement("div");
      newDom.id = "".concat(this.prefix).concat(this.linkIndex++);
      newDom.innerHTML = "\n      <style>\n      :root {\n        ".concat(Object.keys(themeObj || {}).map(function (g) {
        return "  ".concat(g, ": ").concat(themeObj[g], ";");
      }).join("\n        "), "\n      }\n      </style>\n    ");
      if (body) {
        body.appendChild(newDom);
      } else {
        setTimeout(function () {
          if (document.querySelector("body")) {
            document.querySelector("body").appendChild(newDom);
          } else {
            window.addEventListener("DOMContentLoaded", function () {
              document.querySelector("body").appendChild(newDom);
              window.removeEventListener("DOMContentLoaded");
            });
          }
        }, 500);
      }
    }
  }, {
    key: "unMountFromDom",
    value: function unMountFromDom() {
      var themeDom = document.querySelector("#".concat(this.prefix).concat(this.linkIndex));
      document.body.removeChild(themeDom);
    }
  }]);
  return CssTheme;
}();

},{"./AbstractTheme.js":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeController = void 0;
var _CssTheme = _interopRequireDefault(require("./CssTheme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-17 15:13:32
 * @LastEditTime: 2024-02-20 12:54:16
 * @LastEditors: lingshi
 */
var ThemeController = exports.ThemeController = /*#__PURE__*/function () {
  function ThemeController() {
    _classCallCheck(this, ThemeController);
    this.cssTheme = new _CssTheme["default"]();
    this.mainTheme = "blue";
    this.initTheme();
  }
  _createClass(ThemeController, [{
    key: "switchTheme",
    value: function switchTheme(newTheme) {
      this.mainTheme = newTheme;
      this.cssTheme.changeTheme(this.mainTheme);
    }
  }, {
    key: "initTheme",
    value: function initTheme() {
      this.cssTheme.initTheme();
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

},{"./CssTheme":2}],4:[function(require,module,exports){
"use strict";

var _ThemeController = require("./ThemeController");
/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-15 14:58:46
 * @LastEditTime: 2024-02-20 13:08:29
 * @LastEditors: lingshi
 */

window.ThemeController = _ThemeController.ThemeController;

},{"./ThemeController":3}],5:[function(require,module,exports){
module.exports={
  "--primary-color": "#409eFF"
}
},{}],6:[function(require,module,exports){
module.exports={
  "--workbench-menu-width": "120px",
  "--section-border-radius": "8px",
  "--workbench-tabs-height": "60px",
  "--section-shadow": "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)"
}
},{}],7:[function(require,module,exports){
module.exports={
  "--primary-color": "",
  "--workbench-menu-width": "56px"
}
},{}],8:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}],9:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}]},{},[4]);
