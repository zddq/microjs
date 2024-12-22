import PKG from "../package.json";

import set from "./local-storage-set";
import get from "./local-storage-get";
import has from "./local-storage-has";
import del from "./local-storage-del";
import key from "./local-storage-key";
import clear from "./local-storage-clear";
import length from "./local-storage-length";
import { isSupport } from "./tool";

/**
 * @name 创建实例
 * @param {Config} initConfig 初始化配置
 * @returns {Instance} instance
 */
function createInstance(initConfig: Config = {}) {
  const instance = Object.create(null);
  instance.set = function (key: string, data: any, config: Config = {}) {
    return set(key, data, { ...initConfig, ...config });
  };
  instance.get = function (key: string, config: Config = {}) {
    return get(key, { ...initConfig, ...config });
  };
  instance.has = function (key: string, config: Config = {}) {
    return has(key, { ...initConfig, ...config });
  };
  instance.del = function (key: string, config: Config = {}) {
    return del(key, { ...initConfig, ...config });
  };
  instance.key = function (index: number) {
    return key(index);
  };
  instance.clear = function () {
    return clear();
  };
  instance.isSupport = isSupport();
  instance.version = PKG.version;
  return new Proxy(instance, {
    get(target, p) {
      if (p === "length") return length();
      return target[p];
    },
  });
}

export default new Proxy(
  {
    create: createInstance,
    set,
    get,
    has,
    del,
    key,
    clear,
    isSupport: isSupport(),
    version: PKG.version,
  } as Static<IMiniLocalStorage>,
  {
    get(target, p) {
      if (p === "length") return length();
      return target[p];
    },
  },
);
