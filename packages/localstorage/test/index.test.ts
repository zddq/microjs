import { getFullKeyStr } from "../src/tool";
import MLS from "../src/index";

test.each([
  ["key", undefined, "key"],
  ["key", {}, "key"],
  ["key", { prefix: undefined }, "key"],
  ["key", { prefix: "" }, "key"],
  ["key", { prefix: " " }, "key"],
  ["key", { prefix: " XXX" }, "XXX_key"],
  ["key", { prefix: "XXX " }, "XXX_key"],
  ["key", { prefix: " XXX " }, "XXX_key"],
  ["key", { prefix: "XXX_DEV_680" }, "XXX_DEV_680_key"],
] as Array<[string, Config, string]>)(`test tool getFullPrefixKey(%s,%o) => %s`, (a, b, res) => {
  expect(getFullKeyStr(a, b)).toBe(res);
});

test.each([]);