/**
 * 括号匹配  时间复杂度 O(n)   空间复杂度 O(n)
 * @param str
 * @returns
 */
export function matchBracket(str: string): boolean {
  if (str.length === 0) return true;
  const bracket = [],
    bracketsMap: Record<string, string> = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  for (let i = 0; i < str.length; i++) {
    if (["(", "{", "["].includes(str[i])) bracket.push(str[i]);
    if ([")", "}", "]"].includes(str[i])) {
      if (str[i] === bracketsMap[bracket[bracket.length - 1]]) {
        bracket.pop();
      } else {
        // 如果是右括号并且和栈顶不匹配则表示这个字符串不是括号对称的字符串
        return false;
      }
    }
  }
  return !bracket.length;
}
