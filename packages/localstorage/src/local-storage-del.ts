import { getFullKeyStr, isSupport } from "./tool";

/**
 * 删除指定 key 值
 * @param {string} key 键
 * @param {Config} config 配置
 * @returns void
 */
export default function (key: string, config: Config = {}) {
  if (!isSupport()) {
    throw new Error("@minisss/localStorage is muse run in browser");
  }

  localStorage.removeItem(getFullKeyStr(key, config));
}
