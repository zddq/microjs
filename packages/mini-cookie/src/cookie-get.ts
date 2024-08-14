import cookieParse from "./cookie-parse";

/**
 * @name cookie获取
 * @param {string} key cookie名称
 * @returns {O[K]} O[K]
 */
export default function <O extends MiniCookie.IMiniCookieData, K extends keyof O>(key: K): O[K] {
  return cookieParse<O>(typeof window === "undefined" ? "" : document.cookie)[key];
}
