/**
 * 格式化数字千分位，输出字符串
 * @param n
 */
export function formatMoney(n: number): string {
  const arr = n.toString().split("").reverse();
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return val + "," + prev;
      } else {
        return val;
      }
    } else {
      return prev + val;
    }
  }, "");
}
