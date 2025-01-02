import { parseCronExpressionFn } from "./parse";
import Task from "./task";

class Cron implements ICron {
  constructor() { }

  add(cronExpression: string, task: Function, conf: ICronConf = {}) {
    const res = parseCronExpressionFn(cronExpression)
    return new Task(res, task, conf || {})
  }
}

/**
 * 定时任务
 */
export default new Cron();
