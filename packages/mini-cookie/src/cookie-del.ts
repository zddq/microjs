import cookieSet from "./cookie-set";

/**
 * @name cookie删除
 * @param {string} key cookie名称
 * @param {MiniCookie.IMiniCookieOpts} opts cookie配置
 * @return boolean
 */
export default function <O extends MiniCookie.IMiniCookieData, K extends keyof O>(key: K, opts: MiniCookie.IMiniCookieOpts = {}) {
  return cookieSet(String(key), "", { ...opts, maxAge: -1 });
}
