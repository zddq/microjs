/** 配置 */
interface Config {
  /**
   * 自定义前缀
   * @description 建议使用 create 方法创建实例时 传入自定义前缀(避免单独使用-不方便后期维护)
   * @default ""
   */
  prefix?: string;
  /**
   * 最大存储秒数
   * @description 当 maxAge 大于 0 时，expires 值会被忽略
   * @default 0
   */
  maxAge?: number;
  /**
   * 失效日期(Date)
   * @default null
   */
  expires?: Date;
}

/** 本地存储数据结构 */
interface Store {
  /** 存储值 */
  data: string;
  /** 有效日期时长(ms) */
  maxAge?: number;
}

/** 类型实例 */
interface Instance<O> {
  /**
   * 设置指定 key val 值
   * @param {K} key 键
   * @param {V} val any
   * @param {Config} config 配置
   * @returns {boolean} boolean
   */
  set<K extends keyof O, V extends O[K]>(key: K, val: V, config?: Config): boolean;
  /**
   * 获取指定 key 值
   * @param {K} key 键
   * @param {Config} config 配置
   * @returns {O[K]} 返回指定 key 的 val
   */
  get<K extends keyof O>(key: K, config?: Config): O[K];
  /**
   * 判断指定 key 是否存在
   * @param {K} key 键
   * @param {Config} config 配置
   * @returns {boolean} boolean
   */
  has<K extends keyof O>(key: K, config?: Config): boolean;
  /**
   * 删除指定 key 值
   * @param {K} key 键
   * @param {Config} config 配置
   * @returns {boolean} boolean
   */
  del<K extends keyof O>(key: K, config?: Config): boolean;
  /**
   * 获取指定 index key 值
   * @param {number} index
   * @returns {any} any
   */
  key(index: number): any;
  /**
   * 清除本地所有存储 key
   */
  clear(): void;
  /**
   * 获取当前存储 key 的数量
   * @returns {number} number
   */
  readonly length: number;
  /**
   * 判断当前环境是否支持 localStorage
   * @returns {boolean} boolean
   */
  readonly isSupport: boolean;
  /**
   * 当前包版本信息
   * @returns {string} string
   */
  readonly version: string;
}

/** 包静态属性及方法 */
interface Static<O> extends Instance<O> {
  /**
   * 创建一个 MiniLocalStore 实例
   * @example const MLS = MiniLocalStore.create({ prefix: "custom_prefix_" });
   * @returns {Instance} create Instance
   */
  create<OO extends O>(config?: Partial<Config>): Instance<OO>;
}
