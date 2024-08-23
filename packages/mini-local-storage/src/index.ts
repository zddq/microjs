import PKG from "../package.json";

import get from "./local-storage-get";
import set from "./local-storage-set";
import has from "./local-storage-has";
import del from "./local-storage-del";

function createInstance(initConfig: MiniLocalStorage.Config) {
  const instance = Object.create(null);
  instance.get = function (key: string, config?: MiniLocalStorage.Config) {
    return get(key, { ...initConfig, ...config });
  };
  instance.set = function (key: string, data: any, config?: MiniLocalStorage.Config) {
    return set(key, data, { ...initConfig, ...config });
  };
  instance.has = function (key: string, config?: MiniLocalStorage.Config) {
    return has(key, { ...initConfig, ...config });
  };
  instance.del = function (key: string, config?: MiniLocalStorage.Config) {
    return del(key, { ...initConfig, ...config });
  };
  instance.version = PKG.version;
  return instance;
}

const MiniLocalStorage = {
  get,
  set,
  has,
  del,
  create: createInstance,
  version: PKG.version,
};

export default MiniLocalStorage;
