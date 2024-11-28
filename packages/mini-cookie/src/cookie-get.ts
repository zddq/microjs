import cookieParse from "./cookie-parse";

/**
 * @name cookie-获取
 * @param {string} key cookie名称
 * @param {MiniCookie.IMiniCookieOpts} opts cookie配置
 * @returns {O[K]} O[K]
 */
export default function <O extends MiniCookie.IMiniCookieData, K extends keyof O>(key: K, opts: MiniCookie.IMiniCookieOpts = {}): O[K] {
  try {
    if (typeof window === "undefined") {
      if (!opts.ctx) {
        return cookieParse<O>("")[key];
      }

      // SSR nextjs
      return cookieParse<O>(opts.ctx.req.headers.cookie || "")[key];
    }

    return cookieParse<O>(document.cookie)[key];
  } catch (error) {
    console.error(error);
    return cookieParse<O>("")[key];
  }
}
