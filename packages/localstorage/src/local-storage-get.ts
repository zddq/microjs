import { getFullKeyStr, isSupport } from "./tool";
import del from "./local-storage-del";

/**
 * 获取指定 key 值
 * @param {string} key 键
 * @param {Config} config 配置
 * @returns {any} any
 */
export default function (key: string, config?: Config) {
  if (!isSupport()) {
    throw new Error("@minisss/localStorage is muse run in browser");
  }

  const tmpVal = localStorage.getItem(getFullKeyStr(key, config));
  try {
    const res: Store | null = JSON.parse(tmpVal || null);
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
