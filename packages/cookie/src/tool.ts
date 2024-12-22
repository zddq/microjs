/**
 * 解码参数解码
 */
export function tryDecode(str: string) {
  try {
    return str.includes("%") ? decodeURIComponent(str) : str;
  } catch (error) {
    return str;
  }
}
