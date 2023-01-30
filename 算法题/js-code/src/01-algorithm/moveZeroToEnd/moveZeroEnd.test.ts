import { moveZero, moveZero2 } from "./moveZeroToEnd";

describe("测试将数组中的0移到末尾", () => {
  it("循环方式测试", () => {
    const arr = [1, 0, 3, 4, 5, 0, 7, 0, 0, 9];
    moveZero(arr);
    expect(arr).toEqual([1, 3, 4, 5, 7, 9, 0, 0, 0, 0]);
  });

  it("双指针方式测试", () => {
    const arr = [1, 0, 3, 4, 5, 0, 7, 0, 0, 9];
    moveZero2(arr);
    expect(arr).toEqual([1, 3, 4, 5, 7, 9, 0, 0, 0, 0]);
  });
});
