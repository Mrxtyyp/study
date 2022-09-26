type Zip<T extends unknown[], U extends unknown[]> = 
    T extends [infer A,...infer B] ? 
        U extends [infer One, ...infer Two] ? [[A, One],...Zip<B,Two>] : []
    : []