import { fibonacci } from "./fibonacci";

describe("测试斐波那契数列", () => {
  it("正常情况", () => {
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(8)).toBe(21);
    expect(fibonacci(9)).toBe(34);
    expect(fibonacci(10)).toBe(55);
  });

  it("n 为 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("n 为 1", () => {
    expect(fibonacci(1)).toBe(1);
  });
});
