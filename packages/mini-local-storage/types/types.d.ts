declare namespace MiniLocalStorage {
  interface Config {
    /**
     * 自定义前缀
     * @description 建议使用 create 方法创建实例时 传入自定义前缀(避免单独使用-不方便后期维护)
     * @default ""
     */
    prefix: string;
    /**
     * 最大存储秒数
     * @description 当 maxAge 大于 0 时，expires 值会被忽略
     * @default 0
     */
    maxAge: number;
    /**
     * 失效日期(Date)
     * @default ""
     */
    expires: Date;
  }
  interface Store {
    /** 存储值 */
    data: string;
    /** 有效日期时长(ms) */
    maxAge?: number;
  }
  /** 类型实例 */
  interface Instance {
    /** 当前包版本信息 */
    readonly version: string;
    /**
     * 获取指定 key 的值
     * @param {K} key string
     * @param {Config} opts 可选配置项
     */
    get<K extends keyof IMiniLocalStorageData>(key: K, config?: Partial<Config>): IMiniLocalStorageData[K];
    /**
     * 设置指定 key 的 val 到本地存储
     * @param {K} key string
     * @param {V} val any
     * @param {Config} opts 可选配置项
     */
    set<K extends keyof IMiniLocalStorageData, V extends IMiniLocalStorageData[K]>(key: K, val: V, config?: Partial<Config>): boolean;
    /**
     * 删除指定 key 的值
     * @param {K} key string
     * @param {Config} opts 可选配置项
     */
    del<K extends keyof IMiniLocalStorageData>(key: K, config?: Partial<Config>): boolean;
    /**
     * 判断指定 key 是否存在
     * @param {K} key string
     * @param {Config} opts 可选配置项
     */
    has<K extends keyof IMiniLocalStorageData>(key: K, config?: Partial<Config>): boolean;
  }

  interface Static {
    /** 当前包版本信息 */
    readonly version: string;
    /**
     * 创建一个 MiniLocalStorage 实例
     * @example const MLS = MiniLocalStorage.create({ prefix: "custom_prefix_" });
     */
    create(config?: Config): Instance;
  }
}
