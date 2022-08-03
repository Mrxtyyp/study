type FlattenDepth<T extends any[], DeptNum = 1, DepthCounter extends null[] = []> = 
    DepthCounter['length'] extends DeptNum ? 
        T
    : T extends [infer A, ...infer Other] ? 
            // [
            //     ...(A extends any[] ? FlattenDepth<A, DeptNum, [null, ...DepthCounter]> : [A]),
            //     ...FlattenDepth<Other, DeptNum, DepthCounter>
            // ]
            A extends any[] ? 
                [...FlattenDepth<A,DeptNum, [null, ...DepthCounter]>, ...FlattenDepth<Other, DeptNum, DepthCounter>] 
            : [A, ...FlattenDepth<Other, DeptNum, DepthCounter>]
        : []
