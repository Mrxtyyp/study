import { switchLetterCase } from "./switchLetterCase";

describe("测试字符串英文大小写切换", () => {
  it("正常情况", () => {
    const aaa = switchLetterCase("1y7H789iNh");
    console.log(aaa);
    expect(aaa).toEqual("1Y7h789InH");
  });
});
