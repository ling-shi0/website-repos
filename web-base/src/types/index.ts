/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-21 13:48:59
 * @LastEditTime: 2024-02-25 12:33:55
 * @LastEditors: lingshi
 */
export enum libType {
  Remote = "remote",
  Self = "self",
}

export enum resourcesTypes {
  JS = "js",
  CSS = "css",
}

export declare type resourcesItemType = {
  type: resourcesTypes;
  url: string;
};

export declare type appTypes = {
  bundleName: string;
  displayName: string;
  entryPoint: string;
  name: string;
  resources: resourcesItemType[];
  routePath: string;
  uuid: string;
};

export declare type bundleTypes = {
  bundleName: string;
  modulePath: string;
  url: string;
  version: string;
};

export declare type menuItemProps = {
  title: string;
  key: string;
  url: string;
  hidden?: boolean;
};

export declare type libsProps = {
  libName: string;
  type: libType;
  preload?: boolean;
  resources?: resourcesItemType[];
};

export declare type g_configTypes = {
  baseFileHost: string;
  apps: appTypes[];
  libs: libsProps[];
  accountInfo: any;
  workbenchMenu: menuItemProps[];
  bundle: bundleTypes[];
};
