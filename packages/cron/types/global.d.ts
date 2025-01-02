interface ITask {
  /** 停止任务 */
  stop: () => void;
}

/**
 * 定时任务各字段数据
 */
interface ICronTime {
  /**
   * 星期 0-7
  */
  week: (number | string)[];
  /**
   * 月份 1-12
   */
  month: number[];
  /**
   * 日期(日) 1-31
   */
  day: (number | string)[];
  /**
   * 小时 0-23
   */
  hour: number[];
  /**
   * 分钟 0-59
   */
  minute: number[];
  /**
   * 秒数 0-59
   */
  second: number[];
}

interface ICronConf {
  /**
   * 天数与星期是否为 逻辑与
   * @default false 逻辑或 日期与星期满足其一即可
   */
  isDayWeekAnd?: boolean
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
  add: (cronExpression: string, task: Function, conf?: ICronConf) => ITask;
}
