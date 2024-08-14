/** 特殊字符匹配 */
const RE_specialContent = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * cookie序列化
 * @param {string} name cookie名称
 * @param {*} val cookie值
 * @param {MiniCookie.IMiniCookieOpts} opts 自定义配置
 */
export default function cookieSerialize(name: string, val: any, opts: MiniCookie.IMiniCookieOpts = {}): string {
  const opt = opts || {};

  if (!RE_specialContent.test(name)) {
    throw new TypeError("argument name is invalid");
  }

  const value = encodeURIComponent(JSON.stringify(val).trim());
  if (value && !RE_specialContent.test(value)) {
    throw new TypeError("argument val is invalid");
  }

  let str = `${name}=${value}`;
  if (opt.domain) {
    if (!RE_specialContent.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += `; Domain=${opt.domain}`;
  }

  if (opt.path) {
    if (!RE_specialContent.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += `; Path=${opt.path}`;
  }

  if (opt.expires) {
    if (!isDate(opt.expires)) {
      throw new TypeError("option expires is invalid");
    }
    str += `; Expires=${opt.expires.toUTCString()}`;
  }

  if (typeof opt.maxAge === "number") {
    if (isNaN(opt.maxAge) || !isFinite(opt.maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += `; Max-Age=${Math.floor(opt.maxAge)}`;
  }

  if (opt.httpOnly) {
    str += `; HttpOnly`;
  }

  if (opt.secure) {
    str += `; Secure`;
  }

  if (opt.sameSite) {
    if (opt.sameSite !== "Strict" && opt.sameSite !== "Lax" && opt.sameSite !== "None") {
      throw new TypeError("option sameSite invalid, sameSite must be Strict | Lax |None");
    }
    str += `; SameSite=${opt.sameSite}`;
  }

  if (opt.partitioned) {
    str += `; Partitioned`;
  }

  if (opt.priority) {
    if (opt.priority !== "High" && opt.priority !== "Medium" && opt.priority !== "Low") {
      throw new TypeError("option priority invalid, priority muse be High | Medium | Low");
    }
    str += `; Priority=${opt.priority}`;
  }

  return str;
}

/**
 * @name 是否日期
 */
function isDate(val: any) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
