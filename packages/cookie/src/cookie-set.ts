import serialize from './cookie-serialize'

/**
 * cookie 设置
 * @param key 键
 * @param val 值
 * @param config 配置
 * @returns boolean
 */
export default function (key: any, val: any, config: IConfig = {}) {
  try {
    if (typeof window !== "undefined" && config.httpOnly) {
      throw new Error("Can not set a httpOnly cookie in the browser.");
    }

    const setCookieStr = serialize(String(key), val, config);
    if (typeof window !== "undefined") {
      document.cookie = setCookieStr;
      return true;
    }

    if (!config.ctx) return false;

    // SSR Next.js
    config.ctx.res.setHeader("'Set-Cookie'", setCookieStr);
    return true;
  } catch (err) {
    console.error("cookie set err:", err);
    return false;
  }
}
