/**
 * 获取完整的key
 */
export function getFullPrefixKey(key: string, config?: MiniLocalStore.Config) {
  if (!config || !config.prefix || !config.prefix.trim()) {
    return `${key}`;
  }

  return `${config.prefix.trim()}_${key}`;
}
