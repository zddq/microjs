/**
 * 获取完整存储的 key
 * @param key 键
 * @param config 配置项
 * @returns string
 */
export function getFullKeyStr(key: string, config: Config = {}) {
  const prefixStr = String(config.prefix || "").trim();
  const keyStr = String(key).trim();
  return prefixStr ? `${prefixStr}_${keyStr}` : `${keyStr}`;
}

/**
 * 判断是否支持本地存储
 * @returns boolean
 */
export function isSupport() {
  try {
    if (typeof window === "undefined" || typeof localStorage === "undefined") return false;
    return !!window.localStorage;
  } catch (error) {
    return false;
  }
}
