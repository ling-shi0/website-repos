/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-15 14:58:46
 * @LastEditTime: 2024-02-16 15:24:05
 * @LastEditors: lingshi
 */
import defaultJson from './theme.json';

class ThemeController {

  constructor() {
    this.theme = defaultJson;
    this.setTheme();
  }

  switchTheme(newTheme) {
    // ....待续
  }

  setTheme() {
    const html = document.querySelector('html');
    if (this.theme) {
      for (let item in this.theme) {
        const value = this.theme[item]
        html.style.setProperty(item, value);
      }
    }
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new ThemeController();
    }
    return this.instance;
  }
}

window.ThemeController = ThemeController;
