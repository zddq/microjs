export const DEMO_CRON: { [key in keyof ICronTime]: string } = {
  week: "* , - / ? L #",
  month: "* , - /",
  day: "* , - / ? L W",
  hour: "* , - /",
  minute: "* , - /",
  second: "* , - /",

}
