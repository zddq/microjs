import { getDelay } from "./tool"

/**
 * 任务
 * @param task 任务
 * @param delay 延迟时间(毫秒)
 * @return Task
 */
export default class Task {
  private cronTime: ICronTime
  private conf: ICronConf = {}
  private tid: NodeJS.Timeout
  constructor(cronTime: ICronTime, conf: ICronConf) {
    this.cronTime = cronTime
    this.conf = conf || {}
  }
  /**
   * 执行任务
   * @param delay 延迟时间(毫秒)
   * @function task 任务
   * @returns this
   */
  run(task: Function) {
    this.tid && clearTimeout(this.tid)
    const delay = getDelay(this.cronTime, this.conf)
    console.log("delay", delay);
    this.tid = setTimeout(() => {
      console.log("当前时间", new Date());
      task()
      this.run(task)
    }, delay)
    return this
  }
  /**
   * 停止任务
   */
  stop() {
    this.tid && clearTimeout(this.tid)
    return this
  }
}
