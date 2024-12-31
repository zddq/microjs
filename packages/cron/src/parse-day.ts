import parseCronItem from "./parse-item";
import { RE } from "./regexp";

/**
 * 解析 day cron 字符串
 * @param cronStr cron表达式
 * @param min 最小值
 * @param max 最大值
 * @returns (number|)[]
 */
export default function parseCronDay(cronStr: string, min: number, max: number) {
  const str = String(cronStr).trim();
  if (!str) {
    throw new Error(`当前 ${cronStr} cron表达式无效`);
  }

  const cronStrArr = String(str || "").trim().split(',').map(txt => txt.trim());
  // 如何存在通配符 * ? 择返回全部区间
  if (cronStrArr.includes("*") || cronStrArr.includes("?")) return Array.from({ length: max - min + 1 }).map((_, i) => i + min)

  return cronStrArr.map(txt => {
    // 匹配 -> L 当月最后一天
    if (RE.DAY_L.test(txt)) return [txt]

    // 匹配 -> LW 当月最后一个工作日
    if (RE.DAY_LW.test(txt)) return [txt]

    // 匹配 -> xW 当月x日最近工作日
    if (RE.DAY_xW.test(txt)) return [txt]

    return parseCronItem(txt, min, max, "day")
  }).flat(1)
}
