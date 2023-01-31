type FindRes = {
  chat: string;
  length: number;
};
/**
 * 找到字符串中出现次数最多的字符, 通过双指针方式(时间复杂度 O(n) 空间复杂度 O(1))
 */
export function findCoutinuousChat(str: string): FindRes {
  let i = -1,
    j = 0,
    len = 0,
    chat = "";
  // 循环完成则结束
  while (j < str.length) {
    // 两个指针都相等的情况
    if (i > -1 && str[i] === str[j]) {
      if (j - i > len) {
        len++;
        chat = str[j];
      }
    } else {
      // 都不相等则往后继续
      i = j;
    }
    j++;
  }
  return {
    chat,
    length: len,
  };
}
