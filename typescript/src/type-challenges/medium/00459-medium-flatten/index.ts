type ArrayToUnion<T extends unknown[]> = T[number]

type Flatten<T extends unknown[]> = 
    T extends [infer X, ...infer O] ? 
        X extends unknown[] ? 
            Flatten<[...X, ...O]> : 
                [X, ...Flatten<O>]
        : []