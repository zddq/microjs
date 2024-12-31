import { parseCronExpressionFn } from "./tool";

class Cron implements ICron {
  constructor() { }

  add(cronExpression: string, task: Function) {
    const res = parseCronExpressionFn(cronExpression)
    console.log(res);

    return {
      stop() { },
    };
  }
}

/**
 * 定时任务
 */
export default new Cron();
