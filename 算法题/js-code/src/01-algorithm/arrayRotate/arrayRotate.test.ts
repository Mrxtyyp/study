import { arrayRotate, arrayRotate2 } from "./arrayRotate";

describe("旋转数组方法一", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7],
      k = 3;
    expect(arrayRotate(arr, 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("数组为空", () => {
    expect(arrayRotate([], 3)).toEqual([]);
  });

  it("k为负值", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7],
      k = -3;
    expect(arrayRotate(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});

describe("旋转数组方法二", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7],
      k = 3;
    expect(arrayRotate2(arr, 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("数组为空", () => {
    expect(arrayRotate2([], 3)).toEqual([]);
  });

  it("k为负值", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7],
      k = -3;
    expect(arrayRotate2(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});
