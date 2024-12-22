import PKG from "../package.json";

import get from "./local-storage-get";
import set from "./local-storage-set";
import has from "./local-storage-has";
import del from "./local-storage-del";

/**
 * @name 创建实例
 */
function createInstance(initConfig: Partial<MiniLocalStore.Static> = {}) {
  const instance = Object.create(null);
  instance.get = function (key: string, config?: MiniLocalStore.Config) {
    return get(key, { ...initConfig, ...config });
  };
  instance.set = function (key: string, data: any, config?: MiniLocalStore.Config) {
    return set(key, data, { ...initConfig, ...config });
  };
  instance.del = function (key: string, config?: MiniLocalStore.Config) {
    return del(key, { ...initConfig, ...config });
  };
  instance.has = function (key: string, config?: MiniLocalStore.Config) {
    return has(key, { ...initConfig, ...config });
  };
  instance.version = PKG.version;
  return instance;
}

export default {
  version: PKG.version,
  create: createInstance,
};
