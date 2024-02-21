/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-17 15:13:32
 * @LastEditTime: 2024-02-20 12:54:16
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

  static getInstance() {
    if (!this.instance) {
      this.instance = new ThemeController();
    }
    return this.instance;
  }
}
