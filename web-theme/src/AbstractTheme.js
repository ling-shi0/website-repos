/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-17 15:25:39
 * @LastEditTime: 2024-02-20 13:49:29
 * @LastEditors: lingshi
 */
import Blue from "../themes/blue.json";
import Green from "../themes/green.json";
import White from "../themes/white.json";
import Pink from "../themes/pink.json";
import Default from "../themes/default.json";

export default class AbstractTheme {
  constructor(props) {
    this.currentTheme = (props && props.theme) || "blue";
    this.themeMap = {
      blue: Blue,
      pink: Pink,
      white: White,
      green: Green,
    };
    this.computedThemeKeys = ["--primary-color"];
    this.computedLevels = 5;
  }

  /**
   * @Description: 计算获取不同阈值的颜色
   * @name:
   * @return {*}
   */
  computedColors() {
    let json = this.getThemeJson(this.currentTheme);
    this.computedThemeKeys.forEach((item) => {
      if (json[item]) {
        const res = this.getComputedColors(item, json[item]);
        json = { ...json, ...(res || {}) };
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
  getThemeJson(theme) {
    return this.themeMap[theme];
  }

  /**
   * @Description: 修改颜色主题
   * @name:
   * @param {*} newTheme
   * @return {*}
   */
  changeThemeJson(newTheme) {
    this.currentTheme = newTheme || this.currentTheme;
    return {
      ...Default,
      ...(this.computedColors() || {}),
    };
  }

  /**
   * @Description: 获取原生颜色
   * @name:
   * @return {*}
   */
  getCurrentTheme() {
    return {
      ...Default,
      ...(this.computedColors() || {}),
    };
  }

  /**
   * @Description: 根据设置步进计算颜色深浅
   * @name:
   * @return {*}
   */
  getComputedColors(key, color) {
    const res = { key: color };
    let count = 1,
      step = 1 / this.computedLevels;
    while (count < this.computedLevels) {
      res[`${key}-${++count}`] = this.getLightColor(color, step * count);
    }
    return res;
  }

  /**
   * 颜色减淡
   * @param {string} color  色值，如：##409EFF
   * @param {number} level 调整幅度，0~1之间
   * @returns {array} 最终颜色减淡的rgb数组
   */
  getLightColor(color, level) {
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(color)) return;
    let rgb = this.hexToRgb(color);
    for (let i = 0; i < 3; i++) {
      rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]); // 始终保持在0-255之间
    }
    rgb = `rgba(${rgb.join(",")}, ${level})`;
    return rgb;
  }

  /**
   * hex转rgb
   * @param {string} str  色值，如：#409EFF
   * @returns rgb数组[64, 158, 255]
   */
  hexToRgb(str) {
    let hexs = null;
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(str)) return;
    str = str.replace("#", "");
    hexs = str.match(/../g);
    for (let i = 0; i < hexs.length; i++) hexs[i] = parseInt(hexs[i], 16);
    return hexs;
  }
}
