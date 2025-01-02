import { parseCronExpressionFn } from "./parse";
import Task from "./task";

class Cron implements ICron {
  constructor() { }

  add(cronExpression: string, task: Function, conf: ICronConf = {}) {
    const res = parseCronExpressionFn(cronExpression)
    console.log("RRR", res);

    const tmpTask = new Task(res, conf || {})
    tmpTask.run(task)
    return tmpTask
  }
}

/**
 * 定时任务
 */
export default new Cron();
