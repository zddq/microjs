import cookieSerialize from "./cookie-serialize";

/**
 * cookie设置
 * @param {K} key cookie名称
 * @param {V} val cookie值
 * @param {MiniCookie.IMiniCookieOpts} opts cookie配置
 * @returns boolean true | false
 */
export default function <O extends MiniCookie.IMiniCookieData, K extends keyof O, V extends O[K]>(key: K, val: V, opts: MiniCookie.IMiniCookieOpts = {}) {
  try {
    if (typeof window !== "undefined" && opts.httpOnly) {
      throw new Error("Can not set a httpOnly cookie in the browser.");
    }

    const setCookieStr = cookieSerialize(String(key), val, opts);

    // 新增 nextjs 服务端支持
    if (typeof window === "undefined") {
      if (!opts.ctx) {
        return false;
      }

      // SSR nextjs
      opts.ctx.res.setHeader("'Set-Cookie'", setCookieStr);
      return true;
    }

    document.cookie = setCookieStr;
    return true;
  } catch (err) {
    console.error("cookie set err:", err);
    return false;
  }
}
