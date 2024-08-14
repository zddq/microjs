/**
 * cookie解析
 * @param {string} cookieStr cookie字符串
 * @return Cookie Object
 */
export default function cookieParse<O extends IMiniCookieObject>(cookieStr: string): O {
  if (!cookieStr || typeof cookieStr !== "string") {
    return {} as O;
  }

  return tryDecode(cookieStr)
    .split(";")
    .filter(Boolean)
    .map(kvStr => kvStr.split("="))
    .reduce((tmpObj, [key, val = ""]) => ({ ...tmpObj, [key.trim()]: JSON.parse(tryDecode(val.trim())) }), {} as O);
}

function tryDecode(str: string) {
  try {
    return str.includes("%") ? decodeURIComponent(str) : str;
  } catch (error) {
    return str;
  }
}
