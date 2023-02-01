/**
 * 快速排序
 * @param arr
 */
export function quickSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;
  const middleIdx = Math.floor(arr.length / 2);
  const middleVal = arr[middleIdx];
  const left: number[] = [],
    right: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === middleIdx) continue;
    if (arr[i] < middleVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return Array.prototype.concat(quickSort(left), [middleVal], quickSort(right));
}
