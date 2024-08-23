import CryptoJS from "crypto-js";

const secretKey = "mini-local-storage-MLS_AES_SECRET_KEY";
const iv = CryptoJS.enc.Utf8.parse(`mini-local-storage-MLS_AES_IV`);

/**
 * 数据加密
 */
export function aesEncrypt(data: any, config?: MiniLocalStorage.Config) {
  if (!config || (!config.customAesKey && !config.customAesIv)) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey, { iv }).toString();
  }

  if (config.customAesKey && !config.customAesIv) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), config.customAesKey, { iv: iv }).toString();
  }

  if (!config.customAesKey && config.customAesIv) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey, { iv: CryptoJS.enc.Utf8.parse(config.customAesIv) }).toString();
  }

  return CryptoJS.AES.encrypt(JSON.stringify(data), config.customAesKey, { iv: CryptoJS.enc.Utf8.parse(config.customAesIv) }).toString();
}

/**
 * 数据解密
 */
export function aesDecrypt(str: string, config?: MiniLocalStorage.Config) {
  if (!config || (!config.customAesKey && !config.customAesIv)) {
    return CryptoJS.AES.decrypt(str, secretKey, { iv }).toString(CryptoJS.enc.Utf8);
  }

  if (config.customAesKey && !config.customAesIv) {
    return CryptoJS.AES.decrypt(str, config.customAesKey, { iv }).toString(CryptoJS.enc.Utf8);
  }

  if (!config.customAesKey && config.customAesIv) {
    return CryptoJS.AES.decrypt(str, secretKey, { iv: CryptoJS.enc.Utf8.parse(config.customAesIv) }).toString(CryptoJS.enc.Utf8);
  }

  return CryptoJS.AES.decrypt(str, config.customAesKey, { iv: CryptoJS.enc.Utf8.parse(config.customAesIv) }).toString(CryptoJS.enc.Utf8);
}
