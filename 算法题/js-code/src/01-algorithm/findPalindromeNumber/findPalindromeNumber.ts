/**
 * 找回文数 数字转字符串再转数组，反转再做对比
 * @param n
 */
export function findPalindromeNumber(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;
  for (let i = 1; i < max; i++) {
    const n = i.toString();
    if (n === n.split("").reverse().join("")) {
      res.push(i);
    }
  }
  return res;
}

/**
 * 找回文数 字符串前后循环对比
 * @param n
 */
export function findPalindromeNumber1(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;
  for (let i = 1; i < max; i++) {
    const n = i.toString();
    let startIdx = 0,
      endIdx = n.length - 1,
      flag = true;
    while (startIdx < endIdx) {
      if (n[startIdx] === n[endIdx]) {
        startIdx++;
        endIdx--;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) res.push(i);
  }
  return res;
}

/**
 * 找回文数 数字反转对比
 * @param n
 */
export function findPalindromeNumber2(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;
  for (let i = 1; i < max; i++) {
    let n = i;
    // 翻转位数
    let rev = 0;

    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.trunc(n / 10);
    }

    if (n === rev) {
      res.push(i);
    }
  }
  return res;
}
