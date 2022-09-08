type KebabCase<S extends string> = 
    S extends `${infer A}${infer O}` ? 
        O extends Uncapitalize<O> ? 
        `${Lowercase<A>}${KebabCase<O>}`
        : `${Lowercase<A>}-${KebabCase<O>}`
    : Lowercase<S>
