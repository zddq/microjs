import { getDelay } from "./tool"

/**
 * 任务
 * @param task 任务
 * @param delay 延迟时间(毫秒)
 * @return Task
 */
export default class Task {
  private conf: ICronConf = {}
  private tid: NodeJS.Timeout
  constructor(cronTime: ICronTime, task: Function, conf: ICronConf) {
    this.conf = conf || {}
    this.run(cronTime, task)
  }
  /**
   * 执行任务
   * @param delay 延迟时间(毫秒)
   * @function task 任务
   * @returns this
   */
  private run(cronTime: ICronTime, task: Function) {
    const delay = getDelay(cronTime, this.conf)
    this.tid && clearTimeout(this.tid)
    this.tid = setTimeout(async () => {
      await task()
      this.run(cronTime, task)
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
