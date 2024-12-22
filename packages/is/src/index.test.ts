import {
  isArray,
  isBigInt,
  isBoolean,
  isDate,
  isError,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
} from './index';

test('检查给定的值是否为 Undefined', () => {
  expect(isUndefined(undefined)).toBe(true);
  expect(isUndefined(null)).toBe(false);
});

test('检查给定的值是否为 Null', () => {
  expect(isNull(null)).toBe(true);
  expect(isNull(undefined)).toBe(false);
});

test('检查给定的值是否为 Number', () => {
  expect(isNumber(123)).toBe(true);
  expect(isNumber(undefined)).toBe(false);
});

test('检查给定的值是否为 String', () => {
  expect(isString('')).toBe(true);
  expect(isString(1)).toBe(false);
});

test('检查给定的值是否为 Boolean', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean(1)).toBe(false);
});

test('检查给定的值是否为 Symbol', () => {
  expect(isSymbol(Symbol('11'))).toBe(true);
  expect(isSymbol(1)).toBe(false);
});

test('检查给定的值是否为 BigInt', () => {
  expect(isBigInt(BigInt(1234567891011121314151617181920))).toBe(true);
  expect(isBigInt(false)).toBe(false);
});

test('检查给定的值是否为 Object', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(false);
});

test('检查给定的值是否为 Array', () => {
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
});

test('检查给定的值是否为 Function', () => {
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction(function () {})).toBe(true);
  expect(isFunction({})).toBe(false);
  expect(isFunction([])).toBe(false);
});

test('检查给定的值是否为 Date', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate({})).toBe(false);
});

test('检查给定的值是否为 RegExp', () => {
  expect(isRegExp(new RegExp('/d/ig'))).toBe(true);
  expect(isRegExp(/\d/gi)).toBe(true);
  expect(isRegExp({})).toBe(false);
});

test('检查给定的值是否为 Error', () => {
  expect(isError(new Error('错误信息'))).toBe(true);
  expect(isError(/\d/gi)).toBe(false);
  expect(isError({})).toBe(false);
});

test('检查给定的值是否为 Map', () => {
  expect(isMap(new Map())).toBe(true);
  expect(isMap(/\d/gi)).toBe(false);
  expect(isMap({})).toBe(false);
});

test('检查给定的值是否为 Set', () => {
  expect(isSet(new Set())).toBe(true);
  expect(isSet(/\d/gi)).toBe(false);
  expect(isSet({})).toBe(false);
});

test('检查给定的值是否为 WeakMap', () => {
  expect(isWeakMap(new WeakMap())).toBe(true);
  expect(isWeakMap(/\d/gi)).toBe(false);
  expect(isWeakMap({})).toBe(false);
});

test('检查给定的值是否为 WeakSet', () => {
  expect(isWeakSet(new WeakSet())).toBe(true);
  expect(isWeakSet(/\d/gi)).toBe(false);
  expect(isWeakSet({})).toBe(false);
});
