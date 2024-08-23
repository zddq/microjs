import { getFullPrefixKey } from "./tool";

/**
 * 删除指定 key 的本地存储数据
 */
export default function (key: string, config?: MiniLocalStorage.Config) {
  if (typeof window === "undefined") {
    throw Error("MiniLocalStorage is muse run in browser");
  }

  localStorage.removeItem(getFullPrefixKey(key, config));
}
