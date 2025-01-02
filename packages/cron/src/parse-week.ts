import parseCronItem from "./parse-item";
import { RE } from "./regexp";

/**
 * 解析 week cron 字符串
 * @param cronStr cron表达式
 * @param min 最小值
 * @param max 最大值
 * @returns (number|)[]
 */
export default function parseCronWeek(cronStr: string, min: number, max: number) {
  const str = String(cronStr).trim();
  if (!str) {
    throw new Error(`week ${cronStr} cron表达式无效`);
  }

  const cronStrArr = String(str || "").trim().split(',').map(txt => txt.trim());
  // 如何存在通配符 * ? 择返回全部区间
  if (cronStrArr.includes("*") || cronStrArr.includes("?")) return Array.from({ length: max - min + 1 }).map((_, i) => i + min)

  return cronStrArr.map(txt => {
    // 匹配 -> x#y 当月第y个星期x 或 x#* 当月每周第星期x
    if (RE.WEEK_XY.test(txt)) return [txt]

    // 匹配 -> xL 当月最后一个星期x
    if (RE.WEEK_xL.test(txt)) return [txt]

    // 特殊处理 7
    if (RE.NUM.test(txt) && +txt == 7) return [0]

    return parseCronItem(txt, min, max, "week")
  }).flat(1)
}
