import parse from './cookie-parse'

/**
 * cookie 获取
 * @param key 键
 * @param config 配置
 * @returns 对应键值
 */
export default function (key: any, config: MiniCookie.Config = {}) {
  try {
    if (typeof window !== "undefined") {
      return parse(document.cookie)[key];
    }

    // SSR Next.js
    return parse(config.ctx!.req.headers.cookie || "")[key];
  } catch (err) {
    console.error("cookie get err:", err);
    return parse("")[key];
  }
}
