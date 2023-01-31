import { findCoutinuousChat } from "./findCoutinuousChat";

describe("找到连续字符串中出现最多的字符和次数", () => {
  it("正常情况测试", () => {
    const str = "abbccccssddde";
    expect(findCoutinuousChat(str)).toEqual({
      length: 3,
      chat: "c",
    });
  });
  it("异常情况测试", () => {
    expect(findCoutinuousChat("")).toEqual({
      length: 0,
      chat: "",
    });
    expect(findCoutinuousChat("ab")).toEqual({
      length: 0,
      chat: "",
    });
  });
});
