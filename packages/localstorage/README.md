# @minisss/localstorage

@minisss/localstorage 是一个专为浏览器环境设计的轻量级本地存储库，旨在简化对 localStorage 的操作，同时提供丰富的功能和更好的开发体验。

- 🤡 支持广泛浏览器
- ✅ 自定义前缀
- ✅ 数据过期机制
- ✅ 支持JSON数据格式
- ✅ 内置 TS 类型提示(全局定义 IMiniLocalStorage 定义即可)
- ✅ 支持 ESM CJS UMD

## 安装方式

```bash
# pnpm
pnpm i mini-local-store

# yarn
yarn add mini-local-store

# npm
npm install mini-local-store

# bun
bun install mini-local-store
```

## 使用方式

### ESM

```js
import MLS from "mini-local-storage";
MLS.set("key", "val");
console.log(MLS.get("key"));
```

### CJS

```js
const MLS = require("mini-local-storage");
MLS.set("key", "val");
console.log(MLS.get("key"));
```

### UMD xxx.html 普通 script 直接导入 -> 访问全局变量 MLS

```js
// UMD
<script src="https://unpkg.com/@minisss/localstorage@0.0.1-alpha.1"></script>;
<script>console.log("MLS 包对象: ", MLS) MLS.set('key', 'val') console.log(MLS.get('key')) console.log(MLS.has('key'))</script>;
```

### UMD xxx.html script type module 模块化内部引入方式

```js
<script type="module">
  import MLS from "https://unpkg.com/@minisss/localstorage@0.0.1-alpha.1/dist/index.esm.js"; console.log("MLS 包对象: ", MLS) MLS.set('key', 'val') console.log(MLS.get('key'))
  console.log(MLS.del('key')) console.log(MLS.has('key'))
</script>
```

## API

| 名称      | 描述           | 参数                                     | 返回值   |
| --------- | -------------- | ---------------------------------------- | -------- |
| create    | 创建实例(推荐) | create(config?:Config)                   | 实例对象 |
| set       | 设置           | set(key:string, val:any, config?:Config) | void     |
| get       | 获取           | get(key:string, config?:Config)          | any      |
| has       | 判断           | has(key:string, config?:Config)          | boolean  |
| del       | 删除           | del(key:string, config?:Config)          | boolean  |
| key       | 获取 key       | key(index:number)                        | any      |
| clear     | 清除本地数据   | clear()                                  | void     |
| length    | 本地存储数量   |                                          | number   |
| isSupport | 是否支持       |                                          | boolean  |
| version   | 版本信息       |                                          | string   |

## 实例对象

| 名称      | 描述         | 示例                                     | 返回值  |
| --------- | ------------ | ---------------------------------------- | ------- |
| set       | 设置         | set(key:string, val:any, config?:Config) | void    |
| get       | 获取         | get(key:string, config?:Config)          | any     |
| has       | 判断         | has(key:string, config?:Config)          | boolean |
| del       | 删除         | del(key:string, config?:Config)          | boolean |
| key       | 获取 key     | key(index:number)                        | any     |
| clear     | 清除本地数据 | clear()                                  | void    |
| length    | 本地存储数量 |                                          | number  |
| isSupport | 是否支持     |                                          | boolean |
| version   | 版本信息     |                                          | string  |

## Config

| 名称    | 描述                         | 数据类型 | 默认值 |
| ------- | ---------------------------- | -------- | ------ |
| prefix  | key前缀                      | string   | ''     |
| maxAge  | 过期时间，单位为秒           | number   | 0      |
| expires | 过期时间(maxAge会覆盖此参数) | Date     | 0      |

## 支持 TS 类型提示(可选)

```js
// 覆写 IMiniLocalStorage 类型接口
// 例如: 在 type/xxx.d.ts | global.d.ts 或某个 .d.ts 文件中定义 IMiniLocalStorage 类型接口
interface IMiniLocalStorage {
  name:string
  age:number
}
// 将 types/xxx.d.ts 加入到 tsconfig.json includes 中即可获得自定义类型提示功能
```
