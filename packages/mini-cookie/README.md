# mini-cookie

一个 Document.cookie 管理包, A Document.cookie Manager Lib

- 😄 无依赖包 - No Dependency
- 🤡 支持广泛浏览器 - Support Extensive Browser
- ✅ 支持 ESModule - Support ESM
- ✅ 支持 CommonJS - Support CJS
- ✅ 支持 UMD - Support UMD
- ✅ 本身支持 TS - Support TS
- 👉 可自定义 Cookie TS 类型提示(重写全局 IMiniCookieObject 类型定义即可) - Support TS

## 安装方式 - Installation

```bash
# pnpm
pnpm i mini-cookie

# yarn
yarn add mini-cookie

# npm
npm i mini-cookie

# bun
bun install mini-cookie
```

## 使用方式 - Usage

```js
// ESM xxx.js
import miniCookie from 'mini-cookie';
miniCookie.set('cookieName', 'cookieValue')
console.log(miniCookie.get('cookieName'))

// CJS xxx.js
const miniCookie = require('mini-cookie');
miniCookie.set('cookieName', 'cookieValue')
console.log(miniCookie.get('cookieName'))

// UMD xxx.html 普通 script 直接导入 -> 访问全局变量 miniCookieLib
<script src="https://unpkg.com/mini-cookie@0.0.1"></script>;
<script>
  console.log("miniCookieLib 包对象: ", miniCookieLib)
  miniCookieLib.set('cookieName', 'cookieValue')
  console.log(miniCookieLib.get('cookieName'))
  console.log(miniCookieLib.has('cookieName'))
</script>

// script type module 模块化内部引入方式
<script type="module">
  import miniCookieLib from "https://unpkg.com/mini-cookie@0.0.1/dist/index.esm.js";
  console.log("miniCookieLib 包对象: ", miniCookieLib)
  miniCookieLib.set('cookieName', 'cookieValue')
  console.log(miniCookieLib.get('cookieName'))
  console.log(miniCookieLib.has('cookieName'))
  console.log(miniCookieLib.del('cookieName'))
  console.log(miniCookieLib.has('cookieName'))
</script>
```

## miniCookie 方法 - API

| 方法名    | 描述                 | 参数                                                                                                                | 返回值            |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------- |
| get       | 获取 Cookie          | <O extends IMiniCookieObject, K extends keyof O>(key: K) => O[K]                                                    | O[K]              |
| set       | 设置 Cookie          | <O extends IMiniCookieObject, K extends keyof O, V extends O[K]>(key: K, val: V, opts?: IMiniCookieOpts) => boolean | boolean           |
| has       | 判断 Cookie 是否存在 | <O extends IMiniCookieObject, K extends keyof O>(key: K) => boolean                                                 | boolean           |
| del       | 删除 Cookie          | <O extends IMiniCookieObject, K extends keyof O>(key: K) => boolean                                                 | boolean           |
| parse     | 解析 Cookie 字符串   | <O extends IMiniCookieObject>(cookieStr: string) => IMiniCookieObject                                               | IMiniCookieObject |
| serialize | 序列化 Cookie 对象   | (name: string, val: any, opts?: IMiniCookieOpts) => string                                                          | string            |

## License

MIT
