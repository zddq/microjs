import { getFullPrefixKey } from "./tool";

/**
 * 删除指定 key 的本地存储数据
 */
export default function (key: string, config?: MiniLocalStore.Config) {
  if (typeof window === "undefined") {
    throw Error("MiniLocalStore is muse run in browser");
  }

  localStorage.removeItem(getFullPrefixKey(key, config));
}
