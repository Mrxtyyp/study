import { Equal } from "@type-challenges/utils"

export type IndexOf<T extends unknown[], O, Arr extends 1[] = []> = 
    T extends [infer A, ...infer B] ? 
        Equal<A,O> extends true ? 
            Arr['length'] 
        : IndexOf<B, O, [...Arr, 1]>
    : -1