type Shift<T extends Array<unknown>> = 
    T['length'] extends 0 ? [] : 
        T extends [infer _,...infer A] ? A : never