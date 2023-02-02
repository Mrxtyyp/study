import { findPalindromeNumber1 } from "./findPalindromeNumber";

describe("测试寻找1-10000回文数", () => {
  it("正常情况", () => {
    const arr = findPalindromeNumber1(200);
    expect(arr.length).toBe(28);
  });

  it("max 小于 0", () => {
    const arr = findPalindromeNumber1(0);
    expect(arr.length).toBe(0);
  });
});
