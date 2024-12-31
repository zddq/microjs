import parseCronItem from './parse-item'

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
