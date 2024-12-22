import serialize from "./cookie-serialize";

import { tryDecode } from "./tool";

/**
 * @name cookie-操作类
 * @param initConf 初始化配置
 */
class MC<MCD extends IMiniCookieData> {
  private config: Partial<MiniCookie.Config> = {};
  constructor(initConf: MiniCookie.Config = {}) {
    this.config = initConf;
  }
  /**
   * @name cookie-对象序列化成字符串
   * @param key 键值
   * @param val 数据值
   * @param config 配置
   */
  serialize(key: string, val: any, config: MiniCookie.Config = {}): string {
    return serialize(key, val, { ...this.config, ...config });
  }
  /**
   * @name cookie-字符串解析成对象
   * @param cookieStr cookie字符串
   */
  parse<O extends MCD>(cookieStr: string): O {
    try {
      if (!cookieStr || typeof cookieStr !== "string") return {} as O;

      const cookieItemArr = tryDecode(cookieStr).split(";").filter(Boolean);
      const cookieKVArr = cookieItemArr.map(kvStr => kvStr.split("="));
      return cookieKVArr.reduce((tmpObj: any, [key, val = ""]) => {
        const tmpKey = key.trim();
        const tmpVal = val.trim();
        try {
          return { ...tmpObj, [tmpKey]: JSON.parse(tmpVal) };
        } catch {
          return { ...tmpObj, [tmpKey]: tmpVal };
        }
      }, {} as O);
    } catch (err) {
      console.error("cookie parse err:", err);
      return {} as O;
    }
  }
  /**
   * @name cookie-获取
   * @param key 键值
   * @param config 配置
   */
  get<K extends keyof MCD>(key: K, config: MiniCookie.Config = {}): MCD[K] {
    try {
      const opts = { ...this.config, ...config };
      if (typeof window !== "undefined") return this.parse(document.cookie)[key];

      // SSR Next.js
      return this.parse(opts.ctx!.req.headers.cookie || "")[key];
    } catch (err) {
      console.error("cookie get err:", err);
      return this.parse("")[key];
    }
  }
  /**
   * @name cookie-设置
   * @param key 键值
   * @param val 数据值
   * @param config 配置
   * @return
   */
  set<K extends keyof MCD, V extends MCD[K]>(key: K, val: V, config: MiniCookie.Config = {}): boolean {
    try {
      const opts = { ...this.config, ...config };
      if (typeof window !== "undefined" && opts.httpOnly) {
        throw new Error("Can not set a httpOnly cookie in the browser.");
      }

      const setCookieStr = this.serialize(String(key), val, opts);
      if (typeof window !== "undefined") {
        document.cookie = setCookieStr;
        return true;
      }

      if (!opts.ctx) return false;

      // SSR Next.js
      opts.ctx.res.setHeader("'Set-Cookie'", setCookieStr);
      return true;
    } catch (err) {
      console.error("cookie set err:", err);
      return false;
    }
  }
  /**
   * @name cookie-删除
   * @param key 键值
   * @param config 配置
   */
  del<K extends keyof MCD>(key: K, config: MiniCookie.Config = {}) {
    return this.set(key, "" as MCD[K], { ...this.config, ...config, maxAge: -1 });
  }
  /**
   * @name cookie-是否存在
   * @param key 键值
   * @param config 配置
   */
  has<K extends keyof MCD>(key: K, config: MiniCookie.Config = {}) {
    try {
      const opts = { ...this.config, ...config };
      if (typeof window !== "undefined") return !!this.parse(document.cookie)[key];

      if (!opts.ctx) return false;

      // SSR Next.js
      return !!this.parse(opts.ctx.req.headers.cookie || "")[key];
    } catch (err) {
      console.error("cookie has err:", err);
      return false;
    }
  }
  /**
   * @name cookie-初始化(更新)配置
   * @param config 配置
   * @return cookie操作类
   */
  init(config: MiniCookie.Config) {
    this.config = { ...this.config, ...config };
    return this;
  }
}

export default new MC();
