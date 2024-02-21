/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-02-21 13:48:59
 * @LastEditTime: 2024-02-21 15:41:06
 * @LastEditors: lingshi
 */
export enum libType {
  Remote = "remote",
  Self = "self",
}

export declare type appTypes = {
  bundleName: string;
  displayName: string;
  entryPoint: string;
  name: string;
  resources: any[];
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
  url?: string;
  preload?: boolean;
};

export declare type g_configTypes = {
  baseFileHost: string;
  apps: appTypes[];
  libs: libsProps[];
  accountInfo: any;
  workbenchMenu: menuItemProps[];
  bundle: bundleTypes[];
};
