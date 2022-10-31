import { Equal } from "@type-challenges/utils"

type ArrInclude<T extends unknown[], U> =
  T extends [infer F, ...infer R]
    ? Equal<F, U> extends true
      ? true
      : ArrInclude<R, U>
    : false

export type Unique<T extends any[], Has extends any[] = []> = 
    T['length'] extends 0 ? Has : 
        T extends [infer A, ...infer B] ? 
            ArrInclude<Has,A> extends true ? Unique<B, Has> : Unique<B, [...Has, A]>
        : Has