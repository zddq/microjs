# mini-local-store

mini-local-store 是一个轻量级的 JavaScript 库，旨在简化对浏览器本地存储（localstorage）的操作。它提供了一组简单易用的 API，允许开发者轻松地读取、设置和删除本地存储中的数据项，而无需直接处理复杂的字符串操作和数据序列化/反序列化过程。

- 🤡 支持广泛浏览器 - Support Extensive Browser
- ✅ 自动处理数据的序列化与反序列化 - Support Serialization
- ✅ 支持数据过期机制 - Support Expire
- ✅ 支持数据加密 - Support Encrypt
- ✅ 本身内置 TS 类型提示, 无需下载额外 @types 类型提示包 TS - Support TS
- 👉 可自定义 Cookie TS 类型提示(重写模块 IMiniLocalStorageData 类型定义即可) - Support Custom TS

## 安装方式 - Installation

```bash
# pnpm
pnpm i mini-local-store

# yarn
yarn add mini-local-store

# npm
npm i mini-local-store

# bun
bun install mini-local-store
```

## 使用方式 - Usage

```js
// ESM xxx.js
import MLS from 'mini-local-storage';
const LS = MLS.create()
LS.set('key', 'val')
console.log(LS.get('key'))

// CJS xxx.js
const MLS = require('mini-local-storage');
const LS = MLS.create()
LS.set('key', 'val')
console.log(LS.get('key'))

// UMD xxx.html 普通 script 直接导入 -> 访问全局变量 MLS
<script src="https://unpkg.com/mini-local-storage@0.0.1"></script>;
<script>
  console.log("MLS 包对象: ", MLS)
  const LS = MLS.create()
  LS.set('key', 'val')
  console.log(LS.get('key'))
  console.log(LS.has('key'))
</script>

// script type module 模块化内部引入方式
<script type="module">
  import MLS from "https://unpkg.com/mini-local-storage@0.0.1/dist/index.esm.js";
  console.log("MLS 包对象: ", MLS)
  const LS = MLS.create()
  LS.set('key', 'val')
  console.log(LS.get('key'))
  console.log(LS.del('key'))
  console.log(LS.has('key'))
</script>
```

## mini-local-store

| 方法名  | 描述           | 参数                                        | 返回值          |
| ------- | -------------- | ------------------------------------------- | --------------- |
| create  | 创建实例       | create(config?:MiniLocalStorage.Config):any | create 实例对象 |
| version | 当前包版本信息 |                                             |                 |

## create 实例对象 - API

| 方法名  | 描述                             | 参数                                                         | 返回值  |
| ------- | -------------------------------- | ------------------------------------------------------------ | ------- |
| get     | 获取 key 值                      | get(key:string,config?:MiniLocalStorage.Config):any          | any     |
| set     | 设置 key 的 val 到浏览器本地存储 | set(key:string,val:any,config?:MiniLocalStorage.Config):void | void    |
| del     | 删除 key 值                      | del(key:string,config?:MiniLocalStorage.Config):void         | void    |
| has     | 判断 key 是否存在                | has(key:string,config?:MiniLocalStorage.Config):boolean      | boolean |
| version | 当前包版本信息                   |                                                              | string  |

## IMiniLocalStorageOpts 类型参数

## 覆写 IMiniLocalStorageData 获得自定义 TS 类型提示(可选)

```js
// 覆写 IMiniLocalStorageData 类型接口已获得类型提示
// 例如: 在 type/xxx.d.ts | global.d.ts 中定义 IMiniLocalStorageData 类型接口
interface IMiniLocalStorageData {
  name:string
  age:number
}
// 将 types/xxx.d.ts 加入到 tsconfig.json includes 中即可获得自定义类型提示功能咯
```

## License

MIT
