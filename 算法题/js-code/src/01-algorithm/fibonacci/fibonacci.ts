/**
 * 斐波那契数列（循环）存储中间计算数，避免多次计算
 * @param n
 * @returns
 */
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let n1 = 0,
    n2 = 1,
    res = 0;
  for (let i = 2; i <= n; i++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
}
