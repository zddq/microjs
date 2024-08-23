import { aesEncrypt, aesDecrypt } from "../src/tool-aes";

const customAesKey = "customAesKey";
const customAesIv = "customAesIv";

const testVals = [null, "string", "", -1, 0, 1, true, false, [], [1, 2, 3], {}, { a: 1, b: 2 }, { a: 1, b: 2 }];

// 测试 AES 加解密
test.each([
  ...testVals
    .map(data => [
      [data, {}],
      [data, { customAesKey }],
      [data, { customAesIv }],
      [data, { customAesKey, customAesIv }],
    ])
    .flat(1),
] as Array<[any, MiniLocalStorage.Config]>)("test tool AES EncryptAndDecrypt %p %p", (data, config) => {
  expect(aesDecrypt(aesEncrypt(data, config), config)).toBe(JSON.stringify(data));
});
