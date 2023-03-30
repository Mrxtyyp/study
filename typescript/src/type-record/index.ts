// 判断是否any
type IsAny<T> = 0 extends 1 & T ? true : false;

type Tmp4 = 1 & any; // any
// unknown并不能通过这个方式处理
type Tmp5 = 1 & unknown; // 1

/**
 * 首先过滤掉 never 类型，然后对于 T extends unknown 和 unknown extends T，
 * 只有 any 和 unknown 类型能够同时符合，如果再过滤掉 any，
 * 那肯定就只剩下 unknown 类型啦。
 */
type IsUnknown1<T> = IsNever<T> extends false
  ? T extends unknown
    ? unknown extends T
      ? IsAny<T> extends false
        ? true
        : false
      : false
    : false
  : false;

// 简化版的IsUnknown
/**
 * 利用 unknown extends T 时仅有 T 为 any 或 unknown 时成立这一点，
 * 我们可以直接将类型收窄到 any 与 unknown，然后在去掉 any 类型
 */
type IsUnknown2<T> = unknown extends T
  ? IsAny<T> extends true
    ? false
    : true
  : false;
