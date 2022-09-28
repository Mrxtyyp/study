type Chunk<A extends any[], D, C extends any[]= []> =
  C['length'] extends D
    ? [C, ...Chunk<A, D>]
    : A extends [infer F, ...infer R]
      ? Chunk<R, D, [...C, F]>
      : C extends []
        ? C : [C]; 