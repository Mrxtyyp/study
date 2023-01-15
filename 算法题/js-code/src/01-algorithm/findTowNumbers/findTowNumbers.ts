/**
 * 找到数组中和为n的一组数
 * @param arr
 * @param n
 */
export function findTowNumbers(arr: number[], n: number): number[] {
  const res: number[] = [];
  if (arr.length === 0) return res;
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const left = arr[start];
    const right = arr[end];
    const sum = left + right;
    if (sum > n) {
      end--;
    } else if (sum < n) {
      start++;
    } else {
      res.push(left);
      res.push(right);
      break;
    }
  }

  return res;
}
