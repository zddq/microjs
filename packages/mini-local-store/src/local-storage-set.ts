import { getFullPrefixKey } from "./tool";

/**
 * 保存指定 key 的 data 数据到本地存储
 */
export default function (key: string, data: any, config?: MiniLocalStore.Config) {
  if (typeof window === "undefined") {
    throw Error("MiniLocalStore is muse run in browser");
  }

  const { expires, maxAge } = config ?? {};
  const tmpKey = getFullPrefixKey(key, config);

  // 设置有效时长(秒数)
  if (typeof maxAge === "number") {
    if (maxAge <= 0) {
      throw Error("maxAge must be greater than 0");
    }

    const saveVal = JSON.stringify({ data, maxAge: Date.now() + maxAge * 1000 } as MiniLocalStore.Store);
    localStorage.setItem(tmpKey, saveVal);
    return;
  }

  // 设置有效终止日期
  if (Object.prototype.toString.call(expires) === "[object Date]") {
    if (expires.getTime() <= Date.now()) {
      throw new Error("expires must be greater than now");
    }

    const saveVal = JSON.stringify({ data, maxAge: expires.getTime() } as MiniLocalStore.Store);
    localStorage.setItem(tmpKey, saveVal);
    return;
  }

  const saveVal = JSON.stringify({ data } as MiniLocalStore.Store);
  localStorage.setItem(tmpKey, saveVal);
}
