type NestObj<K, V> = K extends string ? {K: V} : never
type TupleToNestedObject<T extends Array<unknown>, U> = 
    T extends [infer A, ...infer O] ? 
        A extends string ? 
            {
                [P in A]: TupleToNestedObject<O, U>
            }
        : never 
    : U