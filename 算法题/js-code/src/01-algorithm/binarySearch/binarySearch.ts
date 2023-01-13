//分情况返回结果，code为200返回result，及其他情况返回T
type ResCodeSuccess = 200;
type ResOtherCode = 400 | 500;
type Res<T> = {
  code: T;
  result: any;
  msg: string;
};

type ReturnObj<T extends Res<ResCodeSuccess | ResOtherCode>> =
  T["code"] extends ResCodeSuccess ? T["result"] : T;

const resData: Res<ResOtherCode> = {
  code: 400,
  result: "111",
  msg: "1212",
};

function getRes<T extends Res<ResCodeSuccess>>(
  response: T
): ReturnObj<Res<ResCodeSuccess>>;
function getRes<T extends Res<ResOtherCode>>(
  response: T
): ReturnObj<Res<ResOtherCode>>;
function getRes<T extends Res<ResCodeSuccess | ResOtherCode>>(response: T) {
  if (response["code"] === 200) return response["result"];
  return response;
}

const a = getRes(resData);

console.log(a);

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
