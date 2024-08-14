import cookieParse from "./cookie-parse";

/**
 * @name cookie查询是否存在
 * @param {K} key cookie名称
 * @param {IMiniCookieOpts} opts cookie配置
 * @returns boolean true | false
 */
export default function <O extends IMiniCookieObject, K extends keyof O>(key: K) {
  return !!cookieParse(typeof window === "undefined" ? "" : document.cookie)[String(key)];
}
