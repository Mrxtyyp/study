/**
 * 将源数组中为0的项移动到末尾, 循环方式 时间复杂度度O(n2) 空间复杂度0(1)
 * @param arr
 */
export function moveZero(arr: number[]): void {
  if (arr.length === 0) return;
  let i,
    zeroLen = 0;
  for (i = 0; i < arr.length - zeroLen; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;
      zeroLen++;
    }
  }
}

/**
 * 将源数组中为0的项移动到末尾, 双指针方式 时间复杂度度O(1) 空间复杂度O(1)
 * @param arr
 */
export function moveZero2(arr: number[]): void {
  if (arr.length === 0) return;
  let i,
    j = -1;
  for (i = 0; i < arr.length; i++) {
    // 当前进行到第一个0时赋值
    if (arr[i] === 0 && j < 0) {
      j = i;
    }
    if (j >= 0 && arr[i] !== 0) {
      const n = arr[j];
      arr[j] = arr[i];
      arr[i] = n;
      j++;
    }
  }
}
