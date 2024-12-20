import { getFullPrefixKey } from "./tool";
import del from "./local-storage-del";

/**
 * @name 获取本地值
 * @param key string
 */
export default function (key: string, config?: MiniLocalStore.Config) {
  const tmpVal = localStorage.getItem(getFullPrefixKey(key, config));
  try {
    if (typeof window === "undefined") {
      throw Error("MiniLocalStore is muse run in browser");
    }

    const res: MiniLocalStore.Store | null = JSON.parse(tmpVal || null);
    if (res === null) return null;

    // 数据有存储日期效性判断
    if (res.maxAge && res.maxAge <= Date.now()) {
      del(key, config);
      return null;
    }

    // 数据类型判断
    if (res.data === null) {
      return null;
    }

    return res.data;
  } catch (error) {
    console.error(error);
    return tmpVal;
  }
}
