import { getFullKeyStr, isSupport } from "./tool";

/**
 * 保存指定 key 的 data 数据到本地存储
 * @returns void
 */
export default function (key: string, data: any, config: Config = {}) {
  if (!isSupport()) {
    throw new Error("@minisss/localStorage is muse run in browser");
  }

  const { maxAge, expires } = config ?? {};
  const tmpKey = getFullKeyStr(key, config);
  // 设置有效时长(秒数)
  if (typeof maxAge === "number") {
    if (maxAge <= 0) {
      throw new Error("maxAge must be greater than 0");
    }

    localStorage.setItem(tmpKey, JSON.stringify({ data, maxAge: Date.now() + maxAge * 1000 } as Store));
    return;
  }

  // 设置有效终止日期
  if (Object.prototype.toString.call(expires) === "[object Date]") {
    if (expires.getTime() <= Date.now()) {
      throw new Error("expires must be greater than now");
    }

    localStorage.setItem(tmpKey, JSON.stringify({ data, maxAge: expires.getTime() } as Store));
    return;
  }

  localStorage.setItem(tmpKey, JSON.stringify({ data } as Store));
}
