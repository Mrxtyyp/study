/**
 * 旋转数组
 * @param arr
 * @param k 旋转的步数
 * @returns 旋转后的数组
 */
export function arrayRotate(arr: number[], k: number): number[] {
  if (!k || !arr.length) return arr;
  const step = Math.abs(k % arr.length);
  for (let i = 0; i < step; i++) {
    const pop = arr.pop();
    if (pop) {
      arr.unshift(pop);
    }
  }

  return arr;
}

/**
 * 方式二
 * @param arr
 * @param k
 * @returns
 */
export function arrayRotate2(arr: number[], k: number): number[] {
  if (!k || !arr.length) return arr;
  const step = Math.abs(k % arr.length);
  const sp1 = arr.slice(-step);
  const sp2 = arr.slice(0, arr.length - step);
  return sp1.concat(sp2);
}
