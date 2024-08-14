# mini-cookie

一个 Document.cookie 管理包 - A Document.cookie Manager Lib

- 😄 无依赖包 - No Dependency
- 🤡 支持广泛浏览器 - Support Extensive Browser
- ✅ 支持 ESModule - Support ESM
- ✅ 支持 CommonJS - Support CJS
- ✅ 支持 UMD - Support UMD
- ✅ 本身支持 TS - Support TS
- 👉 可自定义 Cookie TS 类型提示(重写模块 ICookieData 类型定义即可) - Support Custom TS

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
import MiniCookie from 'mini-cookie';
MiniCookie.set('cookieName', 'cookieValue')
console.log(MiniCookie.get('cookieName'))

// CJS xxx.js
const MiniCookie = require('mini-cookie');
MiniCookie.set('cookieName', 'cookieValue')
console.log(MiniCookie.get('cookieName'))

// UMD xxx.html 普通 script 直接导入 -> 访问全局变量 MiniCookie
<script src="https://unpkg.com/mini-cookie@0.0.1"></script>;
<script>
  console.log("MiniCookie 包对象: ", MiniCookie)
  MiniCookie.set('cookieName', 'cookieValue')
  console.log(MiniCookie.get('cookieName'))
  console.log(MiniCookie.has('cookieName'))
</script>

// script type module 模块化内部引入方式
<script type="module">
  import MiniCookie from "https://unpkg.com/mini-cookie@0.0.1/dist/index.esm.js";
  console.log("MiniCookie 包对象: ", MiniCookie)
  MiniCookie.set('cookieName', 'cookieValue')
  console.log(MiniCookie.get('cookieName'))
  console.log(MiniCookie.has('cookieName'))
  console.log(MiniCookie.del('cookieName'))
  console.log(MiniCookie.has('cookieName'))
</script>
```

## miniCookie 方法 - API

| 方法名    | 描述                                 | 参数                                               | 返回值            |
| --------- | ------------------------------------ | -------------------------------------------------- | ----------------- |
| get       | 获取 Cookie                          | get(key:string)                                    | any               |
| set       | 设置 Cookie                          | set(key:string, value:any,opts:IMiniCookieOpts)    | boolean           |
| has       | 判断 Cookie 是否存在                 | has(key:string)                                    | boolean           |
| del       | 删除 Cookie                          | del(key:string)                                    | boolean           |
| parse     | 解析 Cookie 字符串 IMiniCookieObject | parse(cookie:string)                               | IMiniCookieObject |
| serialize | 序列化 Cookie 对象                   | serialize(key:string,val:any,opts:IMiniCookieOpts) | string            |

## IMiniCookieOpts 类型参数

| 属性 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| domain | string | 域名 | 默认为当前文档路径域部分 |
| path | string | 路径 | 默认为当前文档位置的路径 |
| expires | Date | 过期时间 (推荐) | 未设置则会在对话结束时过期 |
| maxAge | number | 最大存活时间,单位(s), MaxAge 优先级高于 Expires。 | 无 |
| httpOnly | boolean | 是否阻止客户端脚本（如JavaScript）访问该Cookie, <br>**_只能在服务器端设置，不能在客户端设置。_** | false |
| secure | boolean | 是否只允许 HTTPS 请求访问 | false |
| sameSite | "Strict", "Lax", "None" | 允许的跨域请求。<br>Strict - 只允许同源的请求访问。 <br>Lax - 允许跨域的请求访问。 <br>None - Cookie会在所有请求中发送，但需要同时设置Secure属性 | 无 |
| partitioned | boolean | 是否开启分区，默认为 false。 | 无 |
| priority | "High", "Medium", "Low" | 保留优先级权重。<br> High - 最后被清除 <br> Medium - 中等 <br> Low - 低保留权重当Cookie达上限时会优先被清除 | "Medium" |

## 覆写 ICookieData 获得自定义 TS 类型提示(可选)

```js
// 覆写 ICookieData 类型接口已获得类型提示
// 例如: 在 type/xxx.d.ts | global.d.ts 中定义 ICookieData 类型接口
declare namespace MiniCookie {
  interface ICookieData {
    name:string
    age:number
  }
}
// 将 types/xxx.d.ts 加入到 tsconfig.json includes 中即可获得自定义类型提示功能咯

```

## blessing

🥰 献给所有追求简洁与规范代码的开发者，愿我们的代码如诗般优雅，逻辑清晰，易于维护。

## License

MIT
