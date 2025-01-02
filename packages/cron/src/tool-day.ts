import { getDaysInMonth, getOnlyDayNum } from "./tool";

/**
* 获取指定日期的星期几
* @param {number} year - 年份
* @param {number} month - 月份（1-12）
* @param {number} day - 日期（1-31）
* @returns {number} 星期几（0-6, 0=星期日）
*/
function getDayOfWeek(year, month, day) {
  return new Date(year, month - 1, day).getDay();
}

/**
* 获取每月的最后一个星期x的日期
* @example xL
* @param {number} year - 年份
* @param {number} month - 月份（1-12）
* @param {number} x - 星期几（0-6, 0=星期日）
* @returns {number[]} day[]
*/
function getLastFridayOfMonth(year, month, x) {
  const daysInMonth = getDaysInMonth(year, month);
  for (let day = daysInMonth; day >= 1; day--) {
    const dayOfWeek = getDayOfWeek(year, month, day);
    if (dayOfWeek === x) { // 5 代表星期五
      return [day];
    }
  }
  return []; // 如果当月没有星期五
}

/**
* 获取每月的第 x 个工作日的日期
* @example xW
* @param {number} year - 年份
* @param {number} month - 月份（1-12）
* @param {number} x - 第几个工作日
* @returns {number[]} day[]
*/
function getNthWorkdayOfMonth(year, month, x) {
  const daysInMonth = getDaysInMonth(year, month);
  let count = 0;
  for (let day = 1; day <= daysInMonth; day++) {
    const dayOfWeek = getDayOfWeek(year, month, day);
    // 1-5 代表星期一至星期五
    if (dayOfWeek < 1 || dayOfWeek > 5) continue

    count += 1;
    if (count != x) continue

    return [day]
  }
  return []; // 如果当月没有第 n 个工作日
}

/**
 * 获取最终的日期
 * @param next 当前时间
 * @param day 日期数组
 * @return {number[]} day[]
 */
export default function getSpecialDays(next: Date, day: (number | string)[]) {
  const tmpDays = day.filter(txt => !String(txt).includes("L") && !String(txt).includes("W")).map(txt => +txt)
  const tmpDayL = day.filter(txt => String(txt).endsWith("L")).map(txt => String(txt).slice(0, -1))
  const tmpDayW = day.filter(txt => String(txt).endsWith("W")).map(txt => String(txt).slice(0, -1))

  const year = next.getFullYear()
  const month = next.getMonth() + 1

  const tmpDaysL = [getDaysInMonth(year, month)]
  const tmpDaysXl = tmpDayL.map(txt => getLastFridayOfMonth(year, month, +txt == 7 ? 0 : +txt)).flat(1)
  const tmpDaysXw = tmpDayW.map(txt => getNthWorkdayOfMonth(year, month, +txt)).flat(1)
  const days = [...tmpDays, ...tmpDaysL, ...tmpDaysXl, ...tmpDaysXw]
  return getOnlyDayNum(days)
}
