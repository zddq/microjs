# mini-is

小而美的 JS 类型判断方法库 - Small and Beautiful JS Type Judgment Method Library

## 单元测试覆盖率

```js
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.261 s, estimated 1 s
Ran all test suites.
```

## Installation

```bash
# pnpm
pnpm i mini-is

# yarn
yarn add mini-is

# npm
npm i mini-is

# bun
bun install mini-is
```

## Usage

```js
// ESM xxx.js
import { isString } from 'mini-is';
console.log(isString('hello'));

// CJS xxx.js
const { isString } = require('mini-is');
console.log(isString('hello'));

// script type module 模块化内部引入方式
<script type="module">
  import * as MiniIs from "https://unpkg.com/mini-is@1.0.5/dist/index.esm.js";
  console.log("MiniIs 包对象: ", MiniIs);
  console.log("MiniIs.isString('11') 结果: ", MiniIs.isString("11"));
</script>

// script 普通 script 直接导入 -> 访问全局变量 MiniIs
<script src="https://unpkg.com/mini-is"></script>
<script>
console.log(MiniIs)
</script>

```

## License

MIT
