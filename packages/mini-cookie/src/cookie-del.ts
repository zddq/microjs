import MiniCookie from "types";
import cookieSet from "./cookie-set";

/**
 * @name cookie删除
 * @param {string} key cookie名称
 * @return boolean
 */
export default function <O extends MiniCookie.IMiniCookieObject, K extends keyof O>(key: K) {
  return cookieSet(String(key), "", { maxAge: -1 });
}
