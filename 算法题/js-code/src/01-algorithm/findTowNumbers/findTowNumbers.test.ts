import { findTowNumbers } from "./findTowNumbers";
describe("测试在有序数组中找到和为n的一组数", () => {
  it("正常情况", () => {
    const arr = [1, 2, 4, 5, 7, 8, 9, 12, 13, 15, 17, 18, 20];
    expect(findTowNumbers(arr, 15)).toEqual([2, 13]);
  });

  it("传入空数组", () => {
    expect(findTowNumbers([], 15)).toEqual([]);
  });

  it("传入单数据数组", () => {
    expect(findTowNumbers([1], 15)).toEqual([]);
  });
});
