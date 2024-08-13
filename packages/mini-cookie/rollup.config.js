import del from "rollup-plugin-delete";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/index.ts",
  output: [
    { format: "esm", file: "dist/index.esm.js" },
    { format: "cjs", file: "dist/index.cjs.js" },
    { format: "umd", file: "dist/index.umd.js", name: "miniCookieLib" },
  ],
  plugins: [
    del({ targets: ["dist/*"] }),
    typescript(),
    nodeResolve(),
    commonjs(),
    json(),
    babel({
      babelHelpers: "bundled",
      browserslistConfigFile: true,
      presets: [["@babel/preset-env", { targets: { ie: "11" } }]],
    }),
  ],
};
