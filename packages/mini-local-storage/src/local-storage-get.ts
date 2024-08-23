import { getFullPrefixKey } from "./tool";
import { aesDecrypt } from "./tool-aes";
import del from "./local-storage-del";

/**
 * 获取指定 key 的本地存储数据
 */
export default function (key: string, config?: MiniLocalStorage.Config) {
  // 数据解密
  const localSaveVal = localStorage.getItem(getFullPrefixKey(key, config));
  try {
    if (typeof window === "undefined") {
      throw Error("MiniLocalStorage is muse run in browser");
    }

    const { isUseAes = false } = config ?? {};
    const finalVal = isUseAes ? aesDecrypt(localSaveVal, config) : localSaveVal;
    const res: MiniLocalStorage.Store | null = isUseAes ? finalVal || null : JSON.parse(finalVal || null);
    if (res === null) {
      return null;
    }

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
    return localSaveVal;
  }
}
