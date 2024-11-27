/**
 * @name cookie-字符串解析成对象
 * @param {string} cookieStr cookie字符串
 * @return Cookie Object
 */
export default function cookieParse<O extends MiniCookie.IMiniCookieData>(cookieStr: string): O {
  try {
    if (!cookieStr || typeof cookieStr !== "string") {
      return {} as O;
    }

    return tryDecode(cookieStr)
      .split(";")
      .filter(Boolean)
      .map(kvStr => kvStr.split("="))
      .reduce((tmpObj, [key, val = ""]) => {
        try {
          return { ...tmpObj, [key.trim()]: JSON.parse(val.trim()) };
        } catch (error) {
          return { ...tmpObj, [key.trim()]: val.trim() };
        }
      }, {} as O);
  } catch (error) {
    console.error(error);
    return {} as O;
  }
}

function tryDecode(str: string) {
  try {
    return str.includes("%") ? decodeURIComponent(str) : str;
  } catch (error) {
    return str;
  }
}
