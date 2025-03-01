export as namespace rpc;

export function register(name: string, cb: ProcedureListener): Function;
export function unregister(name: string): void;
export function call<T = any>(
  name: string,
  args?: any,
  options?: CallOptions
): Promise<T>;
export function callServer<T = any>(
  name: string,
  args?: any,
  options?: CallOptions
): Promise<T>;
export function callClient<T = any>(
  player: T,
  name: string,
  args?: any,
  options?: CallOptions
): Promise<T>;
export function callClient<T = any>(
  name: string,
  args?: any,
  options?: CallOptions
): Promise<T>;
export function callBrowsers<T = any>(
  player: T,
  name: string,
  args?: any,
  options?: CallOptions
): Promise<T>;
export function callBrowsers<T = any>(
  name: string,
  args?: any,
  options?: CallOptions
): Promise<T>;
export function callBrowser<T = any>(
  browser: T,
  name: string,
  args?: any,
  options?: CallOptions
): Promise<T>;

export function on(name: string, cb: ProcedureListener): Function;
export function off(name: string, cb: ProcedureListener): void;
export function trigger(name: string, args?: any): void;
export function triggerServer(name: string, args?: any): void;
export function triggerClient(player: any, name: string, args?: any): void;
export function triggerClient(name: string, args?: any): void;
export function triggerBrowsers(player: any, name: string, args?: any): void;
export function triggerBrowsers(name: string, args?: any): void;
export function triggerBrowser(browser: any, name: string, args?: any): void;

export interface Player {
  call: (eventName: string, args?: any[]) => void;
  [property: string]: any;
}

export interface Browser {
  execute: (code: string) => void;
  [property: string]: any;
}

export interface ProcedureListenerInfo {
  environment: string;
  id?: string;
  player?: any;
}

export interface CallOptions {
  timeout?: number;
  noRet?: boolean;
}

export type ProcedureListener = (args: any, info: ProcedureListenerInfo) => any;
