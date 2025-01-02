import getSpecialDays from "./tool-day";
import getSpecialWeekDays, { getWeeks } from "./tool-week";

/**
 * 获取当前月份的天数
 * @param {number} year - 年份
 * @param {number} month - 月份（1-12）
 * @returns {number} 天数
 */
export function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}


/**
 * @name 获取去重的数组(天数)
 * @returns {number[]} day[]
 */
export function getOnlyDayNum(days: number[]) {
  return days.reduce((arr, it) => arr.some(i => i == it) ? arr : [...arr, it], [] as number[])
}

/**
 * 当天是否符合cron表达式, 不符合则加一天执行进行再次判断
 * @param {Date} next - 下次执行时间
 * @param {number[]} days - 天数
 * @param {number[]} weeks - 星期
 * @param {number[]} weekDays - 特殊星期字符天数
 * @param {ICronConf} conf - 配置
 * @returns {boolean}
 */
function isNeedAddDay(next: Date, days: number[], weeks: number[], weekDays: number[], conf: ICronConf) {
  const { isDayWeekAnd = false } = conf || {}
  const day = next.getDate()
  const week = next.getDay()
  if (isDayWeekAnd) {
    return !days.some(i => i == day) || !(weeks.some(i => i == week) || weekDays.some(i => i == day))
  }

  if (days.some(i => i == day) || weeks.some(i => i == week) || weekDays.some(i => i == day)) {
    return false
  }

  return true
}


/**
 * 获取下次执行时间
 * @param data 时间字段数据
 * @returns Date
 */
function getNextRunTime(data: ICronTime, conf: ICronConf) {
  const now = new Date()
  const next = new Date(now.getTime()) // 初始化为当前时间
  const { week, month, day, hour, minute, second } = data // cron各日期字段

  // 数字 - 星期
  const weeks = getWeeks(week)
  let weekDays = getSpecialWeekDays(next, week)
  // 数字 - 天
  let days = getSpecialDays(next, day)

  let taskCount = 0
  while (true) {
    taskCount += 1
    if (taskCount >= 100) break

    // 检查月份
    if (!month.includes(next.getMonth() + 1)) {
      next.setMonth(next.getMonth() + 1, 1)
      next.setHours(0, 0, 0, 0)
      weekDays = getSpecialWeekDays(next, week)
      days = getSpecialDays(next, day)
      continue
    }

    // 检查日期与星期
    if (isNeedAddDay(next, days, weeks, weekDays, conf)) {
      next.setDate(next.getDate() + 1)
      next.setHours(0, 0, 0, 0)
      continue
    }

    // 检查小时
    if (!hour.includes(next.getHours())) {
      next.setHours(next.getHours() + 1, 0, 0, 0)
      continue
    }

    // 检查分钟
    if (!minute.includes(next.getMinutes())) {
      next.setMinutes(next.getMinutes() + 1, 0, 0)
      continue
    }

    // 检查秒
    if (second.length > 0 && (!second.includes(next.getSeconds()) || now.getTime() === next.getTime())) {
      next.setSeconds(next.getSeconds() + 1, 0)
      continue
    }
    break;
  }

  return next
}

/**
 * 计算延迟时间(毫秒)
 * @param data 时间字段数据
 * @returns 延迟时间(毫秒)
 */
export function getDelay(data: ICronTime, conf: ICronConf) {
  const now = new Date()
  const nextRunTime = getNextRunTime(data, conf)
  const delay = nextRunTime.getTime() - now.getTime()
  console.log("now", now);
  console.log("nextRunTime", nextRunTime);
  return delay <= 0 ? 1000 : delay
}
