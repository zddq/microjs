/**
 * 检查给定的值是否为 undefined。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是 undefined, 则返回 true; 否则返回 false
 */
export declare const isUndefined: (val: any) => val is undefined;
/**
 * 检查给定的值是否为 null。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是null, 则返回 true; 否则返回 false
 */
export declare const isNull: (val: any) => boolean;
/**
 * 检查给定的值是否为数字类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是数字类型, 则返回 true; 否则返回 false
 */
export declare const isNumber: (val: any) => val is number;
/**
 * 检查给定的值是否为字符串类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是字符串类型, 则返回 true; 否则返回 false
 */
export declare const isString: (val: any) => val is string;
/**
 * 检查给定的值是否为布尔值类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是布尔值类型, 则返回 true; 否则返回 false
 */
export declare const isBoolean: (val: any) => val is boolean;
/**
 * 检查给定的值是否为Symbol类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是Symbol类型, 则返回 true; 否则返回 false
 */
export declare const isSymbol: (val: any) => val is symbol;
/**
 * 检查给定的值是否为BigInt。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是BigInt, 则返回 true; 否则返回 false
 */
export declare const isBigInt: (val: any) => val is bigint;
/**
 * 检查给定的值是否为对象类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是对象类型, 则返回 true; 否则返回 false
 */
export declare const isObject: (val: any) => boolean;
/**
 * 检查给定的值是否为数组。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是数组, 则返回 true; 否则返回 false
 */
export declare const isArray: (val: any) => val is any[];
/**
 * 检查给定的值是否为函数。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是函数, 则返回 true; 否则返回 false
 */
export declare const isFunction: (val: any) => boolean;
/**
 * 检查给定的值是否为日期对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是日期对象, 则返回 true; 否则返回 false
 */
export declare const isDate: (val: any) => boolean;
/**
 * 检查给定的值是否为正则表达式。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是正则表达式, 则返回 true; 否则返回 false
 */
export declare const isRegExp: (val: any) => boolean;
/**
 * 检查给定的值是否为错误对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是错误对象, 则返回 true; 否则返回 false
 */
export declare const isError: (val: any) => boolean;
/**
 * 检查给定的值是否为Map对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是Map对象, 则返回 true; 否则返回 false
 */
export declare const isMap: (val: any) => boolean;
/**
 * 检查给定的值是否为Set对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是Set对象, 则返回 true; 否则返回 false
 */
export declare const isSet: (val: any) => boolean;
/**
 * 检查给定的值是否为WeakMap对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是WeakMap对象, 则返回 true; 否则返回 false
 */
export declare const isWeakMap: (val: any) => boolean;
/**
 * 检查给定的值是否为 WeakSet对象。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是 WeakSet 对象, 则返回 true; 否则返回 false
 */
export declare const isWeakSet: (val: any) => boolean;
