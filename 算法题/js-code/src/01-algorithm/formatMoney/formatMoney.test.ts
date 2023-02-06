import { formatMoney } from "./formatMoney";

describe("测试生成千分位字符串", () => {
  it("正常情况", () => {
    const a = formatMoney(1000);
    expect(a).toBe("1,000");
  });

  it("数字为0", () => {
    const a = formatMoney(0);
    expect(a).toBe("0");
  });
});
