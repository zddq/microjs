import { IMiniCookieOpts } from "types";
import cookieParse from "./cookie-parse";

/**
 * @name cookie查询是否存在
 * @param {K} key cookie名称
 * @param {IMiniCookieOpts} opts cookie配置
 * @returns boolean true | false
 */
export default function <O extends MiniCookie.IMiniCookieData, K extends keyof O>(key: K, opts: IMiniCookieOpts = {}) {
  try {
    if (typeof window === "undefined") {
      if (!opts.ctx) {
        return false;
      }

      // SSR nextjs
      return !!cookieParse(opts.ctx.req.headers.cookie || "")[String(key)];
    }

    return !!cookieParse(document.cookie)[String(key)];
  } catch (error) {
    console.error(error);
    return false;
  }
}
