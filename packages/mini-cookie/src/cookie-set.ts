import cookieSerialize from "./cookie-serialize";

/**
 * cookie设置
 * @param {K} key cookie名称
 * @param {V} val cookie值
 * @param {IMiniCookieOpts} opts cookie配置
 * @returns boolean true | false
 */
export default function <O extends IMiniCookieObject, K extends keyof O, V extends O[K]>(key: K, val: V, opts: IMiniCookieOpts = {}) {
  if (typeof window !== "undefined" && opts.httpOnly) {
    throw new Error("Can not set a httpOnly cookie in the browser.");
  }

  if (typeof window === "undefined") {
    return false;
  }

  document.cookie = cookieSerialize(String(key), val, opts);
  return true;
}
