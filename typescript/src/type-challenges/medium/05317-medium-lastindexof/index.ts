import { Equal } from "@type-challenges/utils"

export type LastIndexOf<T extends unknown[], O> = 
    T extends [...infer A, infer B] ? 
        Equal<B,O> extends true ? 
            A['length'] 
        : LastIndexOf<A, O>
    : -1