// type Includes<R extends any[], C> = C extends R[number] ? true : false

type IsEqual<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2)  ?  true : false

type Includes<R extends unknown[], C> = 
    R extends [infer F, ...infer A] ? 
        (
        IsEqual<F, C> extends true 
        ? true 
        : Includes<A, C>
        )
    : false