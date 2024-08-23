declare namespace MiniLocalStorage {
  /**
   * mini-local-storage 设置可配置参数
   */
  interface Config {
    /**
     * 失效日期(Date)
     * @default ""
     */
    expires?: Date;
    /**
     * 最大存储秒数
     * @description 当 maxAge 大于 0 时，expires 值会被忽略
     * @default 0
     */
    maxAge?: number;
    /**
     * 自定义前缀
     * @description 建议使用 create 方法创建实例时 传入自定义前缀(避免单独使用-不方便后期维护)
     * @default ""
     */
    prefix?: string;
    /**
     * 是否使用 AES 加密 - 尽可能减少本次存储明文信息
     * @description 最好数据加解密都服务端处理
     */
    isUseAes?: boolean;
    /**
     * 自定义 AES 加密  key
     */
    customAesKey?: string;
    /**
     * 自定义 AES 加密 iv
     */
    customAesIv?: string;
  }
  /**
   * 本地存储保存的数据格式
   */
  interface Store {
    /**
     * 存储值
     */
    data: string;
    /**
     * 有效日期时长(ms)
     */
    maxAge?: number;
  }
  interface Static {
    /**
     * 获取指定 key 的值
     * @param { K keyof IMiniLocalStorageData} key string
     * @param {Config} opts 可选配置项
     */
    get<K extends keyof IMiniLocalStorageData>(key: K, opts?: Config): IMiniLocalStorageData[K];
    /**
     * 设置指定 key 的 val 到本地存储
     * @param { K keyof IMiniLocalStorageData} key string
     * @param {IMiniLocalStorageData[K]} val any
     * @param {Config} opts 可选配置项
     * @returns IMiniLocalStorageData[K]
     */
    set<K extends keyof IMiniLocalStorageData, V extends IMiniLocalStorageData[K]>(key: K, val: V, opts?: Config): boolean;
    /**
     * 判断指定 key 是否存在
     * @param { K keyof IMiniLocalStorageData} key string
     * @param {Config} opts 可选配置项
     */
    has<K extends keyof IMiniLocalStorageData>(key: K, opts?: Config): boolean;
    /**
     * 删除指定 key 的值
     * @param { K keyof IMiniLocalStorageData} key string
     * @param {Config} opts 可选配置项
     */
    del<K extends keyof IMiniLocalStorageData>(key: K, opts?: Config): boolean;
    /**
     * 当前包版本信息
     */
    readonly version: string;
    /**
     * 创建一个 MiniLocalStorage 实例
     * @example const MLS = MiniLocalStorage.create({ prefix: "custom_prefix_" });
     */
    create(config: Config): Omit<Static, "create">;
  }
}

/**
 * 浏览器 localStorage 管理
 */
declare const MiniLocalStorage: MiniLocalStorage.Static;
export = MiniLocalStorage;
export as namespace MiniLocalStorage;
