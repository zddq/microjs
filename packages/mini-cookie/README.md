# mini-cookie

一个 Document.cookie 管理包, A Document.cookie Manager Lib

## 单元测试覆盖率

## Installation

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

## Usage

```js
// ESM xxx.js
import { isString } from 'mini-cookie';
console.log(isString('hello'));

// CJS xxx.js
const { isString } = require('mini-cookie');
console.log(isString('hello'));

// UMD xxx.html 普通 script 直接导入 -> 访问全局变量 miniIsLib
<script src="https://unpkg.com/mini-cookie@1.0.0"></script>;
<script>
  console.log("miniIsLib 包对象: ", miniIsLib)
  console.log("miniIsLib.isString('11') 结果: ", miniIsLib.isString("11"))
</script>

// script type module 模块化方式 -> 内部访问全局变量  miniIsLib
<script type="module" src="https://unpkg.com/mini-cookie@1.0.0"></script>
<script type="module">
  console.log("miniIsLib 包对象: ", miniIsLib)
  console.log("miniIsLib.isString('11') 结果: ", miniIsLib.isString("11"))
</script>

// script type module 模块化内部引入方式
<script type="module">
  import * as miniIsLib from "https://unpkg.com/mini-cookie@1.0.0/dist/index.esm.js";
  console.log("miniIsLib 包对象: ", miniIsLib)
  console.log("miniIsLib.isString('11') 结果: ", miniIsLib.isString("11"))
</script>
```

## License

MIT
