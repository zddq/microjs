import { getFullPrefixKey } from "./tool";

/**
 * 判断指定 key 是否存在
 */
export default function (key: string, config?: MiniLocalStorage.Config) {
  if (typeof window === "undefined") {
    throw Error("MiniLocalStorage is muse run in browser");
  }

  const len = localStorage.length;
  const keys = [];
  for (let i = 0; i < len; i++) {
    keys.push(localStorage.key(i));
  }
  return keys.some(it => it === getFullPrefixKey(key, config));
}
