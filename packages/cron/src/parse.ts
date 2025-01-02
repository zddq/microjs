import parseCronWeek from "./parse-week";
import parseCronDay from "./parse-day";
import parseCronItem from "./parse-item";

const cronDemo = `*(可选) * * * * *`;
const cronMin = 5;
const cronMax = 6;

/**
 * cron 表达式解析
 * @param cronExpression cron表达式
 * @returns ICronTime
 */
export function parseCronExpressionFn(cronExpression: string): ICronTime {
  const strArr = String(cronExpression).trim().split(" ");
  // 位数判断
  if (!strArr || strArr.length < cronMin || strArr.length > cronMax) {
    throw new Error(`当前 ${cronExpression} cron表达式暂不支持`);
  }

  // 获取周、月、日、时、分、秒
  const len = strArr.length;
  const [week, month, day, hour, minute, second] = [strArr[len - 1], strArr[len - 2], strArr[len - 3], strArr[len - 4], strArr[len - 5], strArr[len - 6] || ""];
  console.log(`week: ${week} month: ${month} day: ${day} hour: ${hour} minute: ${minute} second: ${second}`);

  return {
    week: parseCronWeek(week, 0, 7),
    month: parseCronBase(month, 1, 12, "month"),
    day: parseCronDay(day, 1, 31),
    hour: parseCronBase(hour, 0, 23, 'hour'),
    minute: parseCronBase(minute, 0, 59, 'minute'),
    second: parseCronBase(second, 0, 59, 'second'),
  };
}

/**
 * 各字段cron字符串解析
 * @param cronStr cron表达式
 * @param min 最小值
 * @param max 最大值
 * @param type 类型
 * @returns 数字数组
 */
export default function parseCronBase(cronStr: string, min: number, max: number, type: keyof ICronTime) {
  if (!cronStr) return []

  const cronStrArr = String(cronStr || "").trim().split(',').map(txt => txt.trim());
  // 如何存在通配符 * 择返回全部区间
  if (cronStrArr.includes("*")) return Array.from({ length: max - min + 1 }).map((_, i) => i + min)

  return cronStrArr.map(txt => parseCronItem(txt, min, max, type)).flat(1)
}

