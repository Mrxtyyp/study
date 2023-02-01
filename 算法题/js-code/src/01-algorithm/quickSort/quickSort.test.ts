import { quickSort } from "./quickSort";

describe("测试快速排序", () => {
  it("正常情况", () => {
    const arr = [4, 5, 3, 2, 6, 1, 8, 7];
    const sortArr = quickSort(arr);
    expect(sortArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
