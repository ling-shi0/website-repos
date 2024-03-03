/*
 * @Description:
 * @Author: lingshi
 * @Date: 2024-03-03 14:49:26
 * @LastEditTime: 2024-03-03 15:17:02
 * @LastEditors: lingshi
 */
export class EventEmitter {
  events: any;
  static instance: EventEmitter;
  constructor() {
    this.events = {};
  }

  subscribe(handler: string, callback: Function) {
    (this.events[handler] || (this.events[handler] = [])).push(callback);
  }

  emit(handler: string, params: any) {
    if (this.events[handler]) {
      this.events[handler].forEach((callback: Function) => {
        callback(params);
      });
    }
  }

  off(handler: string, callback: Function) {
    if (this.events[handler]) {
      this.events[handler] = this.events[handler].filter(
        (cb: Function) => cb !== callback
      );
    }
  }

  once(handler: string, callback: Function) {
    const onceCallBack = (data: any) => {
      callback(data);
      this.off(handler, callback);
    };
    this.subscribe(handler, onceCallBack);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new EventEmitter();
    }
    return this.instance;
  }
}
