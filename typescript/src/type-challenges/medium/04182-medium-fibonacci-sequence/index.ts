type Fibonacci<
  T extends number,
  No extends 1[] = [1, 1, 1],
  N_2 extends 1[] = [1],
  N_1 extends 1[] = [1]
> = T extends 1 | 2
  ? 1
  : T extends No['length']
  ? [...N_2, ...N_1]['length']
  : Fibonacci<T, [...No, 1], N_1, [...N_2, ...N_1]>