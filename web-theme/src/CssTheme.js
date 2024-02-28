/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-17 15:18:59
 * @LastEditTime: 2024-02-28 15:37:52
 * @LastEditors: lingshi
 */
import AbstractTheme from "./AbstractTheme.js";

export default class CssTheme {
  constructor(props) {
    this.prefix = "THEME_ENTRY";
    this.currentTheme = new AbstractTheme();
    this.linkIndex = 0;
    this.mainTheme = (props && props.mainTheme) || "blue";
  }

  changeTheme(newTheme) {
    this.mainTheme = newTheme;
    const newJson = this.currentTheme.changeThemeJson(this.mainTheme);
    this.unMountFromDom();
    this.linkToDom(newJson);
  }

  initTheme() {
    const json = this.currentTheme.getCurrentTheme();
    this.linkToDom(json);
  }

  linkToDom(themeObj) {
    const body = document.querySelector("body");
    const newDom = document.createElement("div");
    newDom.id = `${this.prefix}${++this.linkIndex}`;
    newDom.innerHTML = `
      <style>
      :root {
        ${Object.keys(themeObj || {}).map((g) => `  ${g}: ${themeObj[g]};`)
          .join(`
        `)}
      }
      </style>
    `;
    if (body) {
      body.appendChild(newDom);
    } else {
      setTimeout(() => {
        if (document.querySelector("body")) {
          document.querySelector("body").appendChild(newDom);
        } else {
          window.addEventListener("DOMContentLoaded", () => {
            document.querySelector("body").appendChild(newDom);
            window.removeEventListener("DOMContentLoaded");
          });
        }
      }, 500);
    }
  }

  unMountFromDom() {
    const themeDom = document.querySelector(`#${this.prefix}${this.linkIndex}`);
    document.body.removeChild(themeDom);
  }

  getCurrentTheme() {
    return this.currentTheme.getCurrentTheme();
  }

  getThemeList() {
    return this.currentTheme.getThemeList();
  }
}
