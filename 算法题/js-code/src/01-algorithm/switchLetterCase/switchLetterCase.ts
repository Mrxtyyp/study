/**
 * 切换紫字符串中的字母大小写(Unicode编码)
 * @param str
 */
export function switchLetterCase(str: string): string {
  let res: string = "";

  for (let i = 0; i < str.length; i++) {
    const chatNum = str[i].charCodeAt(0);
    if (chatNum >= 65 && chatNum <= 90) {
      res += str[i].toLowerCase();
    } else if (chatNum >= 97 && chatNum <= 122) {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
  }

  return res;
}
