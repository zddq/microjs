interface ICronAddRes {
  /** 停止任务 */
  stop: () => void;
}

/**
 * 定时任务各字段数据
 */
interface ICronTime {
  /** 星期 */
  week: (number | string)[];
  /** 月份 */
  month: number[];
  /** 日期(日) */
  day: (number | string)[];
  /** 小时 */
  hour: number[];
  /** 分钟 */
  minute: number[];
  /** 秒数 */
  second: number[];
}

/**
 * 定时任务
 */
interface ICron {
  /**
   * 添加任务
   * @param cronExpression 表达式
   * @param task 执行任务
   */
  add: (cronExpression: string, task: Function) => ICronAddRes;
}
