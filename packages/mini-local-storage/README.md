# mini-local-storage

mini-local-storage 是一个轻量级的 JavaScript 库，旨在简化对浏览器本地存储（localStorage）的操作。它提供了一组简单易用的 API，允许开发者轻松地读取、设置和删除本地存储中的数据项，而无需直接处理复杂的字符串操作和数据序列化/反序列化过程。

- 😄 无依赖包 - No Dependency
- 🤡 支持广泛浏览器 - Support Extensive Browser
- ✅ 自动处理数据的序列化与反序列化 - Support Serialization
- ✅ 支持数据过期机制 - Support Expire
- ✅ 支持数据加密 - Support Encrypt
- ✅ 本身内置 TS 类型提示, 无需下载额外 @types 类型提示包 TS - Support TS
- 👉 可自定义 Cookie TS 类型提示(重写模块 IMiniLocalStorageData 类型定义即可) - Support Custom TS

## 安装方式 - Installation

```bash
# pnpm
pnpm i mini-local-storage

# yarn
yarn add mini-local-storage

# npm
npm i mini-local-storage

# bun
bun install mini-local-storage
```

## 使用方式 - Usage

```js
// ESM xxx.js
import MiniCookie from 'mini-local-storage';
MiniCookie.set('key', 'val')
console.log(MiniCookie.get('key'))

// CJS xxx.js
const MiniCookie = require('mini-local-storage');
MiniCookie.set('key', 'val')
console.log(MiniCookie.get('key'))

// UMD xxx.html 普通 script 直接导入 -> 访问全局变量 MiniLocalStorage
<script src="https://unpkg.com/mini-local-storage@0.0.1"></script>;
<script>
  console.log("MiniLocalStorage 包对象: ", MiniLocalStorage)
  MiniLocalStorage.set('key', 'val')
  console.log(MiniLocalStorage.get('key'))
  console.log(MiniLocalStorage.has('key'))
</script>

// script type module 模块化内部引入方式
<script type="module">
  import MiniLocalStorage from "https://unpkg.com/mini-local-storage@0.0.1/dist/index.esm.js";
  console.log("MiniLocalStorage 包对象: ", MiniLocalStorage)
  MiniLocalStorage.set('key', 'val')
  console.log(MiniLocalStorage.get('key'))
  console.log(MiniLocalStorage.has('key'))
  console.log(MiniLocalStorage.del('key'))
  console.log(MiniLocalStorage.has('key'))
</script>
```

## MiniLocalStorage 方法 - API

| 方法名    | 描述                                 | 参数                                               | 返回值            |
| --------- | ------------------------------------ | -------------------------------------------------- | ----------------- |

## IMiniLocalStorageOpts 类型参数

## 覆写 IMiniLocalStorageData 获得自定义 TS 类型提示(可选)

```js
// 覆写 IMiniLocalStorageData 类型接口已获得类型提示
// 例如: 在 type/xxx.d.ts | global.d.ts 中定义 IMiniLocalStorageData 类型接口
declare namespace MiniLocalStorage {
  interface IMiniLocalStorageData {
    name:string
    age:number
  }
}
// 将 types/xxx.d.ts 加入到 tsconfig.json includes 中即可获得自定义类型提示功能咯

```

## Blessing

🥰 献给所有追求简洁与规范代码的开发者，愿我们的代码如诗般优雅，逻辑清晰，易于维护。

## License

MIT
