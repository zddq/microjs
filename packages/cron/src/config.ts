
/**
 * 目前各字段域支持的cron表达式特殊字符
 */
export const DEMO_CRON: { [key in keyof ICronTime]: string } = {
  week: "* , - / ? L #",
  month: "* , - /",
  day: "* , - / ? L W",
  hour: "* , - /",
  minute: "* , - /",
  second: "* , - /",
}
