import { DEMO_CRON } from "./config"
import { RE } from "./regexp"

/**
 * 原子cron表达式解析
 * @param cronStr cron表达式
 * @param min 最小值
 * @param max 最大值
 * @param type 当前解析类型
 * @returns 数字数组
 */
export default function parseCronItem(cronStr: string, min: number, max: number, type: keyof ICronTime) {
  // 通配符匹配 -> *
  if (cronStr === "*") return Array.from({ length: max - min + 1 }, (_, i) => i + min)

  // 匹配数字 -> \d
  if (RE.NUM.test(cronStr)) {
    const tmpNum = Number(cronStr)
    if (tmpNum < min || tmpNum > max) {
      throw Error(`指定数字: ${cronStr} out of range ${min}-${max}`)
    }

    return [tmpNum]
  }

  // 匹配范围 -> -
  if (RE.NUM1.test(cronStr)) {
    const [num1, num2] = cronStr.split("-").map(num => parseInt(num, 10))
    if (num1 == num2) return [num1]

    const minNum = Math.min(num1, num2)
    const maxNum = Math.max(num1, num2)
    if (minNum < min || maxNum > max) {
      throw new Error(`指定范围: ${cronStr} out of range ${min}-${max}`)
    }

    return Array.from({ length: maxNum - minNum + 1 }, (_, i) => i + minNum)
  }

  // 匹配步长 -> /
  if (RE.NUM2.test(cronStr)) {
    const [minNum, maxNum] = cronStr.split("/").map(txt => txt === "*" ? min : +txt)
    if (minNum < min || maxNum > max) {
      throw new Error(`指定步长: ${cronStr} out of range ${min}/${max}`)
    }

    return Array.from({ length: Math.ceil((max - minNum) / maxNum) + 1 }, (_, i) => i * maxNum + minNum).filter(num => num >= min && num <= max)
  }

  throw new Error(`当前 ${type} ${cronStr} cron表达式无效 目前仅支持 ${DEMO_CRON[type]} 特殊字符`)
}
