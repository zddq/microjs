# mini-local-store

mini-local-store 是一个轻量级的 JavaScript 库，旨在简化对浏览器本地存储（localstorage）的操作。

- 🤡 支持广泛浏览器 - Support Extensive Browser
- ✅ 自动处理数据的序列化与反序列化 - Support Serialization
- ✅ 支持数据过期机制 - Support Expire
- ✅ 本身内置 TS 类型提示, 无需下载额外 @types 类型提示包 TS - Support TS
- ✅ 支持 ESM - Support ESM
- ✅ 支持 CJS - Support CJS
- ✅ 支持 UMD - Support UMD
- 👉 可自定义 Cookie TS 类型提示(重写模块 IMiniLocalStoreData 类型定义即可) - Support Custom TS

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

## mini-local-store 属性及方法

| 名称    | 描述     | 参数                                      | 返回值          |
| ------- | -------- | ----------------------------------------- | --------------- |
| create  | 创建实例 | create(config?:MiniLocalStore.Config):any | create 实例对象 |
| version | 版本信息 |                                           | 当前包版本      |

## create 实例对象 - API

| 名称    | 描述     | 参数                                                       | 返回值  |
| ------- | -------- | ---------------------------------------------------------- | ------- |
| get     | 获取     | get(key:string,config?:MiniLocalStore.Config):any          | any     |
| set     | 设置     | set(key:string,val:any,config?:MiniLocalStore.Config):void | void    |
| del     | 删除     | del(key:string,config?:MiniLocalStore.Config):void         | boolean |
| has     | 判断     | has(key:string,config?:MiniLocalStore.Config):boolean      | boolean |
| version | 版本信息 |                                                            | string  |

## Config 配置

| 名称    | 描述                         | 数据类型 | 默认值 |
| ------- | ---------------------------- | -------- | ------ |
| prefix  | key前缀                      | string   | ''     |
| maxAge  | 过期时间，单位为秒           | number   | 0      |
| expires | 过期时间(maxAge会覆盖此参数) | Date     | 0      |

## 自定义 TS 类型提示(可选)

```js
// 覆写 IMiniLocalStoreData 类型接口
// 例如: 在 type/xxx.d.ts | global.d.ts 或某个 .d.ts 文件中定义 IMiniLocalStoreData 类型接口
interface IMiniLocalStoreData {
  name:string
  age:number
}
// 将 types/xxx.d.ts 加入到 tsconfig.json includes 中即可获得自定义类型提示功能
```

## License

MIT
