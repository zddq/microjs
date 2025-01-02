import { getDaysInMonth, getOnlyDayNum } from "./tool";


/**
* 获取当月的最后一个星期 x 的日期
* @example xL
* @param {number} year - 年份
* @param {number} month - 月份（1-12）
* @param {number} x - 星期几（0-6, 0=星期日）
* @returns {number[]} day[]
*/
function getLastWeekdayOfMonth(year, month, x) {
  const daysInMonth = getDaysInMonth(year, month);
  for (let day = daysInMonth; day >= 1; day--) {
    const currentDay = new Date(year, month - 1, day).getDay();
    if (currentDay == x) {
      return [+day];
    }
  }
  return []
}

/**
* 获取当月的第 y 个星期 x 的日期
* @example x#y
* @param {number} year - 年份
* @param {number} month - 月份（1-12）
* @param {number} y - 第几个（1-5）
* @param {number} x - 星期几（0-6, 0=星期日）
* @returns {number[]} day[]
*/
function getNthWeekdayOfMonth(year, month, y, x) {
  const firstDay = new Date(year, month - 1, 1).getDay();  // 第一天
  const daysInMonth = getDaysInMonth(year, month); // 当月最大天数
  // 计算第 y 个星期 x 的日期
  const day = 1 + (7 * (y - 1)) + ((x - firstDay + 7) % 7);
  return day > daysInMonth ? [] : [+day];
}

/**
* 获取当月的每个星期 x 的日期列表
* @example x#*
* @param {number} year - 年份
* @param {number} month - 月份（1-12）
* @param {number} x - 星期几（0-6, 0=星期日）
* @returns {number[]} day[]
*/
function getAllWeekdaysOfMonth(year, month, x) {
  const days: number[] = [];
  const daysInMonth = getDaysInMonth(year, month);
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDay = new Date(year, month - 1, day).getDay();
    if (currentDay == x) {
      days.push(+day);
    }
  }
  return days;
}

/**
 * 获取特殊字符星期对应月份的日期(天)
 * @param next 执行日期
 * @param week 星期数组
 * @return {number[]} day[]
 */
export default function getSpecialWeekDays(next: Date, week: (number | string)[]) {
  const weekArrL = week.filter(txt => String(txt).endsWith("L")).map(txt => String(txt).slice(0, -1))
  const weekArrYx = week.filter(txt => String(txt).includes("#")).map(txt => String(txt).split("#"))
  const weekArrAllX = week.filter(txt => String(txt).endsWith("#*")).map(txt => String(txt).slice(0, -2))

  const year = next.getFullYear()
  const month = next.getMonth() + 1

  const weekDaysL = weekArrL.map(txt => getLastWeekdayOfMonth(year, month, +txt == 7 ? 0 : +txt)).flat(1)
  const weekDaysYx = weekArrYx.map(([x, y]) => getNthWeekdayOfMonth(year, month, y, +x == 7 ? 0 : x)).flat(1)
  const weekDaysAllX = weekArrAllX.map(txt => getAllWeekdaysOfMonth(year, month, Number(txt))).flat(1)
  const days = [...weekDaysL, ...weekDaysYx, ...weekDaysAllX]
  return getOnlyDayNum(days)
}

/**
 * 获取星期数字
 * @param week 星期
 * @returns {number[]} week[]
 */
export function getWeeks(week: (number | string)[]) {
  return week.filter(txt => !String(txt).includes("#") && !String(txt).includes("L")).map(txt => +txt == 7 ? 0 : +txt)
}
