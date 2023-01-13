import { binarySearch } from "./binarySearch";

describe("二分查找数组当中的元素", () => {
  it("正常情况", () => {
    const arr = [
      1, 2, 5, 10, 12, 15, 20, 35, 40, 50, 60, 65, 70, 75, 78, 80, 85, 90, 95,
      100,
    ];
    const findIndex = binarySearch(arr, 5);
    expect(findIndex).toBe(2);
  });
});
