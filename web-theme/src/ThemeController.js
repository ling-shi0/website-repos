/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-17 15:13:32
 * @LastEditTime: 2024-02-28 15:38:26
 * @LastEditors: lingshi
 */
import CssTheme from "./CssTheme";

export class ThemeController {
  constructor() {
    this.cssTheme = new CssTheme();
    this.mainTheme = "blue";
    this.initTheme();
  }

  switchTheme(newTheme) {
    this.mainTheme = newTheme;
    this.cssTheme.changeTheme(this.mainTheme);
  }

  initTheme() {
    this.cssTheme.initTheme();
  }

  getThemeLists() {
    return this.cssTheme.getThemeList();
  }

  getCurrentTheme() {
    return this.cssTheme.getCurrentTheme();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ThemeController();
    }
    return this.instance;
  }
}
