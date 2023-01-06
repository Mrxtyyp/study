import { matchBracket } from "./matchBracket";

describe("括号匹配", () => {
  it("正常情况", () => {
    const str = "(a{b[b]v}c)b";
    expect(matchBracket(str)).toBeTruthy();
  });

  it("不匹配情况", () => {
    const str = "(a{b[b)]v}c)b";
    expect(matchBracket(str)).toBeFalsy();
  });

  it("空字符串", () => {
    expect(matchBracket("")).toBeTruthy();
  });

  it("顺序不一致", () => {
    const str = "(a[b{b)]v}c)b";
    expect(matchBracket(str)).toBeFalsy();
  });
});
