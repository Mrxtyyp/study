type Join<T extends string[], U extends string | number, R extends string = ''> = 
    T['length'] extends 0 ? 
        R
    : T['length'] extends 1 ? 
        `${T[0]}`
    : T extends [infer A extends string, ...infer B extends string[]] ? `${A}${U}${Join<B,U>}` : ''