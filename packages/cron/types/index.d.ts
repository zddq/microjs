/// <reference types="./global.d.ts" />

/**
 * cron 定时任务
 * @function add 添加定时任务
 * @example add("00 00 * * *", task) 每天午夜12:00执行 task 任务
 */
declare const cron: ICron;
export default cron;
