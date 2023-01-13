// type res = {
//   code: number;
//   result: any;
//   msg: string;
// };

// type returnObj<T extends res> = T["code"] extends 200 ? T["result"] : T;

// const resData: res = {
//   code: 300,
//   result: "111",
//   msg: "1212",
// };

// function getRes<T extends res>(response: T): returnObj<T> {
//   if (response["code"] === 200) return response["result"];
//   return response;
// }

// const a = getRes(resData);

// console.log(a);

// type TAutoIncrementArray

/**
 * 二分查找数组当中的元素
 * @param arr 源数组 有顺序的数组
 * @param target 寻找的对象
 * @returns 索引
 */
export function binarySearch(arr: number[], target: number): number {
  if (!arr.length) return -1;
  let startIndex = 0,
    endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const middle = Math.floor((endIndex + startIndex) / 2);
    const middleTarget = arr[middle];
    if (middleTarget < target) {
      // 目标值较大在右侧查找
      startIndex = middle + 1;
    } else if (middleTarget > target) {
      // 目标值较小在左侧查找
      endIndex = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
