import { getFullPrefixKey } from "../src/tool";

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
] as Array<[string, MiniLocalStorage.Config, string]>)(`test tool getFullPrefixKey(%s,%o) => %s`, (a, b, res) => {
  expect(getFullPrefixKey(a, b)).toBe(res);
});