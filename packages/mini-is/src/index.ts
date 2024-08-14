/**
 * 检查给定的值是否为 undefined。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是 undefined, 则返回 true; 否则返回 false
 */
export const isUndefined = (val: any) => typeof val === "undefined";

/**
 * 检查给定的值是否为 null。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是null, 则返回 true; 否则返回 false
 */
export const isNull = (val: any) => val === null;

/**
 * 检查给定的值是否为数字类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是数字类型, 则返回 true; 否则返回 false
 */
export const isNumber = (val: any) => typeof val === "number";

/**
 * 检查给定的值是否为字符串类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是字符串类型, 则返回 true; 否则返回 false
 */
export const isString = (val: any) => typeof val === "string";

/**
 * 检查给定的值是否为布尔值类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是布尔值类型, 则返回 true; 否则返回 false
 */
export const isBoolean = (val: any) => typeof val === "boolean";

/**
 * 检查给定的值是否为Symbol类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是Symbol类型, 则返回 true; 否则返回 false
 */
export const isSymbol = (val: any) => typeof val === "symbol";

/**
 * 检查给定的值是否为BigInt。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是BigInt, 则返回 true; 否则返回 false
 */
export const isBigInt = (val: any) => typeof val === "bigint";

/**
 * 检查给定的值是否为对象类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是对象类型, 则返回 true; 否则返回 false
 */
export const isObject = (val: any) => Object.prototype.toString.call(val) === "[object Object]";

/**
 * 检查给定的值是否为数组。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是数组, 则返回 true; 否则返回 false
 */
export const isArray = (val: any) => Array.isArray(val);

/**
 * 检查给定的值是否为函数。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是函数, 则返回 true; 否则返回 false
 */
export const isFunction = (val: any) => typeof val === "function";

/**
 * 检查给定的值是否为日期对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是日期对象, 则返回 true; 否则返回 false
 */
export const isDate = (val: any) => Object.prototype.toString.call(val) === "[object Date]";

/**
 * 检查给定的值是否为正则表达式。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是正则表达式, 则返回 true; 否则返回 false
 */
export const isRegExp = (val: any) => Object.prototype.toString.call(val) === "[object RegExp]";

/**
 * 检查给定的值是否为错误对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是错误对象, 则返回 true; 否则返回 false
 */
export const isError = (val: any) => Object.prototype.toString.call(val) === "[object Error]";

/**
 * 检查给定的值是否为Map对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是Map对象, 则返回 true; 否则返回 false
 */
export const isMap = (val: any) => Object.prototype.toString.call(val) === "[object Map]";

/**
 * 检查给定的值是否为Set对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是Set对象, 则返回 true; 否则返回 false
 */
export const isSet = (val: any) => Object.prototype.toString.call(val) === "[object Set]";

/**
 * 检查给定的值是否为WeakMap对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是WeakMap对象, 则返回 true; 否则返回 false
 */
export const isWeakMap = (val: any) => Object.prototype.toString.call(val) === "[object WeakMap]";

/**
 * 检查给定的值是否为 WeakSet对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是 WeakSet 对象, 则返回 true; 否则返回 false
 */
export const isWeakSet = (val: any) => Object.prototype.toString.call(val) === "[object WeakSet]";
