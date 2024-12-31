import parseCronBase from "./parse-base";
import parseCronDay from "./parse-day";
import parseCronWeek from "./parse-week";

const cronDemo = `*(可选) * * * * *`;
const cronMin = 5;
const cronMax = 6;

/**
 * cron 表达式解析
 * @param cronExpression cron表达式
 * @returns ICronTime
 */
export function parseCronExpressionFn(cronExpression: string): ICronTime {
  console.log("parse cron str", cronExpression);
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
    month: parseCronBase(month, 1, 12),
    day: parseCronDay(day, 1, 31),
    hour: parseCronBase(hour, 0, 23),
    minute: parseCronBase(minute, 0, 59),
    second: parseCronBase(second, 0, 59),
  };
}
